import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import './Services.css';

const categories = ['All', 'Screen', 'Battery', 'Charging', 'Camera', 'Software', 'Other'];

const services = [
  {
    icon: '🖥️',
    title: 'Screen Replacement',
    category: 'Screen',
    time: '1–2 hrs',
    price: '₹500 – ₹3,500',
    desc: 'Full display replacement with original or OEM quality panels for all brands.',
    brands: 'Samsung, iPhone, Redmi, Realme, OnePlus',
    warranty: '30 days',
  },
  {
    icon: '👆',
    title: 'Touch Screen Repair',
    category: 'Screen',
    time: '1–2 hrs',
    price: '₹400 – ₹2,000',
    desc: 'Fix unresponsive or cracked touch screen digitizer without full display replacement.',
    brands: 'All brands',
    warranty: '30 days',
  },
  {
    icon: '🔋',
    title: 'Battery Replacement',
    category: 'Battery',
    time: '30–45 mins',
    price: '₹300 – ₹1,200',
    desc: 'Replace swollen, dead, or fast-draining battery. Original capacity restored.',
    brands: 'All brands',
    warranty: '30 days',
  },
  {
    icon: '🔌',
    title: 'Charging Port Repair',
    category: 'Charging',
    time: '45–60 mins',
    price: '₹200 – ₹800',
    desc: 'Fix loose, dirty, or broken charging port. Supports Type-C, Micro USB, Lightning.',
    brands: 'All brands',
    warranty: '30 days',
  },
  {
    icon: '📷',
    title: 'Camera Repair',
    category: 'Camera',
    time: '1–2 hrs',
    price: '₹400 – ₹2,500',
    desc: 'Fix blurry, black, or broken front/rear cameras. Glass and module replacement.',
    brands: 'All brands',
    warranty: '30 days',
  },
  {
    icon: '🔊',
    title: 'Speaker / Mic Repair',
    category: 'Other',
    time: '45–60 mins',
    price: '₹200 – ₹700',
    desc: 'Fix muffled sound, no audio, or mic not working issues.',
    brands: 'All brands',
    warranty: '30 days',
  },
  {
    icon: '💾',
    title: 'Software Flashing',
    category: 'Software',
    time: '1–3 hrs',
    price: '₹200 – ₹500',
    desc: 'Fix hanging, bootloop, or bricked phone with firmware flashing and OS restore.',
    brands: 'Android (all brands)',
    warranty: 'N/A',
  },
  {
    icon: '💧',
    title: 'Water Damage Repair',
    category: 'Other',
    time: '2–24 hrs',
    price: '₹500 – ₹3,000',
    desc: 'Emergency water damage treatment. Board cleaning and component replacement as needed.',
    brands: 'All brands',
    warranty: '7 days',
  },
  {
    icon: '🔘',
    title: 'Power / Volume Button',
    category: 'Other',
    time: '30–45 mins',
    price: '₹150 – ₹600',
    desc: 'Replace stuck, unresponsive, or broken power and volume buttons.',
    brands: 'All brands',
    warranty: '30 days',
  },
  {
    icon: '📶',
    title: 'Network / SIM Issue',
    category: 'Other',
    time: '30–60 mins',
    price: '₹200 – ₹800',
    desc: 'Fix no signal, SIM not detected, or network card issues.',
    brands: 'All brands',
    warranty: '15 days',
  },
  {
    icon: '📱',
    title: 'Back Panel Replacement',
    category: 'Other',
    time: '30–45 mins',
    price: '₹200 – ₹1,000',
    desc: 'Replace cracked or broken back glass/panel. Keeps your phone looking new.',
    brands: 'All brands',
    warranty: '30 days',
  },
  {
    icon: '🔬',
    title: 'Free Diagnosis',
    category: 'Other',
    time: '15–20 mins',
    price: 'FREE',
    desc: 'Full phone diagnosis to identify the issue before any repair. No charges!',
    brands: 'All brands',
    warranty: 'N/A',
  },
];

export default function Services() {
  const [activeCategory, setActiveCategory] = useState('All');
  const [hoveredCard, setHoveredCard] = useState(null);

  const filtered = activeCategory === 'All'
    ? services
    : services.filter(s => s.category === activeCategory);

  return (
    <div className="services-page">
      {/* Page Header */}
      <div className="page-header">
        <div className="page-header__container">
          <span className="section__eyebrow">What We Fix</span>
          <h1 className="page-header__title">Services & Pricing</h1>
          <p className="page-header__sub">
            All prices are estimates. Final cost is confirmed after free diagnosis. No hidden charges — ever.
          </p>
        </div>
      </div>

      {/* Free Diagnosis Banner */}
      <div className="diag-banner">
        <div className="diag-banner__container">
          <span className="diag-banner__icon">🔬</span>
          <div>
            <strong>Free Diagnosis for Every Walk-In</strong>
            <span>We check your phone and tell you the exact repair cost before starting any work.</span>
          </div>
          <Link to="/booking" className="btn btn--primary">Book Now</Link>
        </div>
      </div>

      {/* Filter Tabs */}
      <div className="services-section">
        <div className="services-section__container">
          <div className="filter-tabs">
            {categories.map(cat => (
              <button
                key={cat}
                className={`filter-tab ${activeCategory === cat ? 'filter-tab--active' : ''}`}
                onClick={() => setActiveCategory(cat)}
              >
                {cat}
              </button>
            ))}
          </div>

          <div className="services-count">
            Showing {filtered.length} service{filtered.length !== 1 ? 's' : ''}
          </div>

          {/* Services Grid */}
          <div className="svc-grid">
            {filtered.map((s, i) => (
              <div
                className={`svc-card ${hoveredCard === i ? 'svc-card--hovered' : ''} ${s.price === 'FREE' ? 'svc-card--free' : ''}`}
                key={i}
                onMouseEnter={() => setHoveredCard(i)}
                onMouseLeave={() => setHoveredCard(null)}
              >
                <div className="svc-card__top">
                  <div className="svc-card__icon">{s.icon}</div>
                  <div className="svc-card__badge">{s.category}</div>
                </div>
                <h3 className="svc-card__title">{s.title}</h3>
                <p className="svc-card__desc">{s.desc}</p>
                <div className="svc-card__meta">
                  <div className="meta-item">
                    <span className="meta-label">⏱ Time</span>
                    <span className="meta-value">{s.time}</span>
                  </div>
                  <div className="meta-item">
                    <span className="meta-label">🛡 Warranty</span>
                    <span className="meta-value">{s.warranty}</span>
                  </div>
                </div>
                <div className="svc-card__footer">
                  <div>
                    <span className="svc-card__brands">Brands: {s.brands}</span>
                  </div>
                  <span className={`svc-card__price ${s.price === 'FREE' ? 'svc-card__price--free' : ''}`}>
                    {s.price}
                  </span>
                </div>
              </div>
            ))}
          </div>

          <div className="services-note">
            <p>💡 Prices vary by phone model and part availability. Call or walk in for an exact quote.</p>
            <Link to="/booking" className="btn btn--primary">📅 Book an Appointment</Link>
          </div>
        </div>
      </div>
    </div>
  );
}
