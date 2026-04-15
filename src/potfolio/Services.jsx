import React from 'react';
import { motion } from 'framer-motion';

function Services() {
  const cards = [
    {
      title: "إدارة السوشيال ميديا",
      desc: "إدارة كاملة لصفحات النادي (Facebook – TikTok – Instagram)، نشر منتظم وتفاعل مع الجمهور.",
      isDark: true,
    },
    {
      title: "صناعة المحتوى الرياضي",
      desc: "تصوير احترافي للمباريات والتمارين، وإنتاج فيديوهات قصيرة (Reels) بجودة عالية كتبين أهم اللحظات.",
      isDark: true,
    },
    {
      title: "تطوير الهوية الرقمية",
      desc: "بناء صورة قوية للنادي تساعد على زيادة المتابعين وجلب سبونسور.",
      isDark: true,
    },
    {
      title: "تصميم المنشورات",
      desc: "تصميم بوستات احترافية: Match Day – Results – Lineup – Announcements.",
      isDark: true,
    }
  ];

  return (
    <section
      className="relative w-full bg-white py-20 px-6 md:px-16 overflow-hidden flex flex-col items-center justify-center min-h-[80vh]"
      dir="rtl"
      style={{ fontFamily: 'lightfont' }}
    >

      {/* BACKGROUND GLOWS */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none z-0">
 {/* main soft center glow */}
  <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[400px] h-[400px] bg-[#b5f30c] blur-[98px] rounded-full"></div>

  {/* side glow left */}
  <div className="absolute -top-32 -right-40 w-[100px] h-[100px] bg-[#b6f605] blur-[140px] rounded-full"></div>

  {/* side glow right */}
  <div className="absolute -bottom-40 -left-40 w-[300px] h-[300px] bg-[#d7f979] blur-[160px] rounded-full"></div>

  {/* soft white veil to keep readability */}
  <div className="absolute inset-0 bg-white/60 backdrop-blur-[1px]"></div>
        <motion.div
          animate={{ rotate: [0, 360], scale: [1, 1.1, 1] }}
          transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
          className="absolute -top-40 -right-40 w-[600px] h-[600px]
          bg-[#ADFF2F]/10 blur-[140px] rounded-full"
        />

        <motion.div
          animate={{ rotate: [0, -360], scale: [1, 1.2, 1] }}
          transition={{ duration: 25, repeat: Infinity, ease: "linear" }}
          className="absolute top-1/3 -left-40 w-[500px] h-[500px]
          bg-[#ADFF2F]/10 blur-[120px] rounded-full"
        />

      </div>

      {/* TITLE */}
      <div className="relative z-10 w-full max-w-4xl mx-auto">

        <motion.div
          initial={{ opacity: 0, x: 30 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="flex justify-start mb-12 w-full"
        >
          <h2 className="text-4xl md:text-6xl font-black text-black border-b-8 border-black pb-2">
            ماذا نقدم؟
          </h2>
        </motion.div>

        {/* GRID */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 md:gap-10">

          {cards.map((card, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              className="relative p-8 md:p-10 min-h-[260px] flex flex-col justify-center text-right overflow-hidden"
            >

              {card.isDark && (
                <>
                  {/* DARK BASE */}
                  <div className="absolute inset-0 bg-black/90" />

                  {/* MAIN GREEN GLOW */}
                  <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2
                  w-[420px] h-[420px]
                  bg-[#b5f30c]/35 blur-[170px] rounded-full" />

                  {/* SIDE GLOWS */}
                  <div className="absolute -top-24 -left-24 w-[280px] h-[280px]
                  bg-[#ADFF2F]/20 blur-[150px] rounded-full" />

                  <div className="absolute -bottom-24 -right-24 w-[320px] h-[320px]
                  bg-green-400/20 blur-[160px] rounded-full" />

                  {/* GLASS CORE */}
                  <div className="absolute inset-0
                  bg-white/5
                  backdrop-blur-3xl
                  border border-[#ADFF2F]/20
                  shadow-[0_0_140px_rgba(173,255,47,0.12),inset_0_0_90px_rgba(173,255,47,0.08)]" />

                  {/* GLASS OVERLAY (REAL REFLECTION) */}
                  <div className="absolute inset-0 pointer-events-none">

                    {/* top shine */}
                    <div className="absolute top-0 left-0 w-full h-1/2
                    bg-gradient-to-b from-white/10 via-transparent to-transparent" />

                    {/* diagonal reflection */}
                    <div className="absolute inset-0
                    bg-gradient-to-tr from-[#ADFF2F]/10 via-transparent to-black/50
                    mix-blend-overlay" />

                    {/* noise texture */}
                    <div className="absolute inset-0 opacity-[0.05]
                    bg-[radial-gradient(circle_at_1px_1px,white_1px,transparent_0)]
                    bg-[length:6px_6px]" />

                  </div>
                </>
              )}

              {/* CONTENT */}
              <div className="relative z-10 text-white">
                <h3 className="text-2xl md:text-3xl font-black mb-4">
                  {card.title}
                </h3>

                <p className="text-sm md:text-base opacity-90 leading-relaxed">
                  {card.desc}
                </p>
              </div>

            </motion.div>
          ))}

        </div>
      </div>

    </section>
  );
}

export default Services;