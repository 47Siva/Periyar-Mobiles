import React from 'react';
import { Link } from 'react-router-dom';
import './Home.css';

const stats = [
  { num: '2500+', label: 'Repairs Completed' },
  { num: '30 Days', label: 'Service Warranty' },
  { num: '1–2 Hrs', label: 'Fast Turnaround' },
  { num: '5+', label: 'Years of Experience' },
];

const brands = [
  'Samsung', 'Realme', 'Redmi / Mi',
  'OnePlus', 'Vivo', 'Oppo', 'Motorola', 'Nokia', 'Poco', 'iQOO', 
];

const services = [
  { icon: '🖥️', title: 'Screen Replacement', desc: 'Cracked or broken screen? We replace with original quality panels.' },
  { icon: '🔋', title: 'Battery Replacement', desc: 'Fast draining or swollen battery replaced in under an hour.' },
  { icon: '🔌', title: 'Charging Port Repair', desc: 'Not charging? We fix or replace ports on all brands.' },
  { icon: '📷', title: 'Camera Repair', desc: 'Blurry photos or broken camera glass fixed by experts.' },
  { icon: '💧', title: 'Water Damage', desc: 'Dropped in water? Bring it fast — we handle water damage recovery.' },
  { icon: '🔧', title: 'Software / Flashing', desc: 'Phone hanging or bricked? We flash and restore your software.' },
];

const whyUs = [
  { icon: '⚡', title: 'Same-Day Repair', desc: 'Most repairs completed within 1–2 hours while you wait.' },
  { icon: '✅', title: 'Genuine Parts', desc: 'Original or OEM-quality parts with 30-day warranty on all repairs.' },
  { icon: '💰', title: 'Affordable Price', desc: 'Best repair prices in Orathanadu. No hidden charges ever.' },
  { icon: '👨‍🔧', title: 'Expert Technicians', desc: 'Skilled team with 5+ years handling all types of repairs.' },
];

const testimonials = [
  { name: 'Ravi Kumar', rating: 5, text: 'Screen replaced in just 1 hour. Excellent work and very reasonable price. Highly recommend Periyar Mobiles!' },
  { name: 'Priya S', rating: 5, text: 'My phone battery was dead. They replaced it same day. Super fast service and honest pricing.' },
  { name: 'Murugan T', rating: 5, text: 'Water damage repair done professionally. They saved my phone. Very trustworthy shop!' },
];

