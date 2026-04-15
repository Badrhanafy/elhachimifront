import React from 'react';
import { motion } from 'framer-motion';

function Team() {
  return (
    <section className="relative w-full bg-white py-24 px-6 md:px-16 overflow-hidden flex flex-col items-center" dir="rtl" style={{ fontFamily: 'lightfont' }}>
      
      {/* Global Animated Background Shapes */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none z-0">
        <motion.div 
          animate={{ rotate: [0, 360], scale: [1, 1.1, 1], x: [0, 30, 0], y: [0, 50, 0] }}
          transition={{ duration: 15, repeat: Infinity, ease: "linear" }}
          className="absolute -top-40 -right-40 w-[600px] h-[600px] bg-[#ADFF2F]/10 blur-[120px] rounded-full"
        />
        <motion.div 
          animate={{ rotate: [0, -360], scale: [1, 1.2, 1], x: [0, -40, 0], y: [0, -20, 0] }}
          transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
          className="absolute top-1/3 -left-40 w-[500px] h-[500px] bg-[#ADFF2F]/10 blur-[100px] rounded-full"
        />
      </div>

      <div className="relative z-10 w-full max-w-6xl mx-auto flex flex-col items-start px-4">
        
        {/* RTL Header with Neon Underline */}
        <div className="flex flex-col items-start mb-20">
          <motion.h2 
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="text-black text-4xl md:text-7xl font-black mb-4 pl-4 text-left"
          >
            فريق العمل
          </motion.h2>
          <motion.div
            initial={{ opacity: 0, width: 0 }}
            whileInView={{ opacity: 1, width: "300px" }}
            viewport={{ once: true }}
            transition={{ duration: 1, delay: 0.3 }}
            className="h-[1px] bg-[#ADFF2F] ml-4 shadow-[0_0_10px_rgba(173,255,47,0.3)]"
          ></motion.div>
        </div>

        {/* Simple 2-Column Grid */}
        <div className="grid grid-cols-2 gap-3 md:gap-8 lg:gap-16 w-full items-center justify-center">
          
          {/* Member 1: Hicham */}
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="group relative w-full aspect-square overflow-hidden rounded-none shadow-xl border border-gray-100"
          >
            <img 
              src="/images/member1.png" 
              alt="هشام" 
              className="w-full h-full object-cover transition-all duration-700 group-hover:scale-110 group-hover:blur-[2px]"
            />
            {/* Centered Overlay with Name and Role */}
            <div className="absolute inset-0 bg-black/40 opacity-0 group-hover:opacity-100 transition-opacity duration-500 flex flex-col items-center justify-center p-6 text-center">
              <span className="text-white text-2xl md:text-4xl lg:text-5xl font-black mb-2 transform translate-y-4 group-hover:translate-y-0 transition-transform duration-500 drop-shadow-md">هشام</span>
              <span className="text-[#ADFF2F] text-xs md:text-lg lg:text-xl font-light transform translate-y-4 group-hover:translate-y-0 transition-transform duration-500 delay-75 uppercase tracking-widest drop-shadow-[0_0_5px_rgba(0,0,0,0.8)]"> فوتوغرافر</span>
            </div>
          </motion.div>

          {/* Member 2: Yassin */}
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="group relative w-full aspect-square overflow-hidden rounded-none shadow-xl border border-gray-100"
          >
            <img 
              src="/images/member2.png" 
              alt="ياسين" 
              className="w-full h-full object-cover transition-all duration-700 group-hover:scale-110 group-hover:blur-[2px]"
            />
            {/* Centered Overlay with Name and Role */}
            <div className="absolute inset-0 bg-black/40 opacity-0 group-hover:opacity-100 transition-opacity duration-500 flex flex-col items-center justify-center p-6 text-center">
              <span className="text-white text-2xl md:text-4xl lg:text-5xl font-black mb-2 transform translate-y-4 group-hover:translate-y-0 transition-transform duration-500 drop-shadow-md">ياسين</span>
              <span className="text-[#ADFF2F] text-xs md:text-lg lg:text-xl font-light transform translate-y-4 group-hover:translate-y-0 transition-transform duration-500 delay-75 uppercase tracking-widest drop-shadow-[0_0_5px_rgba(0,0,0,0.8)]"> جرافيك ديزاينر</span>
            </div>
          </motion.div>

        </div>

      </div>
    </section>
  );
}

export default Team;
