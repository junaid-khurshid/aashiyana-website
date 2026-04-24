"use client";
import { useState } from "react";
import Image from "next/image";
import Link from "next/link";

const areas = ["All Areas","Surjani Town","North Karachi","New Karachi","Bufferzone","Shadman Town","North Nazimabad","Nazimabad"];

type Listing = {
  id: number; title: string; area: string; type: "rent"|"sale";
  propType: string; price: string; unit?: string;
  beds?: number; baths?: number; size: string; img: string;
  desc: string; features: string[];
};

const listings: Listing[] = [
  { id:1,  title:"3 Bed House – Corner Plot",    area:"Surjani Town",    type:"sale", propType:"House",  price:"1.2 Crore", beds:3, baths:2, size:"120 Sq Yd", img:"/house-1.jpg",    desc:"Well-maintained corner plot house in Surjani Town Sector 7A. Ground + 1 floor. Covered parking.",        features:["Corner Plot","Covered Parking","Ground+1 Floor","Main Road"] },
  { id:2,  title:"2 Bed House for Rent",          area:"Surjani Town",    type:"rent", propType:"House",  price:"20,000", unit:"/mo", beds:2, baths:2, size:"80 Sq Yd",  img:"/interior-1.jpg", desc:"Neat and clean 2-bedroom house in Surjani Sector 7B. Ideal for small families.",                       features:["2 Bedrooms","Attached Baths","Ground Floor","Peaceful Area"] },
  { id:3,  title:"120 Sq Yd Residential Plot",   area:"Surjani Town",    type:"sale", propType:"Plot",   price:"75 Lakh",            size:"120 Sq Yd", img:"/house-1.jpg",    desc:"Residential plot in Surjani Town Sector 10. All utilities available, ready for construction.",           features:["Residential Zone","All Utilities","Wide Street","Negotiable"] },
  { id:4,  title:"Ground Floor Shop",             area:"Surjani Town",    type:"rent", propType:"Shop",   price:"12,000", unit:"/mo",  size:"150 Sqft",  img:"/house-1.jpg",    desc:"Commercial shop on main Surjani road. Heavy footfall area, ideal for any business.",                     features:["Main Road","High Footfall","Security","Immediate Handover"] },
  { id:5,  title:"4 Bed Double Storey",           area:"North Karachi",   type:"sale", propType:"House",  price:"1.8 Crore", beds:4, baths:3, size:"200 Sq Yd", img:"/house-1.jpg",    desc:"Fully renovated double storey house in North Karachi Sector 11-B. Modern kitchen, marble floors.",       features:["Double Storey","Marble Flooring","Modern Kitchen","Generator"] },
  { id:6,  title:"3 Bed House – Sector 15",       area:"North Karachi",   type:"rent", propType:"House",  price:"35,000", unit:"/mo", beds:3, baths:2, size:"120 Sq Yd", img:"/interior-1.jpg", desc:"Spacious 3-bedroom house in North Karachi Sector 15. Car porch included.",                              features:["Car Porch","3 Bedrooms","Roof Access","Maintained"] },
  { id:7,  title:"2 Bed Flat – 2nd Floor",        area:"North Karachi",   type:"rent", propType:"Flat",   price:"22,000", unit:"/mo", beds:2, baths:2, size:"900 Sqft",  img:"/interior-1.jpg", desc:"Modern 2-bedroom flat in a well-maintained building. Lift available, 24hr security.",                  features:["Lift","24hr Security","2 Bedrooms","Balcony"] },
  { id:8,  title:"Commercial Plot 240 Sq Yd",     area:"North Karachi",   type:"sale", propType:"Plot",   price:"2.1 Crore",          size:"240 Sq Yd", img:"/house-1.jpg",    desc:"Prime commercial plot in North Karachi Sector 14-B. Corner location, ideal for plaza or office.",        features:["Corner","Commercial Zone","Wide Road","Prime Location"] },
  { id:9,  title:"3 Bed Bungalow",                area:"New Karachi",     type:"sale", propType:"House",  price:"85 Lakh", beds:3, baths:2, size:"120 Sq Yd", img:"/house-1.jpg",    desc:"Ready-to-move 3-bedroom bungalow in New Karachi Sector 5-L. Quality finishing.",                        features:["Ready to Move","Quality Finishing","Street Parking","Quiet Street"] },
  { id:10, title:"1 Bed Flat for Rent",           area:"New Karachi",     type:"rent", propType:"Flat",   price:"13,000", unit:"/mo", beds:1, baths:1, size:"600 Sqft",  img:"/interior-1.jpg", desc:"Affordable 1-bedroom flat in New Karachi Sector 5-Q. Ground floor, easy access.",                     features:["Ground Floor","Affordable","Easy Access","Gas Available"] },
  { id:11, title:"Office Space",                  area:"New Karachi",     type:"rent", propType:"Office", price:"18,000", unit:"/mo",  size:"400 Sqft",  img:"/interior-1.jpg", desc:"Ready office space in New Karachi. Separate entrance, AC unit included.",                                features:["Separate Entrance","AC Included","Reception Area","Fibre Ready"] },
  { id:12, title:"4 Bed House – Sector 16A",      area:"Bufferzone",      type:"sale", propType:"House",  price:"1.4 Crore", beds:4, baths:3, size:"160 Sq Yd", img:"/house-1.jpg",    desc:"Well-constructed 4-bedroom house in Bufferzone Sector 16A. Two floors, servant quarter.",               features:["Servant Quarter","Two Floors","Solar Ready","Wide Street"] },
  { id:13, title:"2 Bed Flat for Rent",           area:"Bufferzone",      type:"rent", propType:"Flat",   price:"18,000", unit:"/mo", beds:2, baths:1, size:"750 Sqft",  img:"/interior-1.jpg", desc:"Clean 2-bedroom flat in Bufferzone Sector 15. Family building, immediate handover.",                   features:["Family Building","Immediate Handover","Ground Floor","Near Market"] },
  { id:14, title:"Ground Floor Shop",             area:"Bufferzone",      type:"rent", propType:"Shop",   price:"15,000", unit:"/mo",  size:"200 Sqft",  img:"/house-1.jpg",    desc:"Commercial shop in Bufferzone main commercial street. Good for any retail business.",                    features:["Commercial Street","Heavy Traffic","Security Shutter","Water"] },
  { id:15, title:"5 Bed Bungalow",                area:"Shadman Town",    type:"sale", propType:"House",  price:"2.2 Crore", beds:5, baths:4, size:"240 Sq Yd", img:"/house-1.jpg",    desc:"Luxury 5-bedroom bungalow in Shadman Colony. Prime location, modern architecture.",                     features:["Luxury Finishing","Garden","5 Bedrooms","Generator"] },
  { id:16, title:"3 Bed House for Rent",          area:"Shadman Town",    type:"rent", propType:"House",  price:"30,000", unit:"/mo", beds:3, baths:2, size:"120 Sq Yd", img:"/interior-1.jpg", desc:"Beautiful 3-bedroom house in Shadman Town Phase 1. Fully maintained, ideal for families.",             features:["Fully Maintained","Car Porch","Roof Terrace","Near School"] },
  { id:17, title:"3 Bed Apartment – Block H",     area:"North Nazimabad", type:"rent", propType:"Flat",   price:"28,000", unit:"/mo", beds:3, baths:2, size:"1100 Sqft", img:"/interior-1.jpg", desc:"Spacious 3-bedroom apartment in North Nazimabad Block H. High floor, lift building.",                  features:["High Floor","Lift","3 Bedrooms","Great Views"] },
  { id:18, title:"120 Sq Yd House – Block F",     area:"North Nazimabad", type:"sale", propType:"House",  price:"95 Lakh", beds:3, baths:2, size:"120 Sq Yd", img:"/house-1.jpg",    desc:"Ground + 1 house in North Nazimabad Block F. Ideal location near main road.",                           features:["Main Road Nearby","Ground+1","3 Bedrooms","Good Condition"] },
  { id:19, title:"2 Bed Flat for Rent",           area:"North Nazimabad", type:"rent", propType:"Flat",   price:"20,000", unit:"/mo", beds:2, baths:2, size:"900 Sqft",  img:"/interior-1.jpg", desc:"Well-maintained 2-bed flat in Block T. Peaceful area, easy transport access.",                        features:["Peaceful Area","Easy Transport","Maintained Building","Near Park"] },
  { id:20, title:"Double Storey House",           area:"Nazimabad",       type:"sale", propType:"House",  price:"1.6 Crore", beds:5, baths:4, size:"200 Sq Yd", img:"/house-1.jpg",    desc:"Fully renovated double storey house in Nazimabad Block 3. Modern tile flooring, new woodwork.",         features:["Renovated","Double Storey","New Woodwork","Tile Flooring"] },
  { id:21, title:"1 Bed Flat – Block 2",          area:"Nazimabad",       type:"rent", propType:"Flat",   price:"12,000", unit:"/mo", beds:1, baths:1, size:"550 Sqft",  img:"/interior-1.jpg", desc:"Affordable 1-bedroom flat in Nazimabad Block 2. Close to all amenities.",                             features:["Affordable","Close to Amenities","Clean Building","Ground Floor"] },
  { id:22, title:"Commercial Plot – Block 5",     area:"Nazimabad",       type:"sale", propType:"Plot",   price:"1.1 Crore",          size:"120 Sq Yd", img:"/house-1.jpg",    desc:"Corner commercial plot in Nazimabad Block 5. Ideal for plaza, restaurant or showroom.",                  features:["Corner Plot","Commercial Zone","Ready to Build","Prime Location"] },
];

