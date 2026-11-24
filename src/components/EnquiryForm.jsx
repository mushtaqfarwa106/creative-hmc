"use client";

import { useState } from "react";

const WHATSAPP_NUMBER = "971551080986";

export default function EnquiryForm() {
  const [formData, setFormData] = useState({
    fullName: "",
    email: "",
    company: "",
    mobile: "",
    message: "",
  });

  const [errors, setErrors] = useState({});
  const [submitted, setSubmitted] = useState(false);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
    if (errors[name]) {
      setErrors((prev) => ({ ...prev, [name]: "" }));
    }
  };

  const validate = () => {
    const nextErrors = {};

    if (!formData.fullName.trim()) {
      nextErrors.fullName = "Full name is required.";
    }
    if (!formData.email.trim()) {
      nextErrors.email = "Email address is required.";
    } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(formData.email.trim())) {
      nextErrors.email = "Enter a valid email address.";
    }
    if (!formData.company.trim()) {
      nextErrors.company = "Company name is required.";
    }
    if (!formData.mobile.trim()) {
      nextErrors.mobile = "Mobile number is required.";
    }
    if (!formData.message.trim()) {
      nextErrors.message = "Project details are required.";
    }

    return nextErrors;
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const validationErrors = validate();

    if (Object.keys(validationErrors).length > 0) {
      setErrors(validationErrors);
      setSubmitted(false);
      return;
    }

    setErrors({});
    setSubmitted(true);

    const text = [
      "Hello Creative HMC, I would like to submit an enquiry:",
      `• Full Name: ${formData.fullName.trim()}`,
      `• Email: ${formData.email.trim()}`,
      `• Company: ${formData.company.trim()}`,
      `• Mobile: ${formData.mobile.trim()}`,
      `• Project Details: ${formData.message.trim()}`,
    ].join("\n");

    const whatsappUrl = `https://wa.me/${WHATSAPP_NUMBER}?text=${encodeURIComponent(text)}`;
    window.open(whatsappUrl, "_blank", "noopener,noreferrer");
  };

  const fieldStyle = (hasError) => ({
    width: "100%",
    background: "transparent",
    border: "none",
    borderBottom: `1px solid ${hasError ? "#EE402D" : "#3a3a3a"}`,
    color: "#ffffff",
    fontSize: "15px",
    padding: "10px 0",
    outline: "none",
    boxShadow: "none",
    WebkitAppearance: "none",
    borderRadius: 0,
  });

  const labelStyle = {
    display: "block",
    fontSize: "12px",
    fontWeight: 600,
    letterSpacing: "0.06em",
    color: "#cccccc",
    marginBottom: "4px",
  };

  const errorStyle = {
    color: "#EE402D",
    fontSize: "12px",
    marginTop: "5px",
  };

  return (
    <form
      onSubmit={handleSubmit}
      noValidate
      style={{
        background: "#161616",
        border: "1px solid #2c2c2c",
        borderRadius: "16px",
        padding: "28px 24px",
      }}
    >
      <div className="tag" style={{ marginBottom: "8px" }}>
        PROJECT ENQUIRY
      </div>
      <h3 style={{ color: "#ffffff", fontSize: "22px", marginBottom: "22px" }}>
        Send us your details
      </h3>

      <div style={{ display: "grid", gap: "18px" }}>
        <div>
          <label htmlFor="fullName" style={labelStyle}>
            Full name *
          </label>
          <input
            id="fullName"
            name="fullName"
            type="text"
            required
            placeholder="Your full name"
            value={formData.fullName}
            onChange={handleChange}
            style={fieldStyle(Boolean(errors.fullName))}
          />
          {errors.fullName && <p style={errorStyle}>{errors.fullName}</p>}
        </div>

        <div>
          <label htmlFor="email" style={labelStyle}>
            Email address *
          </label>
          <input
            id="email"
            name="email"
            type="email"
            required
            placeholder="you@company.com"
            value={formData.email}
            onChange={handleChange}
            style={fieldStyle(Boolean(errors.email))}
          />
          {errors.email && <p style={errorStyle}>{errors.email}</p>}
        </div>

        <div>
          <label htmlFor="company" style={labelStyle}>
            Company *
          </label>
          <input
            id="company"
            name="company"
            type="text"
            required
            placeholder="Company or clinic name"
            value={formData.company}
            onChange={handleChange}
            style={fieldStyle(Boolean(errors.company))}
          />
          {errors.company && <p style={errorStyle}>{errors.company}</p>}
        </div>

        <div>
          <label htmlFor="mobile" style={labelStyle}>
            Mobile *
          </label>
          <input
            id="mobile"
            name="mobile"
            type="tel"
            required
            placeholder="+971 50 000 0000"
            value={formData.mobile}
            onChange={handleChange}
            style={fieldStyle(Boolean(errors.mobile))}
          />
          {errors.mobile && <p style={errorStyle}>{errors.mobile}</p>}
        </div>

        <div>
          <label htmlFor="message" style={labelStyle}>
            Project details *
          </label>
          <textarea
            id="message"
            name="message"
            rows={3}
            required
            placeholder="Tell us about your space, location, and timeline"
            value={formData.message}
            onChange={handleChange}
            style={{
              ...fieldStyle(Boolean(errors.message)),
              resize: "none",
            }}
          />
          {errors.message && <p style={errorStyle}>{errors.message}</p>}
        </div>
      </div>

      <button
        type="submit"
        className="btn r"
        style={{
          marginTop: "24px",
          width: "100%",
          justifyContent: "center",
          cursor: "pointer",
        }}
      >
        Send Enquiry →
      </button>

      {submitted && (
        <p style={{ color: "#9be39b", fontSize: "13px", marginTop: "12px" }}>
          Opening WhatsApp with your enquiry details...
        </p>
      )}
    </form>
  );
}