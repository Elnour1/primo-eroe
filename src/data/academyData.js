export const SCRIPT_URL = "https://script.google.com/macros/s/AKfycby6Dkr06MlkO92kmaWqDRVyztXGAiUvXxxjETaUpEVlsFOFG2EapmWxWFFmZcxGrFAP-g/exec"; // ضعي رابط النشر الخاص بكِ هنا
export const ACADEMY_WHATSAPP = "96551772667";

export const POSITIONS = {
  FWD: {
    code: "FWD",
    x: 80,
    y: 50,
    ar: {
      name: "مهاجم",
      title: "صانع الفارق أمام المرمى",
      desc: "نطوّر لديه سرعة الانطلاق، التمركز الذكي داخل منطقة الجزاء، ودقة التسديد بكلتا القدمين.",
      skills: ["إنهاء الهجمات", "التحرك بدون كرة", "السرعة والانطلاق"],
    },
    en: {
      name: "Forward",
      title: "Clinical Finisher in the Box",
      desc: "Developing explosive acceleration, smart off-the-ball movement, and two-footed finishing.",
      skills: ["Clinical Finishing", "Off-Ball Movement", "Explosive Pace"],
    },
  },
  MID: {
    code: "MID",
    x: 56,
    y: 50,
    ar: {
      name: "خط وسط",
      title: "مايسترو اللعب وصانع الألعاب",
      desc: "نركز على الرؤية الشاملة للملعب، دقة التمرير تحت الضغط، والربط بين الدفاع والهجوم.",
      skills: ["الرؤية والتمرير", "التحكم بالكرة", "الذكاء التكتيكي"],
    },
    en: {
      name: "Midfielder",
      title: "Playmaker & Engine of the Team",
      desc: "Focusing on field vision, accurate passing under pressure, and linking defense to attack.",
      skills: ["Vision & Passing", "Ball Control", "Tactical IQ"],
    },
  },
  DEF: {
    code: "DEF",
    x: 32,
    y: 50,
    ar: {
      name: "مدافع",
      title: "صخرة الدفاع وبناء اللعب من الخلف",
      desc: "نتدرب على التغطية الدفاعية السليمة، افتكاك الكرة النظيف، وبدء الهجمة بثقة وهدوء.",
      skills: ["التمركز الدفاعي", "الافتكاك النظيف", "بناء اللعب"],
    },
    en: {
      name: "Defender",
      title: "Defensive Wall & Ball-Playing Leader",
      desc: "Training proper positioning, clean tackling, and building play calmly from the back.",
      skills: ["Positioning", "Clean Tackling", "Build-Up Play"],
    },
  },
  GK: {
    code: "GK",
    x: 10,
    y: 50,
    ar: {
      name: "حارس مرمى",
      title: "القائد الأمين وخط الأمان الأول",
      desc: "تدريبات متخصصة لردة الفعل السريعة، التوجيه القيادي، والتعامل مع الكرات العرضية والانفرادات.",
      skills: ["سرعة رد الفعل", "التوجيه والقيادة", "التصدي للانفرادات"],
    },
    en: {
      name: "Goalkeeper",
      title: "The Brave Last Line of Defense",
      desc: "Specialized reflex drills, vocal leadership, and commanding the penalty area with confidence.",
      skills: ["Quick Reflexes", "Leadership", "1v1 Shot Stopping"],
    },
  },
};

