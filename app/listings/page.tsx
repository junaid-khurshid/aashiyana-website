"use client";
import { useState } from "react";
import Image from "next/image";
import Link from "next/link";

// ─── DATA ───────────────────────────────────────────────────────────────────
const areas = [
  "All Areas",
  "Surjani Town",
  "North Karachi",
  "New Karachi",
  "Bufferzone",
  "Shadman Town",
  "North Nazimabad",
  "Nazimabad",
];

type Listing = {
  id: number;
  title: string;
  area: string;
  type: "rent" | "sale";
  propType: string;
  price: string;
  unit?: string;
  beds?: number;
  baths?: number;
  size: string;
  img: string;
  desc: string;
  features: string[];
};

const listings: Listing[] = [
  // SURJANI TOWN
  { id:1,  title:"3 Bed House – Corner Plot", area:"Surjani Town",     type:"sale", propType:"House",     price:"1.2 Crore",  beds:3, baths:2, size:"120 Sq Yd", img:"/house-1.jpg",    desc:"Well-maintained corner plot house in Surjani Town Sector 7A. Ground + 1 floor. Covered parking.",           features:["Corner Plot","Covered Parking","Ground + 1 Floor","Main Road Access"] },
  { id:2,  title:"2 Bed House for Rent",      area:"Surjani Town",     type:"rent", propType:"House",     price:"20,000", unit:"/mo", beds:2, baths:2, size:"80 Sq Yd",  img:"/interior-1.jpg", desc:"Neat and clean 2-bedroom house available for rent in Surjani Sector 7B. Ideal for small families.",          features:["2 Bedrooms","Attached Baths","Ground Floor","Peaceful Area"] },
  { id:3,  title:"120 Sq Yd Plot",            area:"Surjani Town",     type:"sale", propType:"Plot",      price:"75 Lakh",    size:"120 Sq Yd", img:"/house-1.jpg",    desc:"Residential plot in Surjani Town Sector 10 ready for construction. All utilities available.",                 features:["Residential Zone","All Utilities","Wide Street","Negotiable"] },
  { id:4,  title:"Ground Floor Shop",         area:"Surjani Town",     type:"rent", propType:"Shop",      price:"12,000", unit:"/mo", size:"150 Sqft",  img:"/house-1.jpg",    desc:"Commercial shop on main Surjani road. Heavy footfall area, ideal for any business.",                           features:["Main Road","High Footfall","Security","Immediate Handover"] },

  // NORTH KARACHI
  { id:5,  title:"4 Bed Double Storey",       area:"North Karachi",    type:"sale", propType:"House",     price:"1.8 Crore",  beds:4, baths:3, size:"200 Sq Yd", img:"/house-1.jpg",    desc:"Fully renovated double storey house in North Karachi Sector 11-B. Modern kitchen, marble floors.",           features:["Double Storey","Marble Flooring","Modern Kitchen","Generator Connection"] },
  { id:6,  title:"3 Bed House – Sector 15",   area:"North Karachi",    type:"rent", propType:"House",     price:"35,000", unit:"/mo", beds:3, baths:2, size:"120 Sq Yd", img:"/interior-1.jpg", desc:"Spacious 3-bedroom house available for rent in North Karachi Sector 15. Car porch included.",               features:["Car Porch","3 Bedrooms","Roof Access","Maintained Garden"] },
  { id:7,  title:"2 Bed Flat – 2nd Floor",    area:"North Karachi",    type:"rent", propType:"Flat",      price:"22,000", unit:"/mo", beds:2, baths:2, size:"900 Sqft",  img:"/interior-1.jpg", desc:"Modern 2-bedroom flat in a well-maintained building. Lift available, 24hr security.",                        features:["Lift","24hr Security","2 Bedrooms","Balcony"] },
  { id:8,  title:"Commercial Plot 240 Sq Yd", area:"North Karachi",    type:"sale", propType:"Plot",      price:"2.1 Crore",  size:"240 Sq Yd", img:"/house-1.jpg",    desc:"Prime commercial plot in North Karachi Sector 14-B. Corner location, ideal for plaza or office.",              features:["Corner","Commercial Zone","Wide Road","Prime Location"] },

  // NEW KARACHI
  { id:9,  title:"3 Bed Bungalow",            area:"New Karachi",      type:"sale", propType:"House",     price:"85 Lakh",    beds:3, baths:2, size:"120 Sq Yd", img:"/house-1.jpg",    desc:"Ready-to-move 3-bedroom bungalow in New Karachi Sector 5-L. Newly constructed with quality finishing.",     features:["Ready to Move","Quality Finishing","Street Parking","Quiet Street"] },
  { id:10, title:"1 Bed Flat for Rent",        area:"New Karachi",      type:"rent", propType:"Flat",      price:"13,000", unit:"/mo", beds:1, baths:1, size:"600 Sqft",  img:"/interior-1.jpg", desc:"Affordable 1-bedroom flat in New Karachi Sector 5-Q. Ground floor, easy access.",                          features:["Ground Floor","Affordable","Easy Access","Gas Available"] },
  { id:11, title:"Office Space",               area:"New Karachi",      type:"rent", propType:"Office",    price:"18,000", unit:"/mo", size:"400 Sqft",  img:"/interior-1.jpg", desc:"Ready office space in New Karachi commercial area. Separate entrance, AC unit included.",                    features:["Separate Entrance","AC Included","Reception Area","Fibre Ready"] },

  // BUFFERZONE
  { id:12, title:"4 Bed House – Sector 16A",  area:"Bufferzone",       type:"sale", propType:"House",     price:"1.4 Crore",  beds:4, baths:3, size:"160 Sq Yd", img:"/house-1.jpg",    desc:"Well-constructed 4-bedroom house in Bufferzone Sector 16A. Two floors, servant quarter included.",          features:["Servant Quarter","Two Floors","Solar Ready","Wide Street"] },
  { id:13, title:"2 Bed Flat for Rent",        area:"Bufferzone",       type:"rent", propType:"Flat",      price:"18,000", unit:"/mo", beds:2, baths:1, size:"750 Sqft",  img:"/interior-1.jpg", desc:"Clean 2-bedroom flat available immediately in Bufferzone Sector 15. Family building, no bachelors.",       features:["Family Building","Immediate Handover","Ground Floor","Near Market"] },
  { id:14, title:"Ground Floor Shop",          area:"Bufferzone",       type:"rent", propType:"Shop",      price:"15,000", unit:"/mo", size:"200 Sqft",  img:"/house-1.jpg",    desc:"Commercial shop in Bufferzone main commercial street. Good for pharmacy, grocery or any retail.",            features:["Commercial Street","Heavy Traffic","Security Shutter","Water Connection"] },

  // SHADMAN TOWN
  { id:15, title:"5 Bed Bungalow",            area:"Shadman Town",     type:"sale", propType:"House",     price:"2.2 Crore",  beds:5, baths:4, size:"240 Sq Yd", img:"/house-1.jpg",    desc:"Luxury 5-bedroom bungalow in Shadman Colony. Prime location, modern architecture, landscaped garden.",     features:["Luxury Finishing","Garden","5 Bedrooms","Generator"] },
  { id:16, title:"3 Bed House for Rent",       area:"Shadman Town",     type:"rent", propType:"House",     price:"30,000", unit:"/mo", beds:3, baths:2, size:"120 Sq Yd", img:"/interior-1.jpg", desc:"Beautiful 3-bedroom house in Shadman Town Phase 1. Fully maintained, ideal for families.",                 features:["Fully Maintained","Car Porch","Roof Terrace","Near School"] },

  // NORTH NAZIMABAD
  { id:17, title:"3 Bed Apartment – Block H", area:"North Nazimabad",  type:"rent", propType:"Flat",      price:"28,000", unit:"/mo", beds:3, baths:2, size:"1100 Sqft", img:"/interior-1.jpg", desc:"Spacious 3-bedroom apartment in North Nazimabad Block H. High floor, great views, lift building.",         features:["High Floor","Lift","3 Bedrooms","Great Views"] },
  { id:18, title:"120 Sq Yd House – Block F", area:"North Nazimabad",  type:"sale", propType:"House",     price:"95 Lakh",    beds:3, baths:2, size:"120 Sq Yd", img:"/house-1.jpg",    desc:"Ground + 1 house in North Nazimabad Block F. Ideal location near main road.",                               features:["Main Road Nearby","Ground+1","3 Bedrooms","Good Condition"] },
  { id:19, title:"2 Bed Flat for Rent",        area:"North Nazimabad",  type:"rent", propType:"Flat",      price:"20,000", unit:"/mo", beds:2, baths:2, size:"900 Sqft",  img:"/interior-1.jpg", desc:"Well-maintained 2-bed flat in Block T. Peaceful residential area with easy transport access.",             features:["Peaceful Area","Easy Transport","Maintained Building","Near Park"] },

  // NAZIMABAD
  { id:20, title:"Double Storey House",        area:"Nazimabad",        type:"sale", propType:"House",     price:"1.6 Crore",  beds:5, baths:4, size:"200 Sq Yd", img:"/house-1.jpg",    desc:"Fully renovated double storey house in Nazimabad Block 3. Modern tile flooring, new woodwork throughout.", features:["Renovated","Double Storey","New Woodwork","Tile Flooring"] },
  { id:21, title:"1 Bed Flat – Block 2",       area:"Nazimabad",        type:"rent", propType:"Flat",      price:"12,000", unit:"/mo", beds:1, baths:1, size:"550 Sqft",  img:"/interior-1.jpg", desc:"Affordable 1-bedroom flat in Nazimabad Block 2. Close to all amenities.",                                  features:["Affordable","Close to Amenities","Clean Building","Ground Floor"] },
  { id:22, title:"Commercial Plot – Block 5",  area:"Nazimabad",        type:"sale", propType:"Plot",      price:"1.1 Crore",  size:"120 Sq Yd", img:"/house-1.jpg",    desc:"Corner commercial plot in Nazimabad Block 5. Ideal for plaza, restaurant or showroom.",                       features:["Corner Plot","Commercial Zone","Ready to Build","Prime Location"] },
];

