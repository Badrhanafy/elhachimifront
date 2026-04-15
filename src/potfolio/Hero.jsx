import React from "react";
import { motion } from "framer-motion";
import bg from "../bg.jpeg";

function Hero() {
  return (
    <section
      className="relative w-full min-h-screen flex flex-col justify-between overflow-hidden bg-black"
      dir="rtl"
    >
      {/* BACKGROUND IMAGE */}
      <div className="absolute inset-0 z-0">
        <img
          src={bg}
          alt="background"
          className="w-full h-full object-cover opacity-50 scale-105"
        />

        {/* DARK SHADER */}
        <div className="absolute inset-0 bg-black/60" />
      </div>

      {/* GREEN/YELLOW GLOW (RESTORED + ENHANCED) */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none z-0">

        {/* main glow */}
        <div className="absolute top-[-120px] right-[-120px] w-[380px] h-[380px] bg-[#ADFF2F]/20 blur-[130px] rounded-full" />

        {/* center streak glow */}
        <motion.div
          animate={{ rotate: 360 }}
          transition={{ duration: 25, repeat: Infinity, ease: "linear" }}
          className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[700px] h-[220px] bg-gradient-to-r from-[#ADFF2F]/20 via-yellow-300/10 to-transparent blur-[90px]"
        />

        {/* bottom glow */}
        <div className="absolute bottom-[-140px] left-[-100px] w-[420px] h-[420px] bg-yellow-300/10 blur-[140px] rounded-full" />
      </div>

      {/* HERO CONTENT */}
      <div className="relative z-10 flex-1 flex items-center">
        <div className="w-full max-w-7xl mx-auto px-5 sm:px-6 md:px-10">

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="
              max-w-3xl
              space-y-6
              text-center sm:text-right
              mx-auto sm:mx-0
            "
          >

            {/* TITLE */}
            <h2 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-black text-white leading-snug">
              تطوير الهوية الرقمية للنادي
              <br />
              <span className="text-[#ADFF2F]">
                رسم طريق علامتك للتألق!
              </span>
            </h2>

            {/* DESCRIPTION */}
            <p className="text-gray-300 text-sm sm:text-base md:text-lg lg:text-xl leading-relaxed max-w-xl mx-auto sm:mx-0">
              نقدم حلولاً تسويقية مبتكرة تبرز علامتك وتمنحها حضوراً قوياً في السوق.
            </p>

            {/* BUTTON */}
            <div className="flex justify-center sm:justify-start pt-2">
              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="
                  px-6 sm:px-10 py-3 sm:py-4
                  font-black
                  text-black
                  bg-[#ADFF2F]
                  hover:bg-white
                  transition-all
                "
              >
                تعرف علينا
              </motion.button>
            </div>

          </motion.div>
        </div>
      </div>

      {/* LOGOS */}
      <div className="relative z-10 border-t border-white/10 py-6 sm:py-10">
        <div className="overflow-x-auto px-5 sm:px-10">
          <div className="flex gap-8 sm:gap-12 md:gap-20 items-center min-w-max sm:justify-center">

            {[
              "/logos/chadawhite.png",
              "/logos/easfrwhite.png",
              "/logos/jsmwhite.png",
              "/logos/mlffwhite.png",
              "/logos/ocpwhite.png",
              "/logos/teamwhite.png",
            ].map((logo, i) => (
              <img
                key={i}
                src={logo}
                alt="logo"
                className="h-10 sm:h-14 md:h-20 lg:h-24 object-contain opacity-60 hover:opacity-100 transition"
              />
            ))}

          </div>
        </div>
      </div>
    </section>
  );
}

export default Hero;