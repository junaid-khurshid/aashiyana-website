"use client";
import { useEffect } from "react";
import Image from "next/image";

const reviews = [
  { name: "Muhammad Asif", rating: 5, date: "2 months ago", text: "Excellent service! Aashiyana Associates helped me find the perfect house in North Karachi within my budget. Very professional and trustworthy team. Highly recommended!", avatar: "MA" },
  { name: "Sana Fatima", rating: 5, date: "3 months ago", text: "Best real estate agency in Karachi. They handled all the paperwork and made the whole process very smooth. Found a great apartment in North Nazimabad. Jazak Allah Khair!", avatar: "SF" },
  { name: "Tariq Mehmood", rating: 5, date: "1 month ago", text: "Very honest and reliable. No hidden charges, everything was transparent from day one. They found a buyer for my property in Surjani Town within 2 weeks. Amazing!", avatar: "TM" },
  { name: "Ayesha Siddiqui", rating: 5, date: "4 months ago", text: "I was looking for a house on rent in New Karachi and they showed me exactly what I needed. The team is very responsive on WhatsApp and always available. 5 stars!", avatar: "AS" },
  { name: "Zubair Ahmed", rating: 4, date: "5 months ago", text: "Good experience overall. They know the North Karachi property market very well. Got a good deal on a plot in Bufferzone. Would recommend to friends and family.", avatar: "ZA" },
  { name: "Nadia Khan", rating: 5, date: "6 months ago", text: "Professional team with deep knowledge of the area. Helped us with legal documentation as well. Very satisfied with our new home in Shadman Town. Thank you!", avatar: "NK" },
];

const videos = [
  { id: "dQw4w9WgXcQ", title: "Property Tour – North Karachi" },
  { id: "dQw4w9WgXcQ", title: "3 Bedroom House for Sale – Surjani" },
  { id: "dQw4w9WgXcQ", title: "Investment Tips – Karachi Real Estate" },
];

