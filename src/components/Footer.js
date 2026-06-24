import React from 'react';
import { Link } from 'react-router-dom';
import './Footer.css';

export default function Footer() {
  return (
    <footer className="footer">
      <div className="footer__container">
        <div className="footer__grid">
          <div className="footer__brand">
            <div className="footer__logo">📱 Periyar Mobiles</div>
            <p className="footer__tagline">
              Trusted mobile repair service in Erode, Tamil Nadu. Fast, affordable, and reliable.
            </p>
            <div className="footer__social">
              <a href="https://wa.me/91XXXXXXXXXX" target="_blank" rel="noreferrer" className="social-btn">WhatsApp</a>
              <a href="#" className="social-btn">Instagram</a>
              <a href="#" className="social-btn">Facebook</a>
            </div>
          </div>

          <div className="footer__col">
            <h4>Quick Links</h4>
            <Link to="/">Home</Link>
            <Link to="/services">Services & Pricing</Link>
            <Link to="/booking">Book Appointment</Link>
            <Link to="/contact">Contact Us</Link>
          </div>

          <div className="footer__col">
            <h4>Services</h4>
            <span>Screen Replacement</span>
            <span>Battery Replacement</span>
            <span>Charging Port Repair</span>
            <span>Camera Repair</span>
            <span>Water Damage Repair</span>
          </div>

          <div className="footer__col">
            <h4>Contact</h4>
            <span>📍 Main Road, Erode, TN</span>
            <a href="tel:+91XXXXXXXXXX">📞 +91 XXXXX XXXXX</a>
            <a href="mailto:info@periyarmobiles.com">✉️ info@periyarmobiles.com</a>
            <span>🕐 Mon–Sat: 9:30 AM – 7 PM</span>
          </div>
        </div>

        <div className="footer__bottom">
          <span>© {new Date().getFullYear()} Periyar Mobiles. All rights reserved.</span>
          <span>Made with ❤️ in Erode, Tamil Nadu</span>
        </div>
      </div>
    </footer>
  );
}
