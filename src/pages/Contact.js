import React, { useState } from 'react';
import './Contact.css';

const faqs = [
  { q: 'Do you repair iPhones?', a: 'Yes, we repair all iPhone models — screen, battery, charging port, camera, and more.' },
  { q: 'How long does a screen replacement take?', a: 'Most screen replacements are done within 1–2 hours while you wait.' },
  { q: 'Do you offer a warranty on repairs?', a: 'Yes! All repairs come with a 30-day warranty on parts and labor.' },
  { q: 'Is diagnosis free?', a: 'Absolutely. Walk in and we\'ll diagnose your phone for free before quoting any price.' },
  { q: 'Can I come in without an appointment?', a: 'Yes, walk-ins are welcome anytime during working hours. Appointment just helps us prepare.' },
  { q: 'Do you use original parts?', a: 'We use original or OEM-quality parts depending on availability and your preference.' },
];

export default function Contact() {
  const [openFaq, setOpenFaq] = useState(null);
  const [formSent, setFormSent] = useState(false);
  const [contactForm, setContactForm] = useState({ name: '', phone: '', message: '' });

  const handleContactChange = (e) => {
    const { name, value } = e.target;
    setContactForm(prev => ({ ...prev, [name]: value }));
  };

  const handleContactSubmit = (e) => {
    e.preventDefault();
    if (!contactForm.name || !contactForm.phone || !contactForm.message) {
      alert('Please fill all fields.');
      return;
    }
    setFormSent(true);
  };

  return (
    <div className="contact-page">
      {/* Header */}
      <div className="page-header">
        <div className="page-header__container">
          <span className="eyebrow">Get In Touch</span>
          <h1 className="page-header__title">Contact Us</h1>
          <p className="page-header__sub">
            Walk in anytime, call us, or send a message. We're here to help.
          </p>
        </div>
      </div>

      {/* Contact Cards */}
      <div className="contact-section">
        <div className="contact-section__container">
          <div className="contact-cards">
            <a href="tel:+918072404851" className="contact-card contact-card--link">
              <div className="contact-card__icon">📞</div>
              <h3>Call Us</h3>
              <p>+91 8072404851</p>
              <span className="contact-card__action">Tap to call</span>
            </a>
            <a href="https://wa.me/918072404851?text=Hi%2C%20I%20need%20phone%20repair%20help" target="_blank" rel="noreferrer" className="contact-card contact-card--link contact-card--green">
              <div className="contact-card__icon">💬</div>
              <h3>WhatsApp</h3>
              <p>+91 8072404851</p>
              <span className="contact-card__action">Chat with us</span>
            </a>
            <div className="contact-card">
              <div className="contact-card__icon">📍</div>
              <h3>Visit Us</h3>
              <p>Periyar Silai, Orathanadu<br />Tamil Nadu – 614625</p>
              <a href="https://www.google.com/maps/place/Periyar+Mobiles/@10.627159,79.2482549,93m/data=!3m1!1e3!4m6!3m5!1s0x3baab1b14a0328b7:0xd666afbdb3a4ff6d!8m2!3d10.6271584!4d79.2484887!16s%2Fg%2F11qb3bv8l3?entry=ttu&g_ep=EgoyMDI2MDYyMS4wIKXMDSoASAFQAw%3D%3D" target="_blank" rel="noreferrer" className="contact-card__action">Get directions →</a>
            </div>
            <div className="contact-card">
              <div className="contact-card__icon">✉️</div>
              <h3>Email</h3>
              <p>periyarezhilan5@gmail.com</p>
              <a href="mailto:periyarezhilan5@gmail.com" className="contact-card__action">Send email →</a>
            </div>
          </div>

          {/* Map + Hours */}
          <div className="contact-bottom">
            <div className="map-section">
              <h2>Find Our Shop</h2>
              <div className="map-placeholder">
                <div className="map-placeholder__inner">
                  <span className="map-pin">📍</span>
                  <strong>Periyar Mobiles</strong>
                  <span>Near Indian Bank, Periyar Silai, Orathanadu, Thanjavur, Tamil Nadu</span>
                  <a
                    href="https://www.google.com/maps/place/Periyar+Mobiles/@10.627159,79.2482549,93m/data=!3m1!1e3!4m6!3m5!1s0x3baab1b14a0328b7:0xd666afbdb3a4ff6d!8m2!3d10.6271584!4d79.2484887!16s%2Fg%2F11qb3bv8l3?entry=ttu&g_ep=EgoyMDI2MDYyMS4wIKXMDSoASAFQAw%3D%3D"
                    target="_blank"
                    rel="noreferrer"
                    className="btn btn--primary btn--sm"
                  >
                    Open in Google Maps
                  </a>
                </div>
              </div>
              <div className="nearby-landmarks">
                <span className="landmark">🏦 Near Indian Bank</span>
                <span className="landmark">🛣️ Periyar Silai, Orathanadu Bus Stop</span>
                <span className="landmark">🎓 Near Government Women's College</span>
              </div>
            </div>

            <div className="info-column">
              {/* Hours */}
              <div className="info-card">
                <h3>🕐 Working Hours</h3>
                <table className="hours-table">
                  <tbody>
                    <tr>
                      <td>Monday</td>
                      <td><span className="open-badge">Open</span> 9:30 AM – 9:30 PM</td>
                    </tr>
                    <tr>
                      <td>Tuesday</td>
                      <td><span className="open-badge">Open</span> 9:30 AM – 9:30 PM</td>
                    </tr>
                    <tr>
                      <td>Wednesday</td>
                      <td><span className="open-badge">Open</span> 9:30 AM – 9:30 PM</td>
                    </tr>
                    <tr>
                      <td>Thursday</td>
                      <td><span className="open-badge">Open</span> 9:30 AM – 9:30 PM</td>
                    </tr>
                    <tr>
                      <td>Friday</td>
                      <td><span className="open-badge">Open</span> 9:30 AM – 9:30 PM</td>
                    </tr>
                    <tr>
                      <td>Saturday</td>
                      <td><span className="open-badge">Open</span> 9:30 AM – 9:30 PM</td>
                    </tr>
                    <tr>
                      <td>Sunday</td>
                      <td><span className="open-badge">Open</span> 9:30 AM – 9:30 PM</td>
                    </tr>
                  </tbody>
                </table>
              </div>

              {/* Quick Message */}
              <div className="info-card">
                <h3>✉️ Send a Quick Message</h3>
                {formSent ? (
                  <div className="msg-success">
                    ✅ Message sent! We'll get back to you shortly.
                  </div>
                ) : (
                  <form className="contact-form" onSubmit={handleContactSubmit}>
                    <input
                      type="text"
                      name="name"
                      placeholder="Your name"
                      value={contactForm.name}
                      onChange={handleContactChange}
                    />
                    <input
                      type="tel"
                      name="phone"
                      placeholder="Phone number"
                      value={contactForm.phone}
                      onChange={handleContactChange}
                    />
                    <textarea
                      name="message"
                      placeholder="What's the issue with your phone?"
                      rows={3}
                      value={contactForm.message}
                      onChange={handleContactChange}
                    />
                    <button type="submit" className="btn btn--primary" style={{ width: '100%' }}>
                      Send Message
                    </button>
                  </form>
                )}
              </div>
            </div>
          </div>

          {/* FAQ */}
          <div className="faq-section">
            <h2>Frequently Asked Questions</h2>
            <div className="faq-list">
              {faqs.map((faq, i) => (
                <div
                  key={i}
                  className={`faq-item ${openFaq === i ? 'faq-item--open' : ''}`}
                >
                  <button
                    className="faq-question"
                    onClick={() => setOpenFaq(openFaq === i ? null : i)}
                  >
                    <span>{faq.q}</span>
                    <span className="faq-chevron">{openFaq === i ? '▲' : '▼'}</span>
                  </button>
                  {openFaq === i && (
                    <div className="faq-answer">{faq.a}</div>
                  )}
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
