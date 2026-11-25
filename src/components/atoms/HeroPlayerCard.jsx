import { useState, useRef } from "react";
import { Shield, Sparkles } from "lucide-react";

export default function HeroPlayerCard({
  playerName,
  jerseyNumber,
  positionCode,
  positionLabel,
  ageLabel,
  playerPhoto = null,
  lang = "ar",
  compact = false,
}) {
  const cardRef = useRef(null);
  const [tilt, setTilt] = useState({ rotateX: 0, rotateY: 0, glareX: 50, glareY: 50 });
  const [imgError, setImgError] = useState(false);

  const handleMove = (clientX, clientY) => {
    if (!cardRef.current) return;
    const rect = cardRef.current.getBoundingClientRect();
    const x = (clientX - rect.left) / rect.width;
    const y = (clientY - rect.top) / rect.height;
    const rotateY = (x - 0.5) * 22;
    const rotateX = (0.5 - y) * 22;
    setTilt({
      rotateX,
      rotateY,
      glareX: Math.round(x * 100),
      glareY: Math.round(y * 100),
    });
  };

  const resetTilt = () => {
    setTilt({ rotateX: 0, rotateY: 0, glareX: 50, glareY: 50 });
  };

  const displayName = playerName?.trim() || (lang === "ar" ? "بطل بريمو إيرو" : "PRIMO HERO");
  const displayNumber = jerseyNumber || "10";
  const activePhotoSrc = playerPhoto || "/images/hero-player.jfif";

  return (
    <div
      className="w-full max-w-275 select-none flex flex-col items-center"
      onMouseMove={(e) => handleMove(e.clientX, e.clientY)}
      onMouseLeave={resetTilt}
      onTouchMove={(e) => {
        if (e.touches[0]) handleMove(e.touches[0].clientX, e.touches[0].clientY);
      }}
      onTouchEnd={resetTilt}
    >
      <div
        ref={cardRef}
        style={{
          transform: `rotateX(${tilt.rotateX}deg) rotateY(${tilt.rotateY}deg)`,
          transition: tilt.rotateX === 0 ? "transform 0.45s ease-out" : "transform 0.08s linear",
        }}
        className={`relative ${
          compact ? "w-70 min-h-101.25" : "w-77.5 sm:w-83.75 min-h-116.25"
          } rounded-[28px] bg-linear-to-br from-amber-200 via-amber-400 to-amber-600 p-0.75 shadow-[0_25px_55px_-12px_rgba(30,58,138,0.45)] flex`}
      >
        <div className="relative w-full rounded-[25px] bg-linear-to-b from-[#1E3A8A] via-[#172554] to-[#090D16] overflow-hidden flex flex-col justify-between p-5 border border-amber-300/30">
          {/* لمعة الإضاءة المتحركة */}
          <div
            className="pointer-events-none absolute inset-0 opacity-40 mix-blend-overlay transition-opacity"
            style={{
              background: `radial-gradient(circle at ${tilt.glareX}% ${tilt.glareY}%, rgba(255,255,255,0.85), transparent 60%)`,
            }}
          />

         {/* الصف العلوي */}
          <div className="relative z-10 flex items-start justify-between" dir="ltr">
            <div className="flex flex-col items-center leading-none">
              <span className="font-['Montserrat'] text-3xl font-black text-amber-300">99</span>
              <span className="font-['Montserrat'] text-xs font-extrabold tracking-wider text-white mt-1 bg-white/10 px-2 py-0.5 rounded">
                {positionCode}
              </span>
            </div>

            <div className="w-12 h-12 rounded-xl bg-white/95 p-1 flex items-center justify-center shadow-md border border-amber-300">
              <img
                src="./images/logo.svg"
                alt="Primo Eroe Crest"
                className="w-full h-full object-contain"
              />
            </div>
          </div>

          {/* المنتصف: صورة اللاعب */}
          <div className="relative z-10 flex items-center justify-center my-4">
            <span className="font-['Montserrat'] text-[104px] font-black text-white/15 leading-none select-none absolute">
              {displayNumber}
            </span>

            <div className="relative w-28 h-28 sm:w-32 sm:h-32 rounded-full p-1 bg-linear-to-tr from-amber-500 via-amber-200 to-amber-500 shadow-xl">
              {!imgError || playerPhoto ? (
                <img
                  key={activePhotoSrc}
                  src={activePhotoSrc}
                  alt={displayName}
                  onLoad={() => setImgError(false)}
                  onError={() => setImgError(true)}
                  className="w-full h-full object-cover object-top rounded-full bg-slate-900"
                />
              ) : (
                <div className="w-full h-full rounded-full bg-slate-900 flex flex-col items-center justify-center text-amber-400">
                  <Shield className="w-9 h-9 mb-0.5" />
                  <span className="font-['Montserrat'] text-xl font-black text-white">#{displayNumber}</span>
                </div>
              )}

              <div className="absolute -bottom-2.5 left-1/2 -translate-x-1/2 bg-amber-400 text-slate-950 font-['Montserrat'] font-black text-xs px-3 py-0.5 rounded-full shadow-md border-2 border-slate-950">
                #{displayNumber}
              </div>
            </div>
          </div>

          {/* الجزء السفلي */}
          <div className="relative z-10 text-center space-y-1.5 mt-1">
            <div className="inline-block px-3 py-0.5 rounded-full bg-amber-400/15 border border-amber-300/40 text-amber-300 text-xs font-bold">
              {positionLabel}
            </div>

            <h3 className="text-xl sm:text-2xl font-black text-white tracking-tight truncate px-2">
              {displayName}
            </h3>

            <p className="text-xs text-blue-200 font-semibold">{ageLabel}</p>

            <div className="pt-2 border-t border-amber-300/25">
              <div className="bg-white/10 rounded-lg py-1.5 px-2">
                <p className="font-['Montserrat'] text-[9.5px] font-extrabold tracking-widest text-amber-300 uppercase">
                  PRIMO EROE • FOUNDING BATCH 2026
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>

      {!compact && (
        <div className="mt-4 inline-flex items-center gap-1.5 px-4 py-1.5 rounded-full bg-white border border-slate-200 shadow-sm text-xs font-bold text-blue-900">
          <Sparkles className="w-3.5 h-3.5 text-amber-500" />
          <span>{lang === "ar" ? "حرّك المؤشر أو المس الكارت للتفاعل 3D" : "Move cursor or touch card for 3D tilt"}</span>
        </div>
      )}
    </div>
  );
}