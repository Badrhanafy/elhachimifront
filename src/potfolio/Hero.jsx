import React from 'react';
import { motion } from 'framer-motion';
import bg from "../bg.jpeg";

function Hero() {
  return (
    <section className="relative w-full h-screen flex flex-col justify-between font-sans overflow-hidden bg-[#0a0a0a]" dir="rtl">

      {/* Background Image */}
      <div className="absolute h-[100vh] inset-0 z-0 pointer-events-none">
        <img
          src={bg}
          alt="background"
          className="w-full h-full object-cover opacity-50 scale-105"
        />
        <div className="absolute inset-0 bg-black/60"></div>
      </div>

      {/* Animated Background Shapes - optimized for mobile */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none z-0">
        <motion.div 
          animate={{ 
            rotate: [0, 360],
            scale: [1, 1.1, 1],
            x: [0, 30, 0],
            y: [0, 50, 0]
          }}
          transition={{ duration: 15, repeat: Infinity, ease: "linear" }}
          className="absolute -top-40 -right-40 w-[200px] sm:w-[300px] h-[200px] sm:h-[300px] bg-[#ADFF2F]/10 blur-[80px] sm:blur-[120px] rounded-full"
        />
        <motion.div
          className="absolute top-[10px] opacity-45 -rotate-6 -left-40 w-[600px] sm:w-[1000px] h-[200px] sm:h-[300px] 
          bg-gradient-to-b from-[#93f304] via-[#c9da18] to-[#d7f304]
          blur-[60px] sm:blur-[80px] rounded-full rotate-8 mix-blend-screen"
        />
      </div>

      {/* Top Nav placeholder */}
      <header className="relative z-20 w-full max-w-7xl mx-auto px-4 sm:px-6 py-4 sm:py-8 flex justify-between items-center text-white text-sm font-medium">
        {/* optional nav items */}
      </header>

      {/* Hero Content */}
      <div className="relative z-10 w-full max-w-7xl mx-auto px-4 sm:px-6 flex-1 flex items-center justify-start text-right">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          className="max-w-4xl space-y-4 sm:space-y-6"
        >
          <h2 
            className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-black leading-tight text-white mb-2 sm:mb-4"
            style={{ lineHeight: "1.3" }}  // replaced 14vh with relative unit
          >
            تطوير الهوية الرقمية للنادي رسم<br />
            طريق علامتك للتألق!
          </h2>

          <p className="text-gray-300 text-sm sm:text-base md:text-lg lg:text-xl font-light max-w-xl mt-4 sm:mt-6 leading-relaxed">
            نقدم حلولاً تسويقية مبتكرة تبرز علامتك وتمنحها حضوراً قوياً في السوق.
          </p>

          <div className="mt-6 sm:mt-10 flex justify-start">
            <motion.button
              whileHover={{ scale: 1.05, backgroundColor: "#ffffff" }}
              whileTap={{ scale: 0.95 }}
              className="hover:bg-[#ADFF2F] hover:border border-[#ADFF2F] hover:text-black px-6 sm:px-10 py-3 sm:py-4 rounded-none font-black text-base sm:text-lg md:text-xl transition-all flex items-center justify-center min-w-[160px] sm:min-w-[200px] bg-transparent text-white"
            >
              تعرف علينا
            </motion.button>
          </div>
        </motion.div>
      </div>

      {/* Logos Row - horizontal scroll on mobile */}
      <div className="relative z-10 w-full border-t border-white/10 py-6 sm:py-10 px-4 sm:px-6">
        <div className="overflow-x-auto overflow-y-hidden pb-2 sm:pb-0">
          <div className="flex flex-nowrap justify-start sm:justify-center gap-8 sm:gap-12 md:gap-24 items-center min-w-max sm:flex-wrap">
            <img src="/logos/chadawhite.png" alt="Chada" className="h-12 sm:h-16 md:h-24 lg:h-28 object-contain opacity-60 hover:opacity-100 transition-opacity cursor-pointer" />
            <img src="/logos/easfrwhite.png" alt="EASF" className="h-12 sm:h-16 md:h-24 lg:h-28 object-contain opacity-60 hover:opacity-100 transition-opacity cursor-pointer" />
            <img src="/logos/jsmwhite.png" alt="JSM" className="h-12 sm:h-16 md:h-24 lg:h-28 object-contain opacity-60 hover:opacity-100 transition-opacity cursor-pointer" />
            <img src="/logos/mlffwhite.png" alt="MLFF" className="h-12 sm:h-16 md:h-24 lg:h-28 object-contain opacity-60 hover:opacity-100 transition-opacity cursor-pointer" />
            <img src="/logos/ocpwhite.png" alt="OCP" className="h-12 sm:h-16 md:h-24 lg:h-28 object-contain opacity-60 hover:opacity-100 transition-opacity cursor-pointer" />
            <img src="/logos/teamwhite.png" alt="Team" className="h-12 sm:h-16 md:h-24 lg:h-28 object-contain opacity-60 hover:opacity-100 transition-opacity cursor-pointer" />
          </div>
        </div>
      </div>

    </section>
  );
}

export default Hero;