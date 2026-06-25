import React from 'react';
import logo from '../assets/logo.jpg';
import { Link } from 'react-router-dom';
import './Footer.css';

export default function Footer() {
  return (
    <footer className="footer">
      <div className="footer__container">
        <div className="footer__grid">
          <div className="footer__brand">
            {/* <div className="footer__logo">📱 Periyar Mobiles</div> */}
            <img
              src={logo}
              alt="Periyar Mobiles"
              className="footer__logo-img"
            />

            <p className="footer__tagline">
              Trusted mobile repair service in Orathanadu, Tamil Nadu.
              Fast, affordable, and reliable.
            </p>
            <div className="footer__social">
              <a href="https://wa.me/8072404851" target="_blank" rel="noreferrer" className="social-btn">WhatsApp</a>
              <a href="https://www.instagram.com/periyar_mobiles_ond" target="_blank" rel="noreferrer" className="social-btn">Instagram</a>
              {/* <a href="#" className="social-btn">Facebook</a> */}
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
            <span>📍Near Indian Bank, Periyar Silai, Orathanadu, Thanjavur, TN ,614625</span>
            <a href="tel:+918072404851">📞 +91 8072404851</a>
            <a href="mailto:periyarezhilan5@gmail.com">📧 periyarezhilan5@gmail.com</a>
            <span>🕐 Mon–Sat: 9:00 AM – 9:30 PM</span>
          </div>
        </div>

        <div className="footer__bottom">
          <span>© {new Date().getFullYear()} Periyar Mobiles. All rights reserved.</span>
          <span>Made with ❤️ in Orathanadu, Thanjavur, Tamil Nadu</span>
        </div>
      </div>
    </footer>
  );
}
