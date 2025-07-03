import React, { useState } from "react";
import "../styles/CNICRegistration.css";

// Enhanced Modal component
const Modal = ({ open, message, type, onClose }) => {
    if (!open) return null;
    return (
        <div style={{
            position: 'fixed', top: 0, left: 0, width: '100vw', height: '100vh',
            background: 'rgba(0,0,0,0.30)', display: 'flex', alignItems: 'center', justifyContent: 'center', zIndex: 9999,
            animation: 'modalFadeIn 0.25s', fontFamily: 'Segoe UI, Arial, sans-serif'
        }}>
            <div style={{
                background: '#fff', padding: '2.5rem 2.5rem 2rem 2.5rem', borderRadius: 18, minWidth: 340, maxWidth: 400,
                boxShadow: '0 8px 32px rgba(0,0,0,0.18)', textAlign: 'center', position: 'relative',
                borderTop: type === 'success' ? '6px solid #28a745' : '6px solid #dc3545',
                transform: 'scale(1)', animation: 'modalScaleIn 0.25s'
            }}>
                <button onClick={onClose} style={{
                    position: 'absolute', top: 14, right: 18, background: 'none', border: 'none', fontSize: 22, color: '#888', cursor: 'pointer', fontWeight: 700
                }} aria-label="Close">×</button>
                <div style={{ fontSize: 54, marginBottom: 10, marginTop: 8 }}>
                    {type === 'success' ? (
                        <span role="img" aria-label="Success" style={{ color: '#28a745', textShadow: '0 2px 8px #d4f5e9' }}>✔️</span>
                    ) : (
                        <span role="img" aria-label="Error" style={{ color: '#dc3545', textShadow: '0 2px 8px #f5d4d4' }}>❌</span>
                    )}
                </div>
                <div style={{
                    fontSize: 22, fontWeight: 700, marginBottom: 12, color: type === 'success' ? '#28a745' : '#dc3545',
                    letterSpacing: 0.2, lineHeight: 1.2
                }}>{type === 'success' ? 'Success' : 'Error'}</div>
                <div style={{ fontSize: 17, color: '#222', marginBottom: 24, fontWeight: 500, minHeight: 32 }}>
                    {message}
                </div>
                <button onClick={onClose} style={{
                    padding: '0.7rem 2.2rem', background: type === 'success' ? 'linear-gradient(90deg,#28a745,#43e97b)' : 'linear-gradient(90deg,#dc3545,#ff6a6a)',
                    color: '#fff', border: 'none', borderRadius: 8, fontWeight: 700, fontSize: 17, cursor: 'pointer', boxShadow: '0 2px 8px rgba(0,0,0,0.08)'
                }}>OK</button>
                <style>{`
                    @keyframes modalFadeIn {
                        from { opacity: 0; } to { opacity: 1; }
                    }
                    @keyframes modalScaleIn {
                        from { transform: scale(0.85); opacity: 0.7; } to { transform: scale(1); opacity: 1; }
                    }
                `}</style>
            </div>
        </div>
    );
};

