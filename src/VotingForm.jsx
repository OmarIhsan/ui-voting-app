import React, { useState } from 'react';
import { CheckCircle, Send, RotateCcw, ChevronDown } from 'lucide-react';

/* ═══════════════════════════════════════════════════════════════
   معاينات مرئية لكل خيار
═══════════════════════════════════════════════════════════════ */

/* ── اسم التطبيق ── */
const BrandPreview = ({ name, color, icon, bg }) => (
  <div style={{
    display: 'inline-flex', alignItems: 'center', gap: 6,
    background: bg, borderRadius: 10, padding: '6px 12px',
    border: `1px solid ${color}40`, flexShrink: 0,
    minWidth: 90,
  }}>
    <span style={{ fontSize: 14 }}>{icon}</span>
    <span style={{ color, fontWeight: 800, fontSize: 13, whiteSpace: 'nowrap' }}>{name}</span>
  </div>
);

/* ── نظام الألوان ── */
const ColorPreview = ({ colors, bg, label }) => (
  <div style={{
    background: bg, borderRadius: 10, overflow: 'hidden',
    width: 110, flexShrink: 0, border: '1px solid rgba(255,255,255,0.1)',
  }}>
    {/* شريط ألوان */}
    <div style={{ display: 'flex', height: 14 }}>
      {colors.map((c, i) => (
        <div key={i} style={{ flex: 1, background: c }} />
      ))}
    </div>
    {/* محاكاة صغيرة للتطبيق */}
    <div style={{ padding: '6px 8px' }}>
      <div style={{ background: colors[0], borderRadius: 4, height: 8, marginBottom: 4, width: '70%' }} />
      <div style={{ display: 'flex', gap: 4 }}>
        <div style={{ background: colors[1], borderRadius: 3, height: 6, flex: 1 }} />
        <div style={{ background: colors[2] || 'rgba(255,255,255,0.3)', borderRadius: 3, height: 6, flex: 1 }} />
      </div>
      <div style={{ marginTop: 4, display: 'flex', gap: 3 }}>
        {[1,2,3].map(i => <div key={i} style={{ background: 'rgba(255,255,255,0.12)', borderRadius: 2, height: 4, flex: 1 }} />)}
      </div>
    </div>
  </div>
);

/* ── أسلوب الخط ── */
const TypographyPreview = ({ text, fontFamily, weight, style: extraStyle }) => (
  <div style={{
    background: 'rgba(255,255,255,0.05)', borderRadius: 10,
    padding: '8px 12px', border: '1px solid rgba(255,255,255,0.1)',
    flexShrink: 0, minWidth: 100, textAlign: 'center',
    ...extraStyle,
  }}>
    <div style={{
      fontFamily, fontWeight: weight, fontSize: 15,
      color: '#06B6D4', lineHeight: 1.2,
    }}>
      مرحباً
    </div>
    <div style={{
      fontFamily, fontWeight: Math.max(weight - 200, 300),
      fontSize: 9, color: 'rgba(255,255,255,0.4)', marginTop: 3,
    }}>
      {text}
    </div>
  </div>
);

/* ── أسلوب البانر ── */
const BannerPreview = ({ type }) => {
  const base = {
    background: 'rgba(255,255,255,0.04)', borderRadius: 10,
    padding: '8px', border: '1px solid rgba(255,255,255,0.1)',
    width: 110, flexShrink: 0,
  };

  if (type === 'edge_to_edge') return (
    <div style={base}>
      <div style={{ background: 'linear-gradient(90deg,#06B6D4,#0D9488)', borderRadius: 5, height: 30, marginBottom: 4, display: 'flex', alignItems: 'center', padding: '0 6px' }}>
        <div style={{ background: 'rgba(255,255,255,0.8)', borderRadius: 2, height: 5, width: '60%' }} />
      </div>
      {[1,2].map(i => <div key={i} style={{ background: 'rgba(255,255,255,0.08)', borderRadius: 4, height: 10, marginBottom: 3 }} />)}
    </div>
  );

  if (type === 'floating_shadow') return (
    <div style={base}>
      <div style={{ background: 'linear-gradient(135deg,#2563EB,#10B981)', borderRadius: 8, height: 30, margin: '2px 4px 6px', boxShadow: '0 4px 12px rgba(0,0,0,0.5)', display: 'flex', alignItems: 'center', padding: '0 6px' }}>
        <div style={{ background: 'rgba(255,255,255,0.8)', borderRadius: 2, height: 5, width: '55%' }} />
      </div>
      {[1,2].map(i => <div key={i} style={{ background: 'rgba(255,255,255,0.08)', borderRadius: 4, height: 10, marginBottom: 3 }} />)}
    </div>
  );

  // carousel
  return (
    <div style={base}>
      <div style={{ position: 'relative', height: 30, borderRadius: 5, overflow: 'hidden', marginBottom: 4 }}>
        <div style={{ position: 'absolute', inset: 0, background: 'linear-gradient(90deg,#F97316,#0D9488)', display: 'flex', alignItems: 'center', padding: '0 6px' }}>
          <div style={{ background: 'rgba(255,255,255,0.8)', borderRadius: 2, height: 5, width: '50%' }} />
        </div>
      </div>
      <div style={{ display: 'flex', gap: 4, justifyContent: 'center', marginBottom: 4 }}>
        {[1,2,3].map(i => <div key={i} style={{ width: i===1?14:6, height: 4, borderRadius: 2, background: i===1?'#06B6D4':'rgba(255,255,255,0.2)' }} />)}
      </div>
      {[1].map(i => <div key={i} style={{ background: 'rgba(255,255,255,0.08)', borderRadius: 4, height: 10 }} />)}
    </div>
  );
};