// ─── INQUIRY MODAL ───────────────────────────────────────────────────────────
function InquiryModal({ listing, onClose }: { listing: Listing; onClose: () => void }) {
  const [status, setStatus] = useState<"idle" | "sending" | "sent" | "error">("idle");

  async function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    setStatus("sending");
    const form = e.currentTarget;
    const data = new FormData(form);
    // Replace mrerojdw with your Formspree form ID
    const res = await fetch("https://formspree.io/f/mrerojdw", {
      method: "POST",
      body: data,
      headers: { Accept: "application/json" },
    });
    if (res.ok) { setStatus("sent"); }
    else { setStatus("error"); }
  }

  return (
    <div className="modal-overlay" onClick={onClose}>
      <div className="modal-box" onClick={(e) => e.stopPropagation()}>
        <button className="modal-close" onClick={onClose}>✕</button>
        <div className="modal-header">
          <div className="modal-tag">{listing.type === "rent" ? "For Rent" : "For Sale"}</div>
          <h3 className="modal-title">{listing.title}</h3>
          <div className="modal-area">{listing.area}</div>
          <div className="modal-price">{listing.price}{listing.unit && <small> {listing.unit}</small>}</div>
        </div>

        {status === "sent" ? (
          <div className="modal-success">
            <svg width="48" height="48" viewBox="0 0 24 24" fill="none" stroke="#25D366" strokeWidth="2"><circle cx="12" cy="12" r="10"/><path d="M9 12l2 2 4-4" strokeLinecap="round" strokeLinejoin="round"/></svg>
            <h4>Inquiry Sent!</h4>
            <p>We&apos;ll contact you within 1 hour on WhatsApp or phone.</p>
            <button className="modal-btn-wa" onClick={() => window.open(`https://wa.me/923152400381?text=Hi, I am interested in: ${listing.title} – ${listing.area}`, "_blank")}>
              <svg width="16" height="16" viewBox="0 0 24 24" fill="currentColor"><path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z"/></svg>
              Also Message on WhatsApp
            </button>
          </div>
        ) : (
          <form className="modal-form" onSubmit={handleSubmit}>
            {/* Hidden fields for context */}
            <input type="hidden" name="property" value={`${listing.title} – ${listing.area}`} />
            <input type="hidden" name="listing_type" value={listing.type === "rent" ? "For Rent" : "For Sale"} />
            <input type="hidden" name="price" value={`${listing.price}${listing.unit || ""}`} />

            <div className="modal-form-row">
              <div className="modal-field">
                <label>Your Name *</label>
                <input name="name" type="text" placeholder="Muhammad Ali" required />
              </div>
              <div className="modal-field">
                <label>Phone / WhatsApp *</label>
                <input name="phone" type="tel" placeholder="03XX XXXXXXX" required />
              </div>
            </div>
            <div className="modal-field">
              <label>Email (optional)</label>
              <input name="email" type="email" placeholder="your@email.com" />
            </div>
            <div className="modal-field">
              <label>Message</label>
              <textarea name="message" rows={3} placeholder={`I am interested in ${listing.title}. Please contact me.`}></textarea>
            </div>

            <div className="modal-actions">
              <button type="submit" className="modal-submit" disabled={status === "sending"}>
                {status === "sending" ? "Sending…" : "Send Inquiry →"}
              </button>
              <a
                href={`https://wa.me/923152400381?text=Hi, I am interested in: ${listing.title} – ${listing.area} (${listing.price}${listing.unit || ""}). Please share more details.`}
                target="_blank" rel="noreferrer"
                className="modal-wa"
              >
                <svg width="16" height="16" viewBox="0 0 24 24" fill="currentColor"><path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z"/></svg>
                WhatsApp Instead
              </a>
            </div>
            {status === "error" && <p className="modal-error">Something went wrong. Please WhatsApp us directly.</p>}
          </form>
        )}
      </div>
    </div>
  );
}

