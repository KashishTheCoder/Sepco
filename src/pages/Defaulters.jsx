import React, { useEffect, useState } from 'react';
import Papa from 'papaparse';
import '../styles/KeyStatistics.css';

const CSV_URL = '/data/defaulters.csv';

const Defaulters = () => {
  const [data, setData] = useState([]);
  const [headers, setHeaders] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  // Filter states
  const [sdiv, setSdiv] = useState('');
  const [refno, setRefno] = useState('');
  const [trf, setTrf] = useState('');
  const [name, setName] = useState('');
  const [arrear, setArrear] = useState('');
  const [age, setAge] = useState('');
  const [status, setStatus] = useState('');
  const [gvtpvt, setGvtpvt] = useState('');

  // For dropdown options
  const [statusOptions, setStatusOptions] = useState([]);
  const [gvtpvtOptions, setGvtpvtOptions] = useState([]);

  useEffect(() => {
    fetch(CSV_URL)
      .then((response) => {
        if (!response.ok) throw new Error('Network response was not ok');
        return response.text();
      })
      .then((csvText) => {
        Papa.parse(csvText, {
          skipEmptyLines: true,
          complete: (results) => {
            const [titleRow, headerRow, ...rows] = results.data;
            setHeaders(headerRow);
            setData(rows.slice(0, 500));
            // Extract unique options for dropdowns
            const statusIdx = headerRow.findIndex(h => h.toLowerCase().includes('status'));
            const gvtpvtIdx = headerRow.findIndex(h => h.toLowerCase().includes('gvt'));
            setStatusOptions([...new Set(rows.map(r => r[statusIdx]).filter(Boolean))]);
            setGvtpvtOptions([...new Set(rows.map(r => r[gvtpvtIdx]).filter(Boolean))]);
            setLoading(false);
          },
        });
      })
      .catch((err) => {
        setError(err.message);
        setLoading(false);
      });
  }, []);

  // Filtering logic
  const filteredData = data.filter(row => {
    const sdivIdx = headers.findIndex(h => h.toLowerCase().includes('sdiv'));
    const refnoIdx = headers.findIndex(h => h.toLowerCase().includes('refno'));
    const trfIdx = headers.findIndex(h => h.toLowerCase().includes('trf'));
    const nameIdx = headers.findIndex(h => h.toLowerCase().includes('name'));
    const arrearIdx = headers.findIndex(h => h.toLowerCase().includes('arrear'));
    const ageIdx = headers.findIndex(h => h.toLowerCase().includes('age'));
    const statusIdx = headers.findIndex(h => h.toLowerCase().includes('status'));
    const gvtpvtIdx = headers.findIndex(h => h.toLowerCase().includes('gvt'));

    if (sdiv && !row[sdivIdx]?.toLowerCase().includes(sdiv.toLowerCase())) return false;
    if (refno && !row[refnoIdx]?.toLowerCase().includes(refno.toLowerCase())) return false;
    if (trf && !row[trfIdx]?.toLowerCase().includes(trf.toLowerCase())) return false;
    if (name && !row[nameIdx]?.toLowerCase().includes(name.toLowerCase())) return false;
    if (arrear && !row[arrearIdx]?.toLowerCase().includes(arrear.toLowerCase())) return false;
    if (age && !row[ageIdx]?.toLowerCase().includes(age.toLowerCase())) return false;
    if (status && row[statusIdx] !== status) return false;
    if (gvtpvt && row[gvtpvtIdx] !== gvtpvt) return false;
    return true;
  });

  return (
    <div className="ks-bg">
      <div className="ks-container">
        <h1 className="ks-title">Defaulters</h1>
        {/* Filters */}
        <div className="defaulter-filters">
          <input placeholder="SDIV-CD" value={sdiv} onChange={e => setSdiv(e.target.value)} />
          <input placeholder="REFNO" value={refno} onChange={e => setRefno(e.target.value)} />
          <input placeholder="TRF" value={trf} onChange={e => setTrf(e.target.value)} />
          <input placeholder="Name/Address" value={name} onChange={e => setName(e.target.value)} />
          <input placeholder="Arrear" value={arrear} onChange={e => setArrear(e.target.value)} />
          <input placeholder="Age" value={age} onChange={e => setAge(e.target.value)} />
          <select value={status} onChange={e => setStatus(e.target.value)}>
            <option value="">All Status</option>
            {statusOptions.map(opt => <option key={opt} value={opt}>{opt}</option>)}
          </select>
          <select value={gvtpvt} onChange={e => setGvtpvt(e.target.value)}>
            <option value="">All GVT/PVT</option>
            {gvtpvtOptions.map(opt => <option key={opt} value={opt}>{opt}</option>)}
          </select>
        </div>
        <div className="ks-table-wrapper">
          {loading ? (
            <div className="ks-empty">Loading...</div>
          ) : error ? (
            <div className="ks-empty">Error: {error}</div>
          ) : filteredData.length === 0 ? (
            <div className="ks-empty">No defaulters</div>
          ) : (
            <table className="ks-table">
              <thead>
                <tr>
                  {headers.map((header, idx) => (
                    <th key={idx} style={{ textAlign: 'left', padding: '0.85rem 0.7rem' }}>{header}</th>
                  ))}
                </tr>
              </thead>
              <tbody>
                {filteredData.map((row, rowIdx) => (
                  <tr key={rowIdx}>
                    {row.map((cell, cellIdx) => (
                      <td key={cellIdx}>{cell}</td>
                    ))}
                  </tr>
                ))}
              </tbody>
            </table>
          )}
        </div>
      </div>
    </div>
  );
};

export default Defaulters; 