function InquiryModal({ listing, onClose }: { listing: Listing; onClose: () => void }) {
  const [status, setStatus] = useState<"idle"|"sending"|"sent"|"error">("idle");

  async function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    setStatus("sending");
    const res = await fetch("https://formspree.io/f/mrerojdw", {
      method: "POST",
      body: new FormData(e.currentTarget),
      headers: { Accept: "application/json" },
    });
    setStatus(res.ok ? "sent" : "error");
  }

  return (
    <div style={{ position:"fixed", inset:0, zIndex:999, background:"rgba(13,27,42,0.75)", backdropFilter:"blur(4px)", display:"flex", alignItems:"center", justifyContent:"center", padding:"20px" }} onClick={onClose}>
      <div style={{ background:"#fff", borderRadius:"10px", width:"100%", maxWidth:"500px", maxHeight:"90vh", overflowY:"auto", position:"relative", boxShadow:"0 24px 64px rgba(0,0,0,0.3)" }} onClick={e => e.stopPropagation()}>
        <button onClick={onClose} style={{ position:"absolute", top:"14px", right:"14px", background:"rgba(0,0,0,0.08)", border:"none", borderRadius:"50%", width:"32px", height:"32px", cursor:"pointer", fontSize:"16px", display:"flex", alignItems:"center", justifyContent:"center", zIndex:1 }}>✕</button>

        {/* Modal Header */}
        <div style={{ background:"#0D1B2A", padding:"28px 24px 20px", borderRadius:"10px 10px 0 0" }}>
          <span style={{ background:"#1565C0", color:"#fff", fontSize:"10px", fontWeight:600, letterSpacing:"0.1em", textTransform:"uppercase", padding:"3px 10px", borderRadius:"3px", display:"inline-block", marginBottom:"10px" }}>
            {listing.type === "rent" ? "For Rent" : "For Sale"}
          </span>
          <div style={{ fontFamily:"Georgia, serif", fontSize:"22px", color:"#fff", marginBottom:"4px" }}>{listing.title}</div>
          <div style={{ fontSize:"12px", color:"#64B5F6", marginBottom:"8px" }}>{listing.area}</div>
          <div style={{ fontFamily:"Georgia, serif", fontSize:"26px", color:"#64B5F6", fontWeight:600 }}>
            {listing.price}{listing.unit && <span style={{ fontSize:"14px", fontWeight:400 }}> {listing.unit}</span>}
          </div>
        </div>

        {status === "sent" ? (
          <div style={{ padding:"40px 24px", textAlign:"center" }}>
            <div style={{ fontSize:"40px", marginBottom:"12px" }}>✅</div>
            <div style={{ fontFamily:"Georgia, serif", fontSize:"22px", color:"#0D1B2A", marginBottom:"8px" }}>Inquiry Sent!</div>
            <p style={{ color:"#555", fontSize:"14px", marginBottom:"20px" }}>We&apos;ll contact you within 1 hour on WhatsApp or phone.</p>
            <a href={`https://wa.me/923152400381?text=Hi, interested in: ${listing.title} – ${listing.area} (${listing.price}${listing.unit||""})`} target="_blank" rel="noreferrer"
              style={{ display:"inline-flex", alignItems:"center", gap:"8px", background:"#25D366", color:"#fff", padding:"12px 24px", borderRadius:"4px", textDecoration:"none", fontWeight:500 }}>
              Also Message on WhatsApp
            </a>
          </div>
        ) : (
          <form onSubmit={handleSubmit} style={{ padding:"24px", display:"flex", flexDirection:"column", gap:"14px" }}>
            <input type="hidden" name="property" value={`${listing.title} – ${listing.area}`} />
            <input type="hidden" name="listing_type" value={listing.type === "rent" ? "For Rent" : "For Sale"} />
            <input type="hidden" name="price" value={`${listing.price}${listing.unit||""}`} />

            <div style={{ display:"grid", gridTemplateColumns:"1fr 1fr", gap:"12px" }}>
              <div style={{ display:"flex", flexDirection:"column", gap:"5px" }}>
                <label style={{ fontSize:"11px", color:"#888", textTransform:"uppercase", letterSpacing:"0.08em" }}>Your Name *</label>
                <input name="name" type="text" placeholder="Muhammad Ali" required style={{ padding:"10px 12px", border:"1px solid #ddd", borderRadius:"4px", fontSize:"13px", fontFamily:"inherit" }} />
              </div>
              <div style={{ display:"flex", flexDirection:"column", gap:"5px" }}>
                <label style={{ fontSize:"11px", color:"#888", textTransform:"uppercase", letterSpacing:"0.08em" }}>Phone *</label>
                <input name="phone" type="tel" placeholder="03XX XXXXXXX" required style={{ padding:"10px 12px", border:"1px solid #ddd", borderRadius:"4px", fontSize:"13px", fontFamily:"inherit" }} />
              </div>
            </div>
            <div style={{ display:"flex", flexDirection:"column", gap:"5px" }}>
              <label style={{ fontSize:"11px", color:"#888", textTransform:"uppercase", letterSpacing:"0.08em" }}>Email (optional)</label>
              <input name="email" type="email" placeholder="your@email.com" style={{ padding:"10px 12px", border:"1px solid #ddd", borderRadius:"4px", fontSize:"13px", fontFamily:"inherit" }} />
            </div>
            <div style={{ display:"flex", flexDirection:"column", gap:"5px" }}>
              <label style={{ fontSize:"11px", color:"#888", textTransform:"uppercase", letterSpacing:"0.08em" }}>Message</label>
              <textarea name="message" rows={3} placeholder={`I am interested in ${listing.title}...`} style={{ padding:"10px 12px", border:"1px solid #ddd", borderRadius:"4px", fontSize:"13px", fontFamily:"inherit", resize:"vertical" }}></textarea>
            </div>

            <div style={{ display:"flex", gap:"10px", flexWrap:"wrap" }}>
              <button type="submit" disabled={status==="sending"} style={{ flex:1, background:"#1565C0", color:"#fff", border:"none", padding:"12px", borderRadius:"4px", fontSize:"13px", fontWeight:600, cursor:"pointer", opacity: status==="sending" ? 0.6 : 1 }}>
                {status === "sending" ? "Sending…" : "Send Inquiry →"}
              </button>
              <a href={`https://wa.me/923152400381?text=Hi, I am interested in: ${listing.title} – ${listing.area} (${listing.price}${listing.unit||""}). Please share details.`}
                target="_blank" rel="noreferrer"
                style={{ display:"flex", alignItems:"center", gap:"8px", background:"#25D366", color:"#fff", padding:"12px 16px", borderRadius:"4px", textDecoration:"none", fontSize:"13px", fontWeight:500, whiteSpace:"nowrap" }}>
                WhatsApp
              </a>
            </div>
            {status === "error" && <p style={{ color:"#e53935", fontSize:"12px", textAlign:"center" }}>Something went wrong. Please WhatsApp us directly.</p>}
          </form>
        )}
      </div>
    </div>
  );
}