export default function Home() {
  return (
    <div className="home">
      {/* Hero */}
      <section className="hero">
        <div className="hero__container">
          <div className="hero__content hero__content--animate">
            <span className="hero__badge">⭐ Trusted Mobile Repair Center in Orathanadu</span>
            <h1 className="hero__title">
              Fast, reliable phone repair for every brand.
            </h1>
            <p className="hero__desc">
              From cracked screens to battery and charging issues, we repair phones quickly using genuine parts and offer a 30-day service warranty. Visit us today for honest service and transparent pricing.
            </p>
            <div className="hero__actions">
              <Link to="/booking" className="btn btn--primary btn--lg">
                📅 Book an Appointment
              </Link>
              <Link to="/services" className="btn btn--outline btn--lg">
                Explore Our Services
              </Link>
            </div>
            <div className="hero__contact-strip">
              <a href="tel:+918072404851" className="contact-chip">📞 Call Us</a>
              <a href="https://wa.me/918072404851" className="contact-chip contact-chip--green" target="_blank" rel="noreferrer">💬 WhatsApp</a>
              <span className="contact-chip contact-chip--muted">📍 Near Indian Bank, Periyar Silai, Orathanadu, Thanjavur, Tamil Nadu 614625</span>
            </div>
          </div>
          <div className="hero__visual hero__visual--animate">
            <div className="hero__phone-card">
              <div className="phone-card__icon">📱</div>
              <div className="phone-card__text">
                <strong>Free Diagnosis</strong>
                <span>Walk in and we will inspect your phone at no cost</span>
              </div>
            </div>
            <div className="hero__phone-card hero__phone-card--offset">
              <div className="phone-card__icon">🛡️</div>
              <div className="phone-card__text">
                <strong>30-Day Warranty</strong>
                <span>On all completed repairs</span>
              </div>
            </div>
            <div className="hero__phone-card hero__phone-card--offset2">
              <div className="phone-card__icon">⚡</div>
              <div className="phone-card__text">
                <strong>Quick Service</strong>
                <span>Most repairs completed within 1–2 hours</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Stats */}
      <section className="stats">
        <div className="stats__container">
          {stats.map((s, i) => (
            <div className="stat reveal-card" key={i} style={{ animationDelay: `${i * 120}ms` }}>
              <span className="stat__num">{s.num}</span>
              <span className="stat__label">{s.label}</span>
            </div>
          ))}
        </div>
      </section>

      {/* Services */}
      <section className="section section--services">
        <div className="section__container">
          <div className="section__header">
            <span className="section__eyebrow">Our Services</span>
            <h2 className="section__title">Phone Repair Services</h2>
            <p className="section__sub">We provide expert repair services for both hardware and software issues across a wide range of smartphone brands.</p>
          </div>
          <div className="services-grid">
            {services.map((s, i) => (
              <div className="service-card reveal-card" key={i} style={{ animationDelay: `${i * 110}ms` }}>
                <div className="service-card__icon">{s.icon}</div>
                <h3 className="service-card__title">{s.title}</h3>
                <p className="service-card__desc">{s.desc}</p>
              </div>
            ))}
          </div>
          <div className="section__cta">
            <Link to="/services" className="btn btn--primary">View All Services & Pricing →</Link>
          </div>
        </div>
      </section>

      {/* Brands */}
      <section className="section section--gray">
        <div className="section__container">
          <div className="section__header">
            <span className="section__eyebrow">Supported Brands</span>
            <h2 className="section__title">We Repair All Major Smartphone Brands</h2>
          </div>
          <div className="brands-grid">
            {brands.map((b, i) => (
              <div className="brand-chip reveal-card" key={i} style={{ animationDelay: `${i * 80}ms` }}>{b}</div>
            ))}
          </div>
        </div>
      </section>

      {/* Why Us */}
      <section className="section section--why-us">
        <div className="section__container">
          <div className="section__header">
            <span className="section__eyebrow">Why Choose Us</span>
            <h2 className="section__title">Why Customers Choose Periyar Mobiles</h2>
          </div>
          <div className="why-grid">
            {whyUs.map((w, i) => (
              <div className="why-card reveal-card" key={i} style={{ animationDelay: `${i * 110}ms` }}>
                <div className="why-card__icon">{w.icon}</div>
                <h3 className="why-card__title">{w.title}</h3>
                <p className="why-card__desc">{w.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Testimonials */}
      <section className="section section--gray">
        <div className="section__container">
          <div className="section__header">
            <span className="section__eyebrow">Customer Feedback</span>
            <h2 className="section__title">What Our Customers Say About Us</h2>
          </div>
          <div className="testimonials-grid">
            {testimonials.map((t, i) => (
              <div className="testimonial-card reveal-card" key={i} style={{ animationDelay: `${i * 120}ms` }}>
                <div className="testimonial-card__stars">{'⭐'.repeat(t.rating)}</div>
                <p className="testimonial-card__text">{t.text}</p>
                <span className="testimonial-card__name">— {t.name}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Banner */}
      <section className="cta-banner">
        <div className="cta-banner__container reveal-card">
          <h2>Need help with your phone?</h2>
          <p>Visit us today or book an appointment — we are here to help you every weekday.</p>
          <div className="cta-banner__actions">
            <Link to="/booking" className="btn btn--white btn--lg">📅 Book an Appointment</Link>
            <Link to="/contact" className="btn btn--outline-white btn--lg">📍 Contact Us</Link>
          </div>
        </div>
      </section>
    </div>
  );
}
