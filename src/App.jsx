import React, { useState } from 'react';

const SERVICE_CATEGORIES = ["Therapeutic Massage", "Specialty Treatments", "Add-On Enhancements"];

const SERVICES = [
  {
    id: 1,
    category: "Therapeutic Massage",
    name: "Deep Tissue & Neuromuscular Therapy",
    prices: "60 Min: $85 | 90 Min: $120",
    desc: "Targeted firm pressure releasing chronic muscle tension, knots, and soft tissue tightness for long-term relief.",
    img: "https://images.unsplash.com/photo-1519823551278-64ac92734fb1?auto=format&fit=crop&w=800&q=80"
  },
  {
    id: 2,
    category: "Therapeutic Massage",
    name: "Swedish Relaxation Massage",
    prices: "60 Min: $75 | 90 Min: $105",
    desc: "Gentle long strokes, kneading, and rhythmic motion designed to soothe stress, enhance circulation, and induce deep calm.",
    img: "https://images.unsplash.com/photo-1600334089648-b0d9d3028eb2?auto=format&fit=crop&w=800&q=80"
  },
  {
    id: 3,
    category: "Specialty Treatments",
    name: "Warming Hot Stone Therapy",
    prices: "60 Min: $95 | 90 Min: $130",
    desc: "Smooth heated basalt stones melted over tight muscles to relieve deep-seated tension and restore tranquility.",
    img: "https://images.unsplash.com/photo-1540555700478-4be289fbecef?auto=format&fit=crop&w=800&q=80"
  },
  {
    id: 4,
    category: "Specialty Treatments",
    name: "Sports Performance & Recovery",
    prices: "60 Min: $85 | 90 Min: $120",
    desc: "Assisted stretching, cross-fiber friction, and joint mobilization tailored for athletes and active individuals.",
    img: "https://images.unsplash.com/photo-1574680096145-d05b474e2155?auto=format&fit=crop&w=800&q=80"
  },
  {
    id: 5,
    category: "Specialty Treatments",
    name: "Nurturing Prenatal Massage",
    prices: "60 Min: $80 | 90 Min: $115",
    desc: "Custom supportive side-lying cushion setup easing lower back pressure, hip fatigue, and fluid retention.",
    img: "https://images.unsplash.com/photo-1516549655169-df83a0774514?auto=format&fit=crop&w=800&q=80"
  },
  {
    id: 6,
    category: "Add-On Enhancements",
    name: "Aromatherapy & Botanical Oils",
    prices: "+$15 Add-On",
    desc: "Custom therapeutic essential oil blends (Lavender, Eucalyptus, Bergamot) infused into your session.",
    img: "https://images.unsplash.com/photo-1608571423902-eed4a5ad8108?auto=format&fit=crop&w=800&q=80"
  }
];

const AMBIANCE_GALLERY = [
  { url: "https://images.unsplash.com/photo-1544161515-4ab6ce6db874?auto=format&fit=crop&w=800&q=80", title: "Tranquil Treatment Room", sub: "Private & Calming Sanctuary" },
  { url: "https://images.unsplash.com/photo-1540555700478-4be289fbecef?auto=format&fit=crop&w=800&q=80", title: "Volcanic Hot Stone Setup", sub: "Deep Heat Muscle Therapy" },
  { url: "https://images.unsplash.com/photo-1608571423902-eed4a5ad8108?auto=format&fit=crop&w=800&q=80", title: "Organic Botanical Oils", sub: "100% Pure Essential Extracts" },
  { url: "https://images.unsplash.com/photo-1591343393582-fc440767454d?auto=format&fit=crop&w=800&q=80", title: "Soothing Studio Environment", sub: "Warm Lighting & Soundscapes" },
  { url: "https://images.unsplash.com/photo-1515377905703-c4788e51af15?auto=format&fit=crop&w=800&q=80", title: "Zen Wellness Essentials", sub: "Natural Spa Care" },
  { url: "https://images.unsplash.com/photo-1519823551278-64ac92734fb1?auto=format&fit=crop&w=800&q=80", title: "Therapeutic Muscle Care", sub: "Licensed Clinical Technique" }
];

