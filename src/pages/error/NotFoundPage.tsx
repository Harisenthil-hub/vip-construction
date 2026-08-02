import React from 'react';
import './NotFoundPage.css';

/* ─────────────────────────────────────────────────────────────
   Crane SVG Scene with Zero-Gap Synchronized Cable Winch Animation
   ───────────────────────────────────────────────────────────── */
const ConstructionSceneSVG: React.FC = () => {
  const lineNavy  = "#1A1F2E";  // --color-primary (NAVY BLUE)
  const fillGold  = "#F5A623";  // --color-secondary (GOLDEN)
  const fillSurface = "#F8F8F8"; // --color-surface
  const cloudFill = "#E2E8F0";

  return (
    <svg
      className="construction-scene-svg"
      viewBox="0 0 850 300"
      width="100%"
      height="100%"
      xmlns="http://www.w3.org/2000/svg"
    >
      <defs>
        {/* Dot Fill Pattern */}
        <pattern id="dotPattern" width="8" height="8" patternUnits="userSpaceOnUse">
          <circle cx="4" cy="4" r="1.2" fill={lineNavy} opacity="0.35" />
        </pattern>
        {/* Steel Hatch Pattern */}
        <pattern id="steelHatch" width="10" height="10" patternTransform="rotate(45 0 0)" patternUnits="userSpaceOnUse">
          <line x1="0" y1="0" x2="0" y2="10" stroke={lineNavy} strokeWidth="1" opacity="0.2" />
        </pattern>
        {/* Clip Path at Trolley Bottom (y = 44) - Expands downward smoothly matching hook vertical motion */}
        <clipPath id="trolleyCableClip">
          <rect className="cable-mask-rect" x="420" y="44" width="24" height="64" />
        </clipPath>
      </defs>

      {/* 1. ALL CLOUDS DRIFTING CONCURRENTLY */}
      <g className="anim-cloud-1" opacity="0.7">
        <path d="M 0,35 Q 15,20 35,25 Q 50,10 70,20 Q 90,15 100,30 L -10,30 Z" fill={cloudFill} stroke={lineNavy} strokeWidth="1.5" />
      </g>
      <g className="anim-cloud-2" opacity="0.5">
        <path d="M 0,55 Q 15,40 35,45 Q 50,30 70,40 Q 90,35 100,50 L -10,50 Z" fill={cloudFill} stroke={lineNavy} strokeWidth="1.5" />
      </g>
      <g className="anim-cloud-3" opacity="0.6">
        <path d="M 0,40 Q 15,25 35,30 Q 50,15 70,25 Q 90,20 100,35 L -10,35 Z" fill={cloudFill} stroke={lineNavy} strokeWidth="2" strokeLinejoin="round" />
      </g>
      <g className="anim-cloud-4" opacity="0.45">
        <path d="M 0,30 Q 13,18 29,22 Q 41,10 57,18 Q 73,14 81,26 L -10,26 Z" fill={cloudFill} stroke={lineNavy} strokeWidth="1.8" strokeLinejoin="round" />
      </g>

      {/* 2. Ground Line */}
      <line x1="60" y1="260" x2="790" y2="260" stroke={lineNavy} strokeWidth="2.5" strokeLinecap="round" />
      <line x1="100" y1="268" x2="750" y2="268" stroke={fillGold} strokeWidth="2" strokeDasharray="8 6" />

      {/* 3. TOWER CRANE (Left Side) */}
      <g className="tower-crane-structure" transform="translate(140, 0)">
        {/* Foundation */}
        <rect x="20" y="240" width="70" height="20" fill={fillSurface} stroke={lineNavy} strokeWidth="2.5" rx="2" />
        <rect x="30" y="225" width="50" height="15" fill={fillSurface} stroke={lineNavy} strokeWidth="2" rx="1" />

        {/* Vertical Lattice Tower */}
        <rect x="42" y="55" width="26" height="170" fill="none" stroke={lineNavy} strokeWidth="2.5" />
        {/* Cross Bracing */}
        <path d="M 42,55 L 68,80 M 68,55 L 42,80
                 M 42,80 L 68,105 M 68,80 L 42,105
                 M 42,105 L 68,130 M 68,105 L 42,130
                 M 42,130 L 68,155 M 68,130 L 42,155
                 M 42,155 L 68,180 M 68,155 L 42,180
                 M 42,180 L 68,205 M 68,180 L 42,205
                 M 42,205 L 68,225 M 68,205 L 42,225"
              stroke={lineNavy} strokeWidth="1.8" />

        {/* Cab */}
        <rect x="25" y="42" width="22" height="22" fill="#FFFFFF" stroke={lineNavy} strokeWidth="2" rx="2" />
        <line x1="33" y1="42" x2="33" y2="64" stroke={lineNavy} strokeWidth="1.5" />

        {/* Jib Arm */}
        <line x1="-30" y1="40" x2="430" y2="40" stroke={lineNavy} strokeWidth="3" />
        <line x1="-30" y1="44" x2="430" y2="44" stroke={lineNavy} strokeWidth="1.5" />

        {/* Apex Truss */}
        <path d="M -30,40 L 55,10 L 430,40" fill="none" stroke={lineNavy} strokeWidth="2" />
        <line x1="55" y1="10" x2="55" y2="40" stroke={lineNavy} strokeWidth="2" />
        <line x1="120" y1="21" x2="120" y2="40" stroke={lineNavy} strokeWidth="1.5" />
        <line x1="185" y1="28" x2="185" y2="40" stroke={lineNavy} strokeWidth="1.5" />
        <line x1="250" y1="32" x2="250" y2="40" stroke={lineNavy} strokeWidth="1.5" />

        {/* Counterweight */}
        <rect x="-25" y="34" width="35" height="22" fill={fillGold} stroke={lineNavy} strokeWidth="2" rx="2" />
        <line x1="-15" y1="34" x2="-15" y2="56" stroke={lineNavy} strokeWidth="1.5" />
      </g>

      {/* 4. STATIC LEFT "4" DIGIT */}
      <g className="digit-four-left" transform="translate(285, 158)">
        <path
          d="M 65,0 L 5,68 L 5,80 L 65,80 L 65,100 L 85,100 L 85,80 L 98,80 L 98,64 L 85,64 L 85,0 Z 
             M 65,22 L 65,64 L 25,64 Z"
          fill="url(#steelHatch)"
          stroke={lineNavy}
          strokeWidth="3.5"
          strokeLinejoin="round"
        />
        <circle cx="75" cy="10" r="2.5" fill={fillGold} stroke={lineNavy} strokeWidth="1" />
        <circle cx="75" cy="50" r="2.5" fill={fillGold} stroke={lineNavy} strokeWidth="1" />
        <circle cx="75" cy="90" r="2.5" fill={fillGold} stroke={lineNavy} strokeWidth="1" />
      </g>

      {/* 5. STATIC RIGHT "4" DIGIT */}
      <g className="digit-four-right" transform="translate(485, 158)">
        <path
          d="M 65,0 L 5,68 L 5,80 L 65,80 L 65,100 L 85,100 L 85,80 L 98,80 L 98,64 L 85,64 L 85,0 Z 
             M 65,22 L 65,64 L 25,64 Z"
          fill="url(#steelHatch)"
          stroke={lineNavy}
          strokeWidth="3.5"
          strokeLinejoin="round"
        />
        <circle cx="75" cy="10" r="2.5" fill={fillGold} stroke={lineNavy} strokeWidth="1" />
        <circle cx="75" cy="50" r="2.5" fill={fillGold} stroke={lineNavy} strokeWidth="1" />
        <circle cx="75" cy="90" r="2.5" fill={fillGold} stroke={lineNavy} strokeWidth="1" />
      </g>

      {/* 6. CRANE TROLLEY, EXPANDING CABLE & HOOK ASSEMBLY */}
      <g className="crane-carrier-group">
        <g className="cable-hook-sway">
          {/* Trolley on Jib Arm */}
          <rect x="424" y="36" width="16" height="8" fill={lineNavy} rx="1" />

          {/* DOTTED CABLE LINE (Anchored at y1=44 permanently, unspools downwards via clipPath) */}
          <g clipPath="url(#trolleyCableClip)">
            <line
              x1="432"
              y1="44"
              x2="432"
              y2="142"
              stroke={lineNavy}
              strokeWidth="2.8"
              strokeDasharray="5 3"
            />
          </g>

          {/* HOOK & '0' BLOCK (Translates down vertically, touching bottom of expanding cable) */}
          <g className="hook-and-block-group">
            {/* Cable Hook Block */}
            <rect x="420" y="108" width="24" height="12" fill={fillGold} stroke={lineNavy} strokeWidth="2" rx="2" />
            <path d="M 432,120 L 432,130 Q 425,138 432,142 Q 438,140 435,133" fill="none" stroke={lineNavy} strokeWidth="2.5" strokeLinecap="round" />

            {/* Rigging Straps */}
            <line x1="432" y1="142" x2="400" y2="158" stroke={lineNavy} strokeWidth="1.8" />
            <line x1="432" y1="142" x2="464" y2="158" stroke={lineNavy} strokeWidth="1.8" />

            {/* THE '0' DIGIT BEING CARRIED & FITTED */}
            <g transform="translate(382, 128)">
              <path
                d="M 50,0 C 78,0 95,20 95,50 C 95,80 78,100 50,100 C 22,100 5,80 5,50 C 5,20 22,0 50,0 Z"
                fill="url(#dotPattern)"
                stroke={lineNavy}
                strokeWidth="3.5"
              />
              <path
                d="M 50,25 C 62,25 70,35 70,50 C 70,65 62,75 50,75 C 38,75 30,65 30,50 C 30,35 38,25 50,25 Z"
                fill="#FFFFFF"
                stroke={lineNavy}
                strokeWidth="3"
              />
              <circle cx="50" cy="12" r="2.5" fill={fillGold} stroke={lineNavy} strokeWidth="1" />
              <circle cx="50" cy="88" r="2.5" fill={fillGold} stroke={lineNavy} strokeWidth="1" />
              <circle cx="18" cy="50" r="2.5" fill={fillGold} stroke={lineNavy} strokeWidth="1" />
              <circle cx="82" cy="50" r="2.5" fill={fillGold} stroke={lineNavy} strokeWidth="1" />

              <line x1="20" y1="30" x2="35" y2="38" stroke={lineNavy} strokeWidth="1.5" />
              <line x1="80" y1="30" x2="65" y2="38" stroke={lineNavy} strokeWidth="1.5" />
              <line x1="20" y1="70" x2="35" y2="62" stroke={lineNavy} strokeWidth="1.5" />
              <line x1="80" y1="70" x2="65" y2="62" stroke={lineNavy} strokeWidth="1.5" />
            </g>
          </g>
        </g>
      </g>

      {/* 7. ROAD HAZARD BARRIER */}
      <g className="hazard-barrier-group" transform="translate(640, 212)">
        <rect x="12" y="20" width="8" height="28" fill={fillSurface} stroke={lineNavy} strokeWidth="2" />
        <rect x="68" y="20" width="8" height="28" fill={fillSurface} stroke={lineNavy} strokeWidth="2" />

        <rect x="0" y="0" width="88" height="15" fill={fillGold} stroke={lineNavy} strokeWidth="2" rx="2" />
        <line x1="22" y1="0" x2="22" y2="15" stroke={lineNavy} strokeWidth="1.5" />
        <line x1="44" y1="0" x2="44" y2="15" stroke={lineNavy} strokeWidth="1.5" />
        <line x1="66" y1="0" x2="66" y2="15" stroke={lineNavy} strokeWidth="1.5" />

        <rect x="0" y="20" width="88" height="15" fill={fillGold} stroke={lineNavy} strokeWidth="2" rx="2" />
        <line x1="22" y1="20" x2="22" y2="35" stroke={lineNavy} strokeWidth="1.5" />
        <line x1="44" y1="20" x2="44" y2="35" stroke={lineNavy} strokeWidth="1.5" />
        <line x1="66" y1="20" x2="66" y2="35" stroke={lineNavy} strokeWidth="1.5" />

        <circle className="beacon-flash" cx="16" cy="-6" r="5" fill={fillGold} stroke={lineNavy} strokeWidth="1.5" />
        <circle className="beacon-flash" cx="72" cy="-6" r="5" fill={fillGold} stroke={lineNavy} strokeWidth="1.5" />
      </g>
    </svg>
  );
};

