import React, { useState } from "react";
import "../styles/CNICRegistration.css";

// Simple Modal component
const Modal = ({ open, message, type, onClose }) => {
    if (!open) return null;
    return (
        <div style={{
            position: 'fixed', top: 0, left: 0, width: '100vw', height: '100vh',
            background: 'rgba(0,0,0,0.25)', display: 'flex', alignItems: 'center', justifyContent: 'center', zIndex: 9999
        }}>
            <div style={{
                background: '#fff', padding: '2rem 2.5rem', borderRadius: 12, minWidth: 300, boxShadow: '0 4px 24px rgba(0,0,0,0.12)',
                textAlign: 'center', borderTop: type === 'success' ? '4px solid #28a745' : '4px solid #dc3545'
            }}>
                <div style={{ fontSize: 32, marginBottom: 12 }}>
                    {type === 'success' ? '✅' : '❌'}
                </div>
                <div style={{ fontSize: 18, marginBottom: 20 }}>{message}</div>
                <button onClick={onClose} style={{
                    padding: '0.5rem 1.5rem', background: type === 'success' ? '#28a745' : '#dc3545', color: '#fff',
                    border: 'none', borderRadius: 6, fontWeight: 600, fontSize: 16, cursor: 'pointer'
                }}>OK</button>
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