/* ── أسلوب البطاقة ── */
const CardPreview = ({ type }) => {
  const base = {
    background: 'rgba(255,255,255,0.04)', borderRadius: 10,
    padding: '8px', border: '1px solid rgba(255,255,255,0.1)',
    width: 110, flexShrink: 0,
    display: 'flex', flexDirection: 'column', gap: 5,
  };

  const MiniCard = ({ style, children }) => (
    <div style={{ borderRadius: 7, padding: '6px 8px', display: 'flex', alignItems: 'center', gap: 5, ...style }}>
      <div style={{ width: 18, height: 18, borderRadius: 5, background: 'rgba(6,182,212,0.4)', flexShrink: 0, display:'flex', alignItems:'center', justifyContent:'center', fontSize:10 }}>👨‍⚕️</div>
      <div style={{ flex: 1, minWidth: 0 }}>
        <div style={{ background: 'rgba(255,255,255,0.6)', borderRadius: 2, height: 4, marginBottom: 3, width: '80%' }} />
        <div style={{ background: 'rgba(255,255,255,0.25)', borderRadius: 2, height: 3, width: '55%' }} />
      </div>
    </div>
  );

  if (type === 'flat_minimal') return (
    <div style={base}>
      <MiniCard style={{ border: '1px solid rgba(255,255,255,0.15)', background: 'transparent' }} />
      <MiniCard style={{ border: '1px solid rgba(255,255,255,0.08)', background: 'transparent' }} />
    </div>
  );

  if (type === 'soft_elevated') return (
    <div style={base}>
      <MiniCard style={{ background: 'rgba(255,255,255,0.08)', boxShadow: '0 4px 12px rgba(0,0,0,0.4)' }} />
      <MiniCard style={{ background: 'rgba(255,255,255,0.05)', boxShadow: '0 2px 8px rgba(0,0,0,0.3)' }} />
    </div>
  );

  // high contrast
  return (
    <div style={base}>
      <MiniCard style={{ background: 'linear-gradient(90deg,#06B6D4,#0D9488)' }} />
      <MiniCard style={{ background: 'linear-gradient(90deg,#2563EB,#10B981)' }} />
    </div>
  );
};