/* ─────────────────────────────────────────────────────────────
   Main 404 Component
   ───────────────────────────────────────────────────────────── */
export default function NotFoundPage() {
  return (
    <div className="page-wrapper">
      {/* Background Crane Watermark */}
      <svg className="bg-watermark-crane" viewBox="0 0 300 400" fill="none" stroke="#1A1F2E">
        <path d="M 50,400 L 50,50 L 250,50 M 50,50 L 150,10 L 250,50" strokeWidth="2" strokeDasharray="4 4" />
        <rect x="35" y="380" width="30" height="20" strokeWidth="2" />
      </svg>

      {/* Central Card Container */}
      <div className="central-card">
        {/* Main Body Stage */}
        <main className="card-body">
          {/* Construction SVG Vector Graphic */}
          <div className="graphic-stage">
            <ConstructionSceneSVG />
          </div>

          {/* Text Content Below Illustration */}
          <div className="content-section">
            <p className="sub-message">
              The page you're looking for appears to be under construction.
            </p>

            <div className="divider-line" />

            <div className="try-pages-title">
              Try one of these pages instead:
            </div>

            {/* Horizontal Text Links */}
            <div className="quick-links-row">
              <a href="/" className="link-item">Home</a>
              <span className="link-separator">•</span>
              <a href="/project" className="link-item">Projects</a>
              <span className="link-separator">•</span>
              <a href="/service" className="link-item">Services</a>
              <span className="link-separator">•</span>
              <a href="/about-us" className="link-item">About Us</a>
              <span className="link-separator">•</span>
              <a href="/contact" className="link-item">Contact Us</a>
            </div>
          </div>
        </main>

        {/* Navy Blue Footer Bar with Golden Accent Stripe */}
        <footer className="card-footer">
          <div className="footer-copyright">
            © {new Date().getFullYear()} VIP Construction. All Rights Reserved.
          </div>

          {/* Updated Social Icons: Facebook, Instagram, YouTube */}
          <div className="footer-socials">
            {/* Facebook */}
            <a href="https://facebook.com" target="_blank" rel="noreferrer" className="social-icon" title="Facebook">
              <svg width="16" height="16" fill="currentColor" viewBox="0 0 24 24">
                <path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z" />
              </svg>
            </a>

            {/* Instagram */}
            <a href="https://instagram.com" target="_blank" rel="noreferrer" className="social-icon" title="Instagram">
              <svg width="16" height="16" fill="currentColor" viewBox="0 0 24 24">
                <rect x="2" y="2" width="20" height="20" rx="5" ry="5" fill="none" stroke="currentColor" strokeWidth="2" />
                <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z" fill="none" stroke="currentColor" strokeWidth="2" />
                <line x1="17.5" y1="6.5" x2="17.51" y2="6.5" stroke="currentColor" strokeWidth="2" strokeLinecap="round" />
              </svg>
            </a>

            {/* YouTube */}
            <a href="https://youtube.com" target="_blank" rel="noreferrer" className="social-icon" title="YouTube">
              <svg width="18" height="18" fill="currentColor" viewBox="0 0 24 24">
                <path d="M23.498 6.186a3.016 3.016 0 0 0-2.122-2.136C19.505 3.545 12 3.545 12 3.545s-7.505 0-9.377.505A3.017 3.017 0 0 0 .502 6.186C0 8.07 0 12 0 12s0 3.93.502 5.814a3.016 3.016 0 0 0 2.122 2.136c1.871.505 9.376.505 9.376.505s7.505 0 9.377-.505a3.015 3.015 0 0 0 2.122-2.136C24 15.93 24 12 24 12s0-3.93-.502-5.814zM9.545 15.568V8.432L15.818 12l-6.273 3.568z" />
              </svg>
            </a>
          </div>
        </footer>
      </div>
    </div>
  );
}