// ─── LISTING CARD ────────────────────────────────────────────────────────────
function ListingCard({ listing, onInquire }: { listing: Listing; onInquire: (l: Listing) => void }) {
  return (
    <div className="lp-card">
      <div className="lp-card-img">
        <Image src={listing.img} alt={listing.title} width={400} height={220} style={{ width:"100%", height:"220px", objectFit:"cover", display:"block" }} />
        <div className="lp-badges">
          <span className={`lp-badge ${listing.type === "rent" ? "lp-badge-rent" : "lp-badge-sale"}`}>
            {listing.type === "rent" ? "For Rent" : "For Sale"}
          </span>
          <span className="lp-badge lp-badge-type">{listing.propType}</span>
        </div>
      </div>
      <div className="lp-card-body">
        <div className="lp-price">{listing.price}{listing.unit && <small> {listing.unit}</small>}</div>
        <h3 className="lp-title">{listing.title}</h3>
        <div className="lp-area-tag">
          <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z"/><path d="M15 11a3 3 0 11-6 0 3 3 0 016 0z"/></svg>
          {listing.area}
        </div>
        <div className="lp-specs">
          {listing.beds && <span>🛏 {listing.beds} Beds</span>}
          {listing.baths && <span>🚿 {listing.baths} Baths</span>}
          <span>📐 {listing.size}</span>
        </div>
        <p className="lp-desc">{listing.desc}</p>
        <div className="lp-features">
          {listing.features.slice(0, 3).map(f => <span key={f} className="lp-feature">{f}</span>)}
        </div>
        <div className="lp-actions">
          <button className="lp-btn-inquiry" onClick={() => onInquire(listing)}>Send Inquiry</button>
          <a
            href={`https://wa.me/923152400381?text=Hi, I am interested in: ${listing.title} – ${listing.area} (${listing.price}${listing.unit || ""})`}
            target="_blank" rel="noreferrer"
            className="lp-btn-wa"
          >
            <svg width="15" height="15" viewBox="0 0 24 24" fill="currentColor"><path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z"/></svg>
            WhatsApp
          </a>
        </div>
      </div>
    </div>
  );
}

