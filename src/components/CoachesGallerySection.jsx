import { COACHES } from "../data/academyData";

export default function CoachesGallerySection({ isAr }) {
  return (
    <section id="coaches" className="py-16 bg-white border-y border-slate-200/80">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 space-y-14">
        <div>
          <div className="text-center max-w-2xl mx-auto mb-10">
            <span className="text-emerald-600 font-extrabold text-sm">
              {isAr ? "قيادة فنية متخصصة" : "Expert Technical Leadership"}
            </span>
            <h2 className="text-3xl sm:text-4xl font-black text-slate-900 mt-1">
              {isAr ? "الجهاز الفني" : "Coaching Staff"}
            </h2>
          </div>

          <div className="grid sm:grid-cols-2 md:grid-cols-4 gap-4 lg:gap-5">
            {COACHES.map((coach) => (
              <div
                key={coach.nameEn}
                className="p-4 lg:p-5 rounded-2xl bg-slate-50 border border-slate-200 flex items-center gap-3 lg:gap-4 hover:border-blue-400 transition min-w-0"
              >
                <div className="w-12 h-12 lg:w-14 lg:h-14 rounded-2xl bg-white border border-slate-200 p-1.5 flex items-center justify-center shrink-0 shadow-xs">
                  <img
                    src="./images/logo.svg"
                    alt="Primo Eroe Logo"
                    className="w-full h-full object-contain"
                  />
                </div>
                <div className="min-w-0">
                  <h3 className="font-black text-slate-900 text-sm lg:text-base">
                    {isAr ? coach.nameAr : coach.nameEn}
                  </h3>
                  <p className="text-xs font-bold text-emerald-600 mt-0.5">
                    {isAr ? coach.roleAr : coach.roleEn}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>

        <div className="p-6 sm:p-8 rounded-3xl bg-blue-50/70 border border-blue-200/80">
          <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-2 mb-6">
            <div>
              <h3 className="text-xl font-black text-blue-950">
                {isAr
                  ? "أجواء الأكاديمية وتدريبات الدفعة المؤسسة 2026"
                  : "Academy Atmosphere & 2026 Founding Batch"}
              </h3>
              <p className="text-xs sm:text-sm text-slate-600 mt-1">
                {isAr
                  ? "لقطات تعبر عن بيئة التدريب والمهارة على ملاعبنا في صباح السالم."
                  : "Capturing the training energy and skill development on our Sabah Al-Salem pitch."}
              </p>
            </div>
          </div>

          <div className="grid md:grid-cols-3 gap-5">
            <div className="rounded-2xl overflow-hidden bg-white border border-slate-200 shadow-sm">
              <img
                src="./images/hero-player.jfif"
                alt="Hero Mindset"
                className="w-full h-48 object-cover"
              />
              <div className="p-3.5 text-xs font-extrabold text-blue-900">
                {isAr ? "01 • بناء شخصية البطل والثقة" : "01 • Building Hero Confidence"}
              </div>
            </div>

            <div className="rounded-2xl overflow-hidden bg-white border border-slate-200 shadow-sm">
              <img
                src="./images/training-group.jfif"
                alt="Tactical Drills"
                className="w-full h-48 object-cover"
              />
              <div className="p-3.5 text-xs font-extrabold text-emerald-700">
                {isAr ? "02 • التدريبات التكتيكية بالأقماع" : "02 • Structured Agility & Tactical Drills"}
              </div>
            </div>

            <div className="rounded-2xl overflow-hidden bg-white border border-slate-200 shadow-sm">
              <img
                src="./images/action-dribble.jfif"
                alt="Ball Mastery"
                className="w-full h-48 object-cover"
              />
              <div className="p-3.5 text-xs font-extrabold text-amber-700">
                {isAr ? "03 • إتقان المهارة والتحكم بالكرة" : "03 • Ball Mastery & Dribbling"}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}