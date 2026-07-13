import React from 'react';
import { Star, MapPin, Clock, ChevronRight, Bell, Search, Heart, Calendar, User, Home, Grid, Phone, Activity, Shield } from 'lucide-react';

// ─── AD BANNER — Concept 1 ──────────────────────────────────────────────────
export function AdBannerConcept1() {
  return (
    <div className="relative overflow-hidden" style={{
      background: 'linear-gradient(135deg, #06B6D4 0%, #0891B2 60%, #0369A1 100%)',
      minHeight: '220px',
      flexShrink: 0,
    }}>
      {/* Decorative circles */}
      <div style={{ position:'absolute', top:'-30px', right:'-30px', width:'140px', height:'140px', background:'rgba(255,255,255,0.12)', borderRadius:'50%' }} />
      <div style={{ position:'absolute', bottom:'-20px', left:'-20px', width:'100px', height:'100px', background:'rgba(255,255,255,0.08)', borderRadius:'50%' }} />
      <div style={{ position:'absolute', top:'40px', right:'60px', width:'60px', height:'60px', background:'rgba(255,255,255,0.06)', borderRadius:'50%' }} />

      <div style={{ padding:'20px 18px', position:'relative', zIndex:2 }}>
        <div style={{
          background:'rgba(255,255,255,0.2)', display:'inline-flex', alignItems:'center',
          gap:'6px', padding:'3px 10px', borderRadius:'20px', marginBottom:'10px'
        }}>
          <span style={{ width:6, height:6, background:'#fff', borderRadius:'50%', display:'inline-block' }} />
          <span style={{ color:'#fff', fontSize:'10px', fontWeight:700, letterSpacing:'0.08em' }}>SPONSORED</span>
        </div>
        <div style={{ color:'white', fontSize:'20px', fontWeight:800, lineHeight:1.2, marginBottom:8, fontFamily:'Plus Jakarta Sans, sans-serif' }}>
          Premium Health<br/>Plans — Save 40%
        </div>
        <div style={{ color:'rgba(255,255,255,0.85)', fontSize:'12px', marginBottom:16 }}>
          Comprehensive coverage for you & your family. Starting at $19/mo.
        </div>
        <button style={{
          background:'white', color:'#0369A1', border:'none', borderRadius:8,
          padding:'8px 20px', fontSize:'12px', fontWeight:700, cursor:'pointer',
          boxShadow:'0 4px 15px rgba(0,0,0,0.15)',
        }}>
          Learn More →
        </button>
      </div>

      {/* Right side icon decoration */}
      <div style={{
        position:'absolute', right:16, bottom:20,
        background:'rgba(255,255,255,0.15)', borderRadius:16, padding:'12px',
      }}>
        <Shield size={32} color="white" />
      </div>
    </div>
  );
}

// ─── AD BANNER — Concept 2 ──────────────────────────────────────────────────
export function AdBannerConcept2() {
  return (
    <div style={{
      background: 'linear-gradient(135deg, #2563EB 0%, #10B981 100%)',
      minHeight: '220px',
      flexShrink: 0,
      position: 'relative',
      overflow: 'hidden',
      borderRadius: '0 0 24px 24px',
    }}>
      <div style={{ position:'absolute', top:'-40px', right:'-40px', width:'160px', height:'160px', background:'rgba(255,255,255,0.08)', borderRadius:'50%' }} />
      <div style={{ position:'absolute', bottom:0, left:0, right:0, height:'50%', background:'linear-gradient(to top, rgba(16,185,129,0.3), transparent)' }} />
      
      <div style={{ padding:'22px 18px', position:'relative', zIndex:2 }}>
        <div style={{
          background:'rgba(255,255,255,0.2)', display:'inline-block',
          padding:'4px 12px', borderRadius:20, marginBottom:12,
          color:'white', fontSize:'10px', fontWeight:700,
        }}>
          💊 HEALTH PROMOTION
        </div>
        <div style={{ color:'white', fontSize:'19px', fontWeight:700, lineHeight:1.3, marginBottom:8 }}>
          Book a Specialist<br/>Get Free Lab Tests!
        </div>
        <div style={{ color:'rgba(255,255,255,0.85)', fontSize:'11px', marginBottom:18, lineHeight:1.5 }}>
          Valid for new patients · Limited slots available
        </div>
        <button style={{
          background:'white', color:'#2563EB', border:'none',
          borderRadius:25, padding:'9px 22px', fontSize:'12px', fontWeight:700,
          cursor:'pointer', boxShadow:'0 6px 20px rgba(0,0,0,0.15)',
          display:'flex', alignItems:'center', gap:6,
        }}>
          <Heart size={14} fill="#2563EB" /> Claim Offer
        </button>
      </div>
      
      <div style={{ position:'absolute', right:14, top:'50%', transform:'translateY(-50%)', fontSize:'48px', opacity:0.25 }}>🏥</div>
    </div>
  );
}

