import React, { useState } from "react";
import "../styles/CNICRegistration.css";

const CNICRegistration = () => {
    const [form, setForm] = useState({
        customerId: "",
        referenceNo: "",
        name: "",
        cnic: "",
        phone: "",
    });

    const formatCNIC = (value) => {
        const digits = value.replace(/\D/g, "").slice(0, 13);
        if (digits.length <= 5) return digits;
        if (digits.length <= 12)
            return `${digits.slice(0, 5)}-${digits.slice(5)}`;
        return `${digits.slice(0, 5)}-${digits.slice(5, 12)}-${digits.slice(12)}`;
    };

    const formatPhone = (value) => {
        const digits = value.replace(/\D/g, "").slice(0, 11);
        if (!digits.startsWith("03")) return "03";
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

    const handleSubmit = (e) => {
        e.preventDefault();
        const { customerId, referenceNo, name, cnic, phone } = form;

        const isValidCustomerId = /^\d{8}$/.test(customerId);
        const isValidReference = /^\d{14}$/.test(referenceNo);
        const isValidName = name.trim().length > 0;
        const isValidCNIC = /^\d{5}-\d{7}-\d{1}$/.test(cnic);
        const isValidPhone = /^03\d{2}-\d{7}$/.test(phone);

        if (
            isValidCustomerId &&
            isValidReference &&
            isValidName &&
            isValidCNIC &&
            isValidPhone
        ) {
            alert("✅ Consumer CNIC Registered Successfully!");
        } else {
            alert("❌ Please fill all fields correctly.");
        }
    };

    return (
        <section className="cnic-section">
            <div className="cnic-container">
                <h2 className="cnic-title">CNIC Registration</h2>
                <form className="cnic-form" onSubmit={handleSubmit}>
                    <div className="form-grid">
                        <div className="form-group">
                            <label htmlFor="customerId">Customer ID</label>
                            <input
                                type="text"
                                name="customerId"
                                value={form.customerId}
                                onChange={handleChange}
                                required
                            />
                        </div>
                        <div className="form-group">
                            <label htmlFor="referenceNo">Reference No</label>
                            <input
                                type="text"
                                name="referenceNo"
                                value={form.referenceNo}
                                onChange={handleChange}
                                required
                            />
                        </div>
                        <div className="form-group">
                            <label htmlFor="name">Name</label>
                            <input
                                type="text"
                                name="name"
                                value={form.name}
                                onChange={handleChange}
                                required
                            />
                        </div>
                        <div className="form-group">
                            <label htmlFor="cnic">CNIC</label>
                            <input
                                type="text"
                                name="cnic"
                                value={form.cnic}
                                onChange={handleChange}
                                required
                            />
                        </div>
                        <div className="form-group full">
                            <label htmlFor="phone">Phone No</label>
                            <input
                                type="text"
                                name="phone"
                                value={form.phone}
                                onChange={handleChange}
                                required
                            />
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
