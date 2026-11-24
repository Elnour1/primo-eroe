import { AGE_GROUPS } from "../data/academyData";

export default function AgePathwaySection({ isAr, selectedAge, setSelectedAge }) {
  return (
    <section id="pathway" className="py-16 lg:py-24 max-w-7xl mx-auto px-4 sm:px-6">
      <div className="text-center max-w-2xl mx-auto mb-12">
        <span className="text-blue-700 font-extrabold text-sm">
          {isAr ? "مسار التدرج التدريبي" : "Player Development Pathway"}
        </span>
        <h2 className="text-3xl sm:text-4xl font-black text-slate-900 mt-1">
          {isAr ? "رحلة اللاعب عبر الملعب" : "From First Touch to Competition"}
        </h2>
      </div>

      <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-5">
        {AGE_GROUPS.map((group) => {
          const isSelected = selectedAge === group.id;
          return (
            <div
              key={group.id}
              onClick={() => setSelectedAge(group.id)}
              className={`p-6 rounded-2xl border-2 cursor-pointer transition flex flex-col justify-between ${
                isSelected
                  ? "bg-white border-blue-700 shadow-lg shadow-blue-900/5"
                  : "bg-white border-slate-200 hover:border-blue-300"
              }`}
            >
              <div>
                <span
                  className={`inline-block font-['Montserrat'] text-xs font-black px-3 py-1 rounded-lg mb-4 ${
                    isSelected ? "bg-blue-700 text-white" : "bg-blue-50 text-blue-700"
                  }`}
                >
                  {group.id}
                </span>
                <h3 className="text-lg font-black text-slate-900">
                  {isAr ? group.ageAr : group.ageEn}
                </h3>
                <p className="text-sm font-extrabold text-emerald-600 mt-0.5 mb-3">
                  {isAr ? group.stageAr : group.stageEn}
                </p>
                <p className="text-sm text-slate-600 leading-relaxed">
                  {isAr ? group.descAr : group.descEn}
                </p>
              </div>

              <div className="mt-5 pt-3 border-t border-slate-100 text-xs font-bold text-blue-700">
                {isSelected
                  ? isAr
                    ? "✓ مختارة في كارت اللاعب"
                    : "✓ Selected on Card"
                  : isAr
                  ? "اضغط لاختيار الفئة"
                  : "Tap to select"}
              </div>
            </div>
          );
        })}
      </div>
    </section>
  );
}