import { useState } from "react";
import { AGE_GROUPS } from "../data/academyData";

export default function SchedulePricingSection({ isAr }) {
  const [scheduleFilter, setScheduleFilter] = useState("ALL");

  const filteredSchedule =
    scheduleFilter === "ALL"
      ? AGE_GROUPS
      : AGE_GROUPS.filter((g) => g.id === scheduleFilter);

  return (
    <section id="schedule" className="py-16 lg:py-24 max-w-7xl mx-auto px-4 sm:px-6">
      <div className="text-center max-w-2xl mx-auto mb-10">
        <span className="text-blue-700 font-extrabold text-sm">
          {isAr ? "الشفافية والوضوح" : "Clear Schedule & Fees"}
        </span>
        <h2 className="text-3xl sm:text-4xl font-black text-slate-900 mt-1">
          {isAr ? "المواعيد والأسعار" : "Training Schedule & Pricing"}
        </h2>
      </div>

      <div className="flex flex-wrap justify-center gap-2 mb-8">
        <button
          type="button"
          onClick={() => setScheduleFilter("ALL")}
          className={`px-4 py-2 rounded-full text-xs font-extrabold transition cursor-pointer ${
            scheduleFilter === "ALL"
              ? "bg-blue-700 text-white"
              : "bg-white border border-slate-200 text-slate-700 hover:bg-slate-100"
          }`}
        >
          {isAr ? "جميع الفئات" : "All Ages"}
        </button>
        {AGE_GROUPS.map((g) => (
          <button
            type="button"
            key={g.id}
            onClick={() => setScheduleFilter(g.id)}
            className={`px-4 py-2 rounded-full text-xs font-extrabold transition cursor-pointer ${
              scheduleFilter === g.id
                ? "bg-blue-700 text-white"
                : "bg-white border border-slate-200 text-slate-700 hover:bg-slate-100"
            }`}
          >
            {isAr ? g.ageAr : g.ageEn}
          </button>
        ))}
      </div>

      <div className="grid lg:grid-cols-12 gap-8 items-start">
        <div className="lg:col-span-8 bg-white rounded-3xl border border-slate-200 overflow-hidden shadow-sm">
          <div className="overflow-x-auto">
            <table className="w-full text-sm">
              <thead className="bg-blue-50 text-blue-950 font-extrabold">
                <tr>
                  <th className="py-4 px-5 text-start">{isAr ? "الفئة العمرية" : "Age Group"}</th>
                  <th className="py-4 px-5 text-start">{isAr ? "أيام التدريب" : "Days"}</th>
                  <th className="py-4 px-5 text-start">{isAr ? "الوقت" : "Time"}</th>
                  <th className="py-4 px-5 text-start">{isAr ? "الاشتراك" : "Fee"}</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-slate-100">
                {filteredSchedule.map((row) => (
                  <tr key={row.id} className="hover:bg-slate-50/80 transition">
                    <td className="py-4 px-5 font-extrabold text-slate-900">
                      {isAr ? row.ageAr : row.ageEn}
                    </td>
                    <td className="py-4 px-5 text-slate-600 font-semibold">
                      {isAr ? row.daysAr : row.daysEn}
                    </td>
                    <td className="py-4 px-5 text-slate-600 font-semibold">
                      {isAr ? row.timeAr : row.timeEn}
                    </td>
                    <td className="py-4 px-5 font-black text-emerald-600">
                      {isAr ? "50 د.ك" : "50 KWD"}
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>

        <div className="lg:col-span-4 space-y-4">
          <div className="p-6 rounded-3xl bg-gradient-to-br from-blue-900 to-blue-800 text-white shadow-lg">
            <span className="text-xs font-extrabold text-amber-300 uppercase">
              {isAr ? "باقة التأسيس" : "Founding Package"}
            </span>
            <div className="text-4xl font-black text-amber-300 my-2">
              {isAr ? "50 د.ك" : "50 KWD"}
            </div>
            <h3 className="text-lg font-extrabold">
              {isAr ? "الاشتراك الشهري الموحد" : "Unified Monthly Fee"}
            </h3>
            <p className="text-xs text-blue-100 mt-1 leading-relaxed">
              {isAr
                ? "يشمل حصتين تدريبيتين أسبوعياً تحت إشراف الجهاز الفني الكامل."
                : "Includes two weekly training sessions supervised by our coaching staff."}
            </p>
          </div>

          <div className="p-6 rounded-3xl bg-white border-2 border-emerald-500/40 shadow-sm">
            <div className="text-3xl font-black text-emerald-600 mb-1">
              {isAr ? "10 د.ك" : "10 KWD"}
            </div>
            <h3 className="text-lg font-extrabold text-slate-900">
              {isAr ? "الزي الرياضي الصيفي" : "Official Summer Kit"}
            </h3>
            <p className="text-xs text-slate-600 mt-1 leading-relaxed">
              {isAr
                ? "طقم أكاديمية بريمو إيرو الرسمي المعتمد لجميع اللاعبين."
                : "Official Primo Eroe Academy uniform for all registered players."}
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}