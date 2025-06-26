import React from 'react';
import '../styles/AreaOfResponsibility.css';

const scheduleDate = '31-05-2022';

const urduPoints = [
  'ضروری مرمت کی وجہ سے 132 کے وی نئوچانل گرڈ اسٹیشن سے بجلی کی فراہمی 31 مئی تا 05 جون اور صبح 07:00 بجے سے 12:00 بجے تک بندرہے گی۔ جس کی وجہ سے گرڈ کے دی سیف، مینائی بازار، غربی ایریا، ایڈمنسٹریشن روڈ، سائیٹ، باغیچی، جی روڈ کے صارفین متاثر ہوں گے۔',
  'ضروری مرمت کی وجہ سے 132 کے وی روہڑی سکھر ساؤتھ اور 66 کے وی نادرن گرڈ اسٹیشن سے بجلی کی فراہمی 31 مئی صبح 07:00 بجے سے 12:00 بجے تک بندرہے گی۔ جس کی وجہ سے روہڑی گرڈ کے صارفین، جی روڈ، سکھر ساؤتھ کے وی روڈل سائیڈ، گرڈ کے وی روڈل سائیڈ، تالپور اولڈ روڈ، بارگاہ فورڈ کے صارفین متاثر ہوں گے۔',
  'ضروری مرمت کی وجہ سے 132 کے وی روہڑی سکھر ساؤتھ اور 66 کے وی نادرن سکھر ساؤتھ گرڈ اسٹیشن سے بجلی کی فراہمی 31 مئی صبح 07:00 بجے سے 12:00 بجے تک بندرہے گی۔ جس کی وجہ سے روہڑی گرڈ کے صارفین، جی روڈ، سکھر ساؤتھ کے وی روڈل سائیڈ، گرڈ کے وی روڈل سائیڈ، تالپور اولڈ روڈ، بارگاہ فورڈ کے صارفین متاثر ہوں گے۔',
  'ضروری مرمت کی وجہ سے 132 کے وی روہڑی سکھر ساؤتھ اور 66 کے وی نادرن سکھر ساؤتھ گرڈ اسٹیشن سے بجلی کی فراہمی 31 مئی صبح 07:00 بجے سے 12:00 بجے تک بندرہے گی۔ جس کی وجہ سے روہڑی گرڈ کے صارفین، جی روڈ، سکھر ساؤتھ کے وی روڈل سائیڈ، گرڈ کے وی روڈل سائیڈ، تالپور اولڈ روڈ، بارگاہ فورڈ کے صارفین متاثر ہوں گے۔'
];

const LoadManagementSchedule = () => (
  <div className="aor-bg">
    <div className="aor-container">
      <h1 className="aor-title">Load Management Schedule</h1>
      <div className="aor-section" style={{width: '100%'}}>
        <div style={{display: 'flex', justifyContent: 'flex-end', marginBottom: '1rem'}}>
          <span style={{color: '#1976d2', fontWeight: 600, fontSize: '1.15rem'}}>{scheduleDate}</span>
        </div>
        <div className="aor-jurisdiction-card" style={{direction: 'rtl', textAlign: 'right', fontFamily: 'Noto Nastaliq Urdu, Jameel Noori Nastaleeq, serif'}}>
          <ol style={{paddingRight: '1.2rem', margin: 0}}>
            {urduPoints.map((point, idx) => (
              <li key={idx} style={{marginBottom: '0.7rem'}}>{point}</li>
            ))}
          </ol>
          <div style={{marginTop: '2.5rem', color: '#444', fontSize: '1.1rem'}}>ترجمان سیپکو سکھر</div>
        </div>
      </div>
    </div>
  </div>
);

export default LoadManagementSchedule; 