const CNICRegistration = () => {
    const [form, setForm] = useState({
        customerId: "",
        referenceNo: "",
        name: "",
        cnic: "",
        phone: "",
    });
    const [focusedField, setFocusedField] = useState("");
    const [modalOpen, setModalOpen] = useState(false);
    const [modalMessage, setModalMessage] = useState("");
    const [modalType, setModalType] = useState("success"); // or 'error'

    const formatCNIC = (value) => {
        const digits = value.replace(/\D/g, "").slice(0, 13);
        if (digits.length <= 5) return digits;
        if (digits.length <= 12)
            return `${digits.slice(0, 5)}-${digits.slice(5)}`;
        return `${digits.slice(0, 5)}-${digits.slice(5, 12)}-${digits.slice(12)}`;
    };

    const formatPhone = (value) => {
        const digits = value.replace(/\D/g, "").slice(0, 11);
        if (digits.length <= 4) return digits;
        return `${digits.slice(0, 4)}-${digits.slice(4)}`;
    };

    const handleChange = (e) => {
        const { name, value } = e.target;
        let newValue = value;

        if (name === "customerId") {
            newValue = value.replace(/\D/g, "").slice(0, 8);
        } else if (name === "referenceNo") {
            newValue = value.replace(/\D/g, "").slice(0, 14);
        } else if (name === "cnic") {
            newValue = formatCNIC(value);
        } else if (name === "phone") {
            newValue = formatPhone(value);
        }

        setForm({ ...form, [name]: newValue });
    };

    const handleFocus = (e) => {
        setFocusedField(e.target.name);
        e.target.parentNode.classList.add('focused');
    };

    const handleBlur = (e) => {
        setFocusedField("");
        e.target.parentNode.classList.remove('focused');
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        const { customerId, referenceNo, name, cnic, phone } = form;

        // Remove non-digits for validation
        const cnicDigits = cnic.replace(/\D/g, "");
        const phoneDigits = phone.replace(/\D/g, "");

        let error = "";
        if (!/^\d{8}$/.test(customerId)) {
            error = "Customer ID must be exactly 8 digits.";
        } else if (!/^\d{14}$/.test(referenceNo)) {
            error = "Reference Number must be exactly 14 digits.";
        } else if (name.trim().length < 3) {
            error = "Name must be at least 3 characters.";
        } else if (cnicDigits.length !== 13) {
            error = "CNIC must be exactly 13 digits.";
        } else if (phoneDigits.length !== 11) {
            error = "Phone number must be exactly 11 digits.";
        }

        if (error) {
            setModalType('error');
            setModalMessage(error);
            setModalOpen(true);
            return;
        }

        setModalType('success');
        setModalMessage("Consumer CNIC Registered Successfully!");
        setModalOpen(true);
    };

    return (
        <section className="cnic-section">
            <Modal open={modalOpen} message={modalMessage} type={modalType} onClose={() => setModalOpen(false)} />
            <div className="cnic-container">
                <h2 className="cnic-title">CNIC Registration</h2>
                <form className="cnic-form" onSubmit={handleSubmit}>
                    <div className="form-grid">
                        <div className="form-group">
                            <div className={`floating-label-group${form.customerId ? ' filled' : ''}`}>
                                <input
                                    type="text"
                                    name="customerId"
                                    value={form.customerId}
                                    onChange={handleChange}
                                    required
                                    placeholder={focusedField === "customerId" ? "XXXXXXXX" : ""}
                                    onFocus={handleFocus}
                                    onBlur={handleBlur}
                                />
                                <label className="floating-label" htmlFor="customerId">Customer ID</label>
                            </div>
                        </div>
                        <div className="form-group">
                            <div className={`floating-label-group${form.referenceNo ? ' filled' : ''}`}>
                                <input
                                    type="text"
                                    name="referenceNo"
                                    value={form.referenceNo}
                                    onChange={handleChange}
                                    required
                                    placeholder={focusedField === "referenceNo" ? "XXXXXXXXXXXXXX" : ""}
                                    onFocus={handleFocus}
                                    onBlur={handleBlur}
                                />
                                <label className="floating-label" htmlFor="referenceNo">Reference No</label>
                            </div>
                        </div>
                        <div className="form-group">
                            <div className={`floating-label-group${form.name ? ' filled' : ''}`}>
                                <input
                                    type="text"
                                    name="name"
                                    value={form.name}
                                    onChange={handleChange}
                                    required
                                    placeholder={focusedField === "name" ? "John Doe" : ""}
                                    onFocus={handleFocus}
                                    onBlur={handleBlur}
                                />
                                <label className="floating-label" htmlFor="name">Name</label>
                            </div>
                        </div>
                        <div className="form-group">
                            <div className={`floating-label-group${form.cnic ? ' filled' : ''}`}>
                                <input
                                    type="text"
                                    name="cnic"
                                    value={form.cnic}
                                    onChange={handleChange}
                                    required
                                    placeholder={focusedField === "cnic" ? "XXXXX-XXXXXXX-X" : ""}
                                    onFocus={handleFocus}
                                    onBlur={handleBlur}
                                />
                                <label className="floating-label" htmlFor="cnic">CNIC</label>
                            </div>
                        </div>
                        <div className="form-group full">
                            <div className={`floating-label-group${form.phone ? ' filled' : ''}`}>
                                <input
                                    type="text"
                                    name="phone"
                                    value={form.phone}
                                    onChange={handleChange}
                                    required
                                    placeholder={focusedField === "phone" ? "03XX-XXXXXXX" : ""}
                                    onFocus={handleFocus}
                                    onBlur={handleBlur}
                                />
                                <label className="floating-label" htmlFor="phone">Phone No</label>
                            </div>
                        </div>
                    </div>
                    <div className="submit-container">
                        <button type="submit">SUBMIT</button>
                    </div>
                </form>
            </div>
        </section>
    );
};

export default CNICRegistration;
