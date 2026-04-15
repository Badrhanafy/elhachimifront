import React from "react";
import { motion } from "framer-motion";
import bg from "../bg.jpeg";

function Hero() {
  return (
    <section
      className="relative w-full h-screen overflow-hidden flex flex-col bg-black"
      dir="rtl"
    >
      {/* BACKGROUND */}
      <div className="absolute inset-0 z-0">
        <img
          src={bg}
          alt="background"
          className="w-full h-full object-cover opacity-50 scale-105"
        />
        <div className="absolute inset-0 bg-black/60" />
      </div>

      {/* GLOW */}
      <div className="absolute inset-0 pointer-events-none z-0">
        <div className="absolute top-[-120px] right-[-120px] w-[380px] h-[380px] bg-[#ADFF2F]/20 blur-[130px] rounded-full" />
        <div className="absolute bottom-[-140px] left-[-100px] w-[420px] h-[420px] bg-yellow-300/10 blur-[140px] rounded-full" />
      </div>

      {/* MAIN CONTENT AREA */}
      <div className="relative z-10 flex-1 flex items-center justify-center px-5 md:px-10">

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="max-w-4xl w-full text-center space-y-5 md:space-y-7"
        >

          {/* LOGO TOP */}
          <div className="flex justify-center">
            <img
              src="/logo2.png"
              alt="logo"
              className="w-20 sm:w-24 md:w-28 object-contain"
            />
          </div>

          {/* TITLE */}
          <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-black text-white leading-tight">
            تطوير الهوية الرقمية للنادي
            <br />
            <span className="text-[#ADFF2F]">
              رسم طريق علامتك للتألق!
            </span>
          </h1>

          {/* DESCRIPTION */}
          <p className="text-gray-300 text-sm sm:text-base md:text-lg lg:text-xl max-w-2xl mx-auto leading-relaxed">
            نقدم حلولاً تسويقية مبتكرة تبرز علامتك وتمنحها حضوراً قوياً في السوق.
          </p>

          {/* BUTTON */}
          <div className="flex justify-center">
            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="px-6 sm:px-10 py-3 sm:py-4 bg-[#ADFF2F] text-black font-black hover:bg-white transition"
            >
              تعرف علينا
            </motion.button>
          </div>

        </motion.div>
      </div>

      {/* LOGOS BOTTOM (BIG + PROPER PADDING) */}
      <div className="relative z-10 pb-6 md:pb-10 border-t border-white/10">

  <div className="px-5 md:px-10 py-6">

    <div className="
      grid grid-cols-3 sm:grid-cols-3 md:grid-cols-6
      gap-6 md:gap-10
      items-center
      justify-items-center
    ">

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
          className="
            h-10 sm:h-14 md:h-16 lg:h-20
            object-contain
            opacity-70 hover:opacity-100
            transition
          "
        />
      ))}

    </div>

  </div>

</div>
    </section>
  );
}

export default Hero;