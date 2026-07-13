import React, { useState } from 'react';
import { Concept1, Concept2, Concept3 } from './Concepts';
import VotingForm from './VotingForm';

const CONCEPTS = [
  {
    id: 1,
    name: 'التصميم الفاخر',
    tagline: 'داكن، راقٍ، تقني',
    accent: '#06B6D4',
    bg: 'linear-gradient(135deg, rgba(6,182,212,0.12) 0%, rgba(6,182,212,0.03) 100%)',
    border: 'rgba(6,182,212,0.25)',
    Component: Concept1,
    pill: { bg: 'rgba(6,182,212,0.15)', color: '#06B6D4' },
    colors: ['#0F172A', '#06B6D4', '#FFFFFF'],
    colorLabels: ['أزرق ليلي', 'أكوا إلكتريك', 'أبيض نقي'],
    tags: ['وضع داكن', 'بطاقات مسطحة', 'لكنات أكوا'],
  },
  {
    id: 2,
    name: 'المعيار الطبي',
    tagline: 'موثوق، سهل، مألوف',
    accent: '#2563EB',
    bg: 'linear-gradient(135deg, rgba(37,99,235,0.12) 0%, rgba(16,185,129,0.05) 100%)',
    border: 'rgba(37,99,235,0.25)',
    Component: Concept2,
    pill: { bg: 'rgba(37,99,235,0.15)', color: '#60A5FA' },
    colors: ['#2563EB', '#10B981', '#F0F9FF'],
    colorLabels: ['أزرق طبي', 'أخضر نعناعي', 'أبيض فاتح'],
    tags: ['وضع فاتح', 'أزرار بيضاوية', 'ظلال عميقة'],
  },
  {
    id: 3,
    name: 'فايتال هب',
    tagline: 'جريء، حيوي، نابض بالحياة',
    accent: '#F97316',
    bg: 'linear-gradient(135deg, rgba(13,148,136,0.12) 0%, rgba(249,115,22,0.05) 100%)',
    border: 'rgba(249,115,22,0.25)',
    Component: Concept3,
    pill: { bg: 'rgba(249,115,22,0.15)', color: '#FB923C' },
    colors: ['#0D9488', '#F97316', '#FFF8F5'],
    colorLabels: ['زيتي داكن', 'برتقالي مرجاني', 'أبيض دافئ'],
    tags: ['درجات دافئة', 'خط جريء', 'تباين عالٍ'],
  },
];

