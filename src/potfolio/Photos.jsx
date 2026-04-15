import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { ChevronRight, ChevronLeft } from 'lucide-react';

const Photos = () => {
  const BASE_URL = "https://portback.elhachimivisionlab.com/storage";

  const fileNames = [
    "/photography/6D8A0155.jpg",
    "/photography/6D8A0459.jpg",
    "/photography/6D8A0483.jpg",
    "/photography/6D8A0722.jpg",
    "/photography/6D8A0906.jpg",
    "/photography/6D8A0908.jpg",
    "/photography/6D8A0956.jpg",
    "/photography/6D8A1052.jpg",
    "/photography/6D8A1065.jpg",
    "/photography/6D8A1270.jpg",
    "/photography/6D8A1318.jpg",
    "/photography/6D8A1322.jpg",
    "/photography/6D8A1436.jpg",
    "/photography/6D8A1511.jpg",
    "/photography/6D8A1565.jpg",
    "/photography/6D8A1602.jpg",
    "/photography/6D8A2250.jpg",
    "/photography/6D8A2439.jpg",
    "/photography/6D8A2452.jpg",
    "/photography/6D8A2553.jpg",
    "/photography/6D8A2976.jpg",
    "/photography/6D8A3368.jpg",
    "/photography/6D8A3848.jpg",
    "/photography/6D8A4126.jpg",
    "/photography/6D8A4359.jpg",
    "/photography/6D8A4650.jpg",
    "/photography/6D8A4672.jpg",
    "/photography/6D8A5302.jpg",
    "/photography/6D8A5425.jpg",
    "/photography/6D8A5682.jpg",
    "/photography/6D8A5686.jpg",
    "/photography/6D8A6255.jpg",
  ];

  const photoList = fileNames.map((name) => `${BASE_URL}${name}`);

  // Helper to chunk images into groups of 4 for the 2x2 grid
  const slides = photoList.reduce((acc, curr, i) => {
    const slideIndex = Math.floor(i / 4);
    if (!acc[slideIndex]) {
      acc[slideIndex] = { id: slideIndex + 1, images: [] };
    }
    acc[slideIndex].images.push(curr);
    return acc;
  }, []);

  const [imagesLoaded, setImagesLoaded] = useState(false);

  // Preload all images to ensure fluent display and prevent animation lag
  useEffect(() => {
    if (photoList.length > 0) {
      const loadPromises = photoList.map((src) => {
        return new Promise((resolve) => {
          const img = new Image();
          img.src = src;
          img.onload = resolve;
          img.onerror = resolve; // don't block forever if one image fails
        });
      });

      Promise.all(loadPromises).then(() => {
        setImagesLoaded(true);
      });
    } else {
      setImagesLoaded(true);
    }
  }, []);

  const [currentIndex, setCurrentIndex] = useState(0);

  // Auto-play functionality
  useEffect(() => {
    if (slides.length === 0) return;
    const timer = setInterval(() => {
      nextSlide();
    }, 3500);
    return () => clearInterval(timer);
  }, [currentIndex, slides.length]);

  const nextSlide = () => {
    if (slides.length > 0) {
      setCurrentIndex((prev) => (prev + 1) % slides.length);
    }
  };

  const prevSlide = () => {
    if (slides.length > 0) {
      setCurrentIndex((prev) => (prev - 1 + slides.length) % slides.length);
    }
  };

  return (
    <section className="relative w-full bg-white py-16 px-6 md:px-16 overflow-hidden flex flex-col items-center justify-center min-h-[90vh]" dir="rtl" style={{ fontFamily: 'ae_arab' }}>

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

      <div className="relative z-10 max-w-4xl mx-auto w-full">

        {/* Title */}
        <div className="flex justify-start mb-10">
          <motion.h2
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="text-3xl md:text-5xl font-black text-black border-b-6 border-black pb-1"
          >
            صور من الميدان
          </motion.h2>
        </div>

        {/* 2x2 Grid with Precision Clipping */}
        <div className="relative overflow-hidden w-full max-w-4xl mx-auto min-h-[400px]">
          {!imagesLoaded ? (
            <div className="grid grid-cols-2 gap-4 md:gap-6 items-start w-full">
              {[1, 2, 3, 4].map(i => (
                <div key={i} className="aspect-[4/3] w-full bg-gray-100 animate-pulse border border-gray-200"></div>
              ))}
            </div>
          ) : slides.length === 0 ? (
            <div className="flex flex-col items-center justify-center min-h-[400px] w-full">
              <p className="text-black/60 font-light text-lg">لا توجد صور حاليا</p>
            </div>
          ) : (
            <AnimatePresence initial={false} mode="wait">
              <motion.div
                key={currentIndex}
                initial={{ x: 30, opacity: 0 }}
                animate={{ x: 0, opacity: 1 }}
                exit={{ x: -30, opacity: 0 }}
                transition={{
                  duration: 0.4,
                  ease: "easeOut"
                }}
                className="grid grid-cols-2 gap-4 md:gap-6 items-start"
              >
                {slides[currentIndex]?.images.slice(0, 4).map((img, idx) => (
                  <motion.div
                    key={idx}
                    whileHover={{ scale: 1.01 }}
                    className="relative rounded-none overflow-hidden group cursor-pointer shadow-lg border border-gray-200"
                  >
                    <img
                      src={img}
                      alt={`Field photo ${idx + 1}`}
                      className="w-full h-auto block transition-transform duration-700 group-hover:scale-105"
                    />
                    <div className="absolute inset-0 bg-black/5 group-hover:bg-black/0 transition-colors duration-500 pointer-events-none"></div>
                  </motion.div>
                ))}
              </motion.div>
            </AnimatePresence>
          )}
        </div>

        {/* Bottom Left Navigation - Compact */}
        <div className="flex flex-col items-start mt-8 space-y-4 w-full max-w-4xl mx-auto">
          <div className="flex gap-3">
            <button
              onClick={prevSlide}
              className="p-2.5 bg-black text-white hover:bg-gray-800 transition-all duration-300 rounded-none shadow-lg border-0"
            >
              <ChevronRight size={20} />
            </button>
            <button
              onClick={nextSlide}
              className="p-2.5 bg-black text-white hover:bg-gray-800 transition-all duration-300 rounded-none shadow-lg border-0"
            >
              <ChevronLeft size={20} />
            </button>
          </div>

          {/* Progress Indicators */}
          <div className="flex gap-2">
            {slides.map((_, idx) => (
              <button
                key={idx}
                onClick={() => setCurrentIndex(idx)}
                className={`w-2.5 h-2.5 transition-all duration-300 rounded-none ${idx === currentIndex ? 'bg-[#ADFF2F] w-10' : 'bg-gray-200'
                  }`}
              ></button>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Photos;