export default function Home() {
  useEffect(() => {
    const btns = document.querySelectorAll(".filter-btn");
    btns.forEach((btn) => {
      btn.addEventListener("click", function (this: Element) {
        btns.forEach((b) => b.classList.remove("active"));
        this.classList.add("active");
      });
    });
  }, []);

  return (
    <>
      {/* NAVIGATION */}
      <header>
        <nav>
          <a href="#" className="nav-logo">
            <Image src="/logo.png" alt="Aashiyana Real Estate" width={48} height={48} style={{ objectFit: "contain" }} />
            <div className="nav-logo-text">
              <span>Aashiyana <em>Associates</em></span>
              <small>Real Estate Marketing</small>
            </div>
          </a>
          <ul className="nav-links">
            <li><a href="#services">Services</a></li>
            <li><a href="#areas">Areas</a></li>
            <li><a href="#listings">Listings</a></li>
            <li><a href="#about">About</a></li>
            <li><a href="#contact">Contact</a></li>
          </ul>
          <a href="#contact" className="nav-cta">Get in Touch</a>
        </nav>
      </header>

      {/* HERO */}
      <section className="hero" id="home">
        <div className="hero-bg"></div>
        <div className="hero-content">
          <div className="hero-text">
            <div className="hero-eyebrow">
              <span></span>
              <p>North Karachi&apos;s Trusted Real Estate Experts</p>
            </div>
            <h1>Your Dream Home<br /><em>Awaits in Karachi</em></h1>
            <p className="hero-desc">
              Aashiyana Associates brings you verified properties across North Karachi, Surjani,
              Nazimabad and surrounding areas — with honest advice and lasting relationships.
            </p>
            <div className="hero-btns">
              <a href="#listings" className="btn-primary">View Properties</a>
              <a href="#contact" className="btn-ghost">Free Consultation</a>
            </div>
            <div className="hero-social">
              <a href="https://www.youtube.com/@AashiyanaRealEstate" target="_blank" rel="noreferrer" className="hero-chip chip-yt">
                <svg width="14" height="14" viewBox="0 0 24 24" fill="currentColor"><path d="M23.498 6.186a3.016 3.016 0 00-2.122-2.136C19.505 3.545 12 3.545 12 3.545s-7.505 0-9.377.505A3.017 3.017 0 00.502 6.186C0 8.07 0 12 0 12s0 3.93.502 5.814a3.016 3.016 0 002.122 2.136c1.871.505 9.376.505 9.376.505s7.505 0 9.377-.505a3.015 3.015 0 002.122-2.136C24 15.93 24 12 24 12s0-3.93-.502-5.814zM9.545 15.568V8.432L15.818 12l-6.273 3.568z"/></svg>
                YouTube Channel
              </a>
              <a href="https://www.zameen.com/agents/Karachi/Aashiyana_Associates_Real_Estate_Marketing-190557/" target="_blank" rel="noreferrer" className="hero-chip chip-zm">
                <svg width="14" height="14" viewBox="0 0 24 24" fill="currentColor"><path d="M12 2C8.13 2 5 5.13 5 9c0 5.25 7 13 7 13s7-7.75 7-13c0-3.87-3.13-7-7-7zm0 9.5c-1.38 0-2.5-1.12-2.5-2.5s1.12-2.5 2.5-2.5 2.5 1.12 2.5 2.5-1.12 2.5-2.5 2.5z"/></svg>
                Zameen.com Profile
              </a>
              <a href="https://wa.me/923152400381" target="_blank" rel="noreferrer" className="hero-chip chip-wa">
                <svg width="14" height="14" viewBox="0 0 24 24" fill="currentColor"><path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z"/></svg>
                WhatsApp Us
              </a>
            </div>
          </div>
          <div className="search-panel">
            <h3>Find Your Property</h3>
            <div className="form-group">
              <label>I Want To</label>
              <select>
                <option>Rent a Property</option>
                <option>Buy a Property</option>
                <option>Sell My Property</option>
                <option>Get Consultancy</option>
              </select>
            </div>
            <div className="form-group">
              <label>Area</label>
              <select>
                <option value="">All Areas</option>
                <option>Surjani Town</option>
                <option>North Karachi</option>
                <option>New Karachi</option>
                <option>Bufferzone</option>
                <option>Shadman Town</option>
                <option>North Nazimabad</option>
                <option>Nazimabad</option>
              </select>
            </div>
            <div className="form-row">
              <div className="form-group">
                <label>Property Type</label>
                <select>
                  <option>Any</option>
                  <option>House</option>
                  <option>Apartment</option>
                  <option>Plot</option>
                  <option>Shop / Office</option>
                </select>
              </div>
              <div className="form-group">
                <label>Budget</label>
                <select>
                  <option>Any</option>
                  <option>Under 50 Lakh</option>
                  <option>50L – 1 Crore</option>
                  <option>1 – 2 Crore</option>
                  <option>2 Crore+</option>
                </select>
              </div>
            </div>
            <button className="search-submit">Search Properties →</button>
          </div>
        </div>
      </section>

      {/* STATS */}
      <div className="stats-band">
        <div className="stats-inner">
          <div className="stat-item"><div className="stat-num">500+</div><div className="stat-lbl">Properties Sold</div></div>
          <div className="stat-item"><div className="stat-num">10+</div><div className="stat-lbl">Years Experience</div></div>
          <div className="stat-item"><div className="stat-num">7</div><div className="stat-lbl">Areas Covered</div></div>
          <div className="stat-item"><div className="stat-num">1,000+</div><div className="stat-lbl">Happy Clients</div></div>
        </div>
      </div>

      {/* SERVICES */}
      <section className="services-section" id="services">
        <div className="container">
          <div className="section-header centered">
            <div className="section-eyebrow" style={{ justifyContent: "center" }}>
              <span></span><p>What We Offer</p><span></span>
            </div>
            <h2>Our Services</h2>
            <p>Everything you need — from finding the right property to closing the deal</p>
          </div>
          <div className="services-grid">
            {[
              { icon: <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="#1565C0" strokeWidth="1.5"><path d="M3 12L12 3l9 9v9H3v-9z"/><rect x="9" y="15" width="6" height="6"/></svg>, title: "Property for Rent", desc: "Find houses, apartments and shops on monthly or annual rental across all areas in North Karachi.", link: "#listings", cta: "View Rentals →" },
              { icon: <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="#1565C0" strokeWidth="1.5"><circle cx="12" cy="12" r="9"/><path d="M8 12h8M12 8v8" strokeLinecap="round"/></svg>, title: "Buy / Sell Property", desc: "Verified residential and commercial listings. Full support from documentation to secure transfer.", link: "#listings", cta: "Browse Listings →" },
              { icon: <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="#1565C0" strokeWidth="1.5"><path d="M17 8h2a2 2 0 012 2v9a2 2 0 01-2 2H5a2 2 0 01-2-2v-9a2 2 0 012-2h2"/><rect x="8" y="4" width="8" height="6" rx="1"/></svg>, title: "Real Estate Consultancy", desc: "Expert advice on investment, valuation, market trends and legal documentation in Karachi.", link: "#contact", cta: "Book a Session →" },
              { icon: <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="#1565C0" strokeWidth="1.5"><path d="M9 5H7a2 2 0 00-2 2v12a2 2 0 002 2h10a2 2 0 002-2V7a2 2 0 00-2-2h-2"/><rect x="9" y="3" width="6" height="4" rx="1"/><path d="M9 12h6M9 16h4" strokeLinecap="round"/></svg>, title: "Property Management", desc: "Complete management for landlords — tenant screening, rent collection and maintenance coordination.", link: "#contact", cta: "Learn More →" },
            ].map((s) => (
              <div className="service-card" key={s.title}>
                <div className="service-icon-wrap">{s.icon}</div>
                <div className="service-title">{s.title}</div>
                <div className="service-desc">{s.desc}</div>
                <a href={s.link} className="service-link">{s.cta}</a>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* AREAS */}
      <section className="areas-section" id="areas">
        <div className="container">
          <div className="section-header">
            <div className="section-eyebrow"><span></span><p>Coverage</p></div>
            <h2>Areas We Serve</h2>
            <p>Specialist knowledge across 7 key localities in North &amp; Central Karachi</p>
          </div>
          <div className="areas-grid">
            {[
              { n:"01", name:"Surjani Town", sub:"Sector 7, 7A, 7B, 10, 11", type:"Houses · Plots · Shops" },
              { n:"02", name:"North Karachi", sub:"Sectors 11-B, 14-B, 15, 16", type:"Houses · Apartments · Plots" },
              { n:"03", name:"New Karachi", sub:"Sector 5, 5-J, 5-L, 5-Q", type:"Houses · Plots · Commercial" },
              { n:"04", name:"Bufferzone", sub:"Sector 15, 15-A, 16, 16-A", type:"Houses · Apartments" },
              { n:"05", name:"Shadman Town", sub:"Shadman Colony, Phase 1 & 2", type:"Houses · Plots · Shops" },
              { n:"06", name:"North Nazimabad", sub:"Blocks A through T", type:"Houses · Apartments · Flats" },
              { n:"07", name:"Nazimabad", sub:"Block 1, 2, 3, 4, 5", type:"Houses · Plots · Commercial" },
            ].map((a) => (
              <div className="area-card" key={a.n}>
                <div className="area-number">{a.n}</div>
                <div className="area-name">{a.name}</div>
                <div className="area-sub">{a.sub}</div>
                <div className="area-count">{a.type}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* LISTINGS */}
      <section className="listings-section" id="listings">
        <div className="container">
          <div className="section-header" style={{ display:"flex", justifyContent:"space-between", alignItems:"flex-end", flexWrap:"wrap", gap:"20px" }}>
            <div>
              <div className="section-eyebrow"><span></span><p>Properties</p></div>
              <h2>Featured Listings</h2>
            </div>
            <div className="listings-filter">
              <button className="filter-btn active">All</button>
              <button className="filter-btn">For Rent</button>
              <button className="filter-btn">For Sale</button>
            </div>
          </div>
          <div className="listings-grid">
            {[
              { price:"35,000", unit:"/ month", title:"3 Bedroom House with Car Porch", area:"North Karachi · Sector 11-B", specs:["3 Beds","2 Baths","120 Sq Yd"], type:"rent", img:"/interior-1.jpg" },
              { price:"1.2 Crore", unit:"", title:"Corner 240 Sq Yd Plot", area:"Surjani Town · Sector 7-A", specs:["240 Sq Yd","Corner","Residential"], type:"sale", img:"/house-1.jpg" },
              { price:"22,000", unit:"/ month", title:"2 Bed Apartment – 1st Floor", area:"North Nazimabad · Block H", specs:["2 Beds","2 Baths","900 Sqft"], type:"rent", img:"/interior-1.jpg" },
              { price:"85 Lakh", unit:"", title:"4 Bedroom Bungalow – Ready to Move", area:"New Karachi · Sector 5-L", specs:["4 Beds","3 Baths","120 Sq Yd"], type:"sale", img:"/house-1.jpg" },
              { price:"18,000", unit:"/ month", title:"Commercial Shop – Ground Floor", area:"Bufferzone · Sector 15", specs:["200 Sqft","Main Road","Commercial"], type:"rent", img:"/house-1.jpg" },
              { price:"1.6 Crore", unit:"", title:"Double Storey House – Renovated", area:"Nazimabad · Block 3", specs:["5 Beds","4 Baths","200 Sq Yd"], type:"sale", img:"/interior-1.jpg" },
            ].map((l, i) => (
              <div className="listing-card" key={i}>
                <div className="listing-img">
                  <Image src={l.img} alt={l.title} width={400} height={200} style={{ width:"100%", height:"200px", objectFit:"cover", display:"block" }} />
                  <div className="listing-badge-wrap">
                    <span className={`badge ${l.type === "rent" ? "badge-rent" : "badge-sale"}`}>
                      {l.type === "rent" ? "For Rent" : "For Sale"}
                    </span>
                  </div>
                </div>
                <div className="listing-body">
                  <div className="listing-price">{l.price} {l.unit && <small>{l.unit}</small>}</div>
                  <div className="listing-title">{l.title}</div>
                  <span className="listing-area-tag">{l.area}</span>
                  <div className="listing-specs">{l.specs.map((s) => <span className="spec" key={s}>{s}</span>)}</div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* YOUTUBE VIDEOS */}
      {/* <section className="videos-section" id="videos">
        <div className="container">
          <div className="section-header centered">
            <div className="section-eyebrow" style={{ justifyContent:"center" }}>
              <span></span><p>Our Channel</p><span></span>
            </div>
            <h2>Watch on YouTube</h2>
            <p>Property tours, market updates and investment tips — subscribe for the latest</p>
          </div>
          <div className="videos-grid">
            {videos.map((v, i) => (
              <div className="video-card" key={i}>
                <div className="video-embed">
                  <iframe
                    src={`https://www.youtube.com/embed/${v.id}`}
                    title={v.title}
                    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                    allowFullScreen
                  ></iframe>
                </div>
                <div className="video-title">{v.title}</div>
              </div>
            ))}
          </div>
          <div style={{ textAlign:"center", marginTop:"32px" }}>
            <a href="https://www.youtube.com/@AashiyanaRealEstate" target="_blank" rel="noreferrer" className="btn-yt-sub">
              <svg width="16" height="16" viewBox="0 0 24 24" fill="currentColor"><path d="M23.498 6.186a3.016 3.016 0 00-2.122-2.136C19.505 3.545 12 3.545 12 3.545s-7.505 0-9.377.505A3.017 3.017 0 00.502 6.186C0 8.07 0 12 0 12s0 3.93.502 5.814a3.016 3.016 0 002.122 2.136c1.871.505 9.376.505 9.376.505s7.505 0 9.377-.505a3.015 3.015 0 002.122-2.136C24 15.93 24 12 24 12s0-3.93-.502-5.814zM9.545 15.568V8.432L15.818 12l-6.273 3.568z"/></svg>
              Subscribe to Our Channel
            </a>
          </div>
        </div>
      </section> */}

      {/* WHY US */}
      <section className="whyus-section" id="about">
        <div className="container">
          <div className="whyus-grid">
            <div className="whyus-left">
              <div className="section-eyebrow"><span></span><p>Why Choose Us</p></div>
              <h2>Aashiyana Real Estate,<br />Done Right</h2>
              <p>At Aashiyana Associates, we combine deep local knowledge with transparent service. Our team has been operating in North Karachi&apos;s property market for over a decade — and our clients keep coming back.</p>
              <div className="whyus-points">
                {[
                  { title:"Verified Listings Only", desc:"Every property is inspected and documents verified before listing" },
                  { title:"No Hidden Charges", desc:"Transparent commission structure with no surprise fees" },
                  { title:"End-to-End Support", desc:"From search to possession — we're with you at every step" },
                  { title:"Legal Documentation", desc:"Full assistance with registry, transfer, and tenancy agreements" },
                ].map((pt) => (
                  <div className="point" key={pt.title}>
                    <div className="point-dot"></div>
                    <div className="point-text"><h4>{pt.title}</h4><p>{pt.desc}</p></div>
                  </div>
                ))}
              </div>
            </div>
            <div className="whyus-right">
              {[
                { num:"500+", lbl:"Properties successfully sold and rented" },
                { num:"10+", lbl:"Years of experience in Karachi real estate" },
                { num:"7", lbl:"Key areas covered across North Karachi" },
                { num:"1000+", lbl:"Satisfied families and investors served" },
              ].map((f) => (
                <div className="feature-box" key={f.num}>
                  <div className="feature-num">{f.num}</div>
                  <div className="feature-lbl">{f.lbl}</div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* GOOGLE REVIEWS */}
      <section className="reviews-section" id="reviews">
        <div className="container">
          <div className="section-header centered">
            <div className="section-eyebrow" style={{ justifyContent:"center" }}>
              <span></span><p>Client Feedback</p><span></span>
            </div>
            <h2>What Our Clients Say</h2>
            <div className="reviews-rating-summary">
              <div className="rating-big">4.9</div>
              <div className="rating-right">
                <div className="stars-row">
                  {[1,2,3,4,5].map(s => (
                    <svg key={s} width="20" height="20" viewBox="0 0 24 24" fill="#FFC107"><path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z"/></svg>
                  ))}
                </div>
                <div className="rating-count">Based on 80+ Google Reviews</div>
                <a href="https://www.google.com/maps/place/Aashiyana+Associates" target="_blank" rel="noreferrer" className="rating-link">
                  <svg width="14" height="14" viewBox="0 0 24 24" fill="#4285F4"><path d="M22.56 12.25c0-.78-.07-1.53-.2-2.25H12v4.26h5.92c-.26 1.37-1.04 2.53-2.21 3.31v2.77h3.57c2.08-1.92 3.28-4.74 3.28-8.09z"/><path d="M12 23c2.97 0 5.46-.98 7.28-2.66l-3.57-2.77c-.98.66-2.23 1.06-3.71 1.06-2.86 0-5.29-1.93-6.16-4.53H2.18v2.84C3.99 20.53 7.7 23 12 23z" fill="#34A853"/><path d="M5.84 14.09c-.22-.66-.35-1.36-.35-2.09s.13-1.43.35-2.09V7.07H2.18C1.43 8.55 1 10.22 1 12s.43 3.45 1.18 4.93l2.85-2.22.81-.62z" fill="#FBBC05"/><path d="M12 5.38c1.62 0 3.06.56 4.21 1.64l3.15-3.15C17.45 2.09 14.97 1 12 1 7.7 1 3.99 3.47 2.18 7.07l3.66 2.84c.87-2.6 3.3-4.53 6.16-4.53z" fill="#EA4335"/></svg>
                  View on Google Maps
                </a>
              </div>
            </div>
          </div>
          <div className="reviews-grid">
            {reviews.map((r, i) => (
              <div className="review-card" key={i}>
                <div className="review-top">
                  <div className="review-avatar">{r.avatar}</div>
                  <div className="review-meta">
                    <div className="review-name">{r.name}</div>
                    <div className="review-date">{r.date}</div>
                  </div>
                  <svg width="20" height="20" viewBox="0 0 24 24" style={{ marginLeft:"auto", flexShrink:0 }}>
                    <path d="M22.56 12.25c0-.78-.07-1.53-.2-2.25H12v4.26h5.92c-.26 1.37-1.04 2.53-2.21 3.31v2.77h3.57c2.08-1.92 3.28-4.74 3.28-8.09z" fill="#4285F4"/>
                    <path d="M12 23c2.97 0 5.46-.98 7.28-2.66l-3.57-2.77c-.98.66-2.23 1.06-3.71 1.06-2.86 0-5.29-1.93-6.16-4.53H2.18v2.84C3.99 20.53 7.7 23 12 23z" fill="#34A853"/>
                    <path d="M5.84 14.09c-.22-.66-.35-1.36-.35-2.09s.13-1.43.35-2.09V7.07H2.18C1.43 8.55 1 10.22 1 12s.43 3.45 1.18 4.93l2.85-2.22.81-.62z" fill="#FBBC05"/>
                    <path d="M12 5.38c1.62 0 3.06.56 4.21 1.64l3.15-3.15C17.45 2.09 14.97 1 12 1 7.7 1 3.99 3.47 2.18 7.07l3.66 2.84c.87-2.6 3.3-4.53 6.16-4.53z" fill="#EA4335"/>
                  </svg>
                </div>
                <div className="review-stars">
                  {[...Array(r.rating)].map((_, s) => (
                    <svg key={s} width="14" height="14" viewBox="0 0 24 24" fill="#FFC107"><path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z"/></svg>
                  ))}
                </div>
                <p className="review-text">&ldquo;{r.text}&rdquo;</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CONTACT */}
      <section className="contact-section" id="contact">
        <div className="container">
          <div className="contact-grid">
            <div className="contact-left">
              <div className="section-eyebrow">
                <span style={{ background:"#64B5F6" }}></span>
                <p style={{ color:"#64B5F6" }}>Get in Touch</p>
              </div>
              <h2>Let&apos;s Find Your Property</h2>
              <p>Whether you&apos;re renting, buying, selling or just exploring — reach out and our agents will respond within the hour.</p>
              <div className="contact-info">
                <div className="contact-item">
                  <div className="contact-icon">
                    <svg width="18" height="18" fill="none" viewBox="0 0 24 24" stroke="#64B5F6" strokeWidth="1.5"><path d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z"/><path d="M15 11a3 3 0 11-6 0 3 3 0 016 0z"/></svg>
                  </div>
                  <div className="contact-item-text"><strong>Head Office</strong>Karachi, Sindh, Pakistan</div>
                </div>
                <div className="contact-item">
                  <div className="contact-icon">
                    <svg width="18" height="18" fill="none" viewBox="0 0 24 24" stroke="#64B5F6" strokeWidth="1.5"><path d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z"/></svg>
                  </div>
                  <div className="contact-item-text"><strong>Phone &amp; WhatsApp</strong><a href="https://wa.me/923152400381">+92 315 2400381</a></div>
                </div>
                <div className="contact-item">
                  <div className="contact-icon">
                    <svg width="18" height="18" fill="none" viewBox="0 0 24 24" stroke="#64B5F6" strokeWidth="1.5"><path d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"/></svg>
                  </div>
                  <div className="contact-item-text"><strong>Email</strong><a href="mailto:syedkhurshid.sk@gmail.com">syedkhurshid.sk@gmail.com</a></div>
                </div>
                <div className="contact-item">
                  <div className="contact-icon">
                    <svg width="18" height="18" viewBox="0 0 24 24" fill="#64B5F6"><path d="M23.498 6.186a3.016 3.016 0 00-2.122-2.136C19.505 3.545 12 3.545 12 3.545s-7.505 0-9.377.505A3.017 3.017 0 00.502 6.186C0 8.07 0 12 0 12s0 3.93.502 5.814a3.016 3.016 0 002.122 2.136c1.871.505 9.376.505 9.376.505s7.505 0 9.377-.505a3.015 3.015 0 002.122-2.136C24 15.93 24 12 24 12s0-3.93-.502-5.814zM9.545 15.568V8.432L15.818 12l-6.273 3.568z"/></svg>
                  </div>
                  <div className="contact-item-text"><strong>YouTube</strong><a href="https://www.youtube.com/@AashiyanaRealEstate" target="_blank" rel="noreferrer">@AashiyanaRealEstate</a></div>
                </div>
                <div className="contact-item">
                  <div className="contact-icon">
                    <svg width="18" height="18" fill="none" viewBox="0 0 24 24" stroke="#64B5F6" strokeWidth="1.5"><path d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z"/><path d="M15 11a3 3 0 11-6 0 3 3 0 016 0z"/></svg>
                  </div>
                  <div className="contact-item-text"><strong>Zameen.com</strong><a href="https://www.zameen.com/agents/Karachi/Aashiyana_Associates_Real_Estate_Marketing-190557/" target="_blank" rel="noreferrer">View Our Listings on Zameen</a></div>
                </div>
              </div>
            </div>
            <form className="contact-form" onSubmit={(e) => e.preventDefault()}>
              <div className="contact-form-row">
                <input type="text" placeholder="Your Name" />
                <input type="tel" placeholder="Phone Number" />
              </div>
              <input type="email" placeholder="Email Address" />
              <select>
                <option value="">I&apos;m Looking To...</option>
                <option>Rent a Property</option>
                <option>Buy a Property</option>
                <option>Sell My Property</option>
                <option>Get Consultancy</option>
              </select>
              <select>
                <option value="">Preferred Area</option>
                <option>Surjani Town</option>
                <option>North Karachi</option>
                <option>New Karachi</option>
                <option>Bufferzone</option>
                <option>Shadman Town</option>
                <option>North Nazimabad</option>
                <option>Nazimabad</option>
                <option>Any Area</option>
              </select>
              <textarea placeholder="Additional details or questions..."></textarea>
              <button type="submit" className="form-submit">Send Enquiry →</button>
            </form>
          </div>
        </div>
      </section>

      {/* FOOTER */}
      <footer>
        <div className="footer-top">
          <div className="footer-brand">
            <div className="footer-logo-wrap">
              <Image src="/logo.png" alt="Aashiyana Real Estate" width={44} height={44} style={{ objectFit:"contain" }} />
              <div className="footer-logo-text">Aashiyana <em>Associates</em></div>
            </div>
            <p className="footer-tagline">Your trusted real estate partner across North Karachi and surrounding areas for over a decade.</p>
            <div className="footer-social">
              <a href="https://www.youtube.com/@AashiyanaRealEstate" target="_blank" rel="noreferrer" className="fs-yt" aria-label="YouTube">
                <svg width="16" height="16" viewBox="0 0 24 24" fill="#fff"><path d="M23.498 6.186a3.016 3.016 0 00-2.122-2.136C19.505 3.545 12 3.545 12 3.545s-7.505 0-9.377.505A3.017 3.017 0 00.502 6.186C0 8.07 0 12 0 12s0 3.93.502 5.814a3.016 3.016 0 002.122 2.136c1.871.505 9.376.505 9.376.505s7.505 0 9.377-.505a3.015 3.015 0 002.122-2.136C24 15.93 24 12 24 12s0-3.93-.502-5.814zM9.545 15.568V8.432L15.818 12l-6.273 3.568z"/></svg>
              </a>
              <a href="https://wa.me/923152400381" target="_blank" rel="noreferrer" className="fs-wa" aria-label="WhatsApp">
                <svg width="16" height="16" viewBox="0 0 24 24" fill="#fff"><path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z"/></svg>
              </a>
              <a href="https://www.zameen.com/agents/Karachi/Aashiyana_Associates_Real_Estate_Marketing-190557/" target="_blank" rel="noreferrer" className="fs-zm" aria-label="Zameen.com">
                <svg width="16" height="16" viewBox="0 0 24 24" fill="#333"><path d="M12 2C8.13 2 5 5.13 5 9c0 5.25 7 13 7 13s7-7.75 7-13c0-3.87-3.13-7-7-7zm0 9.5c-1.38 0-2.5-1.12-2.5-2.5s1.12-2.5 2.5-2.5 2.5 1.12 2.5 2.5-1.12 2.5-2.5 2.5z"/></svg>
              </a>
              <a href="mailto:syedkhurshid.sk@gmail.com" className="fs-em" aria-label="Email">
                <svg width="16" height="16" viewBox="0 0 24 24" fill="#fff"><path d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" stroke="#fff" strokeWidth="2" fill="none"/></svg>
              </a>
            </div>
          </div>
          <div className="footer-col">
            <h4>Services</h4>
            <ul>
              <li><a href="#services">Property for Rent</a></li>
              <li><a href="#services">Buy / Sell</a></li>
              <li><a href="#services">Consultancy</a></li>
              <li><a href="#services">Management</a></li>
            </ul>
          </div>
          <div className="footer-col">
            <h4>Areas</h4>
            <ul>
              <li><a href="#areas">Surjani Town</a></li>
              <li><a href="#areas">North Karachi</a></li>
              <li><a href="#areas">New Karachi</a></li>
              <li><a href="#areas">Bufferzone</a></li>
              <li><a href="#areas">North Nazimabad</a></li>
              <li><a href="#areas">Nazimabad</a></li>
            </ul>
          </div>
          <div className="footer-col">
            <h4>Connect</h4>
            <ul>
              <li><a href="https://www.youtube.com/@AashiyanaRealEstate" target="_blank" rel="noreferrer">YouTube Channel</a></li>
              <li><a href="https://www.zameen.com/agents/Karachi/Aashiyana_Associates_Real_Estate_Marketing-190557/" target="_blank" rel="noreferrer">Zameen.com Profile</a></li>
              <li><a href="https://wa.me/923152400381" target="_blank" rel="noreferrer">WhatsApp</a></li>
              <li><a href="mailto:syedkhurshid.sk@gmail.com">Email Us</a></li>
            </ul>
          </div>
        </div>
        <div className="footer-bottom">
          <p>© 2025 Aashiyana Associates &amp; Real Estate Marketing. All rights reserved.</p>
          <p>Karachi, Pakistan</p>
        </div>
      </footer>

      {/* WhatsApp Float */}
      <a href="https://wa.me/923152400381" className="wa-float" target="_blank" rel="noreferrer" aria-label="Chat on WhatsApp">
        <svg width="26" height="26" viewBox="0 0 24 24" fill="#fff"><path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z"/></svg>
      </a>
    </>
  );
}