export default function App() {
  const [activeTab, setActiveTab] = useState('concepts');

  return (
    <div dir="rtl" lang="ar" style={{ minHeight: '100vh', background: '#080D1A' }}>

      {/* ── رأس الصفحة ─────────────────────────────────────────────── */}
      <header style={{
        borderBottom: '1px solid rgba(255,255,255,0.06)',
        background: 'rgba(8,13,26,0.95)',
        backdropFilter: 'blur(20px)',
        WebkitBackdropFilter: 'blur(20px)',
        position: 'sticky', top: 0, zIndex: 100,
      }}>
        <div style={{ maxWidth: 1400, margin: '0 auto', padding: '0 clamp(12px,4vw,24px)' }}>
          <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', flexWrap: 'wrap', gap: 8, minHeight: 64 }}>

            {/* الشعار */}
            <div style={{ display: 'flex', alignItems: 'center', gap: 12 }}>
              <div style={{
                width: 36, height: 36,
                background: 'linear-gradient(135deg, #06B6D4, #0D9488)',
                borderRadius: 10, display: 'flex', alignItems: 'center', justifyContent: 'center',
                fontSize: 18, boxShadow: '0 0 20px rgba(6,182,212,0.3)', flexShrink: 0,
              }}>⚕️</div>
              <div>
                <div style={{ color: 'white', fontWeight: 800, fontSize: 'clamp(12px,3vw,15px)', lineHeight: 1 }}>
                  مراجعة تصميم التطبيق
                </div>
                <div style={{ color: 'rgba(255,255,255,0.35)', fontSize: 10, marginTop: 2 }}>
                  عرض مفاهيم تجربة المستخدم · الجولة الأولى
                </div>
              </div>
            </div>

            {/* التبويبات */}
            <div style={{ display: 'flex', background: 'rgba(255,255,255,0.05)', borderRadius: 12, padding: 4, gap: 2 }}>
              {[
                { id: 'concepts', label: '📱 المفاهيم' },
                { id: 'vote',     label: '🗳️ التصويت' },
              ].map(tab => (
                <button
                  key={tab.id}
                  onClick={() => setActiveTab(tab.id)}
                  style={{
                    background: activeTab === tab.id ? 'rgba(6,182,212,0.2)' : 'transparent',
                    border:     activeTab === tab.id ? '1px solid rgba(6,182,212,0.3)' : '1px solid transparent',
                    borderRadius: 8,
                    padding: 'clamp(5px,2vw,7px) clamp(10px,3vw,18px)',
                    color:   activeTab === tab.id ? '#06B6D4' : 'rgba(255,255,255,0.45)',
                    cursor: 'pointer', fontSize: 'clamp(11px,2.5vw,13px)', fontWeight: 600, transition: 'all 0.2s',
                  }}
                >
                  {tab.label}
                </button>
              ))}
            </div>

            {/* حالة العرض */}
            <div style={{ display: 'flex', alignItems: 'center', gap: 8, background: 'rgba(16,185,129,0.1)', border: '1px solid rgba(16,185,129,0.2)', borderRadius: 20, padding: '6px 14px' }}>
              <div style={{ width: 6, height: 6, background: '#10B981', borderRadius: '50%', boxShadow: '0 0 6px #10B981', animation: 'pulse 2s ease infinite', flexShrink: 0 }} />
              <span style={{ color: '#10B981', fontSize: 'clamp(10px,2.5vw,12px)', fontWeight: 600 }}>عرض مباشر</span>
            </div>

          </div>
        </div>
      </header>

      {/* ── قسم المفاهيم ───────────────────────────────────────────── */}
      {activeTab === 'concepts' && (
        <main style={{ maxWidth: 1400, margin: '0 auto', padding: 'clamp(24px,5vw,48px) clamp(12px,4vw,24px)' }}>

          {/* عنوان القسم */}
          <div style={{ textAlign: 'center', marginBottom: 'clamp(32px,6vw,56px)' }}>
            <div style={{
              display: 'inline-flex', alignItems: 'center', gap: 8,
              background: 'rgba(6,182,212,0.08)', border: '1px solid rgba(6,182,212,0.2)',
              borderRadius: 20, padding: '6px 16px', marginBottom: 20,
            }}>
              <span style={{ color: '#06B6D4', fontSize: 12, fontWeight: 700 }}>٣ مفاهيم تصميمية</span>
            </div>
            <h1 style={{
              color: 'white', fontSize: 'clamp(24px,5vw,48px)', fontWeight: 900,
              margin: '0 0 16px', letterSpacing: '-0.02em', lineHeight: 1.2,
            }}>
              تطبيق حجز المواعيد الطبية<br />
              <span style={{ background: 'linear-gradient(90deg, #06B6D4, #10B981)', WebkitBackgroundClip: 'text', WebkitTextFillColor: 'transparent' }}>
                مراجعة تصميم تجربة المستخدم
              </span>
            </h1>
            <p style={{ color: 'rgba(255,255,255,0.45)', fontSize: 'clamp(13px,3vw,16px)', maxWidth: 600, margin: '0 auto', lineHeight: 1.8 }}>
              ثلاث هويات بصرية مميزة لمنظومة حجز المواعيد الطبية.
              يحاكي كل مفهوم دقة هاتف حقيقية بعرض ٣٧٥×٨١٢ مع بانر إعلاني يشغل ثلث الشاشة على الأقل.
            </p>
          </div>

          {/* ── ثلاثة نماذج للهاتف ─────────────────────────────────── */}
          <div style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(auto-fit, minmax(min(100%, 280px), 1fr))',
            gap: 'clamp(24px,5vw,40px)',
            justifyItems: 'center',
            alignItems: 'start',
          }}>
            {CONCEPTS.map((concept, idx) => {
              const { Component } = concept;
              return (
                <div key={concept.id} style={{ width: '100%', maxWidth: 360, display: 'flex', flexDirection: 'column', alignItems: 'center', gap: 24 }}>

                  {/* تسمية المفهوم */}
                  <div style={{ textAlign: 'center' }}>
                    <div style={{ display: 'inline-flex', alignItems: 'center', gap: 6, background: concept.pill.bg, borderRadius: 20, padding: '4px 14px', marginBottom: 10 }}>
                      <span style={{ color: concept.accent, fontSize: 11, fontWeight: 700 }}>المفهوم {concept.id}</span>
                    </div>
                    <div style={{ color: 'white', fontSize: 'clamp(15px,3vw,18px)', fontWeight: 800 }}>{concept.name}</div>
                    <div style={{ color: 'rgba(255,255,255,0.4)', fontSize: 12, marginTop: 4 }}>{concept.tagline}</div>
                    {/* ألوان */}
                    <div style={{ display: 'flex', gap: 8, justifyContent: 'center', marginTop: 12 }}>
                      {concept.colors.map((c, i) => (
                        <div key={i} title={concept.colorLabels[i]} style={{
                          width: 22, height: 22, borderRadius: 6, background: c,
                          border: '2px solid rgba(255,255,255,0.15)',
                          boxShadow: `0 0 8px ${c}55`,
                        }} />
                      ))}
                    </div>
                  </div>

                  {/* إطار الهاتف */}
                  <div className="phone-frame" style={{
                    width: '100%', maxWidth: 320,
                    aspectRatio: '375 / 812',
                    background: 'linear-gradient(135deg, #1e293b 0%, #0f172a 50%, #1e293b 100%)',
                    border: `1px solid ${concept.border}`,
                    boxShadow: `0 0 0 1px ${concept.border}, 0 40px 100px -20px rgba(0,0,0,0.9), 0 0 60px -10px ${concept.accent}33`,
                  }}>
                    {/* شق الكاميرا */}
                    <div style={{ position: 'absolute', top: 0, left: '50%', transform: 'translateX(-50%)', width: 110, height: 30, background: '#0F172A', borderRadius: '0 0 18px 18px', zIndex: 10, boxShadow: 'inset 0 -3px 6px rgba(0,0,0,0.4)' }} />
                    {/* أزرار جانبية */}
                    <div style={{ position: 'absolute', left: -3, top: 100, width: 3, height: 50, background: 'rgba(255,255,255,0.15)', borderRadius: '2px 0 0 2px' }} />
                    <div style={{ position: 'absolute', left: -3, top: 170, width: 3, height: 35, background: 'rgba(255,255,255,0.15)', borderRadius: '2px 0 0 2px' }} />
                    <div style={{ position: 'absolute', right: -3, top: 120, width: 3, height: 60, background: 'rgba(255,255,255,0.1)', borderRadius: '0 2px 2px 0' }} />

                    <div className="phone-screen" style={{ borderRadius: 30 }}>
                      <Component />
                    </div>
                  </div>

                  {/* وسوم الميزات */}
                  <div style={{ display: 'flex', flexWrap: 'wrap', gap: 6, justifyContent: 'center' }}>
                    {concept.tags.map(tag => (
                      <span key={tag} style={{
                        background: `${concept.accent}15`,
                        color: concept.accent, border: `1px solid ${concept.accent}30`,
                        borderRadius: 20, padding: '3px 10px', fontSize: 10, fontWeight: 600,
                      }}>{tag}</span>
                    ))}
                  </div>

                  {/* زر التصويت */}
                  <button
                    onClick={() => setActiveTab('vote')}
                    style={{
                      background: concept.bg, border: `1px solid ${concept.border}`,
                      borderRadius: 12, padding: '10px 24px', color: 'white',
                      cursor: 'pointer', fontSize: 'clamp(12px,3vw,13px)', fontWeight: 700,
                      transition: 'all 0.2s', width: '100%',
                    }}
                  >
                    ← صوّت على العناصر
                  </button>
                </div>
              );
            })}
          </div>

          {/* فاصل */}
          <div style={{ textAlign: 'center', margin: 'clamp(40px,8vw,64px) 0 clamp(32px,6vw,48px)' }}>
            <div style={{ display: 'inline-flex', alignItems: 'center', gap: 16 }}>
              <div style={{ height: 1, width: 80, background: 'rgba(255,255,255,0.08)' }} />
              <span style={{ color: 'rgba(255,255,255,0.25)', fontSize: 13 }}>أدلِ بصوتك أدناه</span>
              <div style={{ height: 1, width: 80, background: 'rgba(255,255,255,0.08)' }} />
            </div>
          </div>

          {/* نموذج التصويت المدمج */}
          <VotingForm />
        </main>
      )}

      {/* ── قسم التصويت (التبويب) ──────────────────────────────────── */}
      {activeTab === 'vote' && (
        <main style={{ maxWidth: 1400, margin: '0 auto', padding: 'clamp(24px,5vw,48px) clamp(12px,4vw,24px)' }}>
          <div style={{ textAlign: 'center', marginBottom: 40 }}>
            <h2 style={{ color: 'white', fontSize: 'clamp(24px,5vw,36px)', fontWeight: 900, margin: '0 0 12px' }}>
              أدلِ بصوتك
            </h2>
            <p style={{ color: 'rgba(255,255,255,0.45)', fontSize: 'clamp(13px,3vw,15px)' }}>
              اختر التوجه التصميمي المفضل لكل بُعد.
            </p>
          </div>
          <VotingForm />
        </main>
      )}

      {/* ── تذييل الصفحة ───────────────────────────────────────────── */}
      <footer style={{ borderTop: '1px solid rgba(255,255,255,0.05)', padding: '24px', textAlign: 'center' }}>
        <p style={{ color: 'rgba(255,255,255,0.2)', fontSize: 12, margin: 0 }}>
          تطبيق حجز المواعيد الطبية · مراجعة تصميم تجربة المستخدم · عرض الفريق
        </p>
      </footer>
    </div>
  );
}
