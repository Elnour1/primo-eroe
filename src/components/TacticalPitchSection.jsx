import { ArrowLeft, ArrowRight } from "lucide-react";
import { POSITIONS } from "../data/academyData";

export default function TacticalPitchSection({
  isAr,
  selectedPos,
  setSelectedPos,
  currentPosObj,
}) {
  return (
    <section id="pitch" className="py-16 bg-white border-y border-slate-200/80">
      <div className="max-w-7xl mx-auto px-4 sm:px-6">
        <div className="mb-10">
          <span className="text-emerald-600 font-extrabold text-sm">
            {isAr ? "تفاعل واكتشف" : "Interactive Discovery"}
          </span>
          <h2 className="text-3xl sm:text-4xl font-black text-slate-900 mt-1">
            {isAr ? "اعرف مركزك في الملعب" : "Choose Your Position on the Pitch"}
          </h2>
          <p className="text-slate-600 mt-2">
            {isAr
              ? "اضغط على أي مركز داخل الملعب لتتعرف على مهاراته وتعيّنه مباشرة في كارت بطلك."
              : "Tap any position on the pitch to explore its role and assign it directly to your hero card."}
          </p>
        </div>

        <div className="grid md:grid-cols-12 gap-6 lg:gap-8 items-center">
          <div className="md:col-span-5 min-w-0 bg-slate-50 p-5 lg:p-8 rounded-3xl border border-slate-200 space-y-5">
            <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-lg bg-blue-700 text-white font-['Montserrat'] text-xs font-black">
              <span>{currentPosObj.code}</span>
              <span>•</span>
              <span>{isAr ? currentPosObj.ar.name : currentPosObj.en.name}</span>
            </div>

            <h3 className="text-2xl font-black text-slate-900">
              {isAr ? currentPosObj.ar.title : currentPosObj.en.title}
            </h3>

            <p className="text-slate-600 text-sm sm:text-base leading-relaxed">
              {isAr ? currentPosObj.ar.desc : currentPosObj.en.desc}
            </p>

            <div className="flex flex-wrap gap-1.5 lg:gap-2">
              {(isAr ? currentPosObj.ar.skills : currentPosObj.en.skills).map((skill) => (
                <span
                  key={skill}
                  className="px-2.5 lg:px-3 py-1 rounded-full bg-emerald-50 border border-emerald-200 text-emerald-800 text-[11px] lg:text-xs font-bold"
                >
                  ✓ {skill}
                </span>
              ))}
            </div>

            <a
              href="#studio"
              className="w-full py-3.5 px-4 lg:px-5 rounded-xl bg-gradient-to-r from-amber-400 to-amber-500 hover:from-amber-500 hover:to-amber-600 text-slate-950 font-black text-xs lg:text-sm flex items-center justify-center gap-2 shadow-sm transition whitespace-nowrap"
            >
              <span>
                {isAr ? "تعيين هذا المركز في كارت اللاعب" : "Set Position on Player Card"}
              </span>
              {isAr ? (
                <ArrowLeft className="w-4 h-4 shrink-0" />
              ) : (
                <ArrowRight className="w-4 h-4 shrink-0" />
              )}
            </a>
          </div>

          <div className="md:col-span-7 min-w-0">
            <div className="relative w-full aspect-[16/10] rounded-3xl bg-gradient-to-br from-emerald-600 via-emerald-500 to-emerald-700 p-4 sm:p-6 shadow-xl overflow-hidden border-4 border-emerald-800/20">
              <div className="w-full h-full border-2 border-white/60 rounded-xl relative flex items-center justify-center">
                <div className="absolute inset-y-0 left-1/2 w-0.5 bg-white/60 -translate-x-1/2" />
                <div className="w-24 h-24 sm:w-32 sm:h-32 rounded-full border-2 border-white/60" />
                <div className="absolute left-0 top-1/2 -translate-y-1/2 w-14 sm:w-20 h-32 sm:h-44 border-2 border-l-0 border-white/60" />
                <div className="absolute right-0 top-1/2 -translate-y-1/2 w-14 sm:w-20 h-32 sm:h-44 border-2 border-r-0 border-white/60" />

                {Object.values(POSITIONS).map((pos) => {
                  const isActive = selectedPos === pos.code;
                  return (
                    <button
                      key={pos.code}
                      type="button"
                      onClick={() => setSelectedPos(pos.code)}
                      style={{ left: `${pos.x}%`, top: `${pos.y}%` }}
                      className={`-translate-x-1/2 -translate-y-1/2 absolute flex flex-col items-center group cursor-pointer transition-transform ${
                        isActive ? "scale-115 z-20" : "hover:scale-105 z-10"
                      }`}
                    >
                      <span
                        className={`w-9 h-9 sm:w-14 sm:h-14 rounded-full flex items-center justify-center font-['Montserrat'] font-black text-[10px] sm:text-sm shadow-lg transition ${
                          isActive
                            ? "bg-amber-400 text-slate-950 ring-4 sm:ring-8 ring-amber-300/40"
                            : "bg-white text-slate-900 hover:bg-blue-50"
                        }`}
                      >
                        {pos.code}
                      </span>
                      <span className="mt-1 px-2 py-0.5 rounded-full bg-slate-950/80 text-white text-[9px] sm:text-[11px] font-bold backdrop-blur-sm whitespace-nowrap">
                        {isAr ? pos.ar.name : pos.en.name}
                      </span>
                    </button>
                  );
                })}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}