export const AGE_GROUPS = [
  {
    id: "U6",
    ageAr: "تحت 6 سنوات",
    ageEn: "Under 6 (U6)",
    stageAr: "اللعب والحب",
    stageEn: "Play & Passion",
    descAr: "التعرف على الكرة بالألعاب التفاعلية والتوازن الحركي لبناء حب الرياضة.",
    descEn: "Discovering the ball through fun games, balance, and building love for football.",
    daysAr: "سبت – ثلاثاء",
    daysEn: "Sat – Tue",
    timeAr: "4:00 – 5:00 م",
    timeEn: "4:00 – 5:00 PM",
  },
  {
    id: "7-9",
    ageAr: "7 – 9 سنوات",
    ageEn: "7 – 9 Years",
    stageAr: "الأساسيات",
    stageEn: "Fundamentals",
    descAr: "إتقان التحكم بالكرة، التمرير، والتسديد مع مباريات مصغرة تعزز الثقة.",
    descEn: "Mastering ball control, passing, and shooting with confidence-building small games.",
    daysAr: "أحد – أربعاء",
    daysEn: "Sun – Wed",
    timeAr: "4:00 – 5:30 م",
    timeEn: "4:00 – 5:30 PM",
  },
  {
    id: "10-12",
    ageAr: "10 – 12 سنة",
    ageEn: "10 – 12 Years",
    stageAr: "المهارة والفهم",
    stageEn: "Skill & Awareness",
    descAr: "تطوير المهارات الفردية المتقدمة، فهم المراكز، والعمل الجماعي المنظم.",
    descEn: "Developing individual skills, positional awareness, and structured teamwork.",
    daysAr: "أحد – أربعاء",
    daysEn: "Sun – Wed",
    timeAr: "5:30 – 7:00 م",
    timeEn: "5:30 – 7:00 PM",
  },
  {
    id: "13-16",
    ageAr: "13 – 16 سنة",
    ageEn: "13 – 16 Years",
    stageAr: "التكتيك والمنافسة",
    stageEn: "Tactics & Competition",
    descAr: "تدريب تكتيكي وبدني متكامل مع المشاركة في مباريات ودية وبطولات تنافسية.",
    descEn: "Complete tactical and physical conditioning with friendly matches and tournaments.",
    daysAr: "اثنين – خميس",
    daysEn: "Mon – Thu",
    timeAr: "5:30 – 7:00 م",
    timeEn: "5:30 – 7:00 PM",
  },
];

export const COACHES = [
  { nameAr: "الكابتن عمرو", nameEn: "Coach Amro", roleAr: "مدير فني وتأسيس", roleEn: "Head Technical Coach" },
  { nameAr: "الكابتن أحمد", nameEn: "Coach Ahmed", roleAr: "مدرب مهارات وتطوير", roleEn: "Skills & Development Coach" },
  { nameAr: "الكابتن إسلام", nameEn: "Coach Eslam", roleAr: "مدرب تكتيك ولياقة", roleEn: "Tactical & Fitness Coach" },
  { nameAr: "الكابتن سيد", nameEn: "Coach Sayed", roleAr: "مدرب ناشئين وتنسيق", roleEn: "Youth Coach & Coordinator" },
];

export const FAQS = [
  {
    qAr: "كيف أسجل ابني في الدفعة المؤسسة 2026؟",
    aAr: "يمكنك تعبئة بيانات اللاعب وولي الأمر في نموذج التسجيل بالموقع مباشرة، وسيصلك تأكيد فوري ويتواصل معك الجهاز الإداري لتأكيد موعد الحصة الأولى.",
    qEn: "How do I register my child in the 2026 Founding Batch?",
    aEn: "Fill out the player and parent details directly in the registration form on this page. You will receive instant confirmation and our team will contact you for the first session.",
  },
  {
    qAr: "هل يشترط وجود خبرة سابقة للطفل في كرة القدم؟",
    aAr: "لا يشترط ذلك إطلاقاً؛ لدينا مجموعات مقسمة حسب العمر والمستوى تبدأ من التأسيس الحركي وحتى المستوى التنافسي.",
    qEn: "Does my child need prior football experience?",
    aEn: "Not at all. Groups are divided by age and skill level, starting from basic coordination up to competitive tactical training.",
  },
  {
    qAr: "ما قيمة الاشتراك الشهري وهل يشمل الزي الرياضي؟",
    aAr: "الاشتراك الشهري الموحد لجميع الفئات هو 50 د.ك (حصتان أسبوعياً)، والزي الرياضي الصيفي الرسمي للأكاديمية بتكلفة 10 د.ك.",
    qEn: "What is the monthly fee and does it include the kit?",
    aEn: "The unified monthly subscription is 50 KWD (two sessions per week), and the official summer academy kit is 10 KWD.",
  },
  {
    qAr: "أين تقع تدريبات الأكاديمية؟",
    aAr: "تقام جميع التدريبات على ملعب ASAS المجهز بالكامل في منطقة صباح السالم – الكويت.",
    qEn: "Where are training sessions held?",
    aEn: "All training sessions take place at the fully equipped ASAS Pitch in Sabah Al-Salem, Kuwait.",
  },
];