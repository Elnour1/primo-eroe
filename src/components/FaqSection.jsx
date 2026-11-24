import { useState } from "react";
import { ChevronDown } from "lucide-react";
import { FAQS } from "../data/academyData";

export default function FaqSection({ isAr }) {
  const [openFaq, setOpenFaq] = useState(0);

  return (
    <section className="py-16 max-w-4xl mx-auto px-4 sm:px-6">
      <h2 className="text-3xl font-black text-center text-slate-900 mb-8">
        {isAr ? "أسئلة الأهالي" : "Parents FAQ"}
      </h2>

      <div className="space-y-3">
        {FAQS.map((item, idx) => {
          const isOpen = openFaq === idx;
          return (
            <div
              key={idx}
              className="bg-white rounded-2xl border border-slate-200 overflow-hidden"
            >
              <button
                type="button"
                onClick={() => setOpenFaq(isOpen ? -1 : idx)}
                className="w-full px-6 py-4 text-start font-extrabold text-slate-900 text-sm sm:text-base flex items-center justify-between gap-4 cursor-pointer"
              >
                <span>{isAr ? item.qAr : item.qEn}</span>
                <ChevronDown
                  className={`w-5 h-5 text-blue-700 shrink-0 transition-transform ${
                    isOpen ? "rotate-180" : ""
                  }`}
                />
              </button>
              {isOpen && (
                <div className="px-6 pb-4 text-sm text-slate-600 leading-relaxed border-t border-slate-100 pt-3">
                  {isAr ? item.aAr : item.aEn}
                </div>
              )}
            </div>
          );
        })}
      </div>
    </section>
  );
}