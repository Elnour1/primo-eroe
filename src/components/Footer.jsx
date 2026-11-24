import { Phone, MapPin } from "lucide-react";
import { ACADEMY_WHATSAPP } from "../data/academyData";

export default function Footer({ isAr }) {
  return (
    <footer className="bg-slate-900 text-white pt-14 pb-8">
      <div className="max-w-7xl mx-auto px-4 sm:px-6">
        <div className="mb-10">
          <h2 className="text-2xl sm:text-3xl font-black">
            {isAr ? "تواصل معنا" : "Contact Us"}
          </h2>
          <p className="text-slate-400 text-sm mt-1">
            {isAr
              ? "فريق أكاديمية بريمو إيرو جاهز للرد على جميع استفساراتكم."
              : "Primo Eroe Academy team is ready to answer all your inquiries."}
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-4 mb-10">
          <a
            href={`https://wa.me/${ACADEMY_WHATSAPP}`}
            target="_blank"
            rel="noreferrer"
            className="p-5 rounded-2xl bg-slate-800/80 hover:bg-slate-800 border border-slate-700 transition flex items-center gap-4"
          >
            <Phone className="w-6 h-6 text-amber-400 shrink-0" />
            <div>
              <p className="text-xs font-bold text-amber-300">
                {isAr ? "الهاتف / واتساب" : "Phone / WhatsApp"}
              </p>
              <p className="font-['Montserrat'] font-extrabold text-base mt-0.5" dir="ltr">
                +965 5177 2667
              </p>
            </div>
          </a>

          <div className="p-5 rounded-2xl bg-slate-800/80 border border-slate-700 flex items-center gap-4">
            <MapPin className="w-6 h-6 text-emerald-400 shrink-0" />
            <div>
              <p className="text-xs font-bold text-emerald-400">
                {isAr ? "موقع التدريب" : "Training Location"}
              </p>
              <p className="font-extrabold text-sm mt-0.5">
                {isAr ? "ملعب ASAS – صباح السالم، الكويت" : "ASAS Pitch – Sabah Al-Salem, Kuwait"}
              </p>
            </div>
          </div>

          <a
            href="https://instagram.com/Primo_eroe_Academy"
            target="_blank"
            rel="noreferrer"
            className="p-5 rounded-2xl bg-slate-800/80 hover:bg-slate-800 border border-slate-700 transition flex items-center gap-4"
          >
            <svg
              className="w-6 h-6 text-amber-400 shrink-0"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
            >
              <rect width="20" height="20" x="2" y="2" rx="5" ry="5" />
              <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z" />
              <line x1="17.5" x2="17.51" y1="6.5" y2="6.5" />
            </svg>
            <div>
              <p className="text-xs font-bold text-amber-300">
                {isAr ? "إنستجرام الأكاديمية" : "Official Instagram"}
              </p>
              <p className="font-['Montserrat'] font-extrabold text-sm mt-0.5" dir="ltr">
                @Primo_eroe_Academy
              </p>
            </div>
          </a>
        </div>

        <div className="border-t border-slate-800 pt-6 text-center text-xs text-slate-400">
          {isAr
            ? "© 2026 أكاديمية بريمو إيرو لكرة القدم (Primo Eroe) • صباح السالم، الكويت"
            : "© 2026 Primo Eroe Football Academy • Sabah Al-Salem, Kuwait"}
        </div>
      </div>
    </footer>
  );
}