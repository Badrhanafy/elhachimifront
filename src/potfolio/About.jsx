import React, { useState, useEffect, useRef } from "react";
import { motion, useInView } from "framer-motion";

function About() {
  const descriptionText =
    "Elhachimi Vision Lab وكالة إبداعية تقدم خدمات التصوير الفوتوغرافي، التصميم الجرافيكي، تحليل الأداء الرياضي، وإدارة وسائل التواصل الاجتماعي بأسلوب احترافي يهدف إلى تعزيز حضورك الرقمي وصناعة محتوى مميز يعكس هوية علامتك.";

  const [visibleCount, setVisibleCount] = useState(0);
  const containerRef = useRef(null);
  const isInView = useInView(containerRef, { once: true, margin: "-100px" });

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
    }, 18);

    return () => clearInterval(interval);
  }, [isInView]);

  return (
    <section
      className="relative w-full min-h-screen py-20 px-5 md:px-20 overflow-hidden bg-white"
      dir="rtl"
    >
      {/* BACKGROUND GLOW (cleaner) */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-1/2 left-1/2 w-[500px] h-[500px] -translate-x-1/2 -translate-y-1/2 bg-lime-400/20 blur-[120px] rounded-full" />
        <div className="absolute -top-40 -right-40 w-[300px] h-[300px] bg-lime-400/20 blur-[120px] rounded-full" />
      </div>

      <div className="relative z-10 max-w-6xl mx-auto flex flex-col gap-16">
        
        {/* TOP */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 items-center">

          {/* TEXT */}
          <motion.div
            ref={containerRef}
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.7 }}
            className="text-right"
          >
            <span className="inline-block text-xs bg-gray-100 px-3 py-1 rounded-full text-gray-600 mb-4">
              من نحن
            </span>

            <h2 className="text-3xl md:text-6xl font-black mb-5 leading-tight">
              من نحن
            </h2>

            <p className="text-gray-700 text-base md:text-lg leading-loose min-h-[120px]">
              {descriptionText.slice(0, visibleCount)}
              <span className="inline-block w-[2px] h-5 bg-lime-500 animate-pulse mr-1" />
            </p>
          </motion.div>

          {/* LOGO */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.7 }}
            className="flex justify-center"
          >
            <div className="relative w-56 h-56 md:w-72 md:h-72 rounded-2xl bg-black flex items-center justify-center overflow-hidden shadow-2xl">
              
              {/* glow */}
              <div className="absolute inset-0 bg-gradient-to-br from-lime-400/30 via-transparent to-black" />

              <img
                src="/logo2.png"
                alt="logo"
                className="w-24 md:w-32 object-contain z-10"
              />
            </div>
          </motion.div>
        </div>

        {/* DIVIDER */}
        <div className="w-full h-px bg-gray-200" />

        {/* VISION / MISSION */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">

          {/* VISION */}
          <motion.div
            whileInView={{ opacity: 1, y: 0 }}
            initial={{ opacity: 0, y: 20 }}
            transition={{ duration: 0.5 }}
            className="relative p-6 md:p-8 rounded-2xl bg-white border border-gray-200 shadow-sm overflow-hidden"
          >
            <div className="absolute -top-10 -left-10 w-[180px] h-[180px] bg-lime-400/20 blur-[80px] rounded-full" />

            <h3 className="text-xl md:text-2xl font-bold mb-3">
              الرؤية
            </h3>

            <p className="text-gray-600 leading-relaxed">
              أن نكون الشريك الإبداعي الأول في المملكة والمنطقة.
            </p>
          </motion.div>

          {/* MISSION */}
          <motion.div
            whileInView={{ opacity: 1, y: 0 }}
            initial={{ opacity: 0, y: 20 }}
            transition={{ duration: 0.5, delay: 0.1 }}
            className="relative p-6 md:p-8 rounded-2xl bg-white border border-gray-200 shadow-sm overflow-hidden"
          >
            <div className="absolute -bottom-10 -right-10 w-[180px] h-[180px] bg-lime-400/20 blur-[80px] rounded-full" />

            <h3 className="text-xl md:text-2xl font-bold mb-3">
              الرسالة
            </h3>

            <p className="text-gray-600 leading-relaxed">
              تمكين العلامات التجارية من الوصول إلى جمهورها بفعالية عبر الإبداع والتقنية.
            </p>
          </motion.div>

        </div>
      </div>
    </section>
  );
}

export default About;