export default function App() {
  const [activeCategory, setActiveCategory] = useState("Therapeutic Massage");
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [selectedService, setSelectedService] = useState("Deep Tissue & Neuromuscular Therapy");
  const [duration, setDuration] = useState("60 Minutes");
  const [toastMessage, setToastMessage] = useState("");
  const [form, setForm] = useState({ name: "", phone: "", date: "", time: "10:00 AM", notes: "" });

  const filteredServices = SERVICES.filter(s => s.category === activeCategory);

  const handleOpenModal = (serviceName = "Deep Tissue & Neuromuscular Therapy") => {
    setSelectedService(serviceName);
    setIsModalOpen(true);
  };

  const handleFormSubmit = (e) => {
    e.preventDefault();
    setIsModalOpen(false);
    setToastMessage(`Thank you, ${form.name}! Your request for ${selectedService} (${duration}) on ${form.date || 'selected date'} is received. We will contact you shortly.`);
    setForm({ name: "", phone: "", date: "", time: "10:00 AM", notes: "" });
    setTimeout(() => setToastMessage(""), 5500);
  };

  return (
    <div className="app">
      {/* Top Announcement */}
      <div className="top-announcement">
        <div className="container flex-between">
          <div>📍 215 N Bridge St, Grand Ledge, MI 48837</div>
          <div>📞 Direct Line: (517) 215-5475 | Walk-ins & Appointments</div>
        </div>
      </div>

      {/* Navigation */}
      <nav className="nav">
        <div className="container flex-between">
          <a href="#" className="brand-logo">
            <span>🌿</span>
            <span>IN GOOD HANDS MASSAGE THERAPY</span>
          </a>
          <div className="nav-links">
            <a href="#services">Services</a>
            <a href="#gallery">Ambiance</a>
            <a href="#therapist">About Therapist</a>
            <a href="#contact">Contact & Hours</a>
            <button className="btn btn-sage" onClick={() => handleOpenModal()}>Book Session</button>
          </div>
        </div>
      </nav>

      {/* Hero */}
      <section className="hero">
        <div className="container hero-grid">
          <div className="hero-text">
            <h1>RESTORE YOUR BODY, CALM YOUR MIND</h1>
            <p>
              Professional therapeutic massage in Grand Ledge. Pain management, stress reduction, and tailored muscle recovery designed specifically for your body's needs.
            </p>
            <div style={{ display: 'flex', gap: '16px', flexWrap: 'wrap' }}>
              <button className="btn btn-sage" style={{ fontSize: '1.05rem', padding: '14px 32px' }} onClick={() => handleOpenModal()}>
                Schedule Appointment
              </button>
              <a href="tel:5172155475" className="btn btn-outline" style={{ fontSize: '1.05rem', padding: '14px 32px' }}>
                Call (517) 215-5475
              </a>
            </div>
          </div>
          <div className="hero-image-wrapper">
            <img src="https://images.unsplash.com/photo-1544161515-4ab6ce6db874?auto=format&fit=crop&w=800&q=80" alt="Massage Therapy Room" />
          </div>
        </div>
      </section>

      {/* Services Tabs */}
      <section id="services" className="section">
        <div className="container">
          <div className="section-title">
            <h2>MASSAGE THERAPIES & RATES</h2>
            <p>Every session includes a thorough intake, organic lotion, and custom pressure tuning</p>
          </div>

          <div className="tabs-header">
            {SERVICE_CATEGORIES.map(cat => (
              <button
                key={cat}
                className={`tab-btn ${activeCategory === cat ? 'active' : ''}`}
                onClick={() => setActiveCategory(cat)}
              >
                {cat}
              </button>
            ))}
          </div>

          <div className="services-grid">
            {filteredServices.map(service => (
              <div key={service.id} className="service-card">
                <img src={service.img} alt={service.name} />
                <div className="service-content">
                  <h3 className="service-name">{service.name}</h3>
                  <div className="service-prices">{service.prices}</div>
                  <p className="service-desc">{service.desc}</p>
                  <button className="btn btn-outline" style={{ width: '100%' }} onClick={() => handleOpenModal(service.name)}>
                    Reserve This Treatment
                  </button>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Ambiance Gallery - Clean Cards */}
      <section id="gallery" className="section" style={{ background: '#F1F4F2' }}>
        <div className="container">
          <div className="section-title">
            <h2>SANCTUARY OF HEALING & AMBIANCE</h2>
            <p>Designed for comfort, tranquility, and total peace</p>
          </div>
          <div className="gallery-grid">
            {AMBIANCE_GALLERY.map((g, idx) => (
              <div key={idx} className="gallery-card">
                <div className="gallery-img-wrapper">
                  <img src={g.url} alt={g.title} />
                </div>
                <div className="gallery-body">
                  <div className="gallery-title">{g.title}</div>
                  <div className="gallery-subtitle">{g.sub}</div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Therapist Bio */}
      <section id="therapist" className="section">
        <div className="container">
          <div className="bio-box">
            <img src="https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?auto=format&fit=crop&w=600&q=80" alt="Licensed Therapist" className="bio-img" />
            <div className="bio-text">
              <h3>YOU ARE IN GOOD HANDS</h3>
              <p style={{ color: 'var(--text-muted)', marginBottom: '16px' }}>
                With over a decade of clinical experience in neuromuscular therapy, myofascial release, and Swedish massage, our licensed massage practitioners treat every client with personalized care.
              </p>
              <p style={{ color: 'var(--text-muted)', marginBottom: '24px' }}>
                Whether you suffer from chronic lower back tension, desk-posture neck strain, or simply need restorative relaxation, we create a custom massage plan for your wellness.
              </p>
              <div style={{ display: 'flex', gap: '20px', fontWeight: 600, color: 'var(--primary-sage-dark)' }}>
                <div>✓ Licensed & Insured</div>
                <div>✓ Organic Oils & Lotions</div>
                <div>✓ Heated Tables</div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Contact & Hours */}
      <section id="contact" className="section" style={{ background: '#F1F4F2' }}>
        <div className="container">
          <div className="section-title">
            <h2>LOCATION & APPOINTMENT HOURS</h2>
            <p>Conveniently located in downtown Grand Ledge</p>
          </div>
          <div className="contact-grid">
            <div className="contact-card">
              <h3>STUDIO ADDRESS</h3>
              <p style={{ fontWeight: 600, marginBottom: '8px' }}>In Good Hands Massage Therapy</p>
              <p style={{ color: 'var(--text-muted)', marginBottom: '16px' }}>📍 215 N Bridge St, Grand Ledge, MI 48837</p>
              <p style={{ color: 'var(--text-muted)', marginBottom: '24px' }}>📞 Phone: <a href="tel:5172155475" style={{ color: 'var(--primary-sage)', fontWeight: 600 }}>(517) 215-5475</a></p>
              <button className="btn btn-sage" onClick={() => handleOpenModal()}>Request Appointment</button>
            </div>

            <div className="contact-card">
              <h3>OPERATING HOURS</h3>
              <ul style={{ listStyle: 'none' }}>
                <li style={{ display: 'flex', justifyContent: 'space-between', padding: '10px 0', borderBottom: '1px solid var(--border-light)' }}>
                  <span>Monday - Friday</span> <strong>9:00 AM - 7:00 PM</strong>
                </li>
                <li style={{ display: 'flex', justifyContent: 'space-between', padding: '10px 0', borderBottom: '1px solid var(--border-light)' }}>
                  <span>Saturday</span> <strong>9:00 AM - 5:00 PM</strong>
                </li>
                <li style={{ display: 'flex', justifyContent: 'space-between', padding: '10px 0' }}>
                  <span>Sunday</span> <strong>By Appointment Only</strong>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="footer">
        <div className="container">
          <p>© 2026 In Good Hands Massage Therapy. 215 N Bridge St, Grand Ledge, MI 48837 | (517) 215-5475</p>
        </div>
      </footer>

      {/* Booking Modal */}
      {isModalOpen && (
        <div className="modal-backdrop">
          <div className="modal-box">
            <button className="close-btn" onClick={() => setIsModalOpen(false)}>✕</button>
            <h2 style={{ fontFamily: 'var(--font-serif)', color: 'var(--primary-sage-dark)', marginBottom: '20px' }}>
              BOOK A MASSAGE SESSION
            </h2>
            <form onSubmit={handleFormSubmit}>
              <div className="form-group">
                <label>Full Name</label>
                <input
                  type="text"
                  required
                  className="form-input"
                  placeholder="Sarah Johnson"
                  value={form.name}
                  onChange={e => setForm({ ...form, name: e.target.value })}
                />
              </div>
              <div className="form-group">
                <label>Phone Number</label>
                <input
                  type="tel"
                  required
                  className="form-input"
                  placeholder="(517) 555-0144"
                  value={form.phone}
                  onChange={e => setForm({ ...form, phone: e.target.value })}
                />
              </div>
              <div className="form-group">
                <label>Selected Service</label>
                <select
                  className="form-input"
                  value={selectedService}
                  onChange={e => setSelectedService(e.target.value)}
                >
                  {SERVICES.map(s => (
                    <option key={s.id} value={s.name}>{s.name}</option>
                  ))}
                </select>
              </div>
              <div className="form-group">
                <label>Session Duration</label>
                <select
                  className="form-input"
                  value={duration}
                  onChange={e => setDuration(e.target.value)}
                >
                  <option value="60 Minutes">60 Minutes</option>
                  <option value="90 Minutes">90 Minutes</option>
                  <option value="30 Minute Targeted Focus">30 Minute Targeted Focus</option>
                </select>
              </div>
              <div className="form-group" style={{ display: 'flex', gap: '15px' }}>
                <div style={{ flex: 1 }}>
                  <label>Preferred Date</label>
                  <input
                    type="date"
                    required
                    className="form-input"
                    value={form.date}
                    onChange={e => setForm({ ...form, date: e.target.value })}
                  />
                </div>
                <div style={{ flex: 1 }}>
                  <label>Preferred Time</label>
                  <select
                    className="form-input"
                    value={form.time}
                    onChange={e => setForm({ ...form, time: e.target.value })}
                  >
                    <option value="9:00 AM">9:00 AM</option>
                    <option value="11:00 AM">11:00 AM</option>
                    <option value="1:30 PM">1:30 PM</option>
                    <option value="3:30 PM">3:30 PM</option>
                    <option value="5:30 PM">5:30 PM</option>
                  </select>
                </div>
              </div>
              <button type="submit" className="btn btn-sage" style={{ width: '100%', marginTop: '10px', padding: '14px' }}>
                Confirm Session Request
              </button>
            </form>
          </div>
        </div>
      )}

      {/* Toast */}
      {toastMessage && <div className="toast">{toastMessage}</div>}
    </div>
  );
}
