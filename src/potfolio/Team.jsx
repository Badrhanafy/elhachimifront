import React from "react";
import { motion } from "framer-motion";

function Team() {
  return (
    <section
      className="relative w-full bg-white py-24 px-6 md:px-16 overflow-hidden flex flex-col items-center"
      dir="rtl"
      style={{ fontFamily: "lightfont" }}
    >
      {/* ================= LUXURY BACKGROUND ================= */}
      <div className="absolute inset-0 z-0 overflow-hidden pointer-events-none">

        {/* soft dark vignette */}
        <div className="absolute inset-0 bg-gradient-to-b from-black via-[#050505] to-black" />

        {/* subtle white fog */}
        <div className="absolute inset-0 bg-white/5 backdrop-blur-3xl" />

        {/* MAIN LUXURY GREEN GLOW (CENTER) */}
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-[#ADFF2F]/30 blur-[160px] rounded-full" />

        {/* secondary glow top */}
        <div className="absolute -top-40 right-[-120px] w-[400px] h-[400px] bg-[#d7f979]/20 blur-[140px] rounded-full" />

        {/* bottom glow depth */}
        <div className="absolute -bottom-52 left-[-120px] w-[500px] h-[500px] bg-[#b5f30c]/15 blur-[180px] rounded-full" />

      </div>

      {/* ================= CONTENT ================= */}
      <div className="relative z-10 w-full max-w-6xl mx-auto flex flex-col items-start px-4">

        {/* HEADER */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mb-20"
        >
          <h2 className="text-white text-4xl md:text-7xl font-black mb-4">
            فريق العمل
          </h2>

          <div className="w-[200px] h-[2px] bg-[#ADFF2F] shadow-[0_0_25px_rgba(173,255,47,0.6)]" />
        </motion.div>

        {/* GRID */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-4 md:gap-10 w-full">

          {/* MEMBER 1 */}
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.7 }}
            className="relative w-full rounded-xl aspect-square overflow-hidden "
          >
            <img
              src="/images/member1.png"
              alt="هشام"
              className="w-full h-full object-cover"
            />

            {/* LABEL */}
            <div className="absolute bottom-0 w-full p-6 text-center bg-gradient-to-t from-black/80 via-black/30 to-transparent">
              <h3 className="text-white text-3xl md:text-5xl font-black">
                هشام
              </h3>
              <p className="text-[#ADFF2F] text-sm md:text-lg mt-1 tracking-widest">
                فوتوغرافر
              </p>
            </div>
          </motion.div>

          {/* MEMBER 2 */}
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.7, delay: 0.15 }}
            className="relative w-full rounded-xl aspect-square overflow-hidden rounded-none"
          >
            <img
              src="/images/member2.png"
              alt="ياسين"
              className="w-full h-full object-cover"
            />

            {/* LABEL */}
            <div className="absolute bottom-0 w-full p-6 text-center bg-gradient-to-t from-black/80 via-black/30 to-transparent">
              <h3 className="text-white text-3xl md:text-5xl font-black">
                ياسين
              </h3>
              <p className="text-[#ADFF2F] text-sm md:text-lg mt-1 tracking-widest">
                جرافيك ديزاينر
              </p>
            </div>
          </motion.div>

        </div>
      </div>
    </section>
  );
}

export default Team;