/* ═══════════════════════════════════════════════════════════════
   خريطة المعاينات — تربط كل قيمة خيار بمكوّن معاينة
═══════════════════════════════════════════════════════════════ */
const OPTION_PREVIEWS = {
  /* اسم التطبيق */
  'brandName.moed':       <BrandPreview name="موعد"        color="#06B6D4" icon="📅" bg="rgba(6,182,212,0.08)"   />,
  'brandName.fawricare':  <BrandPreview name="فوري كير"     color="#F97316" icon="⚡" bg="rgba(249,115,22,0.08)"  />,
  'brandName.shifa':      <BrandPreview name="شبكة الشفاء"  color="#10B981" icon="🌿" bg="rgba(16,185,129,0.08)"  />,
  'brandName.nabd':       <BrandPreview name="نبض"          color="#EC4899" icon="💓" bg="rgba(236,72,153,0.08)"  />,
  'brandName.medlink':    <BrandPreview name="ميد لينك"     color="#8B5CF6" icon="🔗" bg="rgba(139,92,246,0.08)"  />,

  /* نظام الألوان */
  'colorScheme.navy_aqua':  <ColorPreview colors={['#0F172A','#06B6D4','#E2E8F0']} bg="rgba(6,182,212,0.05)"   />,
  'colorScheme.blue_mint':  <ColorPreview colors={['#2563EB','#10B981','#F0F9FF']} bg="rgba(37,99,235,0.05)"   />,
  'colorScheme.teal_coral': <ColorPreview colors={['#0D9488','#F97316','#FFF8F5']} bg="rgba(249,115,22,0.05)"  />,

  /* أسلوب الخط */
  'typography.sleek_tech':      <TypographyPreview text="Cairo / Inter"   fontFamily="'Cairo', sans-serif"   weight={600} style={{}} />,
  'typography.soft_accessible': <TypographyPreview text="Almarai"         fontFamily="'Cairo', sans-serif"   weight={400} style={{ letterSpacing:'0.02em' }} />,
  'typography.bold_vibrant':    <TypographyPreview text="Changa / Poppins" fontFamily="'Cairo', sans-serif"  weight={900} style={{ letterSpacing:'-0.02em' }} />,

  /* أسلوب البانر */
  'adBannerStyle.edge_to_edge':    <BannerPreview type="edge_to_edge"    />,
  'adBannerStyle.floating_shadow': <BannerPreview type="floating_shadow" />,
  'adBannerStyle.carousel':        <BannerPreview type="carousel"        />,

  /* أسلوب البطاقة */
  'cardStyle.flat_minimal':       <CardPreview type="flat_minimal"       />,
  'cardStyle.soft_elevated':      <CardPreview type="soft_elevated"      />,
  'cardStyle.high_contrast_bg':   <CardPreview type="high_contrast_bg"   />,
};

/* ═══════════════════════════════════════════════════════════════
   إعداد النموذج
═══════════════════════════════════════════════════════════════ */
const FORM_CONFIG = [
  {
    id: 'brandName',
    group: 'اسم التطبيق',
    emoji: '🏷️',
    description: 'أي اسم يعبّر بشكل أفضل عن هوية المنصة الطبية؟',
    options: [
      { value: 'moed',      label: 'موعد',        hint: 'عربي — يعني "الموعد"' },
      { value: 'fawricare', label: 'فوري كير',     hint: 'دمج كلمة "سريع" و"رعاية"' },
      { value: 'shifa',     label: 'شبكة الشفاء', hint: 'عربي — يعني "الشفاء"' },
      { value: 'nabd',      label: 'نبض',          hint: 'عربي — يعني "النبضة"' },
      { value: 'medlink',   label: 'ميد لينك',     hint: 'عالمي — "الرابط الطبي"' },
    ],
  },
  {
    id: 'colorScheme',
    group: 'نظام الألوان الرئيسي',
    emoji: '🎨',
    description: 'أي لوحة ألوان تتماشى مع رؤيتك للعلامة التجارية؟',
    options: [
      { value: 'navy_aqua',  label: 'أزرق داكن وأكوا',      hint: 'المفهوم 1 — تقني وراقي' },
      { value: 'blue_mint',  label: 'أزرق كلاسيكي ونعناعي', hint: 'المفهوم 2 — موثوق وطبي' },
      { value: 'teal_coral', label: 'زيتي ومرجاني',          hint: 'المفهوم 3 — حيوي وجذاب' },
    ],
  },
  {
    id: 'typography',
    group: 'أسلوب الخط',
    emoji: '✍️',
    description: 'اختر شخصية الخط المناسبة لواجهة المستخدم.',
    options: [
      { value: 'sleek_tech',      label: 'أنيق وتقني',       hint: 'Cairo / Inter — نظيف وعصري' },
      { value: 'soft_accessible', label: 'ناعم وسهل القراءة', hint: 'Almarai — ودي ومقروء' },
      { value: 'bold_vibrant',    label: 'جريء وحيوي',       hint: 'Changa / Poppins — ديناميكي وقوي' },
    ],
  },
  {
    id: 'adBannerStyle',
    group: 'أسلوب البانر الإعلاني',
    emoji: '📢',
    description: 'كيف يجب أن تُعرض المحتويات الترويجية في الشاشة الرئيسية؟',
    options: [
      { value: 'edge_to_edge',    label: 'بطاقة ممتدة بالكامل', hint: 'تكامل غامر بعرض كامل' },
      { value: 'floating_shadow', label: 'عائمة بظل ثقيل',       hint: 'بطاقة مرفوعة تلفت الانتباه' },
      { value: 'carousel',        label: 'شريط دوّار',            hint: 'إعلانات متعددة تتناوب' },
    ],
  },
  {
    id: 'cardStyle',
    group: 'أسلوب البطاقة',
    emoji: '🃏',
    description: 'الشكل المرئي لبطاقات الأطباء والعيادات.',
    options: [
      { value: 'flat_minimal',     label: 'حدود بسيطة وخفيفة',         hint: 'خطوط نظيفة بلا ضوضاء' },
      { value: 'soft_elevated',    label: 'ظلال ناعمة مرفوعة',          hint: 'عمق وأبعاد بصرية' },
      { value: 'high_contrast_bg', label: 'خلفيات ملوّنة عالية التباين', hint: 'بطاقات جريئة ومعبّرة' },
    ],
  },
];