function ListingCard({ listing, onInquire }: { listing: Listing; onInquire: (l: Listing) => void }) {
  return (
    <div style={{ background:"#fff", borderRadius:"8px", overflow:"hidden", border:"1px solid #E3EDF7", boxShadow:"0 2px 8px rgba(13,71,161,0.06)", transition:"transform 0.2s, box-shadow 0.2s", display:"flex", flexDirection:"column" }}
      onMouseEnter={e => { (e.currentTarget as HTMLDivElement).style.transform="translateY(-4px)"; (e.currentTarget as HTMLDivElement).style.boxShadow="0 12px 32px rgba(13,71,161,0.12)"; }}
      onMouseLeave={e => { (e.currentTarget as HTMLDivElement).style.transform="translateY(0)"; (e.currentTarget as HTMLDivElement).style.boxShadow="0 2px 8px rgba(13,71,161,0.06)"; }}>

      {/* Image */}
      <div style={{ position:"relative", height:"200px", overflow:"hidden" }}>
        <Image src={listing.img} alt={listing.title} width={400} height={200} style={{ width:"100%", height:"200px", objectFit:"cover", display:"block" }} />
        <div style={{ position:"absolute", top:"12px", left:"12px", display:"flex", gap:"6px" }}>
          <span style={{ background: listing.type==="rent" ? "#1565C0" : "#0D1B2A", color:"#fff", fontSize:"10px", fontWeight:600, padding:"3px 10px", borderRadius:"3px", letterSpacing:"0.08em", textTransform:"uppercase" }}>
            {listing.type === "rent" ? "For Rent" : "For Sale"}
          </span>
          <span style={{ background:"rgba(255,255,255,0.92)", color:"#333", fontSize:"10px", fontWeight:500, padding:"3px 10px", borderRadius:"3px", letterSpacing:"0.06em", textTransform:"uppercase" }}>
            {listing.propType}
          </span>
        </div>
      </div>

      {/* Body */}
      <div style={{ padding:"18px", display:"flex", flexDirection:"column", flex:1, gap:"6px" }}>
        <div style={{ fontFamily:"Georgia, serif", fontSize:"22px", fontWeight:600, color:"#0D1B2A" }}>
          {listing.price}{listing.unit && <span style={{ fontSize:"13px", fontWeight:400, color:"#888" }}> {listing.unit}</span>}
        </div>
        <div style={{ fontSize:"15px", fontWeight:500, color:"#0D1B2A" }}>{listing.title}</div>
        <div style={{ fontSize:"11px", color:"#1565C0", textTransform:"uppercase", letterSpacing:"0.08em", display:"flex", alignItems:"center", gap:"4px" }}>
          📍 {listing.area}
        </div>
        <div style={{ display:"flex", gap:"14px", fontSize:"12px", color:"#666", flexWrap:"wrap", marginTop:"4px" }}>
          {listing.beds && <span>🛏 {listing.beds} Beds</span>}
          {listing.baths && <span>🚿 {listing.baths} Baths</span>}
          <span>📐 {listing.size}</span>
        </div>
        <p style={{ fontSize:"12px", color:"#777", lineHeight:1.65, marginTop:"4px" }}>{listing.desc}</p>
        <div style={{ display:"flex", gap:"6px", flexWrap:"wrap", marginTop:"4px" }}>
          {listing.features.slice(0,3).map(f => (
            <span key={f} style={{ background:"#E3F2FD", color:"#1565C0", fontSize:"10px", padding:"3px 8px", borderRadius:"3px" }}>{f}</span>
          ))}
        </div>

        {/* Actions */}
        <div style={{ display:"flex", gap:"8px", marginTop:"auto", paddingTop:"14px", borderTop:"1px solid #EEF4FB" }}>
          <button onClick={() => onInquire(listing)}
            style={{ flex:1, background:"#1565C0", color:"#fff", border:"none", padding:"10px", borderRadius:"4px", fontSize:"12px", fontWeight:600, cursor:"pointer", letterSpacing:"0.04em" }}>
            Send Inquiry
          </button>
          <a href={`https://wa.me/923152400381?text=Hi, interested in: ${listing.title} – ${listing.area} (${listing.price}${listing.unit||""})`}
            target="_blank" rel="noreferrer"
            style={{ display:"flex", alignItems:"center", gap:"6px", background:"#25D366", color:"#fff", padding:"10px 14px", borderRadius:"4px", textDecoration:"none", fontSize:"12px", fontWeight:600, whiteSpace:"nowrap" }}>
            <svg width="14" height="14" viewBox="0 0 24 24" fill="#fff"><path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z"/></svg>
            WhatsApp
          </a>
        </div>
      </div>
    </div>
  );
}

