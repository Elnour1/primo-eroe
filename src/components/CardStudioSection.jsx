import { useState } from "react";
import { Download, Send, CheckCircle2, Lock } from "lucide-react";
import HeroPlayerCard from "./atoms/HeroPlayerCard";
import {
  POSITIONS,
  AGE_GROUPS,
  SCRIPT_URL,
  ACADEMY_WHATSAPP,
} from "../data/academyData";

export default function CardStudioSection({
  isAr,
  lang,
  playerName,
  setPlayerName,
  jerseyNumber,
  setJerseyNumber,
  selectedPos,
  setSelectedPos,
  selectedAge,
  setSelectedAge,
  currentPosObj,
  currentAgeObj,
}) {
  const [parentName, setParentName] = useState("");
  const [parentPhone, setParentPhone] = useState("");
  const [honeypot, setHoneypot] = useState("");
  const [submitting, setSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState(null);

  const handleDownloadCard = () => {
    const canvas = document.createElement("canvas");
    canvas.width = 720;
    canvas.height = 1000;
    const ctx = canvas.getContext("2d");

    const grad = ctx.createLinearGradient(0, 0, 720, 1000);
    grad.addColorStop(0, "#1E3A8A");
    grad.addColorStop(0.55, "#1D4ED8");
    grad.addColorStop(1, "#090D16");
    ctx.fillStyle = grad;
    ctx.fillRect(0, 0, 720, 1000);

    ctx.strokeStyle = "#F59E0B";
    ctx.lineWidth = 16;
    ctx.strokeRect(24, 24, 672, 952);

    ctx.fillStyle = "#F59E0B";
    ctx.fillRect(300, 65, 120, 74);
    ctx.fillStyle = "#090D16";
    ctx.font = "900 36px Montserrat, sans-serif";
    ctx.textAlign = "center";
    ctx.fillText("PE", 360, 115);

    ctx.fillStyle = "#FDE68A";
    ctx.font = "900 54px Montserrat, sans-serif";
    ctx.fillText("99", 120, 125);
    ctx.fillStyle = "#FFFFFF";
    ctx.font = "800 28px Montserrat, sans-serif";
    ctx.fillText(selectedPos, 120, 165);

    ctx.fillStyle = "#FFFFFF";
    ctx.font = "900 240px Montserrat, sans-serif";
    ctx.fillText(`#${jerseyNumber || "10"}`, 360, 480);

    ctx.strokeStyle = "rgba(253, 230, 138, 0.5)";
    ctx.lineWidth = 3;
    ctx.beginPath();
    ctx.moveTo(100, 560);
    ctx.lineTo(620, 560);
    ctx.stroke();

    ctx.fillStyle = "#FFFFFF";
    ctx.font = "900 52px Cairo, sans-serif";
    ctx.fillText(playerName.trim() || (isAr ? "بطل بريمو إيرو" : "PRIMO HERO"), 360, 655);

    ctx.fillStyle = "#FDE68A";
    ctx.font = "700 30px Cairo, sans-serif";
    const posText = isAr ? currentPosObj.ar.name : currentPosObj.en.name;
    const ageText = isAr ? currentAgeObj.ageAr : currentAgeObj.ageEn;
    ctx.fillText(`${posText} • ${ageText}`, 360, 720);

    ctx.fillStyle = "rgba(255,255,255,0.12)";
    ctx.fillRect(70, 840, 580, 64);
    ctx.fillStyle = "#FDE68A";
    ctx.font = "800 22px Montserrat, sans-serif";
    ctx.fillText("PRIMO EROE • FOUNDING BATCH 2026", 360, 880);

    const link = document.createElement("a");
    link.download = `Primo-Eroe-${playerName.trim() || "Player"}.png`;
    link.href = canvas.toDataURL("image/png");
    link.click();
  };

  const handleFormSubmit = async (e) => {
    e.preventDefault();
    if (honeypot) return;

    if (!playerName.trim() || !parentName.trim() || !parentPhone.trim()) {
      setSubmitStatus("error");
      return;
    }

    setSubmitting(true);
    setSubmitStatus(null);

    const payload = {
      playerName: playerName.trim(),
      jerseyNumber: jerseyNumber || "10",
      position: `${selectedPos} - ${isAr ? currentPosObj.ar.name : currentPosObj.en.name}`,
      ageGroup: isAr ? currentAgeObj.ageAr : currentAgeObj.ageEn,
      parentName: parentName.trim(),
      parentPhone: parentPhone.trim(),
      lang,
    };

    try {
      if (SCRIPT_URL && SCRIPT_URL !== "YOUR_GOOGLE_APPS_SCRIPT_WEB_APP_URL") {
        await fetch(SCRIPT_URL, {
          method: "POST",
          mode: "no-cors",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify(payload),
        });
      }
      setSubmitStatus("success");
    } catch {
      setSubmitStatus("error");
    } finally {
      setSubmitting(false);
    }
  };

  const whatsappShareUrl = `https://wa.me/${ACADEMY_WHATSAPP}?text=${encodeURIComponent(
    isAr
      ? `السلام عليكم أكاديمية بريمو إيرو، قمت بتسجيل اللاعب: ${playerName || "بطل جديد"} | رقم القميص: ${jerseyNumber} | المركز: ${currentPosObj.ar.name} | الفئة: ${currentAgeObj.ageAr}`
      : `Hello Primo Eroe Academy, I registered player: ${playerName || "New Hero"} | Jersey: #${jerseyNumber} | Position: ${currentPosObj.en.name} | Age: ${currentAgeObj.ageEn}`
  )}`;

  return (
    <section
      id="studio"
      className="py-12 sm:py-16 bg-gradient-to-b from-slate-100 to-slate-50 border-y border-slate-200 overflow-hidden"
    >
      <div className="max-w-7xl mx-auto px-3 sm:px-6">
        <div className="bg-white rounded-2xl sm:rounded-3xl border border-slate-200 shadow-xl p-4 sm:p-8 lg:p-10 grid md:grid-cols-12 gap-6 lg:gap-10 items-center">
          {/* عمود نموذج التسجيل */}
          <div className="md:col-span-7 min-w-0 space-y-5">
            <div>
              <span className="text-emerald-600 font-extrabold text-sm">
                {isAr ? "سجّل في الدفعة المؤسسة 2026" : "Join Founding Batch 2026"}
              </span>
              <h2 className="text-2xl sm:text-3xl font-black text-slate-900 mt-1">
                {isAr ? "اصنع كارت بطلك وأكّد التسجيل" : "Customize Hero Card & Register"}
              </h2>
              <p className="text-sm text-slate-600 mt-1">
                {isAr
                  ? "أكمل البيانات ليصلك تأكيد التسجيل فوراً وتتمكن من تحميل الكارت ومشاركته."
                  : "Complete the details to confirm registration and download your player card."}
              </p>
            </div>

            <form onSubmit={handleFormSubmit} className="space-y-4">
              <input
                type="text"
                value={honeypot}
                onChange={(e) => setHoneypot(e.target.value)}
                className="hidden"
                tabIndex="-1"
                autoComplete="off"
              />

              <div className="grid sm:grid-cols-12 gap-4">
                <div className="sm:col-span-8">
                  <label className="block text-xs font-extrabold text-slate-700 mb-1.5">
                    {isAr ? "اسم اللاعب *" : "Player Name *"}
                  </label>
                  <input
                    type="text"
                    required
                    value={playerName}
                    onChange={(e) => setPlayerName(e.target.value)}
                    placeholder={isAr ? "مثال: يوسف محمد" : "e.g. Yousef Mohammed"}
                    className="w-full px-4 py-3 rounded-xl bg-slate-50 border border-slate-300 focus:border-blue-600 focus:bg-white outline-none text-sm font-bold"
                  />
                </div>
                <div className="sm:col-span-4">
                  <label className="block text-xs font-extrabold text-slate-700 mb-1.5">
                    {isAr ? "رقم القميص *" : "Jersey # *"}
                  </label>
                  <input
                    type="number"
                    min="1"
                    max="99"
                    required
                    value={jerseyNumber}
                    onChange={(e) => setJerseyNumber(e.target.value.slice(0, 2))}
                    className="w-full px-4 py-3 rounded-xl bg-slate-50 border border-slate-300 focus:border-blue-600 focus:bg-white outline-none font-['Montserrat'] text-sm font-black text-amber-600"
                  />
                </div>
              </div>

              <div className="grid sm:grid-cols-2 gap-4">
                <div>
                  <label className="block text-xs font-extrabold text-slate-700 mb-1.5">
                    {isAr ? "المركز المفضل *" : "Preferred Position *"}
                  </label>
                  <select
                    value={selectedPos}
                    onChange={(e) => setSelectedPos(e.target.value)}
                    className="w-full px-4 py-3 rounded-xl bg-slate-50 border border-slate-300 focus:border-blue-600 focus:bg-white outline-none text-sm font-bold"
                  >
                    {Object.values(POSITIONS).map((p) => (
                      <option key={p.code} value={p.code}>
                        {isAr ? `${p.ar.name} (${p.code})` : `${p.en.name} (${p.code})`}
                      </option>
                    ))}
                  </select>
                </div>

                <div>
                  <label className="block text-xs font-extrabold text-slate-700 mb-1.5">
                    {isAr ? "الفئة العمرية *" : "Age Group *"}
                  </label>
                  <select
                    value={selectedAge}
                    onChange={(e) => setSelectedAge(e.target.value)}
                    className="w-full px-4 py-3 rounded-xl bg-slate-50 border border-slate-300 focus:border-blue-600 focus:bg-white outline-none text-sm font-bold"
                  >
                    {AGE_GROUPS.map((g) => (
                      <option key={g.id} value={g.id}>
                        {isAr ? g.ageAr : g.ageEn}
                      </option>
                    ))}
                  </select>
                </div>
              </div>

              <div className="grid sm:grid-cols-2 gap-4">
                <div>
                  <label className="block text-xs font-extrabold text-slate-700 mb-1.5">
                    {isAr ? "اسم ولي الأمر *" : "Parent Name *"}
                  </label>
                  <input
                    type="text"
                    required
                    value={parentName}
                    onChange={(e) => setParentName(e.target.value)}
                    placeholder={isAr ? "أدخل اسم ولي الأمر" : "Enter parent full name"}
                    className="w-full px-4 py-3 rounded-xl bg-slate-50 border border-slate-300 focus:border-blue-600 focus:bg-white outline-none text-sm font-bold"
                  />
                </div>

                <div>
                  <label className="block text-xs font-extrabold text-slate-700 mb-1.5">
                    {isAr ? "رقم الهاتف (واتساب) *" : "Phone / WhatsApp *"}
                  </label>
                  <input
                    type="tel"
                    required
                    dir="ltr"
                    value={parentPhone}
                    onChange={(e) => setParentPhone(e.target.value)}
                    placeholder="+965 XXXX XXXX"
                    className="w-full px-4 py-3 rounded-xl bg-slate-50 border border-slate-300 focus:border-blue-600 focus:bg-white outline-none text-sm font-bold"
                  />
                </div>
              </div>

              <button
                type="submit"
                disabled={submitting}
                className="w-full py-4 rounded-xl bg-gradient-to-r from-emerald-600 to-emerald-500 hover:from-emerald-700 hover:to-emerald-600 text-white font-black text-base shadow-lg shadow-emerald-600/20 transition cursor-pointer disabled:opacity-60"
              >
                {submitting
                  ? isAr
                    ? "جاري حفظ البيانات..."
                    : "Submitting..."
                  : isAr
                  ? "تأكيد التسجيل وحفظ البيانات ✓"
                  : "Confirm Registration ✓"}
              </button>

              {submitStatus === "success" && (
                <div className="p-4 rounded-xl bg-emerald-50 border border-emerald-200 text-emerald-800 text-sm font-bold flex items-center gap-2">
                  <CheckCircle2 className="w-5 h-5 text-emerald-600 shrink-0" />
                  <span>
                    {isAr
                      ? "تم تسجيل البطل بنجاح! يمكنك الآن تحميل الكارت أو إرسال نسخة عبر واتساب."
                      : "Hero registered successfully! You can now download the card or send via WhatsApp."}
                  </span>
                </div>
              )}

              {submitStatus === "error" && (
                <div className="p-3 rounded-xl bg-red-50 border border-red-200 text-red-700 text-xs font-bold">
                  {isAr
                    ? "يرجى التأكد من تعبئة جميع الحقول المطلوبة بشكل صحيح."
                    : "Please fill in all required fields accurately."}
                </div>
              )}

              <div className="flex items-center gap-1.5 text-xs font-bold text-emerald-700">
                <Lock className="w-3.5 h-3.5" />
                <span>
                  {isAr
                    ? "بياناتك محمية • يصل إشعار فوري لإدارة الأكاديمية"
                    : "Protected submission • Instant notification sent to academy management"}
                </span>
              </div>
            </form>
          </div>

          {/* عمود معاينة الكارت والتحميل */}
          <div className="md:col-span-5 min-w-0 bg-slate-50 p-4 sm:p-6 rounded-2xl sm:rounded-3xl border border-slate-200 flex flex-col items-center space-y-4">
            <HeroPlayerCard
              playerName={playerName}
              jerseyNumber={jerseyNumber}
              positionCode={selectedPos}
              positionLabel={isAr ? currentPosObj.ar.name : currentPosObj.en.name}
              ageLabel={isAr ? currentAgeObj.ageAr : currentAgeObj.ageEn}
              lang={lang}
              compact
            />

            <button
              type="button"
              onClick={handleDownloadCard}
              className="w-full max-w-[265px] py-3 px-4 rounded-xl bg-gradient-to-r from-amber-400 to-amber-500 hover:from-amber-500 hover:to-amber-600 text-slate-950 font-black text-sm flex items-center justify-center gap-2 shadow-sm transition cursor-pointer"
            >
              <Download className="w-4 h-4" />
              <span>{isAr ? "حفظ الكارت كصورة (PNG)" : "Download Card (PNG)"}</span>
            </button>

            <a
              href={whatsappShareUrl}
              target="_blank"
              rel="noreferrer"
              className="w-full max-w-[265px] py-2.5 px-4 rounded-xl bg-emerald-50 hover:bg-emerald-100 border border-emerald-200 text-emerald-800 font-extrabold text-xs flex items-center justify-center gap-2 transition"
            >
              <Send className="w-3.5 h-3.5" />
              <span>{isAr ? "إرسال نسخة عبر واتساب" : "Share via WhatsApp"}</span>
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}