import React, { useEffect, useRef } from 'react';

const ECard: React.FC = () => {
  const cardRef = useRef<HTMLDivElement>(null);
  const ambientRef = useRef<HTMLDivElement>(null);
  const sparklesRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    // Generate ambient floating particles
    const ambient = ambientRef.current;
    if (ambient) {
      ambient.innerHTML = '';
      for (let i = 0; i < 25; i++) {
        const p = document.createElement('div');
        p.className = 'ecard-particle';
        p.style.left = Math.random() * 100 + '%';
        p.style.animationDelay = Math.random() * 6 + 's';
        p.style.animationDuration = (4 + Math.random() * 4) + 's';
        const size = (1 + Math.random() * 3) + 'px';
        p.style.width = size;
        p.style.height = size;
        ambient.appendChild(p);
      }
    }

    // Generate sparkle dots along card edges
    const sparkles = sparklesRef.current;
    if (sparkles) {
      sparkles.innerHTML = '';
      const positions = [
        ...Array.from({ length: 6 }, () => ({ x: Math.random() * 100, y: Math.random() * 3 })),
        ...Array.from({ length: 6 }, () => ({ x: Math.random() * 100, y: 97 + Math.random() * 3 })),
        ...Array.from({ length: 4 }, () => ({ x: Math.random() * 3, y: Math.random() * 100 })),
        ...Array.from({ length: 4 }, () => ({ x: 97 + Math.random() * 3, y: Math.random() * 100 })),
      ];
      positions.forEach(pos => {
        const s = document.createElement('div');
        s.className = 'ecard-sparkle';
        s.style.left = pos.x + '%';
        s.style.top = pos.y + '%';
        s.style.animationDelay = Math.random() * 3 + 's';
        s.style.animationDuration = (2 + Math.random() * 2) + 's';
        sparkles.appendChild(s);
      });
    }

    // Subtle 3D tilt on hover
    const card = cardRef.current;
    if (card && window.matchMedia('(hover:hover)').matches) {
      const onMove = (e: MouseEvent) => {
        const r = card.getBoundingClientRect();
        const x = (e.clientX - r.left) / r.width - 0.5;
        const y = (e.clientY - r.top) / r.height - 0.5;
        card.style.transform = `rotateY(${x * 6}deg) rotateX(${-y * 6}deg)`;
      };
      const onLeave = () => {
        card.style.transform = 'rotateY(0) rotateX(0)';
      };
      card.addEventListener('mousemove', onMove);
      card.addEventListener('mouseleave', onLeave);
      return () => {
        card.removeEventListener('mousemove', onMove);
        card.removeEventListener('mouseleave', onLeave);
      };
    }
  }, []);

  const saveContact = () => {
    const vcard = `BEGIN:VCARD
VERSION:3.0
FN:Khiev Chendamony
ORG:Phallbun
TITLE:Founder
TEL;TYPE=CELL:+41779288133
EMAIL:Chendabelle@gmail.com
URL:https://www.phallbun.ch
X-SOCIALPROFILE;TYPE=instagram:https://instagram.com/phailbun
ADR;TYPE=WORK:;;;;;;Switzerland
NOTE:Phallbun - Luxury Beauty & Lifestyle
END:VCARD`;
    const blob = new Blob([vcard], { type: 'text/vcard' });
    const url = URL.createObjectURL(blob);
    const a = document.createElement('a');
    a.href = url;
    a.download = 'Khiev_Chendamony_Phallbun.vcf';
    a.click();
    URL.revokeObjectURL(url);
  };

  return (
    <>
      <style>{`
        .ecard-page {
          min-height: 100vh;
          display: flex;
          align-items: center;
          justify-content: center;
          background: #0a1f1a;
          font-family: 'Cormorant Garamond', serif;
          overflow-x: hidden;
          padding: 100px 20px 60px;
          position: relative;
        }

        .ecard-ambient {
          position: fixed;
          inset: 0;
          pointer-events: none;
          overflow: hidden;
          z-index: 0;
        }

        .ecard-particle {
          position: absolute;
          width: 3px; height: 3px;
          background: #c9a84c;
          border-radius: 50%;
          opacity: 0;
          animation: ecard-float-up 6s infinite ease-out;
        }

        @keyframes ecard-float-up {
          0%   { opacity: 0; transform: translateY(100vh) scale(0); }
          20%  { opacity: 0.6; }
          80%  { opacity: 0.3; }
          100% { opacity: 0; transform: translateY(-20vh) scale(1.5); }
        }

        .ecard-wrapper {
          position: relative;
          z-index: 1;
          perspective: 1200px;
        }

        .ecard-card {
          width: min(420px, 90vw);
          border-radius: 20px;
          overflow: hidden;
          position: relative;
          background: linear-gradient(160deg, #1a3a2f 0%, #0f2a22 40%, #1a3a2f 80%, #0f2a22 100%);
          box-shadow:
            0 0 0 1px rgba(201,168,76,0.2),
            0 4px 20px rgba(0,0,0,0.5),
            0 20px 60px rgba(0,0,0,0.4),
            inset 0 1px 0 rgba(201,168,76,0.15);
          transform-style: preserve-3d;
          transition: transform 0.4s cubic-bezier(0.23,1,0.32,1);
          cursor: default;
          animation: ecard-glow-pulse 4s ease-in-out infinite;
        }

        @keyframes ecard-glow-pulse {
          0%,100% { box-shadow: 0 0 0 1px rgba(201,168,76,0.2), 0 4px 20px rgba(0,0,0,0.5), 0 20px 60px rgba(0,0,0,0.4); }
          50%      { box-shadow: 0 0 0 1px rgba(201,168,76,0.35), 0 4px 30px rgba(201,168,76,0.15), 0 20px 60px rgba(0,0,0,0.4); }
        }

        .ecard-card::before {
          content: '';
          position: absolute;
          inset: -2px;
          border-radius: 22px;
          background: linear-gradient(135deg, #c9a84c 0%, transparent 30%, transparent 70%, #8b7230 100%);
          z-index: -1;
          opacity: 0.5;
        }

        .ecard-card::after {
          content: '';
          position: absolute;
          inset: 0;
          background:
            radial-gradient(ellipse at 20% 50%, rgba(201,168,76,0.06) 0%, transparent 60%),
            radial-gradient(ellipse at 80% 30%, rgba(201,168,76,0.04) 0%, transparent 50%);
          pointer-events: none;
          z-index: 10;
        }

        .ecard-leaf-deco { position: absolute; pointer-events: none; z-index: 5; }
        .ecard-leaf-deco.top-right  { top: -10px; right: -10px; width: 140px; height: 140px; }
        .ecard-leaf-deco.bottom-left{ bottom: -10px; left: -10px; width: 120px; height: 120px; transform: rotate(180deg); }
        .ecard-leaf-deco svg { width: 100%; height: 100%; filter: drop-shadow(0 0 8px rgba(201,168,76,0.3)); }

        .ecard-ribbon { position: absolute; z-index: 3; pointer-events: none; }
        .ecard-ribbon-left  { left: 0; top: 0; width: 60px; height: 100%; }
        .ecard-ribbon-right { right: 0; bottom: 0; width: 60px; height: 100%; }
        .ecard-ribbon svg { width: 100%; height: 100%; }

        .ecard-sparkle-edge { position: absolute; inset: 0; pointer-events: none; z-index: 6; overflow: hidden; }
        .ecard-sparkle {
          position: absolute;
          width: 2px; height: 2px;
          background: #f0e2a0;
          border-radius: 50%;
          box-shadow: 0 0 4px #c9a84c, 0 0 8px #e8d48b;
          animation: ecard-twinkle 3s infinite ease-in-out;
        }
        @keyframes ecard-twinkle {
          0%,100% { opacity: 0; transform: scale(0); }
          50%      { opacity: 1; transform: scale(1.5); }
        }

        .ecard-inner {
          position: relative;
          z-index: 4;
          padding: 40px 32px 36px;
          display: flex;
          flex-direction: column;
          align-items: center;
          text-align: center;
        }

        .ecard-logo-container {
          margin-bottom: 2px;
          animation: ecard-fade-down 0.8s ease-out both;
        }
        .ecard-logo-img {
          width: 240px;
          height: auto;
          filter: drop-shadow(0 2px 12px rgba(201,168,76,0.45));
        }

        @keyframes ecard-fade-down {
          from { opacity: 0; transform: translateY(-16px); }
          to   { opacity: 1; transform: translateY(0); }
        }

        .ecard-brand-name {
          font-family: 'Cinzel', serif;
          font-weight: 700;
          font-size: 1.6rem;
          letter-spacing: 0.35em;
          color: #c9a84c;
          text-shadow: 0 1px 6px rgba(201,168,76,0.3);
          animation: ecard-fade-down 0.8s ease-out 0.1s both;
        }

        .ecard-tagline {
          font-family: 'Cinzel', serif;
          font-weight: 400;
          font-size: 0.65rem;
          letter-spacing: 0.4em;
          color: #e8d48b;
          margin-top: 8px;
          opacity: 0.8;
          animation: ecard-fade-down 0.8s ease-out 0.2s both;
        }

        .ecard-divider {
          width: 160px; height: 1px;
          background: linear-gradient(90deg, transparent, #c9a84c, transparent);
          margin: 18px auto;
          animation: ecard-fade-in 1s ease-out 0.3s both;
        }

        @keyframes ecard-fade-in {
          from { opacity: 0; }
          to   { opacity: 1; }
        }

        .ecard-person-name {
          font-family: 'Playfair Display', serif;
          font-style: italic;
          font-weight: 400;
          font-size: 1.75rem;
          color: #e8d48b;
          text-shadow: 0 1px 4px rgba(201,168,76,0.2);
          animation: ecard-fade-down 0.8s ease-out 0.35s both;
        }

        .ecard-title {
          font-family: 'Cinzel', serif;
          font-weight: 400;
          font-size: 0.72rem;
          letter-spacing: 0.3em;
          color: #c9a84c;
          margin-top: 4px;
          display: flex; align-items: center; gap: 12px;
          animation: ecard-fade-down 0.8s ease-out 0.4s both;
        }
        .ecard-title::before, .ecard-title::after {
          content: ''; width: 36px; height: 1px;
          background: linear-gradient(90deg, transparent, #c9a84c);
        }
        .ecard-title::after { background: linear-gradient(90deg, #c9a84c, transparent); }

        .ecard-contact-list {
          list-style: none;
          margin-top: 24px;
          width: 100%;
          max-width: 300px;
          display: flex;
          flex-direction: column;
          gap: 14px;
        }

        .ecard-contact-item {
          display: flex; align-items: center; gap: 14px;
          text-decoration: none;
          color: #f5f0e0;
          font-size: 0.95rem;
          font-weight: 300;
          letter-spacing: 0.02em;
          transition: all 0.3s ease;
          position: relative;
          animation: ecard-slide-in 0.6s ease-out both;
        }
        .ecard-contact-item:nth-child(1) { animation-delay: 0.5s; }
        .ecard-contact-item:nth-child(2) { animation-delay: 0.6s; }
        .ecard-contact-item:nth-child(3) { animation-delay: 0.7s; }
        .ecard-contact-item:nth-child(4) { animation-delay: 0.8s; }

        @keyframes ecard-slide-in {
          from { opacity: 0; transform: translateX(-20px); }
          to   { opacity: 1; transform: translateX(0); }
        }

        .ecard-contact-item:hover { color: #e8d48b; transform: translateX(4px); }

        .ecard-contact-icon {
          width: 32px; height: 32px;
          border-radius: 50%;
          display: flex; align-items: center; justify-content: center;
          flex-shrink: 0;
          background: linear-gradient(135deg, #8b7230, #c9a84c);
          box-shadow: 0 2px 8px rgba(201,168,76,0.3);
          transition: box-shadow 0.3s ease;
        }
        .ecard-contact-item:hover .ecard-contact-icon { box-shadow: 0 2px 16px rgba(201,168,76,0.5); }
        .ecard-contact-icon svg { width: 16px; height: 16px; fill: #0a1f1a; }

        .ecard-location {
          margin-top: 24px;
          font-family: 'Cinzel', serif;
          font-size: 0.6rem;
          letter-spacing: 0.5em;
          color: #c9a84c;
          display: flex; align-items: center; gap: 16px;
          animation: ecard-fade-in 1s ease-out 0.9s both;
        }
        .ecard-location::before, .ecard-location::after {
          content: ''; width: 32px; height: 1px;
          background: linear-gradient(90deg, transparent, #c9a84c);
        }
        .ecard-location::after { background: linear-gradient(90deg, #c9a84c, transparent); }

        .ecard-save-btn {
          margin-top: 28px;
          padding: 12px 36px;
          border: 1px solid #c9a84c;
          background: transparent;
          color: #c9a84c;
          font-family: 'Cinzel', serif;
          font-size: 0.7rem;
          letter-spacing: 0.25em;
          border-radius: 40px;
          cursor: pointer;
          transition: all 0.4s ease;
          animation: ecard-fade-in 1s ease-out 1s both;
          position: relative;
          overflow: hidden;
        }
        .ecard-save-btn::before {
          content: '';
          position: absolute; inset: 0;
          background: linear-gradient(135deg, #c9a84c, #e8d48b);
          opacity: 0;
          transition: opacity 0.4s ease;
          z-index: -1;
        }
        .ecard-save-btn:hover {
          color: #0a1f1a;
          box-shadow: 0 4px 20px rgba(201,168,76,0.4);
          transform: translateY(-1px);
        }
        .ecard-save-btn:hover::before { opacity: 1; }

        @media (max-width: 440px) {
          .ecard-inner { padding: 32px 24px 28px; }
          .ecard-brand-name { font-size: 1.3rem; letter-spacing: 0.25em; }
          .ecard-person-name { font-size: 1.4rem; }
          .ecard-contact-item { font-size: 0.85rem; }
          .ecard-contact-list { gap: 12px; }
        }
      `}</style>

      <link
        href="https://fonts.googleapis.com/css2?family=Playfair+Display:ital,wght@0,400;0,700;1,400;1,700&family=Cormorant+Garamond:ital,wght@0,300;0,400;0,600;1,300;1,400&family=Cinzel:wght@400;600;700&display=swap"
        rel="stylesheet"
      />

      <div className="ecard-page">
        <div ref={ambientRef} className="ecard-ambient" />

        <div className="ecard-wrapper">
          <div className="ecard-card" ref={cardRef}>

            {/* Gold leaf decorations */}
            <div className="ecard-leaf-deco top-right">
              <svg viewBox="0 0 140 140" fill="none">
                <defs>
                  <linearGradient id="leafGoldEc" x1="0%" y1="0%" x2="100%" y2="100%">
                    <stop offset="0%" stopColor="#e8d48b" />
                    <stop offset="40%" stopColor="#c9a84c" />
                    <stop offset="100%" stopColor="#8b7230" />
                  </linearGradient>
                </defs>
                <path d="M140,0 Q120,20 100,15 Q110,35 95,40 Q105,50 90,58 Q100,65 88,75" stroke="url(#leafGoldEc)" strokeWidth="1.5" fill="none" opacity="0.6" />
                <ellipse cx="108" cy="12" rx="14" ry="7" transform="rotate(-30 108 12)" fill="url(#leafGoldEc)" opacity="0.5" />
                <ellipse cx="100" cy="35" rx="12" ry="6" transform="rotate(-20 100 35)" fill="url(#leafGoldEc)" opacity="0.45" />
                <ellipse cx="94" cy="55" rx="11" ry="5.5" transform="rotate(-15 94 55)" fill="url(#leafGoldEc)" opacity="0.4" />
                <ellipse cx="90" cy="72" rx="10" ry="5" transform="rotate(-10 90 72)" fill="url(#leafGoldEc)" opacity="0.35" />
                <circle cx="120" cy="8" r="1.5" fill="#f0e2a0" opacity="0.7" />
                <circle cx="105" cy="28" r="1" fill="#f0e2a0" opacity="0.5" />
                <circle cx="96" cy="48" r="1.2" fill="#f0e2a0" opacity="0.6" />
              </svg>
            </div>
            <div className="ecard-leaf-deco bottom-left">
              <svg viewBox="0 0 120 120" fill="none">
                <path d="M120,0 Q100,18 85,14 Q92,30 80,36 Q88,44 78,52" stroke="url(#leafGoldEc)" strokeWidth="1.5" fill="none" opacity="0.5" />
                <ellipse cx="92" cy="10" rx="12" ry="6" transform="rotate(-30 92 10)" fill="url(#leafGoldEc)" opacity="0.4" />
                <ellipse cx="84" cy="30" rx="10" ry="5" transform="rotate(-20 84 30)" fill="url(#leafGoldEc)" opacity="0.35" />
                <ellipse cx="80" cy="48" rx="9" ry="4.5" transform="rotate(-15 80 48)" fill="url(#leafGoldEc)" opacity="0.3" />
              </svg>
            </div>

            {/* Ribbon accents */}
            <div className="ecard-ribbon ecard-ribbon-left">
              <svg viewBox="0 0 60 600" fill="none">
                <defs>
                  <linearGradient id="ribbonGEc" x1="0%" y1="0%" x2="100%" y2="100%">
                    <stop offset="0%" stopColor="#e8d48b" stopOpacity="0.6" />
                    <stop offset="50%" stopColor="#c9a84c" stopOpacity="0.3" />
                    <stop offset="100%" stopColor="#8b7230" stopOpacity="0.1" />
                  </linearGradient>
                </defs>
                <path d="M0,100 Q30,150 10,250 Q-10,350 20,450 Q35,500 5,600" stroke="url(#ribbonGEc)" strokeWidth="2" fill="none" />
                <path d="M-5,80 Q25,140 8,240 Q-15,340 18,440 Q32,490 2,590" stroke="url(#ribbonGEc)" strokeWidth="1" fill="none" opacity="0.4" />
              </svg>
            </div>
            <div className="ecard-ribbon ecard-ribbon-right">
              <svg viewBox="0 0 60 600" fill="none">
                <path d="M60,50 Q30,120 50,220 Q70,320 40,420 Q25,480 55,560" stroke="url(#ribbonGEc)" strokeWidth="2" fill="none" />
              </svg>
            </div>

            {/* Edge sparkles */}
            <div className="ecard-sparkle-edge" ref={sparklesRef} />

            {/* Card Content */}
            <div className="ecard-inner">
              <div className="ecard-logo-container">
                <img
                  src="https://i.ibb.co/6JvL1qyh/logo.png"
                  alt="PHALLBUN Logo"
                  className="ecard-logo-img"
                />
              </div>

              <div className="ecard-tagline">LUXURY BEAUTY &amp; LIFESTYLE</div>

              <div className="ecard-divider" />

              <div className="ecard-person-name">Khiev Chendamony</div>
              <div className="ecard-title">Founder</div>

              <ul className="ecard-contact-list">
                <li>
                  <a className="ecard-contact-item" href="tel:+41779288133">
                    <span className="ecard-contact-icon">
                      <svg viewBox="0 0 24 24"><path d="M6.62 10.79a15.05 15.05 0 006.59 6.59l2.2-2.2a1 1 0 011.01-.24 11.36 11.36 0 003.58.57 1 1 0 011 1V20a1 1 0 01-1 1A17 17 0 013 4a1 1 0 011-1h3.5a1 1 0 011 1 11.36 11.36 0 00.57 3.58 1 1 0 01-.25 1.02l-2.2 2.19z" /></svg>
                    </span>
                    <span>+41 77 928 81 33</span>
                  </a>
                </li>
                <li>
                  <a className="ecard-contact-item" href="mailto:Chendabelle@gmail.com">
                    <span className="ecard-contact-icon">
                      <svg viewBox="0 0 24 24"><path d="M20 4H4a2 2 0 00-2 2v12a2 2 0 002 2h16a2 2 0 002-2V6a2 2 0 00-2-2zm0 4l-8 5-8-5V6l8 5 8-5v2z" /></svg>
                    </span>
                    <span>Chendabelle@gmail.com</span>
                  </a>
                </li>
                <li>
                  <a className="ecard-contact-item" href="https://instagram.com/phailbun" target="_blank" rel="noreferrer">
                    <span className="ecard-contact-icon">
                      <svg viewBox="0 0 24 24"><path d="M7.8 2h8.4A5.8 5.8 0 0122 7.8v8.4a5.8 5.8 0 01-5.8 5.8H7.8A5.8 5.8 0 012 16.2V7.8A5.8 5.8 0 017.8 2zm-.2 2A3.6 3.6 0 004 7.6v8.8A3.6 3.6 0 007.6 20h8.8a3.6 3.6 0 003.6-3.6V7.6A3.6 3.6 0 0016.4 4H7.6zm9.65 1.5a1.25 1.25 0 110 2.5 1.25 1.25 0 010-2.5zM12 7a5 5 0 110 10 5 5 0 010-10zm0 2a3 3 0 100 6 3 3 0 000-6z" /></svg>
                    </span>
                    <span>@phailbun</span>
                  </a>
                </li>
                <li>
                  <a className="ecard-contact-item" href="https://www.phallbun.ch" target="_blank" rel="noreferrer">
                    <span className="ecard-contact-icon">
                      <svg viewBox="0 0 24 24"><path d="M12 2a10 10 0 100 20 10 10 0 000-20zm-1 17.93A8 8 0 014.07 13H7.1a15.93 15.93 0 001.32 5.77l.05.1A8 8 0 0111 19.93zm0-15.86A8 8 0 018.47 5.13l-.05.1A15.93 15.93 0 007.1 11H4.07A8 8 0 0111 4.07zM13 4.07A8 8 0 0119.93 11H16.9a15.93 15.93 0 00-1.32-5.77l-.05-.1A8 8 0 0113 4.07zM13 19.93a8 8 0 002.53-1.06l.05-.1A15.93 15.93 0 0016.9 13h3.03A8 8 0 0113 19.93zM9.08 11a14 14 0 011.25-5.53A7.93 7.93 0 0112 5a7.93 7.93 0 011.67.47A14 14 0 0114.92 11H9.08zm0 2h5.84a14 14 0 01-1.25 5.53 7.93 7.93 0 01-3.34 0A14 14 0 019.08 13z" /></svg>
                    </span>
                    <span>www.phallbun.ch</span>
                  </a>
                </li>
              </ul>

              <div className="ecard-location">SWITZERLAND</div>

              <button className="ecard-save-btn" onClick={saveContact}>
                SAVE CONTACT
              </button>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default ECard;
