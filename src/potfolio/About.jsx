import React, { useState, useEffect, useRef } from "react";
import { motion, useInView } from "framer-motion";

function About() {
  const descriptionText =
    "Elhachimi Vision Lab وكالة إبداعية تقدم خدمات التصوير الفوتوغرافي، التصميم الجرافيكي، تحليل الأداء الرياضي، وإدارة وسائل التواصل الاجتماعي بأسلوب احترافي يهدف إلى تعزيز حضورك الرقمي وصناعة محتوى مميز يعكس هوية علامتك.";

  const [visibleCount, setVisibleCount] = useState(0);
  const containerRef = useRef(null);
  const isInView = useInView(containerRef, { once: true, margin: "-100px" });

  // typing effect
  useEffect(() => {
    if (!isInView) return;

    let current = 0;
    const interval = setInterval(() => {
      if (current < descriptionText.length) {
        current++;
        setVisibleCount(current);
      } else {
        clearInterval(interval);
      }
    }, 25);

    return () => clearInterval(interval);
  }, [isInView, descriptionText.length]);

  return (
    <section
      className="relative w-full bg-white py-16 px-6 md:px-16 overflow-hidden min-h-[90vh] flex items-center justify-center"
      dir="rtl"
      style={{ fontFamily: "lightfont" }}
    >
      {/* ===== طبقة الزجاج الأخضر المصفر الحقيقية ===== */}
      <div
        className="absolute inset-0 z-0 pointer-events-none"
        style={{
          backdropFilter: "blur(12px)",
          WebkitBackdropFilter: "blur(12px)",
          backgroundColor: "rgba(173, 255, 47, 0.15)", // #ADFF2F شفاف
          mixBlendMode: "overlay",
          // نسيج ضوضاء خفيف لزيادة واقعية الزجاج (اختياري)
          backgroundImage: `url("data:image/svg+xml,%3Csvg viewBox='0 0 200 200' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='noise'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.65' numOctaves='3' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23noise)' opacity='0.05'/%3E%3C/svg%3E")`,
          backgroundRepeat: "repeat",
          backgroundSize: "100px 100px",
        }}
      />

      {/* طبقة توهج ناعم إضافية لتعزيز اللون الأخضر دون التأثير على الزجاج */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none z-0">
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-[#ADFF2F] blur-[120px] rounded-full opacity-30 mix-blend-screen" />
        <div className="absolute -top-32 -right-40 w-[300px] h-[300px] bg-[#ADFF2F] blur-[140px] rounded-full opacity-20 mix-blend-screen" />
        <div className="absolute -bottom-40 -left-40 w-[400px] h-[400px] bg-[#b6f605] blur-[160px] rounded-full opacity-20 mix-blend-screen" />
      </div>

      {/* المحتوى الأساسي فوق طبقات الخلفية */}
      <div className="relative z-10 w-full max-w-5xl mx-auto flex flex-col items-center">
        {/* TOP SECTION */}
        <div className="w-full grid grid-cols-1 lg:grid-cols-2 gap-10 items-center mb-14">
          {/* TEXT */}
          <motion.div
            ref={containerRef}
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="text-right"
          >
            <div className="inline-block bg-gray-100 text-gray-500 text-[10px] px-3 py-1 rounded-full mb-3">
              من نحن
            </div>

            <h3 className="text-4xl md:text-6xl font-black text-black mb-4">
              من نحن !
            </h3>

            <p className="text-gray-800 text-base md:text-lg leading-relaxed min-h-[120px]">
              {descriptionText.slice(0, visibleCount)}
              <motion.span
                animate={{ opacity: [0, 1, 0] }}
                transition={{ repeat: Infinity, duration: 0.8 }}
                className="inline-block w-[2px] h-[18px] bg-[#93f304] mr-1"
              />
            </p>
          </motion.div>

          {/* LOGO CARD */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            className="relative flex justify-center"
          >
            {/* توهج خلف البطاقة بلون أخضر مصفر */}
            <div className="absolute w-[120%] h-[120%] bg-[#ADFF2F] blur-[100px] rounded-full opacity-40 mix-blend-screen" />

            <div className="relative w-72 h-72 bg-black flex items-center justify-center overflow-hidden shadow-2xl">
              <div className="absolute inset-0 bg-gradient-to-br from-[#ADFF2F]/40 via-transparent to-black/80" />
              <img
                src="/logo2.png"
                alt="logo"
                className="relative z-10 w-32 opacity-90"
              />
            </div>
          </motion.div>
        </div>

        {/* DIVIDER */}
        <div className="w-full h-px bg-gray-300/60 mb-10" />

        {/* VISION / MISSION */}
        <div className="w-full grid grid-cols-1 md:grid-cols-2 gap-8">
          {/* VISION */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="relative p-8 bg-white/20 backdrop-blur-sm border border-white/30 rounded-2xl overflow-hidden shadow-lg"
          >
            {/* توهج داخلي ناعم */}
            <div className="absolute -top-10 -left-10 w-[200px] h-[200px] bg-[#ADFF2F] blur-[80px] rounded-full opacity-20 mix-blend-screen" />

            <h4 className="text-2xl font-black mb-3 text-black">الرؤية</h4>
            <p className="text-gray-800 leading-relaxed">
              أن نكون الشريك الإبداعي الأول في المملكة والمنطقة، الذي يبتكر حلولاً تسويقية متجددة.
            </p>
          </motion.div>

          {/* MISSION */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="relative p-8 bg-white/20 backdrop-blur-sm border border-white/30 rounded-2xl overflow-hidden shadow-lg"
          >
            {/* توهج داخلي ناعم */}
            <div className="absolute -bottom-10 -right-10 w-[220px] h-[220px] bg-[#ADFF2F] blur-[90px] rounded-full opacity-20 mix-blend-screen" />

            <h4 className="text-2xl font-black mb-3 text-black">الرسالة</h4>
            <p className="text-gray-800 leading-relaxed">
              تمكين العلامات التجارية من الوصول إلى جمهورها بفعالية عبر الإبداع والتقنية والتحليل.
            </p>
          </motion.div>
        </div>
      </div>
    </section>
  );
}

export default About;