// ─── AD BANNER — Concept 3 ──────────────────────────────────────────────────
export function AdBannerConcept3() {
  return (
    <div style={{
      background: 'linear-gradient(135deg, #F97316 0%, #0D9488 80%)',
      minHeight: '220px',
      flexShrink: 0,
      position: 'relative',
      overflow: 'hidden',
    }}>
      {/* Bold geometric shapes */}
      <div style={{ position:'absolute', top:-20, right:-20, width:120, height:120, background:'rgba(255,255,255,0.1)', transform:'rotate(45deg)', borderRadius:16 }} />
      <div style={{ position:'absolute', bottom:-30, left:30, width:80, height:80, background:'rgba(255,255,255,0.07)', transform:'rotate(20deg)', borderRadius:10 }} />
      
      <div style={{ padding:'18px 18px', position:'relative', zIndex:2 }}>
        <div style={{ display:'flex', alignItems:'center', gap:8, marginBottom:10 }}>
          <Activity size={16} color="#fff" />
          <span style={{ color:'white', fontSize:'10px', fontWeight:800, letterSpacing:'0.1em', textTransform:'uppercase' }}>Vital Hub Exclusive</span>
        </div>
        <div style={{
          color:'white', fontSize:'22px', fontWeight:900, lineHeight:1.1,
          marginBottom:8, fontFamily:'Poppins, sans-serif', textTransform:'uppercase',
        }}>
          YOUR HEALTH,<br/><span style={{ color:'#FED7AA' }}>YOUR WAY.</span>
        </div>
        <div style={{ color:'rgba(255,255,255,0.9)', fontSize:'11px', marginBottom:16, lineHeight:1.5 }}>
          50+ top-rated specialists · Instant booking · Zero waiting
        </div>
        <div style={{ display:'flex', gap:8 }}>
          <button style={{
            background:'white', color:'#F97316', border:'none', borderRadius:8,
            padding:'9px 16px', fontSize:'12px', fontWeight:800, cursor:'pointer',
          }}>
            Book Now
          </button>
          <button style={{
            background:'rgba(255,255,255,0.15)', color:'white', border:'1px solid rgba(255,255,255,0.3)',
            borderRadius:8, padding:'9px 16px', fontSize:'12px', fontWeight:600, cursor:'pointer',
          }}>
            Explore →
          </button>
        </div>
      </div>
    </div>
  );
}

