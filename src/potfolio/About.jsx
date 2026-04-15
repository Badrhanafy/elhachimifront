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
  }, [isInView]);

  return (
    <section
      className="relative w-full bg-white py-16 px-6 md:px-16 overflow-hidden min-h-[90vh] flex items-center justify-center"
      dir="rtl"
      style={{ fontFamily: "lightfont" }}
    >

      {/*  LUXURY GREEN GLOW BACKGROUND */}
{/* SOFT LUXURY GREEN/YELLOW GLOW */}
<div className="absolute inset-0 overflow-hidden pointer-events-none z-0">

  {/* main soft center glow */}
  <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[400px] h-[400px] bg-[#b5f30c] blur-[98px] rounded-full"></div>

  {/* side glow left */}
  <div className="absolute -top-32 -right-40 w-[100px] h-[100px] bg-[#b6f605] blur-[140px] rounded-full"></div>

  {/* side glow right */}
  <div className="absolute -bottom-40 -left-40 w-[300px] h-[300px] bg-[#d7f979] blur-[160px] rounded-full"></div>

  {/* soft white veil to keep readability */}
  <div className="absolute inset-0 bg-white/60 backdrop-blur-[1px]"></div>

</div>

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

            <p className="text-gray-600 text-base md:text-lg leading-relaxed min-h-[120px]">
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
            {/* glow behind card */}
            <div className="absolute w-[120%] h-[120%] bg-[#93f304]/30 blur-[100px] rounded-full"></div>

            <div className="relative w-72 h-72 bg-black flex items-center justify-center overflow-hidden shadow-2xl">

              <div className="absolute inset-0 bg-gradient-to-br from-[#93f304]/30 via-transparent to-black/80"></div>

              <img
                src="/logo2.png"
                alt="logo"
                className="relative z-10 w-32 opacity-90"
              />
            </div>
          </motion.div>
        </div>

        {/* DIVIDER */}
        <div className="w-full h-px bg-gray-200 mb-10"></div>

        {/* VISION / MISSION */}
        <div className="w-full grid grid-cols-1 md:grid-cols-2 gap-8">

          {/* VISION */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="relative p-8 bg-transparent border  overflow-hidden"
          >
            {/* glow */}
            <div className="absolute -top-10 -left-10 w-[200px] h-[200px] bg-[#93f304]/20 blur-[80px] rounded-full"></div>

            <h4 className="text-2xl font-black mb-3 text-black">الرؤية</h4>
            <p className="text-gray-600 leading-relaxed">
              أن نكون الشريك الإبداعي الأول في المملكة والمنطقة، الذي يبتكر حلولاً تسويقية متجددة.
            </p>
          </motion.div>

          {/* MISSION */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="relative p-8 bg-transparent border  overflow-hidden"
          >
            {/* glow */}
            <div className="absolute -bottom-10 -right-10 w-[220px] h-[220px] bg-[#93f304]/20 blur-[90px] rounded-full"></div>

            <h4 className="text-2xl font-black mb-3 text-black">الرسالة</h4>
            <p className="text-gray-600 leading-relaxed">
              تمكين العلامات التجارية من الوصول إلى جمهورها بفعالية عبر الإبداع والتقنية والتحليل.
            </p>
          </motion.div>

        </div>
      </div>
    </section>
  );
}

export default About;