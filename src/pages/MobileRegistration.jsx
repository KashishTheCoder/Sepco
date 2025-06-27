import React, { useState } from "react";
import "../styles/CNICRegistration.css";

const MobileRegistration = () => {
    const [form, setForm] = useState({
        service: '',
        customerId: '',
        mobile: '',
        email: '',
    });

    const handleChange = (e) => {
        const { name, value, type } = e.target;
        let newValue = value;
        if (name === 'customerId') {
            newValue = value.replace(/\D/g, '').slice(0, 8);
        } else if (name === 'mobile') {
            newValue = value.replace(/\D/g, '').slice(0, 11);
        }
        setForm({ ...form, [name]: newValue });
    };

    const handleServiceChange = (value) => {
        setForm({ ...form, service: value });
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        const { service, customerId, mobile, email } = form;
        const isValidCustomerId = /^\d{8}$/.test(customerId);
        const isValidMobile = /^03\d{9}$/.test(mobile);
        const isValidEmail = email.trim().length > 0 && /.+@.+\..+/.test(email);
        if (!service) {
            alert('❌ Please select a service (Email, SMS, or Both).');
        } else if (!isValidCustomerId) {
            alert('❌ Customer ID must be exactly 8 digits.');
        } else if (!isValidMobile) {
            alert('❌ Mobile number must be in the format 03XXXXXXXXX (11 digits, starting with 03).');
        } else if (!isValidEmail) {
            alert('❌ Please enter a valid email address.');
        } else {
            alert('✅ Mobile Registration Successful!');
            setForm({ service: '', customerId: '', mobile: '', email: '' });
        }
    };

    return (
        <section className="cnic-section" style={{ background: 'linear-gradient(120deg, #e6f0ff 0%, #f8fafc 100%)', minHeight: '100vh', padding: 0, display: 'flex', flexDirection: 'column', alignItems: 'center', justifyContent: 'center' }}>
            <div style={{ height: 8, width: '100%', background: 'linear-gradient(90deg, #2471c8 0%, #0B1E3F 100%)', borderRadius: '0 0 8px 8px', marginBottom: 32 }} />
            <div className="cnic-container" style={{ maxWidth: 600, width: '100%', background: '#fff', borderRadius: 18, boxShadow: '0 8px 32px rgba(11,30,63,0.13)', padding: '2.5rem 2.5rem 2rem 2.5rem', margin: 0 }}>
                <h2 className="cnic-title" style={{ textAlign: 'center', color: '#2471c8', fontWeight: 700, fontSize: '2.2rem', marginBottom: 8 }}>Mobile Registration</h2>
                <p style={{ marginBottom: '1.2rem', color: '#1a2f5a', fontSize: '1.08rem', textAlign: 'center' }}>
                    SEPCO is pleased to introduce our new free of cost SMS service to keep our valuable customers updated with the electricity supply and billing information.<br /><br />
                    <b>Note:</b> This information will be used for SEPCO's internal records.
                </p>
                <form className="cnic-form" onSubmit={handleSubmit} autoComplete="off">
                    <div className="form-grid" style={{ gap: 24 }}>
                        <div className="form-group full" style={{ display: 'flex', alignItems: 'center', gap: '2.5rem', marginBottom: '2.2rem', justifyContent: 'center' }}>
                            <div style={{ minWidth: 120 }}>
                                <label style={{ fontSize: '1.18rem', color: '#2471c8', fontWeight: 600 }}>Service</label>
                            </div>
                            <div style={{ display: 'flex', gap: '2.5rem', alignItems: 'center' }}>
                                {['Email', 'SMS', 'Both'].map((option) => (
                                    <label key={option} style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', cursor: 'pointer', fontWeight: 500, color: '#222' }}>
                                        <input
                                            type="radio"
                                            name="service"
                                            checked={form.service === option}
                                            onChange={() => handleServiceChange(option)}
                                            style={{ width: 26, height: 26, accentColor: '#2471c8', border: '2px solid #2471c8', marginBottom: 4 }}
                                        />
                                        <span style={{ marginTop: 2 }}>{option}</span>
                                    </label>
                                ))}
                            </div>
                        </div>
                        <div className="form-group">
                            <label htmlFor="customerId" style={{ color: '#2471c8', fontWeight: 600, fontSize: '1.08rem' }}>Customer ID</label>
                            <input
                                type="text"
                                name="customerId"
                                value={form.customerId}
                                onChange={handleChange}
                                required
                                style={{ border: 'none', borderBottom: '2px solid #2471c8', outline: 'none', fontSize: '1.1rem', padding: '0.5rem 0', background: 'transparent', color: '#1a2f5a', width: '100%' }}
                            />
                        </div>
                        <div className="form-group">
                            <label htmlFor="email" style={{ color: '#2471c8', fontWeight: 600, fontSize: '1.08rem' }}>Email</label>
                            <input
                                type="email"
                                name="email"
                                value={form.email}
                                onChange={handleChange}
                                required
                                style={{ border: 'none', borderBottom: '2px solid #2471c8', outline: 'none', fontSize: '1.1rem', padding: '0.5rem 0', background: 'transparent', color: '#1a2f5a', width: '100%' }}
                            />
                        </div>
                        <div className="form-group full">
                            <label htmlFor="mobile" style={{ color: '#2471c8', fontWeight: 600, fontSize: '1.08rem' }}>Mobile No</label>
                            <input
                                type="text"
                                name="mobile"
                                value={form.mobile}
                                onChange={handleChange}
                                placeholder="03XXXXXXXXX"
                                required
                                style={{ border: 'none', borderBottom: '2px solid #2471c8', outline: 'none', fontSize: '1.1rem', padding: '0.5rem 0', background: 'transparent', color: '#1a2f5a', width: '100%' }}
                            />
                        </div>
                    </div>
                    <div className="submit-container" style={{ display: 'flex', justifyContent: 'center', marginTop: 32 }}>
                        <button type="submit" style={{
                            background: 'linear-gradient(90deg, #2471c8 0%, #0B1E3F 100%)',
                            color: '#fff',
                            padding: '0.85rem 3.2rem',
                            border: 'none',
                            borderRadius: 8,
                            fontWeight: 700,
                            fontSize: '1.15rem',
                            letterSpacing: '2px',
                            boxShadow: '0 2px 8px #e3e8ee',
                            cursor: 'pointer',
                            transition: 'background 0.18s',
                        }}>SUBMIT</button>
                    </div>
                </form>
            </div>
        </section>
    );
};

export default MobileRegistration; 