import { useState } from "react";
import { Menu, X } from "lucide-react";

export default function Navbar({ isAr, toggleLanguage }) {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  const navLinks = [
    { href: "#why", label: isAr ? "لماذا بريمو إيرو" : "Why Us" },
    { href: "#pitch", label: isAr ? "الملعب التفاعلي" : "Tactical Pitch" },
    { href: "#pathway", label: isAr ? "المراحل العمرية" : "Age Pathway" },
    { href: "#schedule", label: isAr ? "المواعيد والرسوم" : "Schedule & Fees" },
    { href: "#coaches", label: isAr ? "الجهاز الفني" : "Coaches" },
  ];

  return (
    <header className="sticky top-0 z-50 bg-white/95 backdrop-blur-md border-b border-slate-200/80">
      <div className="max-w-6xl mx-auto px-3 sm:px-6 h-16 flex items-center justify-between gap-2">
        {/* الشعار الرسمي */}
        <a href="#top" className="flex items-center gap-2 shrink-0">
          <img
            src="./images/logo.svg"
            alt="Primo Eroe Academy Logo"
            className="w-9 h-9 sm:w-10 sm:h-10 object-contain"
          />
          <div className="leading-tight hidden xs:block sm:block">
            <span className="font-['Montserrat'] font-black text-xs sm:text-base text-slate-900 block">
              PRIMO EROE
            </span>
            <span className="font-['Montserrat'] text-[8px] sm:text-[9px] font-bold text-emerald-600 tracking-widest block">
              FOOTBALL ACADEMY
            </span>
          </div>
        </a>

        {/* روابط الشاشات الكبيرة */}
        <nav className="hidden md:flex items-center gap-5 lg:gap-6 text-[13px] font-semibold text-slate-600">
          {navLinks.map((link) => (
            <a key={link.href} href={link.href} className="hover:text-blue-700 transition">
              {link.label}
            </a>
          ))}
        </nav>

        {/* أزرار اللغة والحجز + زر قائمة الموبايل */}
        <div className="flex items-center gap-1.5 sm:gap-2">
          <button
            type="button"
            onClick={toggleLanguage}
            className="px-2.5 py-1.5 rounded-lg bg-slate-100 hover:bg-slate-200 text-slate-700 font-['Montserrat'] text-xs font-bold border border-slate-200 transition cursor-pointer"
          >
            {isAr ? "EN" : "عربي"}
          </button>

          <a
            href="#studio"
            className="px-3 sm:px-4 py-2 rounded-lg bg-linear-to-r from-emerald-600 to-emerald-500 hover:from-emerald-700 hover:to-emerald-600 text-white text-[11px] sm:text-xs font-bold shadow-sm transition whitespace-nowrap"
          >
            {isAr ? "احجز مكان بطلك" : "Book Spot"}
          </a>

          {/* زر فتح/إغلاق قائمة الهاتف */}
          <button
            type="button"
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            aria-label="Toggle Menu"
            className="md:hidden p-2 rounded-lg text-slate-700 hover:bg-slate-100 border border-slate-200 transition cursor-pointer">
            {mobileMenuOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
          </button>
        </div>
      </div>

      {/* القائمة المنسدلة للهاتف والتابلت */}
      {mobileMenuOpen && (
        <div className="md:hidden bg-white border-b border-slate-200 px-4 pt-2 pb-5 shadow-lg">
          <nav className="flex flex-col divide-y divide-slate-100">
            {navLinks.map((link) => (
              <a
                key={link.href}
                href={link.href}
                onClick={() => setMobileMenuOpen(false)}
                className="py-3 text-sm font-bold text-slate-700 hover:text-blue-700 transition"
              >
                {link.label}
              </a>
            ))}
          </nav>
        </div>
      )}
    </header>
  );
}