/* ═══════════════════════════════════════════════════════════════
   المكوّن الرئيسي
═══════════════════════════════════════════════════════════════ */
export default function VotingForm() {
  const [selections, setSelections] = useState({});
  const [submitted,  setSubmitted]  = useState(false);
  const [expanded,   setExpanded]   = useState({});

  const totalFields = FORM_CONFIG.length;
  const filled      = Object.keys(selections).length;
  const progress    = (filled / totalFields) * 100;

  const handleChange   = (fieldId, value) => setSelections(prev => ({ ...prev, [fieldId]: value }));
  const toggleExpanded = (id) => setExpanded(prev => ({ ...prev, [id]: !prev[id] }));

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log('🗳️ نتيجة التصويت:', JSON.stringify({
      timestamp: new Date().toISOString(),
      voter: 'عضو فريق',
      selections,
      completionPercentage: `${Math.round(progress)}%`,
    }, null, 2));
    setSubmitted(true);
  };

  const handleReset = () => { setSelections({}); setSubmitted(false); };

  /* ── شاشة الشكر ─── */
  if (submitted) {
    return (
      <div className="glass-panel" style={{ maxWidth: 600, margin: '0 auto', padding: '2rem', textAlign: 'center', direction: 'rtl' }}>
        <div style={{
          width: 80, height: 80,
          background: 'linear-gradient(135deg, #06B6D4, #0D9488)',
          borderRadius: '50%', display: 'flex', alignItems: 'center', justifyContent: 'center',
          margin: '0 auto 20px', animation: 'pulse-glow 2s ease infinite',
        }}>
          <CheckCircle size={40} color="white" />
        </div>
        <h3 style={{ color: 'white', fontSize: 'clamp(18px,4vw,24px)', fontWeight: 800, marginBottom: 8 }}>
          تم إرسال تصويتك! 🎉
        </h3>
        <p style={{ color: 'rgba(255,255,255,0.55)', fontSize: 14, marginBottom: 8 }}>
          تم حفظ اختياراتك بنجاح.
        </p>
        <div style={{ background: 'rgba(6,182,212,0.08)', border: '1px solid rgba(6,182,212,0.2)', borderRadius: 12, padding: '16px', margin: '20px 0', textAlign: 'right' }}>
          <div style={{ color: '#06B6D4', fontSize: 11, fontWeight: 700, marginBottom: 10 }}>اختياراتك</div>
          {Object.entries(selections).map(([key, value]) => {
            const field = FORM_CONFIG.find(f => f.id === key);
            const opt   = field?.options.find(o => o.value === value);
            return (
              <div key={key} style={{ display: 'flex', justifyContent: 'space-between', flexWrap: 'wrap', gap: 4, padding: '6px 0', borderBottom: '1px solid rgba(255,255,255,0.05)' }}>
                <span style={{ color: 'rgba(255,255,255,0.5)', fontSize: 12 }}>{field?.emoji} {field?.group}</span>
                <span style={{ color: 'white', fontSize: 12, fontWeight: 600 }}>{opt?.label}</span>
              </div>
            );
          })}
        </div>
        <button onClick={handleReset} style={{
          background: 'rgba(255,255,255,0.08)', color: 'white', border: '1px solid rgba(255,255,255,0.15)',
          borderRadius: 12, padding: '12px 24px', cursor: 'pointer',
          display: 'inline-flex', alignItems: 'center', gap: 8, fontSize: 14, fontWeight: 600,
        }}>
          <RotateCcw size={16} /> التصويت مجدداً
        </button>
      </div>
    );
  }

  /* ── النموذج ─── */
  return (
    <form onSubmit={handleSubmit} style={{ maxWidth: 680, margin: '0 auto', width: '100%', direction: 'rtl' }}>

      {/* رأس النموذج */}
      <div className="glass-panel" style={{ padding: 'clamp(16px,4vw,24px)', marginBottom: 24 }}>
        <div style={{ display: 'flex', alignItems: 'flex-start', justifyContent: 'space-between', flexWrap: 'wrap', gap: 16, marginBottom: 16 }}>
          <div style={{ flex: 1, minWidth: 0 }}>
            <div style={{ display: 'flex', alignItems: 'center', gap: 8, marginBottom: 6 }}>
              <div style={{ width: 8, height: 8, background: '#06B6D4', borderRadius: '50%', boxShadow: '0 0 8px #06B6D4', flexShrink: 0 }} />
              <span style={{ color: '#06B6D4', fontSize: 11, fontWeight: 700 }}>مراجعة التصميم · الجولة الأولى</span>
            </div>
            <h2 style={{ color: 'white', fontSize: 'clamp(18px,4vw,22px)', fontWeight: 800, margin: '0 0 6px' }}>تصويت أعضاء الفريق</h2>
            <p style={{ color: 'rgba(255,255,255,0.45)', fontSize: 13, margin: 0 }}>
              اختر تفضيلاتك لكل بُعد تصميمي بشكل مستقل.
            </p>
          </div>
          <div style={{ textAlign: 'center', flexShrink: 0 }}>
            <div style={{ fontSize: 'clamp(22px,5vw,28px)', fontWeight: 900, color: 'white' }}>
              {filled}<span style={{ fontSize: 16, color: 'rgba(255,255,255,0.3)' }}>/{totalFields}</span>
            </div>
            <div style={{ fontSize: 10, color: 'rgba(255,255,255,0.4)', fontWeight: 600 }}>مُجاب</div>
          </div>
        </div>
        {/* شريط التقدم */}
        <div style={{ background: 'rgba(255,255,255,0.06)', borderRadius: 100, height: 6, overflow: 'hidden' }}>
          <div style={{
            height: '100%', borderRadius: 100,
            background: 'linear-gradient(90deg, #0D9488, #06B6D4)',
            width: `${progress}%`, transition: 'width 0.4s cubic-bezier(0.4,0,0.2,1)',
            boxShadow: '0 0 12px rgba(6,182,212,0.6)',
          }} />
        </div>
      </div>

      {/* الحقول */}
      <div style={{ display: 'flex', flexDirection: 'column', gap: 12 }}>
        {FORM_CONFIG.map((field, idx) => {
          const isOpen      = expanded[field.id] !== false;
          const selected    = selections[field.id];
          const selectedOpt = field.options.find(o => o.value === selected);

          return (
            <div key={field.id} className="glass-panel" style={{ overflow: 'hidden' }}>

              {/* رأس الحقل — قابل للطي */}
              <button
                type="button"
                onClick={() => toggleExpanded(field.id)}
                style={{
                  width: '100%', background: 'none', border: 'none', cursor: 'pointer',
                  padding: 'clamp(12px,3vw,16px) clamp(14px,4vw,20px)',
                  display: 'flex', alignItems: 'center', gap: 12,
                  textAlign: 'right', direction: 'rtl',
                }}
              >
                <div style={{
                  width: 36, height: 36, borderRadius: 10, flexShrink: 0,
                  background: selected ? 'rgba(6,182,212,0.15)' : 'rgba(255,255,255,0.06)',
                  border: `1px solid ${selected ? 'rgba(6,182,212,0.3)' : 'rgba(255,255,255,0.08)'}`,
                  display: 'flex', alignItems: 'center', justifyContent: 'center', fontSize: 18,
                  transition: 'all 0.2s',
                }}>
                  {selected ? '✅' : field.emoji}
                </div>
                <div style={{ flex: 1, minWidth: 0, textAlign: 'right' }}>
                  <div style={{ display: 'flex', alignItems: 'center', gap: 8, flexWrap: 'wrap' }}>
                    <span style={{ color: 'rgba(255,255,255,0.4)', fontSize: 10, fontWeight: 700 }}>
                      #{String(idx + 1).padStart(2, '0')}
                    </span>
                    <span style={{ color: 'white', fontSize: 'clamp(12px,3vw,13px)', fontWeight: 700 }}>
                      {field.group}
                    </span>
                    {selected && (
                      <span style={{
                        background: 'rgba(6,182,212,0.15)', color: '#06B6D4',
                        borderRadius: 20, padding: '2px 8px', fontSize: 10, fontWeight: 600,
                      }}>
                        {selectedOpt?.label}
                      </span>
                    )}
                  </div>
                  <div style={{ color: 'rgba(255,255,255,0.35)', fontSize: 11, marginTop: 2 }}>
                    {field.description}
                  </div>
                </div>
                <ChevronDown
                  size={16} color="rgba(255,255,255,0.3)"
                  style={{ flexShrink: 0, transform: isOpen ? 'rotate(180deg)' : 'rotate(0)', transition: 'transform 0.2s' }}
                />
              </button>

              {/* الخيارات مع المعاينات */}
              {isOpen && (
                <div style={{
                  padding: '0 clamp(12px,4vw,16px) 16px',
                  display: 'flex', flexDirection: 'column', gap: 8,
                  borderTop: '1px solid rgba(255,255,255,0.05)',
                }}>
                  {field.options.map((option, optIdx) => {
                    const previewKey = `${field.id}.${option.value}`;
                    const preview    = OPTION_PREVIEWS[previewKey];
                    const isChecked  = selections[field.id] === option.value;

                    return (
                      <label
                        key={option.value}
                        className="vote-label"
                        style={{
                          marginTop: optIdx === 0 ? 12 : 0,
                          direction: 'rtl',
                          alignItems: 'center',
                          /* highlight selected */
                          background: isChecked ? 'rgba(6,182,212,0.08)' : undefined,
                          borderColor: isChecked ? 'rgba(6,182,212,0.3)' : undefined,
                          borderRadius: 12,
                          padding: '10px 12px',
                          transition: 'all 0.2s',
                        }}
                      >
                        {/* راديو */}
                        <input
                          type="radio"
                          name={field.id}
                          value={option.value}
                          className="vote-radio"
                          checked={isChecked}
                          onChange={() => handleChange(field.id, option.value)}
                        />

                        {/* نص الخيار */}
                        <div style={{ flex: 1, minWidth: 0, textAlign: 'right' }}>
                          <div style={{ color: 'white', fontSize: 'clamp(12px,3vw,13px)', fontWeight: 600 }}>
                            {option.label}
                          </div>
                          {option.hint && (
                            <div style={{ color: 'rgba(255,255,255,0.38)', fontSize: 11, marginTop: 1 }}>
                              {option.hint}
                            </div>
                          )}
                        </div>

                        {/* المعاينة المرئية */}
                        {preview && (
                          <div style={{
                            flexShrink: 0,
                            opacity: isChecked ? 1 : 0.65,
                            transform: isChecked ? 'scale(1.04)' : 'scale(1)',
                            transition: 'all 0.2s',
                            filter: isChecked ? 'none' : 'saturate(0.7)',
                          }}>
                            {preview}
                          </div>
                        )}
                      </label>
                    );
                  })}
                </div>
              )}
            </div>
          );
        })}
      </div>

      {/* زر الإرسال */}
      <div style={{ marginTop: 20, marginBottom: 40 }}>
        <button
          type="submit"
          disabled={filled < totalFields}
          style={{
            width: '100%', padding: 'clamp(14px,3vw,16px)', borderRadius: 16, border: 'none',
            background: filled === totalFields
              ? 'linear-gradient(135deg, #06B6D4 0%, #0891B2 50%, #0D9488 100%)'
              : 'rgba(255,255,255,0.06)',
            color: filled === totalFields ? 'white' : 'rgba(255,255,255,0.25)',
            fontSize: 'clamp(13px,3vw,15px)', fontWeight: 800,
            cursor: filled === totalFields ? 'pointer' : 'not-allowed',
            display: 'flex', alignItems: 'center', justifyContent: 'center', gap: 10,
            transition: 'all 0.3s',
            boxShadow: filled === totalFields ? '0 8px 32px rgba(6,182,212,0.4)' : 'none',
          }}
        >
          <Send size={18} style={{ transform: 'scaleX(-1)' }} />
          {filled === totalFields
            ? 'إرسال تصويتي'
            : `أكمل ${totalFields - filled} اختيار${totalFields - filled !== 1 ? 'ات' : ''} أخرى`}
        </button>
        {filled < totalFields && (
          <p style={{ textAlign: 'center', color: 'rgba(255,255,255,0.25)', fontSize: 12, marginTop: 10 }}>
            يجب الإجابة على جميع الفئات الـ {totalFields} قبل الإرسال.
          </p>
        )}
      </div>
    </form>
  );
}
