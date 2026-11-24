import { Sparkles, ArrowLeft, ArrowRight } from "lucide-react";
import HeroPlayerCard from "./atoms/HeroPlayerCard";

export default function HeroSection({
  isAr,
  lang,
  playerName,
  setPlayerName,
  jerseyNumber,
  setJerseyNumber,
  selectedPos,
  currentPosObj,
  currentAgeObj,
}) {
  return (
    <section
      id="top"
      className="relative overflow-hidden bg-gradient-to-br from-blue-50/90 via-slate-50 to-emerald-50/80 pt-10 pb-16 md:py-20 border-b border-slate-200/60"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 grid md:grid-cols-12 gap-8 lg:gap-12 items-center">
        <div className="md:col-span-7 min-w-0 space-y-6">
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-emerald-50 border border-emerald-200 text-emerald-800 text-xs sm:text-sm font-extrabold">
            <span className="w-2 h-2 rounded-full bg-emerald-500 animate-ping" />
            <span>
              {isAr
                ? "التسجيل مفتوح • الدفعة المؤسسة 2026"
                : "Registration Open • Founding Batch 2026"}
            </span>
          </div>

          <h1 className="text-4xl sm:text-5xl lg:text-6xl font-black text-slate-900 leading-[1.15]">
            {isAr ? (
              <>
                الملعب جاهز.{" "}
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-800 to-blue-600">
                  ناقص بطلك.
                </span>
              </>
            ) : (
              <>
                The Pitch is Ready.{" "}
                <span className="text-blue-700">Your Hero is Next.</span>
              </>
            )}
          </h1>

          <p className="text-base sm:text-lg text-slate-600 max-w-2xl leading-relaxed">
            {isAr
              ? "أكاديمية بريمو إيرو لكرة القدم في صباح السالم – الكويت. بيئة تدريبية آمنة ومنهجية إيطالية حديثة تبني مهارة ابنك وثقته بنفسه منذ الخطوة الأولى."
              : "Primo Eroe Football Academy in Sabah Al-Salem, Kuwait. A safe training environment and modern Italian methodology building skill and self-confidence."}
          </p>

          <div className="bg-white p-4 sm:p-5 rounded-2xl border border-slate-200 shadow-lg shadow-slate-200/50 space-y-3">
            <div className="flex items-center gap-2 text-blue-800 text-xs sm:text-sm font-extrabold">
              <Sparkles className="w-4 h-4 text-amber-500" />
              <span>
                {isAr
                  ? "جرّب الآن: اكتب اسم ابنك ورقم قميصه وشاهد كارته يتحدث فوراً"
                  : "Try Now: Enter your child's name & jersey number to preview their card live"}
              </span>
            </div>

            <div className="grid grid-cols-12 gap-2.5">
              <input
                type="text"
                value={playerName}
                onChange={(e) => setPlayerName(e.target.value)}
                placeholder={isAr ? "اكتب اسم اللاعب..." : "Player Name..."}
                className="col-span-12 sm:col-span-6 px-4 py-3 rounded-xl bg-slate-50 border border-slate-300 focus:border-blue-600 focus:bg-white outline-none text-sm font-bold"
              />
              <input
                type="number"
                min="1"
                max="99"
                value={jerseyNumber}
                onChange={(e) => setJerseyNumber(e.target.value.slice(0, 2))}
                placeholder="#10"
                className="col-span-5 sm:col-span-2 px-3 py-3 rounded-xl bg-slate-50 border border-slate-300 focus:border-blue-600 focus:bg-white outline-none text-center font-['Montserrat'] text-sm font-black text-amber-600"
              />
              <a
                href="#studio"
                className="col-span-7 sm:col-span-4 px-4 py-3 rounded-xl bg-gradient-to-r from-amber-400 to-amber-500 hover:from-amber-500 hover:to-amber-600 text-slate-950 font-black text-sm flex items-center justify-center gap-1.5 shadow-sm transition"
              >
                <span>{isAr ? "أكمل التسجيل" : "Complete Card"}</span>
                {isAr ? <ArrowLeft className="w-4 h-4" /> : <ArrowRight className="w-4 h-4" />}
              </a>
            </div>
          </div>

          <div className="grid grid-cols-3 gap-4 pt-2">
            <div>
              <p className="text-lg sm:text-2xl font-black text-slate-900">
                {isAr ? "4 فئات" : "4 Groups"}
              </p>
              <p className="text-xs text-slate-500 font-semibold">
                {isAr ? "من تحت 6 حتى 16 سنة" : "Ages U6 to 16"}
              </p>
            </div>
            <div className="border-x border-slate-200 px-3">
              <p className="text-lg sm:text-2xl font-black text-blue-700">
                {isAr ? "منهجية إيطالية" : "Italian Method"}
              </p>
              <p className="text-xs text-slate-500 font-semibold">
                {isAr ? "تأسيس فني وتربوي" : "Technical & Character"}
              </p>
            </div>
            <div>
              <p className="text-lg sm:text-2xl font-black text-emerald-600">
                {isAr ? "صباح السالم" : "Sabah Al-Salem"}
              </p>
              <p className="text-xs text-slate-500 font-semibold">
                {isAr ? "ملعب ASAS المجهز" : "ASAS Equipped Pitch"}
              </p>
            </div>
          </div>
        </div>

        <div className="md:col-span-5 min-w-0 flex justify-center">
          <HeroPlayerCard
            playerName={playerName}
            jerseyNumber={jerseyNumber}
            positionCode={selectedPos}
            positionLabel={isAr ? currentPosObj.ar.name : currentPosObj.en.name}
            ageLabel={isAr ? currentAgeObj.ageAr : currentAgeObj.ageEn}
            lang={lang}
          />
        </div>
      </div>
    </section>
  );
}