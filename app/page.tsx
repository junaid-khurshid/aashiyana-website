"use client";
import { useEffect } from "react";
import Image from "next/image";

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
            <Image src="/logo.png" alt="Aashiyana Associates logo" width={44} height={44} style={{ objectFit:"contain", marginRight:"10px" }} />
            Aashiyana <em>Associates</em>
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
            <h1>
              Your Dream Home
              <br />
              <em>Awaits in Karachi</em>
            </h1>
            <p className="hero-desc">
              Aashiyana Associates brings you verified properties across North
              Karachi, Surjani, Nazimabad and surrounding areas — with honest
              advice and lasting relationships.
            </p>
            <div className="hero-btns">
              <a href="#listings" className="btn-primary">View Properties</a>
              <a href="#contact" className="btn-ghost">Free Consultation</a>
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
          <div className="stat-item">
            <div className="stat-num">500+</div>
            <div className="stat-lbl">Properties Sold</div>
          </div>
          <div className="stat-item">
            <div className="stat-num">10+</div>
            <div className="stat-lbl">Years Experience</div>
          </div>
          <div className="stat-item">
            <div className="stat-num">7</div>
            <div className="stat-lbl">Areas Covered</div>
          </div>
          <div className="stat-item">
            <div className="stat-num">1,000+</div>
            <div className="stat-lbl">Happy Clients</div>
          </div>
        </div>
      </div>

      {/* SERVICES */}
      <section className="services-section" id="services">
        <div className="container">
          <div className="section-header centered">
            <div className="section-eyebrow" style={{ justifyContent: "center" }}>
              <span></span>
              <p>What We Offer</p>
              <span></span>
            </div>
            <h2>Our Services</h2>
            <p>Everything you need — from finding the right property to closing the deal</p>
          </div>
          <div className="services-grid">
            <div className="service-card">
              <div className="service-icon-wrap">
                <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="#C9A84C" strokeWidth="1.5">
                  <path d="M3 12L12 3l9 9v9H3v-9z" />
                  <rect x="9" y="15" width="6" height="6" />
                </svg>
              </div>
              <div className="service-title">Property for Rent</div>
              <div className="service-desc">
                Find the right house, apartment or shop on monthly or annual rental across all covered areas in North Karachi.
              </div>
              <a href="#listings" className="service-link">View Rentals →</a>
            </div>
            <div className="service-card">
              <div className="service-icon-wrap">
                <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="#C9A84C" strokeWidth="1.5">
                  <circle cx="12" cy="12" r="9" />
                  <path d="M8 12h8M12 8v8" strokeLinecap="round" />
                </svg>
              </div>
              <div className="service-title">Buy / Sell Property</div>
              <div className="service-desc">
                Verified residential and commercial listings. We handle documentation, negotiation and secure transfer.
              </div>
              <a href="#listings" className="service-link">Browse Listings →</a>
            </div>
            <div className="service-card">
              <div className="service-icon-wrap">
                <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="#C9A84C" strokeWidth="1.5">
                  <path d="M17 8h2a2 2 0 012 2v9a2 2 0 01-2 2H5a2 2 0 01-2-2v-9a2 2 0 012-2h2" />
                  <rect x="8" y="4" width="8" height="6" rx="1" />
                </svg>
              </div>
              <div className="service-title">Real Estate Consultancy</div>
              <div className="service-desc">
                Expert advice on investment opportunities, property valuation, market trends and legal documentation.
              </div>
              <a href="#contact" className="service-link">Book a Session →</a>
            </div>
            <div className="service-card">
              <div className="service-icon-wrap">
                <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="#C9A84C" strokeWidth="1.5">
                  <path d="M9 5H7a2 2 0 00-2 2v12a2 2 0 002 2h10a2 2 0 002-2V7a2 2 0 00-2-2h-2" />
                  <rect x="9" y="3" width="6" height="4" rx="1" />
                  <path d="M9 12h6M9 16h4" strokeLinecap="round" />
                </svg>
              </div>
              <div className="service-title">Property Management</div>
              <div className="service-desc">
                Complete management solutions for landlords — tenant screening, rent collection, maintenance coordination.
              </div>
              <a href="#contact" className="service-link">Learn More →</a>
            </div>
          </div>
        </div>
      </section>

      {/* AREAS */}
      <section className="areas-section" id="areas">
        <div className="container">
          <div className="section-header">
            <div className="section-eyebrow">
              <span></span>
              <p>Coverage</p>
            </div>
            <h2>Areas We Serve</h2>
            <p>Specialist knowledge across 7 key localities in North &amp; Central Karachi</p>
          </div>
          <div className="areas-grid">
            {[
              { n: "01", name: "Surjani Town", sub: "Sector 7, 7A, 7B, 10, 11", type: "Houses · Plots · Shops" },
              { n: "02", name: "North Karachi", sub: "Sectors 11-B, 14-B, 15, 16", type: "Houses · Apartments · Plots" },
              { n: "03", name: "New Karachi", sub: "Sector 5, 5-J, 5-L, 5-Q", type: "Houses · Plots · Commercial" },
              { n: "04", name: "Bufferzone", sub: "Sector 15, 15-A, 16, 16-A", type: "Houses · Apartments" },
              { n: "05", name: "Shadman Town", sub: "Shadman Colony, Phase 1 & 2", type: "Houses · Plots · Shops" },
              { n: "06", name: "North Nazimabad", sub: "Blocks A through T", type: "Houses · Apartments · Flats" },
              { n: "07", name: "Nazimabad", sub: "Block 1, 2, 3, 4, 5", type: "Houses · Plots · Commercial" },
            ].map((area) => (
              <div className="area-card" key={area.n}>
                <div className="area-number">{area.n}</div>
                <div className="area-name">{area.name}</div>
                <div className="area-sub">{area.sub}</div>
                <div className="area-count">{area.type}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* LISTINGS */}
      <section className="listings-section" id="listings">
        <div className="container">
          <div className="section-header" style={{ display: "flex", justifyContent: "space-between", alignItems: "flex-end", flexWrap: "wrap", gap: "20px" }}>
            <div>
              <div className="section-eyebrow">
                <span></span>
                <p>Properties</p>
              </div>
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
              { price: "35,000", unit: "/ month", title: "3 Bedroom House with Car Porch", area: "North Karachi · Sector 11-B", specs: ["3 Beds", "2 Baths", "120 Sq Yd"], type: "rent", img: "/interior-1.jpg" },
              { price: "1.2 Crore", unit: "", title: "Corner 240 Sq Yd Plot", area: "Surjani Town · Sector 7-A", specs: ["240 Sq Yd", "Corner", "Residential"], type: "sale", img: "/house-1.jpg" },
              { price: "22,000", unit: "/ month", title: "2 Bed Apartment – 1st Floor", area: "North Nazimabad · Block H", specs: ["2 Beds", "2 Baths", "900 Sqft"], type: "rent", img: "/interior-1.jpg" },
              { price: "85 Lakh", unit: "", title: "4 Bedroom Bungalow – Ready to Move", area: "New Karachi · Sector 5-L", specs: ["4 Beds", "3 Baths", "120 Sq Yd"], type: "sale", img: "/house-1.jpg" },
              { price: "18,000", unit: "/ month", title: "Commercial Shop – Ground Floor", area: "Bufferzone · Sector 15", specs: ["200 Sqft", "Main Road", "Commercial"], type: "rent", img: "/house-1.jpg" },
              { price: "1.6 Crore", unit: "", title: "Double Storey House – Renovated", area: "Nazimabad · Block 3", specs: ["5 Beds", "4 Baths", "200 Sq Yd"], type: "sale", img: "/interior-1.jpg" },
            ].map((listing, i) => (
              <div className="listing-card" key={i}>
                <div className="listing-img">
                  <Image src={listing.img} alt={listing.title} width={400} height={200} style={{ width:"100%", height:"200px", objectFit:"cover", display:"block" }} />
                  <div className="listing-badge-wrap">
                    <span className={`badge ${listing.type === "rent" ? "badge-rent" : "badge-sale"}`}>
                      {listing.type === "rent" ? "For Rent" : "For Sale"}
                    </span>
                  </div>
                </div>
                <div className="listing-body">
                  <div className="listing-price">
                    {listing.price} {listing.unit && <small>{listing.unit}</small>}
                  </div>
                  <div className="listing-title">{listing.title}</div>
                  <span className="listing-area-tag">{listing.area}</span>
                  <div className="listing-specs">
                    {listing.specs.map((s) => <span className="spec" key={s}>{s}</span>)}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* WHY US */}
      <section className="whyus-section" id="about">
        <div className="container">
          <div className="whyus-grid">
            <div className="whyus-left">
              <div className="section-eyebrow">
                <span></span>
                <p>Why Choose Us</p>
              </div>
              <h2>Karachi Real Estate,<br />Done Right</h2>
              <p>
                At Aashiyana Associates, we combine deep local knowledge with transparent service. Our team has been
                operating in North Karachi&apos;s property market for over a decade — and our clients keep coming back.
              </p>
              <div className="whyus-points">
                {[
                  { title: "Verified Listings Only", desc: "Every property is inspected and documents verified before listing" },
                  { title: "No Hidden Charges", desc: "Transparent commission structure with no surprise fees" },
                  { title: "End-to-End Support", desc: "From search to possession — we're with you at every step" },
                  { title: "Legal Documentation", desc: "Full assistance with registry, transfer, and tenancy agreements" },
                ].map((pt) => (
                  <div className="point" key={pt.title}>
                    <div className="point-dot"></div>
                    <div className="point-text">
                      <h4>{pt.title}</h4>
                      <p>{pt.desc}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
            <div className="whyus-right">
              {[
                { num: "500+", lbl: "Properties successfully sold and rented" },
                { num: "10+", lbl: "Years of experience in Karachi real estate" },
                { num: "7", lbl: "Key areas covered across North Karachi" },
                { num: "1000+", lbl: "Satisfied families and investors served" },
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

      {/* CONTACT */}
      <section className="contact-section" id="contact">
        <div className="container">
          <div className="contact-grid">
            <div className="contact-left">
              <div className="section-eyebrow">
                <span></span>
                <p>Get in Touch</p>
              </div>
              <h2>Let&apos;s Find Your Property</h2>
              <p>Whether you&apos;re renting, buying, selling or just exploring — reach out and our agents will respond within the hour.</p>
              <div className="contact-info">
                <div className="contact-item">
                  <div className="contact-icon">
                    <svg width="18" height="18" fill="none" viewBox="0 0 24 24" stroke="#C9A84C" strokeWidth="1.5">
                      <path d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                      <path d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                    </svg>
                  </div>
                  <div className="contact-item-text">
                    <strong>Head Office</strong>
                    Karachi, Sindh, Pakistan
                  </div>
                </div>
                <div className="contact-item">
                  <div className="contact-icon">
                    <svg width="18" height="18" fill="none" viewBox="0 0 24 24" stroke="#C9A84C" strokeWidth="1.5">
                      <path d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                    </svg>
                  </div>
                  <div className="contact-item-text">
                    <strong>Phone &amp; WhatsApp</strong>
                    +92 315 2400381
                  </div>
                </div>
                <div className="contact-item">
                  <div className="contact-icon">
                    <svg width="18" height="18" fill="none" viewBox="0 0 24 24" stroke="#C9A84C" strokeWidth="1.5">
                      <path d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                    </svg>
                  </div>
                  <div className="contact-item-text">
                    <strong>Email</strong>
                    info@aashiyanaassociates.com
                  </div>
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
            <span className="footer-logo">
            <Image src="/logo.png" alt="Aashiyana Associates" width={36} height={36} style={{ objectFit:"contain", marginRight:"8px", verticalAlign:"middle" }} />
            Aashiyana <em>Associates</em>
          </span>
            <p className="footer-tagline">Your trusted real estate partner across North Karachi and surrounding areas since over a decade.</p>
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
            <h4>Company</h4>
            <ul>
              <li><a href="#about">About Us</a></li>
              <li><a href="#listings">Listings</a></li>
              <li><a href="#contact">Contact</a></li>
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
        <svg width="26" height="26" viewBox="0 0 24 24" fill="#fff">
          <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z" />
        </svg>
      </a>
    </>
  );
}