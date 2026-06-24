import React, { useState } from 'react';
import './Booking.css';

const brands = [
  'Samsung', 'iPhone', 'Realme', 'Redmi / Mi', 'OnePlus',
  'Vivo', 'Oppo', 'Motorola', 'Nokia', 'Poco', 'iQOO', 'Tecno', 'Other',
];

const servicesList = [
  'Screen Replacement',
  'Touch Screen Repair',
  'Battery Replacement',
  'Charging Port Repair',
  'Camera Repair',
  'Speaker / Mic Repair',
  'Software Flashing',
  'Water Damage Repair',
  'Power / Volume Button',
  'Back Panel Replacement',
  'Network / SIM Issue',
  'Not Sure / Other',
];

const timeSlots = [
  '10:00 AM – 11:00 AM',
  '11:00 AM – 12:00 PM',
  '12:00 PM – 1:00 PM',
  '2:00 PM – 3:00 PM',
  '3:00 PM – 4:00 PM',
  '4:00 PM – 5:00 PM',
  '5:00 PM – 6:00 PM',
  '6:00 PM – 7:00 PM',
];

const initialForm = {
  name: '',
  phone: '',
  email: '',
  brand: '',
  model: '',
  service: '',
  date: '',
  time: '',
  description: '',
};

export default function Booking() {
  const [form, setForm] = useState(initialForm);
  const [errors, setErrors] = useState({});
  const [submitted, setSubmitted] = useState(false);
  const [loading, setLoading] = useState(false);

  const today = new Date().toISOString().split('T')[0];

  const validate = () => {
    const e = {};
    if (!form.name.trim()) e.name = 'Name is required';
    if (!form.phone.trim()) e.phone = 'Phone number is required';
    else if (!/^[6-9]\d{9}$/.test(form.phone.replace(/\s/g, ''))) e.phone = 'Enter a valid 10-digit mobile number';
    if (!form.brand) e.brand = 'Please select your phone brand';
    if (!form.service) e.service = 'Please select a service';
    if (!form.date) e.date = 'Please select a date';
    if (!form.time) e.time = 'Please select a time slot';
    return e;
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setForm(prev => ({ ...prev, [name]: value }));
    if (errors[name]) setErrors(prev => ({ ...prev, [name]: '' }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const errs = validate();
    if (Object.keys(errs).length > 0) {
      setErrors(errs);
      return;
    }
    setLoading(true);
    setTimeout(() => {
      setLoading(false);
      setSubmitted(true);
    }, 1500);
  };

  const handleReset = () => {
    setForm(initialForm);
    setErrors({});
    setSubmitted(false);
  };

  if (submitted) {
    return (
      <div className="booking-page">
        <div className="booking-success">
          <div className="success-icon">✅</div>
          <h2>Appointment Booked!</h2>
          <p>
            Thank you, <strong>{form.name}</strong>! Your appointment for <strong>{form.service}</strong> has been received.
            We'll contact you at <strong>{form.phone}</strong> to confirm your slot.
          </p>
          <div className="success-details">
            <div className="success-detail-row">
              <span>📅 Date</span>
              <strong>{form.date}</strong>
            </div>
            <div className="success-detail-row">
              <span>⏰ Time</span>
              <strong>{form.time}</strong>
            </div>
            <div className="success-detail-row">
              <span>📱 Device</span>
              <strong>{form.brand} {form.model}</strong>
            </div>
            <div className="success-detail-row">
              <span>🔧 Service</span>
              <strong>{form.service}</strong>
            </div>
          </div>
          <p className="success-note">
            📍 Visit us at: Main Road, Erode, Tamil Nadu – 638001<br />
            📞 Questions? Call us at +91 XXXXX XXXXX
          </p>
          <button onClick={handleReset} className="btn btn--primary">Book Another Appointment</button>
        </div>
      </div>
    );
  }

  return (
    <div className="booking-page">
      {/* Header */}
      <div className="page-header">
        <div className="page-header__container">
          <span className="eyebrow">Schedule a Visit</span>
          <h1 className="page-header__title">Book an Appointment</h1>
          <p className="page-header__sub">
            Fill in your details and we'll confirm your appointment via call or WhatsApp.
            Walk-ins are always welcome too!
          </p>
        </div>
      </div>

      <div className="booking-layout">
        {/* Form */}
        <div className="booking-form-wrap">
          <form className="booking-form" onSubmit={handleSubmit} noValidate>
            <div className="form-section">
              <h3 className="form-section__title">👤 Your Details</h3>
              <div className="form-row">
                <div className={`form-field ${errors.name ? 'form-field--error' : ''}`}>
                  <label>Full Name *</label>
                  <input
                    type="text"
                    name="name"
                    value={form.name}
                    onChange={handleChange}
                    placeholder="Enter your name"
                  />
                  {errors.name && <span className="field-error">{errors.name}</span>}
                </div>
                <div className={`form-field ${errors.phone ? 'form-field--error' : ''}`}>
                  <label>Phone Number *</label>
                  <input
                    type="tel"
                    name="phone"
                    value={form.phone}
                    onChange={handleChange}
                    placeholder="10-digit mobile number"
                    maxLength="10"
                  />
                  {errors.phone && <span className="field-error">{errors.phone}</span>}
                </div>
              </div>
              <div className="form-field">
                <label>Email Address (optional)</label>
                <input
                  type="email"
                  name="email"
                  value={form.email}
                  onChange={handleChange}
                  placeholder="your@email.com"
                />
              </div>
            </div>

            <div className="form-section">
              <h3 className="form-section__title">📱 Device Details</h3>
              <div className="form-row">
                <div className={`form-field ${errors.brand ? 'form-field--error' : ''}`}>
                  <label>Phone Brand *</label>
                  <select name="brand" value={form.brand} onChange={handleChange}>
                    <option value="">Select brand</option>
                    {brands.map(b => <option key={b} value={b}>{b}</option>)}
                  </select>
                  {errors.brand && <span className="field-error">{errors.brand}</span>}
                </div>
                <div className="form-field">
                  <label>Model Number (optional)</label>
                  <input
                    type="text"
                    name="model"
                    value={form.model}
                    onChange={handleChange}
                    placeholder="e.g. Samsung A52, iPhone 13"
                  />
                </div>
              </div>
              <div className={`form-field ${errors.service ? 'form-field--error' : ''}`}>
                <label>Service Required *</label>
                <select name="service" value={form.service} onChange={handleChange}>
                  <option value="">Select service</option>
                  {servicesList.map(s => <option key={s} value={s}>{s}</option>)}
                </select>
                {errors.service && <span className="field-error">{errors.service}</span>}
              </div>
            </div>

            <div className="form-section">
              <h3 className="form-section__title">📅 Appointment Schedule</h3>
              <div className="form-row">
                <div className={`form-field ${errors.date ? 'form-field--error' : ''}`}>
                  <label>Preferred Date *</label>
                  <input
                    type="date"
                    name="date"
                    value={form.date}
                    onChange={handleChange}
                    min={today}
                  />
                  {errors.date && <span className="field-error">{errors.date}</span>}
                </div>
                <div className={`form-field ${errors.time ? 'form-field--error' : ''}`}>
                  <label>Preferred Time Slot *</label>
                  <select name="time" value={form.time} onChange={handleChange}>
                    <option value="">Select time slot</option>
                    {timeSlots.map(t => <option key={t} value={t}>{t}</option>)}
                  </select>
                  {errors.time && <span className="field-error">{errors.time}</span>}
                </div>
              </div>
              <div className="form-field">
                <label>Describe the Issue (optional)</label>
                <textarea
                  name="description"
                  value={form.description}
                  onChange={handleChange}
                  rows={4}
                  placeholder="Tell us what's wrong with your phone — this helps us prepare parts in advance..."
                />
              </div>
            </div>

            <div className="form-notice">
              <span>📞</span>
              <p>We'll call or WhatsApp you within 30 minutes to confirm your appointment. Walk-ins are also welcome during working hours.</p>
            </div>

            <button type="submit" className="btn btn--primary btn--submit" disabled={loading}>
              {loading ? (
                <span className="loading-dots">Booking<span>.</span><span>.</span><span>.</span></span>
              ) : '📅 Confirm Appointment'}
            </button>
          </form>
        </div>

        {/* Sidebar */}
        <div className="booking-sidebar">
          <div className="sidebar-card">
            <h3>🕐 Working Hours</h3>
            <div className="hours-list">
              <div className="hours-row"><span>Mon – Fri</span><strong>9:30 AM – 7:00 PM</strong></div>
              <div className="hours-row"><span>Saturday</span><strong>9:30 AM – 6:00 PM</strong></div>
              <div className="hours-row hours-row--closed"><span>Sunday</span><strong>Closed*</strong></div>
            </div>
            <p className="sidebar-note">*Emergency repairs on call for Sundays</p>
          </div>

          <div className="sidebar-card">
            <h3>📍 Our Location</h3>
            <p>Periyar Mobiles<br />Main Road, Erode<br />Tamil Nadu – 638001</p>
            <a
              href="https://maps.google.com/?q=Erode+Tamil+Nadu"
              target="_blank"
              rel="noreferrer"
              className="btn btn--outline btn--sm"
            >
              📌 Open in Google Maps
            </a>
          </div>

          <div className="sidebar-card sidebar-card--blue">
            <h3>💬 Prefer WhatsApp?</h3>
            <p>Send us a WhatsApp message with your phone issue and we'll reply instantly.</p>
            <a
              href="https://wa.me/91XXXXXXXXXX?text=Hi%2C%20I%20want%20to%20book%20a%20repair%20appointment"
              target="_blank"
              rel="noreferrer"
              className="btn btn--white"
            >
              💬 Chat on WhatsApp
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}
