import React from "react";
import { motion } from "framer-motion";
import bg from "../bg.jpeg";

function Hero() {
  return (
    <section
      className="relative w-full h-screen overflow-hidden bg-black flex flex-col"
      dir="rtl"
    >
      {/* BACKGROUND */}
      <div className="absolute inset-0 z-0">
        <img
          src={bg}
          alt="background"
          className="w-full h-full object-cover opacity-50 scale-105"
        />
        <div className="absolute inset-0 bg-black/70" />
      </div>

      {/* GLOW */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-[-120px] right-[-120px] w-[350px] h-[350px] bg-[#ADFF2F]/20 blur-[120px] rounded-full" />
        <div className="absolute bottom-[-140px] left-[-120px] w-[400px] h-[400px] bg-yellow-300/10 blur-[140px] rounded-full" />
      </div>

      {/* CONTENT WRAPPER */}
      <div className="relative z-10 flex flex-col h-full">

        {/* CENTER CONTENT */}
        <div className="flex-1 flex items-center justify-center px-5 md:px-10">

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="max-w-4xl text-center space-y-6"
          >

            {/* TITLE */}
            <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-black text-white leading-tight">
              تطوير الهوية الرقمية للنادي
              <br />
              <span className="text-[#ADFF2F]">
                رسم طريق علامتك للتألق!
              </span>
            </h1>

            {/* DESCRIPTION */}
            <p className="text-gray-300 text-sm sm:text-base md:text-lg max-w-2xl mx-auto leading-relaxed">
              نقدم حلولاً تسويقية مبتكرة تبرز علامتك وتمنحها حضوراً قوياً في السوق.
            </p>

            {/* BUTTON */}
            <div className="pt-2 flex justify-center">
              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="px-8 py-3 bg-[#ADFF2F] text-black font-bold hover:bg-white transition"
              >
                تعرف علينا
              </motion.button>
            </div>

          </motion.div>
        </div>

        {/* LOGOS BOTTOM */}
        <div className="py-4 md:py-6 border-t border-white/10">
          <div className="overflow-x-auto px-5 md:px-10">
            <div className="flex gap-8 md:gap-16 items-center justify-center min-w-max">

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
                  className="h-10 sm:h-14 md:h-20 object-contain opacity-60 hover:opacity-100 transition"
                />
              ))}

            </div>
          </div>
        </div>

      </div>
    </section>
  );
}

export default Hero;