// ─── MAIN PAGE ───────────────────────────────────────────────────────────────
export default function ListingsPage() {
  const [activeArea, setActiveArea]   = useState("All Areas");
  const [activeType, setActiveType]   = useState<"all" | "rent" | "sale">("all");
  const [activeProp, setActiveProp]   = useState("All Types");
  const [inquiryListing, setInquiryListing] = useState<Listing | null>(null);

  const propTypes = ["All Types", "House", "Flat", "Plot", "Shop", "Office"];

  const filtered = listings.filter(l => {
    const areaOk = activeArea === "All Areas" || l.area === activeArea;
    const typeOk = activeType === "all" || l.type === activeType;
    const propOk = activeProp === "All Types" || l.propType === activeProp;
    return areaOk && typeOk && propOk;
  });

  // Group by area for the area-based view
  const groupedByArea = areas.slice(1).map(area => ({
    area,
    rent: filtered.filter(l => l.area === area && l.type === "rent"),
    sale: filtered.filter(l => l.area === area && l.type === "sale"),
  })).filter(g => g.rent.length > 0 || g.sale.length > 0);

  return (
    <>
      {/* NAV */}
      <header className="lp-header">
        <nav className="lp-nav">
          <Link href="/" className="lp-nav-logo">
            <Image src="/logo.png" alt="Aashiyana Real Estate" width={40} height={40} style={{ objectFit:"contain" }} />
            <div>
              <span className="lp-nav-name">Aashiyana <em>Associates</em></span>
              <small>Real Estate Marketing</small>
            </div>
          </Link>
          <ul className="lp-nav-links">
            <li><Link href="/">Home</Link></li>
            <li><Link href="/#services">Services</Link></li>
            <li><Link href="/listings" className="active">Listings</Link></li>
            <li><Link href="/#contact">Contact</Link></li>
          </ul>
          <a href="https://wa.me/923152400381" target="_blank" rel="noreferrer" className="lp-nav-cta">
            <svg width="14" height="14" viewBox="0 0 24 24" fill="currentColor"><path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z"/></svg>
            WhatsApp Us
          </a>
        </nav>
      </header>

      {/* HERO BANNER */}
      <div className="lp-hero">
        <div className="lp-hero-bg"></div>
        <div className="lp-hero-content">
          <div className="lp-hero-eyebrow">
            <span></span><p>North Karachi · Surjani · Nazimabad</p>
          </div>
          <h1>Property <em>Listings</em></h1>
          <p>{listings.length} verified properties across 7 areas — rent, buy or sell with confidence</p>
        </div>
      </div>

      {/* FILTERS */}
      <div className="lp-filters-bar">
        <div className="lp-filters-inner">

          {/* Type filter */}
          <div className="lp-filter-group">
            <label>Purpose</label>
            <div className="lp-pills">
              {(["all","rent","sale"] as const).map(t => (
                <button key={t} className={`lp-pill ${activeType === t ? "active" : ""}`} onClick={() => setActiveType(t)}>
                  {t === "all" ? "All" : t === "rent" ? "For Rent" : "For Sale"}
                </button>
              ))}
            </div>
          </div>

          {/* Area filter */}
          <div className="lp-filter-group">
            <label>Area</label>
            <select value={activeArea} onChange={e => setActiveArea(e.target.value)} className="lp-select">
              {areas.map(a => <option key={a}>{a}</option>)}
            </select>
          </div>

          {/* Property type */}
          <div className="lp-filter-group">
            <label>Property Type</label>
            <select value={activeProp} onChange={e => setActiveProp(e.target.value)} className="lp-select">
              {propTypes.map(p => <option key={p}>{p}</option>)}
            </select>
          </div>

          <div className="lp-filter-count">
            <span>{filtered.length}</span> properties found
          </div>
        </div>
      </div>

      {/* LISTINGS – grouped by area */}
      <main className="lp-main">
        {groupedByArea.length === 0 ? (
          <div className="lp-empty">
            <svg width="48" height="48" fill="none" viewBox="0 0 24 24" stroke="#90A4AE" strokeWidth="1.5"><path d="M3 12L12 3l9 9v9H3v-9z"/></svg>
            <h3>No properties found</h3>
            <p>Try changing your filters or <a href="https://wa.me/923152400381">WhatsApp us</a> for unlisted properties.</p>
          </div>
        ) : (
          groupedByArea.map(({ area, rent, sale }) => (
            <div key={area} className="lp-area-section">
              <div className="lp-area-header">
                <div className="lp-area-title">
                  <span className="lp-area-dot"></span>
                  <h2>{area}</h2>
                </div>
                <div className="lp-area-counts">
                  {rent.length > 0 && <span className="lp-count-chip rent">{rent.length} for Rent</span>}
                  {sale.length > 0 && <span className="lp-count-chip sale">{sale.length} for Sale</span>}
                </div>
              </div>

              {/* Rent subsection */}
              {rent.length > 0 && (activeType === "all" || activeType === "rent") && (
                <div className="lp-subsection">
                  <div className="lp-subsection-label rent">
                    <svg width="12" height="12" viewBox="0 0 24 24" fill="currentColor"><path d="M3 12L12 3l9 9v9H3v-9z"/></svg>
                    For Rent
                  </div>
                  <div className="lp-grid">
                    {rent.map(l => <ListingCard key={l.id} listing={l} onInquire={setInquiryListing} />)}
                  </div>
                </div>
              )}

              {/* Sale subsection */}
              {sale.length > 0 && (activeType === "all" || activeType === "sale") && (
                <div className="lp-subsection">
                  <div className="lp-subsection-label sale">
                    <svg width="12" height="12" viewBox="0 0 24 24" fill="currentColor"><circle cx="12" cy="12" r="9"/><path d="M8 12h8" stroke="#fff" strokeWidth="2" strokeLinecap="round"/><path d="M12 8v8" stroke="#fff" strokeWidth="2" strokeLinecap="round"/></svg>
                    For Sale
                  </div>
                  <div className="lp-grid">
                    {sale.map(l => <ListingCard key={l.id} listing={l} onInquire={setInquiryListing} />)}
                  </div>
                </div>
              )}
            </div>
          ))
        )}
      </main>

      {/* INQUIRY MODAL */}
      {inquiryListing && (
        <InquiryModal listing={inquiryListing} onClose={() => setInquiryListing(null)} />
      )}

      {/* FLOATING WA */}
      <div className="wa-float-group">
        <a href="https://wa.me/923152400381" className="wa-float-btn" target="_blank" rel="noreferrer">
          <svg width="22" height="22" viewBox="0 0 24 24" fill="#fff"><path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z"/></svg>
          <span>0315-2400381</span>
        </a>
        <a href="https://wa.me/923332287377" className="wa-float-btn" target="_blank" rel="noreferrer">
          <svg width="22" height="22" viewBox="0 0 24 24" fill="#fff"><path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z"/></svg>
          <span>0333-2287377</span>
        </a>
      </div>
    </>
  );
}