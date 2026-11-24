import { Trophy, ShieldCheck } from "lucide-react";

export default function WhySection({ isAr }) {
  return (
    <section id="why" className="py-16 lg:py-24 max-w-7xl mx-auto px-4 sm:px-6">
      <div className="text-center max-w-3xl mx-auto mb-12 space-y-3">
        <span className="text-emerald-600 font-extrabold text-sm">
          {isAr ? "الهوية والمنهجية" : "Identity & Methodology"}
        </span>
        <h2 className="text-3xl sm:text-4xl font-black text-slate-900">
          {isAr ? "الاسم هو الوعد: البطل الأول" : "The Name is the Promise: The First Hero"}
        </h2>
        <p className="text-slate-600 text-base">
          {isAr
            ? 'معنى "Primo Eroe" بالإيطالية هو "البطل الأول" — فلسفتنا بناء شخصية اللاعب وثقته بنفسه في بيئة آمنة قبل البحث عن الكؤوس.'
            : '"Primo Eroe" means "The First Hero" in Italian — our philosophy builds character and confidence in a safe environment.'}
        </p>
      </div>

      <div className="grid lg:grid-cols-12 gap-6 items-stretch">
        <div className="lg:col-span-5 rounded-3xl overflow-hidden bg-slate-900 relative min-h-[280px] shadow-md group">
          <img
            src="./images/training-group.jfif"
            alt="Primo Eroe Youth Training"
            className="w-full h-full object-cover group-hover:scale-105 transition duration-500"
          />
          <div className="absolute inset-0 bg-linear-to-t from-slate-950/85 via-slate-950/20 to-transparent flex flex-col justify-end p-6 text-white">
            <span className="text-xs font-extrabold text-amber-400 uppercase tracking-wider mb-1">
              {isAr ? "إشراف فني متكامل" : "Supervised Coaching"}
            </span>
            <p className="text-lg font-extrabold">
              {isAr
                ? "تدريبات منظمة تجمع بين الانضباط ومتعة اللعب"
                : "Structured sessions blending discipline with fun"}
            </p>
          </div>
        </div>

        <div className="lg:col-span-7 grid sm:grid-cols-2 gap-5">
          <div className="bg-white p-6 rounded-2xl border border-slate-200/90 shadow-sm hover:border-blue-300 transition">
            <div className="w-12 h-12 rounded-xl bg-blue-50 text-blue-700 flex items-center justify-center mb-4">
              <Trophy className="w-6 h-6" />
            </div>
            <h3 className="text-lg font-extrabold text-slate-900 mb-2">
              {isAr ? "منهجية إيطالية حديثة" : "Modern Italian Methodology"}
            </h3>
            <p className="text-sm text-slate-600 leading-relaxed">
              {isAr
                ? "برامج تدريبية مصممة لتطوير المهارات الفردية، الذكاء التكتيكي، والتحكم بالكرة بما يناسب كل فئة عمرية."
                : "Training programs tailored to develop ball control, tactical awareness, and individual skills for every age."}
            </p>
          </div>

          <div className="bg-white p-6 rounded-2xl border border-slate-200/90 shadow-sm hover:border-emerald-300 transition">
            <div className="w-12 h-12 rounded-xl bg-emerald-50 text-emerald-600 flex items-center justify-center mb-4">
              <ShieldCheck className="w-6 h-6" />
            </div>
            <h3 className="text-lg font-extrabold text-slate-900 mb-2">
              {isAr ? "بيئة آمنة وتأسيس تربوي" : "Safe & Supportive Environment"}
            </h3>
            <p className="text-sm text-slate-600 leading-relaxed">
              {isAr
                ? "نغرس روح الفريق، الاحترام، والثقة بالنفس في بيئة إيجابية تطمئن كل أب وأم على سلامة وتطور أبنائهم."
                : "We instill teamwork, respect, and self-belief in a positive environment parents can trust."}
            </p>
          </div>

          <div className="sm:col-span-2 bg-linear-to-r from-blue-900 to-blue-800 text-white p-6 rounded-2xl shadow-md flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4">
            <div className="space-y-1">
              <span className="text-xs font-extrabold text-amber-300">
                {isAr ? "موقع مميز في الكويت" : "Prime Location in Kuwait"}
              </span>
              <h3 className="text-xl font-black">
                {isAr
                  ? "ملعب ASAS المجهز بالكامل – صباح السالم"
                  : "ASAS Fully Equipped Pitch – Sabah Al-Salem"}
              </h3>
              <p className="text-sm text-blue-100">
                {isAr
                  ? "أرضية عشبية معتمدة وإضاءة ليلية ومرافق مريحة لأولياء الأمور."
                  : "Certified turf pitch, night floodlights, and comfortable parent waiting areas."}
              </p>
            </div>
            <a
              href="#studio"
              className="shrink-0 px-5 py-3 rounded-xl bg-amber-400 hover:bg-amber-300 text-slate-950 font-black text-sm transition"
            >
              {isAr ? "سجّل الآن" : "Join Now"}
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}