// ─── CONCEPT 1: Modern Concierge (Light Mode) ────────────────────────────────
export function Concept1() {
  const doctors = [
    { name: 'Dr. Layla Hassan', specialty: 'Cardiologist', rating: 4.9, price: '$85', avail: 'Today 2PM' },
    { name: 'Dr. Omar Samir', specialty: 'Neurologist', rating: 4.8, price: '$90', avail: 'Tomorrow 10AM' },
  ];

  return (
    <div style={{
      background: '#F8FAFC', height: '100%', display: 'flex', flexDirection: 'column',
      fontFamily: 'Plus Jakarta Sans, Inter, sans-serif', color: '#0F172A',
    }}>
      {/* Status bar */}
      <div style={{ height: 32, background: '#06B6D4' }} />

      {/* Header */}
      <div style={{ padding: '12px 16px 10px', background: '#06B6D4', display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
        <div>
          <div style={{ fontSize: 11, color: 'rgba(255,255,255,0.75)', fontWeight: 500 }}>Good Evening 👋</div>
          <div style={{ fontSize: 17, fontWeight: 800, color: 'white' }}>Salim Al-Rashid</div>
        </div>
        <div style={{ position: 'relative' }}>
          <div style={{ width: 36, height: 36, background: 'rgba(255,255,255,0.2)', borderRadius: 12, display: 'flex', alignItems: 'center', justifyContent: 'center', border: '1px solid rgba(255,255,255,0.3)' }}>
            <Bell size={16} color="white" />
          </div>
          <div style={{ position:'absolute', top:-2, right:-2, width:8, height:8, background:'#F97316', borderRadius:'50%', border:'2px solid #06B6D4' }} />
        </div>
      </div>

      {/* Search */}
      <div style={{ padding: '12px 16px', background: '#06B6D4' }}>
        <div style={{ background: 'white', borderRadius: 12, padding: '10px 14px', display: 'flex', alignItems: 'center', gap: 10, boxShadow: '0 4px 16px rgba(0,0,0,0.12)' }}>
          <Search size={14} color="#94A3B8" />
          <span style={{ fontSize: 12, color: '#94A3B8' }}>Search doctors, clinics…</span>
        </div>
      </div>

      {/* AD BANNER — takes 1/3+ of viewport */}
      <AdBannerConcept1 />

      {/* Quick actions */}
      <div style={{ padding: '14px 16px 6px', background: '#F8FAFC' }}>
        <div style={{ fontSize: 11, fontWeight: 700, marginBottom: 10, color: '#64748B', textTransform: 'uppercase', letterSpacing: '0.06em' }}>Quick Access</div>
        <div style={{ display: 'flex', gap: 10, justifyContent: 'space-between' }}>
          {['Doctors', 'Clinics', 'Labs', 'Pharmacy'].map((label, i) => (
            <div key={i} style={{ flex: 1, background: 'white', border: '1px solid #E2E8F0', borderRadius: 12, padding: '10px 4px', textAlign: 'center', boxShadow: '0 1px 6px rgba(0,0,0,0.05)' }}>
              <div style={{ fontSize: 16, marginBottom: 4 }}>{['🩺','🏥','🧪','💊'][i]}</div>
              <div style={{ fontSize: 9, fontWeight: 600, color: '#475569' }}>{label}</div>
            </div>
          ))}
        </div>
      </div>

      {/* Doctors */}
      <div style={{ padding: '10px 16px', flex: 1, overflow: 'hidden', background: '#F8FAFC' }}>
        <div style={{ fontSize: 11, fontWeight: 700, marginBottom: 10, color: '#64748B', textTransform: 'uppercase', letterSpacing: '0.06em' }}>Top Doctors</div>
        <div style={{ display: 'flex', flexDirection: 'column', gap: 8 }}>
          {doctors.map((doc, i) => (
            <div key={i} style={{ background: 'white', border: '1px solid #E2E8F0', borderRadius: 14, padding: '12px', display: 'flex', alignItems: 'center', gap: 10, boxShadow: '0 2px 10px rgba(0,0,0,0.05)' }}>
              <div style={{ width: 36, height: 36, background: i === 0 ? 'rgba(6,182,212,0.12)' : 'rgba(6,182,212,0.07)', borderRadius: 12, display: 'flex', alignItems: 'center', justifyContent: 'center', fontSize: 18, flexShrink: 0, border: '1px solid rgba(6,182,212,0.2)' }}>
                {['👩‍⚕️','👨‍⚕️'][i]}
              </div>
              <div style={{ flex: 1, minWidth: 0 }}>
                <div style={{ fontSize: 11, fontWeight: 700, color: '#0F172A', whiteSpace: 'nowrap', overflow: 'hidden', textOverflow: 'ellipsis' }}>{doc.name}</div>
                <div style={{ fontSize: 9, color: '#94A3B8' }}>{doc.specialty}</div>
                <div style={{ fontSize: 9, color: '#0891B2', marginTop: 2, display: 'flex', alignItems: 'center', gap: 2 }}>
                  <Clock size={9} />{doc.avail}
                </div>
              </div>
              <div style={{ textAlign: 'right', flexShrink: 0 }}>
                <div style={{ fontSize: 11, fontWeight: 700, color: '#0891B2' }}>{doc.price}</div>
                <div style={{ display: 'flex', alignItems: 'center', gap: 2, justifyContent: 'flex-end', marginTop: 2 }}>
                  <Star size={8} fill="#FCD34D" color="#FCD34D" />
                  <span style={{ fontSize: 9, color: '#64748B' }}>{doc.rating}</span>
                </div>
                <button style={{ marginTop: 4, background: '#06B6D4', color: 'white', border: 'none', borderRadius: 8, padding: '4px 10px', fontSize: 9, fontWeight: 700, cursor: 'pointer' }}>Book</button>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Bottom nav */}
      <div style={{ background: 'white', borderTop: '1px solid #E2E8F0', padding: '10px 0 20px', display: 'flex', justifyContent: 'space-around', boxShadow: '0 -4px 20px rgba(0,0,0,0.06)' }}>
        {[{icon: Home, label:'Home', active:true},{icon: Search, label:'Search'},{icon: Calendar, label:'Bookings'},{icon: User, label:'Profile'}].map(({icon:Icon, label, active}, i) => (
          <div key={i} style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', gap: 3 }}>
            <Icon size={18} color={active ? '#06B6D4' : '#CBD5E1'} />
            <span style={{ fontSize: 8, color: active ? '#06B6D4' : '#CBD5E1', fontWeight: active ? 700 : 400 }}>{label}</span>
          </div>
        ))}
      </div>
    </div>
  );
}

// ─── CONCEPT 2: Clinical Standard ─────────────────────────────────────────────
export function Concept2() {
  return (
    <div style={{
      background: '#F0F9FF', height: '100%', display: 'flex', flexDirection: 'column',
      fontFamily: 'Inter, sans-serif', color: '#0F172A',
    }}>
      {/* Status bar */}
      <div style={{ height: 32, background: '#2563EB' }} />

      {/* Header */}
      <div style={{ background: '#2563EB', padding: '12px 16px 18px', color: 'white' }}>
        <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: 12 }}>
          <div>
            <div style={{ fontSize: 11, opacity: 0.8 }}>Welcome back,</div>
            <div style={{ fontSize: 17, fontWeight: 700 }}>Salim Al-Rashid</div>
          </div>
          <div style={{ width: 36, height: 36, background: 'rgba(255,255,255,0.2)', borderRadius: 18, display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
            <Bell size={16} color="white" />
          </div>
        </div>
        {/* Integrated search */}
        <div style={{ background: 'white', borderRadius: 25, padding: '9px 14px', display: 'flex', alignItems: 'center', gap: 8, boxShadow: '0 4px 15px rgba(0,0,0,0.15)' }}>
          <Search size={14} color="#94A3B8" />
          <span style={{ fontSize: 12, color: '#94A3B8' }}>Search doctors, symptoms…</span>
        </div>
      </div>

      {/* AD BANNER */}
      <AdBannerConcept2 />

      {/* Quick categories */}
      <div style={{ padding: '14px 16px 6px' }}>
        <div style={{ display: 'flex', gap: 8, overflowX: 'auto', paddingBottom: 4 }}>
          {['General','Cardio','Dental','Skin','Eyes'].map((cat, i) => (
            <div key={i} style={{
              background: i === 0 ? '#2563EB' : 'white',
              color: i === 0 ? 'white' : '#475569',
              borderRadius: 20, padding: '6px 14px',
              fontSize: 10, fontWeight: 600, whiteSpace: 'nowrap',
              border: i === 0 ? 'none' : '1px solid #E2E8F0',
              boxShadow: i === 0 ? '0 4px 12px rgba(37,99,235,0.4)' : '0 1px 4px rgba(0,0,0,0.06)',
              flexShrink: 0,
            }}>
              {cat}
            </div>
          ))}
        </div>
      </div>

      {/* Doctor Cards */}
      <div style={{ padding: '10px 16px', flex: 1, overflow: 'hidden' }}>
        <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: 10 }}>
          <div style={{ fontSize: 13, fontWeight: 700, color: '#0F172A' }}>Available Now</div>
          <div style={{ fontSize: 10, color: '#2563EB', fontWeight: 600 }}>See all →</div>
        </div>
        <div style={{ display: 'flex', flexDirection: 'column', gap: 10 }}>
          {[
            { name: 'Dr. Aisha Malik', specialty: 'General Physician', rating: 4.9, time: 'Available Now', exp: '12 yrs' },
            { name: 'Dr. Karim Nour', specialty: 'Cardiologist', rating: 4.7, time: 'In 30 min', exp: '8 yrs' },
          ].map((doc, i) => (
            <div key={i} style={{
              background: 'white', borderRadius: 16, padding: '12px',
              boxShadow: '0 4px 20px rgba(0,0,0,0.08)',
              display: 'flex', alignItems: 'center', gap: 12,
            }}>
              <div style={{ width: 44, height: 44, background: `linear-gradient(135deg, ${i===0?'#2563EB':'#10B981'}, ${i===0?'#60A5FA':'#34D399'})`, borderRadius: 14, display: 'flex', alignItems: 'center', justifyContent: 'center', fontSize: 20, flexShrink: 0 }}>
                {['👩‍⚕️','👨‍⚕️'][i]}
              </div>
              <div style={{ flex: 1, minWidth: 0 }}>
                <div style={{ fontSize: 11, fontWeight: 700, marginBottom: 1 }}>{doc.name}</div>
                <div style={{ fontSize: 9, color: '#64748B', marginBottom: 4 }}>{doc.specialty} · {doc.exp} exp</div>
                <div style={{ display: 'flex', alignItems: 'center', gap: 6 }}>
                  <div style={{ width: 6, height: 6, background: '#10B981', borderRadius: '50%' }} />
                  <span style={{ fontSize: 9, color: '#10B981', fontWeight: 600 }}>{doc.time}</span>
                </div>
              </div>
              <div>
                <button style={{
                  background: '#2563EB', color: 'white', border: 'none',
                  borderRadius: 20, padding: '7px 14px', fontSize: 10, fontWeight: 600,
                  cursor: 'pointer', boxShadow: '0 3px 10px rgba(37,99,235,0.4)',
                }}>
                  Book
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Bottom nav */}
      <div style={{ background: 'white', borderTop: '1px solid #E2E8F0', padding: '10px 0 20px', display: 'flex', justifyContent: 'space-around', boxShadow: '0 -4px 20px rgba(0,0,0,0.06)' }}>
        {[{icon: Home, label:'Home', active:true},{icon: Search, label:'Find'},{icon: Calendar, label:'My Appts'},{icon: User, label:'Profile'}].map(({icon:Icon, label, active}, i) => (
          <div key={i} style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', gap: 3 }}>
            <Icon size={18} color={active ? '#2563EB' : '#94A3B8'} />
            <span style={{ fontSize: 8, color: active ? '#2563EB' : '#94A3B8', fontWeight: active ? 700 : 400 }}>{label}</span>
          </div>
        ))}
      </div>
    </div>
  );
}

// ─── CONCEPT 3: Vital Hub ──────────────────────────────────────────────────
export function Concept3() {
  return (
    <div style={{
      background: '#FFF8F5', height: '100%', display: 'flex', flexDirection: 'column',
      fontFamily: 'Poppins, sans-serif', color: '#111827',
    }}>
      {/* Status bar */}
      <div style={{ height: 32, background: '#0D9488' }} />

      {/* Header */}
      <div style={{ background: '#0D9488', padding: '12px 16px 16px', color: 'white' }}>
        <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
          <div>
            <div style={{ fontSize: 10, opacity: 0.75, textTransform: 'uppercase', letterSpacing: '0.08em' }}>Vital Hub</div>
            <div style={{ fontSize: 16, fontWeight: 900, textTransform: 'uppercase', letterSpacing: '-0.02em' }}>HELLO, SALIM</div>
          </div>
          <div style={{ display: 'flex', gap: 8 }}>
            <div style={{ width: 32, height: 32, background: 'rgba(255,255,255,0.15)', borderRadius: 10, display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
              <Bell size={14} color="white" />
            </div>
            <div style={{ width: 32, height: 32, background: 'rgba(255,255,255,0.15)', borderRadius: 10, display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
              <Grid size={14} color="white" />
            </div>
          </div>
        </div>
        {/* Search */}
        <div style={{ background: 'rgba(255,255,255,0.15)', backdropFilter:'blur(10px)', border:'1px solid rgba(255,255,255,0.3)', borderRadius: 10, padding: '9px 14px', display: 'flex', alignItems: 'center', gap: 8, marginTop: 12 }}>
          <Search size={14} color="rgba(255,255,255,0.8)" />
          <span style={{ fontSize: 11, color: 'rgba(255,255,255,0.7)' }}>Search anything…</span>
        </div>
      </div>

      {/* AD BANNER */}
      <AdBannerConcept3 />

      {/* Category chips */}
      <div style={{ padding: '12px 16px 6px' }}>
        <div style={{ display: 'flex', gap: 6, flexWrap: 'wrap' }}>
          {['🔥 Hot Deals','🩺 Doctors','🏥 Clinics','💉 Vaccines','🧬 Labs'].map((label, i) => (
            <div key={i} style={{
              background: i === 0 ? '#F97316' : i === 1 ? '#0D9488' : 'white',
              color: i < 2 ? 'white' : '#374151',
              borderRadius: 8, padding: '5px 10px',
              fontSize: 9, fontWeight: 700,
              border: i >= 2 ? '1px solid #E5E7EB' : 'none',
              boxShadow: i === 0 ? '0 4px 12px rgba(249,115,22,0.4)' : i === 1 ? '0 4px 12px rgba(13,148,136,0.4)' : '0 1px 4px rgba(0,0,0,0.06)',
            }}>
              {label}
            </div>
          ))}
        </div>
      </div>

      {/* Doctor cards — high contrast */}
      <div style={{ padding: '8px 16px', flex: 1, overflow: 'hidden' }}>
        <div style={{ fontSize: 12, fontWeight: 800, textTransform: 'uppercase', letterSpacing: '0.04em', color: '#111827', marginBottom: 10 }}>
          Top Rated
        </div>
        <div style={{ display: 'flex', flexDirection: 'column', gap: 8 }}>
          {[
            { name: 'Dr. Nour Al-Deen', specialty: 'Internal Medicine', bg: 'linear-gradient(135deg, #0D9488, #14B8A6)', emoji: '👩‍⚕️', badge: '#F97316', badgeText: '⚡ Instant' },
            { name: 'Dr. Tariq Mansour', specialty: 'Cardiologist', bg: 'linear-gradient(135deg, #F97316, #FB923C)', emoji: '👨‍⚕️', badge: '#0D9488', badgeText: '✓ Verified' },
          ].map((doc, i) => (
            <div key={i} style={{
              background: doc.bg, borderRadius: 16, padding: '12px',
              display: 'flex', alignItems: 'center', gap: 12,
              boxShadow: '0 8px 24px rgba(0,0,0,0.15)',
            }}>
              <div style={{ width: 40, height: 40, background: 'rgba(255,255,255,0.25)', borderRadius: 14, display: 'flex', alignItems: 'center', justifyContent: 'center', fontSize: 22, flexShrink: 0 }}>
                {doc.emoji}
              </div>
              <div style={{ flex: 1, minWidth: 0 }}>
                <div style={{ fontSize: 11, fontWeight: 800, color: 'white', whiteSpace: 'nowrap', overflow: 'hidden', textOverflow: 'ellipsis' }}>{doc.name}</div>
                <div style={{ fontSize: 9, color: 'rgba(255,255,255,0.7)', marginBottom: 6 }}>{doc.specialty}</div>
                <div style={{ display: 'inline-flex', alignItems: 'center', gap: 4, background: doc.badge, borderRadius: 6, padding: '3px 8px' }}>
                  <span style={{ fontSize: 9, fontWeight: 700, color: 'white' }}>{doc.badgeText}</span>
                </div>
              </div>
              <div style={{ flexShrink: 0 }}>
                <div style={{ display: 'flex', alignItems: 'center', gap: 2, background: 'rgba(255,255,255,0.25)', borderRadius: 8, padding: '4px 8px', marginBottom: 4 }}>
                  <Star size={9} fill="white" color="white" />
                  <span style={{ fontSize: 10, fontWeight: 700, color: 'white' }}>4.9</span>
                </div>
                <button style={{ background: 'white', color: '#0D9488', border: 'none', borderRadius: 8, padding: '6px 12px', fontSize: 10, fontWeight: 800, cursor: 'pointer', width: '100%' }}>
                  Book
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Bottom nav */}
      <div style={{ background: 'white', borderTop: '2px solid #F3F4F6', padding: '10px 0 20px', display: 'flex', justifyContent: 'space-around' }}>
        {[{icon: Home, label:'Home', active:true},{icon: Search, label:'Explore'},{icon: Activity, label:'Health'},{icon: User, label:'Me'}].map(({icon:Icon, label, active}, i) => (
          <div key={i} style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', gap: 3 }}>
            <div style={{
              width: 32, height: 32, borderRadius: 10, display: 'flex', alignItems: 'center', justifyContent: 'center',
              background: active ? 'linear-gradient(135deg, #F97316, #0D9488)' : 'transparent',
            }}>
              <Icon size={16} color={active ? 'white' : '#9CA3AF'} />
            </div>
            <span style={{ fontSize: 8, color: active ? '#0D9488' : '#9CA3AF', fontWeight: active ? 800 : 400 }}>{label}</span>
          </div>
        ))}
      </div>
    </div>
  );
}
