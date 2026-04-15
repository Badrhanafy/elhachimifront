import React, { useState, useEffect, useRef } from "react";
import { motion, useInView } from "framer-motion";

function ServicesGrid() {
  const [isRevealed, setIsRevealed] = useState(false);
  const containerRef = useRef(null);
  const isInView = useInView(containerRef, { once: true, amount: 0.3 });

  useEffect(() => {
    if (isInView) {
      const timer = setTimeout(() => {
        setIsRevealed(true);
      }, 700);
      return () => clearTimeout(timer);
    }
  }, [isInView]);

  return (
    <section
      className="relative w-full bg-[#0a0a0a] py-24 px-6 md:px-16 overflow-hidden flex flex-col items-center justify-center min-h-[90vh]"
      dir="rtl"
      style={{ fontFamily: "lightfont" }}
    >
      {/* BACKGROUND SHAPES */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none z-0">
        <motion.div
          animate={{
            rotate: [0, 360],
            scale: [1, 1.1, 1],
            x: [0, 30, 0],
            y: [0, 50, 0],
          }}
          transition={{ duration: 15, repeat: Infinity, ease: "linear" }}
          className="absolute -top-40 -right-40 w-[600px] h-[600px] bg-[#ADFF2F]/10 blur-[120px] rounded-full"
        />

        <motion.div
          animate={{
            rotate: [0, -360],
            scale: [1, 1.2, 1],
            x: [0, -40, 0],
            y: [0, -20, 0],
          }}
          transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
          className="absolute top-1/3 -left-40 w-[500px] h-[500px] bg-[#ADFF2F]/10 blur-[100px] rounded-full"
        />
      </div>

      <div
        ref={containerRef}
        className="relative z-10 w-full max-w-4xl mx-auto flex flex-col items-start"
      >
        {/* HEADER */}
        <div className="flex flex-col items-start mb-20">
          <motion.h1
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="text-white text-3xl md:text-5xl font-black mb-4 pl-4 text-left"
          >
            نظرتنا للحياة
          </motion.h1>

          <motion.div
            initial={{ opacity: 0, width: 0 }}
            whileInView={{ opacity: 1, width: "500px" }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.3 }}
            className="h-[1px] bg-[#ADFF2F] ml-4 shadow-[0_0_10px_rgba(173,255,47,0.5)]"
          />
        </div>

        {/* CARDS CONTAINER */}
        <div className="relative w-full flex flex-col md:flex-row items-center justify-center gap-0 md:gap-0">

          {/* LEFT CARD */}
          <motion.div
            animate={{
              x: isRevealed ? 0 : 0,
              opacity: 1,
            }}
            className="
              w-full md:w-1/2
              aspect-square md:aspect-[4/5]
              overflow-hidden
              z-10
            "
          >
            <div
              className="w-full h-full bg-cover bg-center"
              style={{ backgroundImage: "url('/images/false.png')" }}
            />
          </motion.div>

          {/* RIGHT CARD */}
          <motion.div
            animate={{
              x: 0,
              opacity: 1,
            }}
            className="
              w-full md:w-1/2
              aspect-square md:aspect-[4/5]
              overflow-hidden
              z-20
            "
          >
            <div
              className="w-full h-full bg-cover bg-center"
              style={{ backgroundImage: "url('/images/right.png')" }}
            />
          </motion.div>

        </div>
      </div>
    </section>
  );
}

export default ServicesGrid;