export default function ListingsPage() {
  const [activeArea, setActiveArea] = useState("All Areas");
  const [activeType, setActiveType] = useState<"all"|"rent"|"sale">("all");
  const [activeProp, setActiveProp] = useState("All Types");
  const [inquiryListing, setInquiryListing] = useState<Listing|null>(null);

  const propTypes = ["All Types","House","Flat","Plot","Shop","Office"];

  const filtered = listings.filter(l => {
    const areaOk = activeArea === "All Areas" || l.area === activeArea;
    const typeOk = activeType === "all" || l.type === activeType;
    const propOk = activeProp === "All Types" || l.propType === activeProp;
    return areaOk && typeOk && propOk;
  });

  const groupedByArea = areas.slice(1).map(area => ({
    area,
    rent: filtered.filter(l => l.area === area && l.type === "rent"),
    sale: filtered.filter(l => l.area === area && l.type === "sale"),
  })).filter(g => g.rent.length > 0 || g.sale.length > 0);

  return (
    <div style={{ fontFamily:"'DM Sans', system-ui, sans-serif", background:"#F4F8FE", minHeight:"100vh" }}>

      {/* ── NAVBAR ── */}
      <header style={{ position:"fixed", top:0, left:0, right:0, zIndex:200, background:"rgba(13,27,42,0.97)", backdropFilter:"blur(12px)", borderBottom:"1px solid rgba(33,150,243,0.2)" }}>
        <div style={{ maxWidth:"1200px", margin:"0 auto", display:"flex", alignItems:"center", justifyContent:"space-between", padding:"0 2rem", height:"68px" }}>
          <Link href="/" style={{ display:"flex", alignItems:"center", gap:"12px", textDecoration:"none", color:"#fff" }}>
            <Image src="/logo.png" alt="Aashiyana" width={42} height={42} style={{ objectFit:"contain" }} />
            <div>
              <div style={{ fontFamily:"Georgia, serif", fontSize:"18px", color:"#fff" }}>Aashiyana <span style={{ color:"#64B5F6" }}>Associates</span></div>
              <div style={{ fontSize:"9px", letterSpacing:"0.14em", textTransform:"uppercase", color:"#64B5F6", opacity:0.8 }}>Real Estate Marketing</div>
            </div>
          </Link>
          <nav style={{ display:"flex", gap:"28px", listStyle:"none" } as React.CSSProperties}>
            <Link href="/" style={{ color:"rgba(255,255,255,0.7)", textDecoration:"none", fontSize:"12px", letterSpacing:"0.08em", textTransform:"uppercase" }}>Home</Link>
            <Link href="/#services" style={{ color:"rgba(255,255,255,0.7)", textDecoration:"none", fontSize:"12px", letterSpacing:"0.08em", textTransform:"uppercase" }}>Services</Link>
            <Link href="/listings" style={{ color:"#64B5F6", textDecoration:"none", fontSize:"12px", letterSpacing:"0.08em", textTransform:"uppercase", borderBottom:"1px solid #64B5F6", paddingBottom:"2px" }}>Listings</Link>
            <Link href="/#contact" style={{ color:"rgba(255,255,255,0.7)", textDecoration:"none", fontSize:"12px", letterSpacing:"0.08em", textTransform:"uppercase" }}>Contact</Link>
          </nav>
          <a href="https://wa.me/923152400381" target="_blank" rel="noreferrer"
            style={{ display:"flex", alignItems:"center", gap:"8px", background:"#25D366", color:"#fff", padding:"9px 18px", borderRadius:"4px", textDecoration:"none", fontSize:"12px", fontWeight:600 }}>
            <svg width="14" height="14" viewBox="0 0 24 24" fill="#fff"><path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z"/></svg>
            WhatsApp
          </a>
        </div>
      </header>

      {/* ── HERO ── */}
      <div style={{ background:"#0D1B2A", paddingTop:"110px", paddingBottom:"50px", paddingLeft:"2rem", paddingRight:"2rem", position:"relative", overflow:"hidden" }}>
        <div style={{ position:"absolute", inset:0, background:"radial-gradient(ellipse 60% 80% at 80% 50%, rgba(21,101,192,0.2) 0%, transparent 60%)" }}></div>
        <div style={{ maxWidth:"1200px", margin:"0 auto", position:"relative", zIndex:1 }}>
          <div style={{ display:"flex", alignItems:"center", gap:"12px", marginBottom:"16px" }}>
            <span style={{ width:"32px", height:"1px", background:"#64B5F6", display:"block" }}></span>
            <span style={{ color:"#64B5F6", fontSize:"11px", letterSpacing:"0.2em", textTransform:"uppercase" }}>North Karachi · Surjani · Nazimabad</span>
          </div>
          <h1 style={{ fontFamily:"Georgia, serif", fontSize:"52px", color:"#fff", fontWeight:400, marginBottom:"12px", lineHeight:1.1 }}>
            Property <span style={{ color:"#64B5F6" }}>Listings</span>
          </h1>
          <p style={{ color:"rgba(255,255,255,0.55)", fontSize:"15px" }}>{listings.length} verified properties across 7 areas — rent, buy or sell with confidence</p>
        </div>
      </div>

      {/* ── FILTERS ── */}
      <div style={{ background:"#fff", borderBottom:"1px solid #E3EDF7", position:"sticky", top:"68px", zIndex:100, boxShadow:"0 2px 12px rgba(13,27,42,0.06)" }}>
        <div style={{ maxWidth:"1200px", margin:"0 auto", padding:"14px 2rem", display:"flex", alignItems:"flex-end", gap:"24px", flexWrap:"wrap" }}>

          {/* Purpose */}
          <div style={{ display:"flex", flexDirection:"column", gap:"5px" }}>
            <span style={{ fontSize:"10px", color:"#888", textTransform:"uppercase", letterSpacing:"0.1em" }}>Purpose</span>
            <div style={{ display:"flex", gap:"6px" }}>
              {(["all","rent","sale"] as const).map(t => (
                <button key={t} onClick={() => setActiveType(t)}
                  style={{ padding:"7px 16px", borderRadius:"20px", border:`1px solid ${activeType===t?"#1565C0":"#C9D8EC"}`, background: activeType===t?"#1565C0":"#fff", color: activeType===t?"#fff":"#555", fontSize:"12px", cursor:"pointer", fontFamily:"inherit", fontWeight: activeType===t ? 600 : 400, transition:"all 0.15s" }}>
                  {t==="all"?"All":t==="rent"?"For Rent":"For Sale"}
                </button>
              ))}
            </div>
          </div>

          {/* Area */}
          <div style={{ display:"flex", flexDirection:"column", gap:"5px" }}>
            <span style={{ fontSize:"10px", color:"#888", textTransform:"uppercase", letterSpacing:"0.1em" }}>Area</span>
            <select value={activeArea} onChange={e => setActiveArea(e.target.value)}
              style={{ padding:"8px 14px", border:"1px solid #C9D8EC", borderRadius:"4px", fontSize:"13px", color:"#333", background:"#fff", minWidth:"160px", fontFamily:"inherit", cursor:"pointer" }}>
              {areas.map(a => <option key={a}>{a}</option>)}
            </select>
          </div>

          {/* Property Type */}
          <div style={{ display:"flex", flexDirection:"column", gap:"5px" }}>
            <span style={{ fontSize:"10px", color:"#888", textTransform:"uppercase", letterSpacing:"0.1em" }}>Property Type</span>
            <select value={activeProp} onChange={e => setActiveProp(e.target.value)}
              style={{ padding:"8px 14px", border:"1px solid #C9D8EC", borderRadius:"4px", fontSize:"13px", color:"#333", background:"#fff", minWidth:"140px", fontFamily:"inherit", cursor:"pointer" }}>
              {propTypes.map(p => <option key={p}>{p}</option>)}
            </select>
          </div>

          {/* Count */}
          <div style={{ marginLeft:"auto", display:"flex", alignItems:"center", gap:"6px" }}>
            <span style={{ fontFamily:"Georgia, serif", fontSize:"28px", color:"#1565C0", fontWeight:700 }}>{filtered.length}</span>
            <span style={{ fontSize:"13px", color:"#666" }}>properties found</span>
          </div>
        </div>
      </div>

      {/* ── LISTINGS ── */}
      <main style={{ maxWidth:"1200px", margin:"0 auto", padding:"40px 2rem 80px" }}>
        {groupedByArea.length === 0 ? (
          <div style={{ textAlign:"center", padding:"80px 20px" }}>
            <div style={{ fontSize:"48px", marginBottom:"16px" }}>🏠</div>
            <h3 style={{ fontFamily:"Georgia, serif", fontSize:"24px", color:"#0D1B2A", marginBottom:"8px" }}>No properties found</h3>
            <p style={{ color:"#666", fontSize:"14px" }}>Try changing your filters or <a href="https://wa.me/923152400381" style={{ color:"#1565C0" }}>WhatsApp us</a> for unlisted properties.</p>
          </div>
        ) : (
          groupedByArea.map(({ area, rent, sale }) => (
            <div key={area} style={{ marginBottom:"60px", paddingBottom:"60px", borderBottom:"1px solid #E3EDF7" }}>

              {/* Area Header */}
              <div style={{ display:"flex", alignItems:"center", justifyContent:"space-between", flexWrap:"wrap", gap:"12px", marginBottom:"28px" }}>
                <div style={{ display:"flex", alignItems:"center", gap:"14px" }}>
                  <span style={{ width:"10px", height:"10px", background:"#1565C0", borderRadius:"50%", display:"block", flexShrink:0 }}></span>
                  <h2 style={{ fontFamily:"Georgia, serif", fontSize:"30px", fontWeight:400, color:"#0D1B2A", margin:0 }}>{area}</h2>
                </div>
                <div style={{ display:"flex", gap:"8px" }}>
                  {rent.length > 0 && <span style={{ background:"rgba(21,101,192,0.1)", color:"#1565C0", padding:"4px 12px", borderRadius:"20px", fontSize:"11px", fontWeight:600 }}>{rent.length} for Rent</span>}
                  {sale.length > 0 && <span style={{ background:"rgba(13,27,42,0.08)", color:"#0D1B2A", padding:"4px 12px", borderRadius:"20px", fontSize:"11px", fontWeight:600 }}>{sale.length} for Sale</span>}
                </div>
              </div>

              {/* Rent */}
              {rent.length > 0 && (activeType === "all" || activeType === "rent") && (
                <div style={{ marginBottom:"28px" }}>
                  <div style={{ display:"inline-flex", alignItems:"center", gap:"6px", background:"#1565C0", color:"#fff", padding:"5px 16px", borderRadius:"20px", fontSize:"11px", fontWeight:600, letterSpacing:"0.1em", textTransform:"uppercase", marginBottom:"16px" }}>
                    🏠 For Rent
                  </div>
                  <div style={{ display:"grid", gridTemplateColumns:"repeat(auto-fill, minmax(300px, 1fr))", gap:"20px" }}>
                    {rent.map(l => <ListingCard key={l.id} listing={l} onInquire={setInquiryListing} />)}
                  </div>
                </div>
              )}

              {/* Sale */}
              {sale.length > 0 && (activeType === "all" || activeType === "sale") && (
                <div>
                  <div style={{ display:"inline-flex", alignItems:"center", gap:"6px", background:"#0D1B2A", color:"#fff", padding:"5px 16px", borderRadius:"20px", fontSize:"11px", fontWeight:600, letterSpacing:"0.1em", textTransform:"uppercase", marginBottom:"16px" }}>
                    💰 For Sale
                  </div>
                  <div style={{ display:"grid", gridTemplateColumns:"repeat(auto-fill, minmax(300px, 1fr))", gap:"20px" }}>
                    {sale.map(l => <ListingCard key={l.id} listing={l} onInquire={setInquiryListing} />)}
                  </div>
                </div>
              )}
            </div>
          ))
        )}
      </main>

      {/* ── MODAL ── */}
      {inquiryListing && <InquiryModal listing={inquiryListing} onClose={() => setInquiryListing(null)} />}

      {/* ── FLOATING WHATSAPP ── */}
      <div style={{ position:"fixed", bottom:"24px", right:"24px", zIndex:300, display:"flex", flexDirection:"column", gap:"10px", alignItems:"flex-end" }}>
        <a href="https://wa.me/923152400381" target="_blank" rel="noreferrer"
          style={{ display:"flex", alignItems:"center", gap:"10px", background:"#25D366", color:"#fff", padding:"10px 18px 10px 14px", borderRadius:"28px", textDecoration:"none", fontSize:"12px", fontWeight:600, boxShadow:"0 4px 16px rgba(37,211,102,0.4)", whiteSpace:"nowrap" }}>
          <svg width="20" height="20" viewBox="0 0 24 24" fill="#fff"><path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z"/></svg>
          0315-2400381
        </a>
        <a href="https://wa.me/923332287377" target="_blank" rel="noreferrer"
          style={{ display:"flex", alignItems:"center", gap:"10px", background:"#25D366", color:"#fff", padding:"10px 18px 10px 14px", borderRadius:"28px", textDecoration:"none", fontSize:"12px", fontWeight:600, boxShadow:"0 4px 16px rgba(37,211,102,0.4)", whiteSpace:"nowrap" }}>
          <svg width="20" height="20" viewBox="0 0 24 24" fill="#fff"><path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z"/></svg>
          0333-2287377
        </a>
      </div>
    </div>
  );
}