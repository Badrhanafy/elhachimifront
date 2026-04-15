import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { ChevronRight, ChevronLeft } from 'lucide-react';

function FeaturedProjects() {
 const designs = [
  "/images/designs/8-DAYS-AGO.jpg",
  "/images/designs/8-DAYS-AGO.jpg",
  "/images/designs/8-DAYS-AGO.jpg",
  "/images/designs/8-DAYS-AGO.jpg",
  "/images/designs/8-DAYS-AGO.jpg",
  "/images/designs/almawlid-husa.jpg",
  "/images/designs/AMAL-MOUGADOR.jpg",
  "/images/designs/annonce-jerseys.jpg",
  "/images/designs/ASFA-DERBY-WEEK-1.jpg",
  "/images/designs/asfa-vs--cllk-c.jpg",
  "/images/designs/asfa-vs-aniss.jpg",
  "/images/designs/ASFA-VS-ASUS.jpg",
  "/images/designs/asfa-vs-ccwss.jpg",
  "/images/designs/ASFA-VS-DKFC-MATCHDAY-1221.jpg",
  "/images/designs/asfa-vs-fcaat.jpg",
  "/images/designs/asfa-vs-irtbs.jpg",
  "/images/designs/ASFA-WOMEN-VS-ASRTB.jpg",
  "/images/designs/asfa-women-vs-clkk-retour.jpg",
  "/images/designs/ayoub.jpg",
  "/images/designs/called-up-elouardi.jpg",
  "/images/designs/calledupsaad.jpg",
  "/images/designs/CCSWS.jpg",
  "/images/designs/CHAMPIONS-HANDISOUSS.jpg",
  "/images/designs/chuaa.jpg",
  "/images/designs/chwa23a.jpg",
  "/images/designs/derby-fffin.jpg",
  "/images/designs/DERBY-U20.jpg",
  "/images/designs/DERBY-VS-ASWSA.jpg",
  "/images/designs/ELYASSINII.jpg",
  "/images/designs/fgndfbsvd.jpg",
  "/images/designs/filictation-tiznit.jpg",
  "/images/designs/fin-du-histore.jpg",
  "/images/designs/fullt-ime-vs-fcaat.jpg",
  "/images/designs/FUS-VS-SCC.jpg",
  "/images/designs/FUS-VS-SCM.jpg",
  "/images/designs/GAMEDAY-RCMA.jpg",
  "/images/designs/GOAL-DKFC.jpg",
  "/images/designs/HBD-SAAD.jpg",
  "/images/designs/HUSA-JERSEY-150DH.jpg",
  "/images/designs/HUSA-KIRA.jpg",
  "/images/designs/husa-qw.jpg",
  "/images/designs/husa-vs-codm-32.jpg",
  "/images/designs/husa-vs-rcaaaa.jpg",
  "/images/designs/ihjghgf.jpg",
  "/images/designs/iotejn.jpg",
  "/images/designs/irsf.jpg",
  "/images/designs/ISTIQLAL.jpg",
  "/images/designs/Jersey-scsc.jpg",
  "/images/designs/jersey.jpg",
  "/images/designs/KICK-OFF-VS-DKFC.jpg",
  "/images/designs/kit-cover.jpg",
  "/images/designs/KJNF.jpg",
  "/images/designs/Lahcen-called-up.jpg",
  "/images/designs/lokous.jpg",
 ];

  const allProjects = designs.map((img, idx) => ({ id: idx + 1, image: img }));

  // Group projects into pages of 4
  const slides = [];
  for (let i = 0; i < allProjects.length; i += 4) {
    slides.push(allProjects.slice(i, i + 4));
  }

  // Preload all images to ensure fluent display and prevent animation lag
  useEffect(() => {
    if (allProjects.length > 0) {
      allProjects.forEach((project) => {
        const img = new Image();
        img.src = project.image;
      });
    }
  }, []);

  const [currentIndex, setCurrentIndex] = useState(0);

  const nextSlide = () => {
    setCurrentIndex((prev) => (prev + 1) % slides.length);
  };

  const prevSlide = () => {
    setCurrentIndex((prev) => (prev - 1 + slides.length) % slides.length);
  };

  useEffect(() => {
    const timer = setInterval(() => {
      nextSlide();
    }, 3500);
    return () => clearInterval(timer);
  }, [currentIndex]);

  const cardFrames = [
    { translateY: "translate-y-4", zIndex: "z-10", margin: "" },
    { translateY: "-translate-y-2", zIndex: "z-20", margin: "-ml-8 sm:-ml-12 md:-ml-16 lg:-ml-20" },
    { translateY: "translate-y-2", zIndex: "z-30", margin: "-ml-8 sm:-ml-12 md:-ml-16 lg:-ml-20" },
    { translateY: "-translate-y-4", zIndex: "z-40", margin: "-ml-8 sm:-ml-12 md:-ml-16 lg:-ml-20" }
  ];

  // Fixed rotations for better visual stability during slide transitions
  const rotations = [-8, 6, -4, 10];

  return (
    <section className="relative w-full bg-white pb-32 overflow-hidden" dir="rtl" style={{ fontFamily: 'lightfont' }}>
      
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
         {/* main soft center glow */}
  <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[400px] h-[400px] bg-[#b5f30c] blur-[98px] rounded-full"></div>

  {/* side glow left */}
  <div className="absolute -top-32 -right-40 w-[100px] h-[100px] bg-[#b6f605] blur-[140px] rounded-full"></div>

  {/* side glow right */}
  <div className="absolute -bottom-40 -left-40 w-[300px] h-[300px] bg-[#d7f979] blur-[160px] rounded-full"></div>
      </div>

      {/* Black Header Area - Modern Brutalist */}
      <div className="relative z-10 w-full bg-[#0a0a0a] text-white pt-24 pb-48 px-6 md:px-16 flex flex-col items-center text-center">
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="max-w-4xl"
        >
          <h2 className="text-5xl md:text-7xl font-black mb-8 border-b-8 border-[#ADFF2F] pb-4 inline-block">مشاريعنا</h2>
          <p className="text-gray-300 text-lg md:text-xl font-light leading-relaxed">
            اشتغلنا على عدة مشاريع ومحتويات رياضية، من تصوير وتغطية أحداث، إلى إنشاء فيديوهات ترويجية وتصاميم احترافية.
          </p>
        </motion.div>
      </div>
      
      {/* Interactive Slider Area */}
      <div className="relative z-20 w-full max-w-6xl mx-auto -mt-32 md:-mt-40">
        
        {/* Clipping Container - Hard masking at the borders with no padding */}
        <div className="relative w-full mt-[-4px] overflow-hidden min-h-[400px] md:min-h-[600px]">
          <AnimatePresence initial={false}>
           <motion.div
  key={currentIndex}
  initial={{ opacity: 0, x: 80, scale: 0.98 }}
  animate={{ opacity: 1, x: 0, scale: 1 }}
  exit={{ opacity: 0, x: -80, scale: 0.98 }}
  transition={{
    duration: 0.9,
    ease: [0.22, 1, 0.36, 1]
  }}
  className="absolute inset-0 flex flex-row justify-center items-center w-full"
  dir="ltr"
>
              {slides[currentIndex].map((project, index) => (
                <motion.div
                  key={project.id}
                  className={`relative w-28 sm:w-44 md:w-56 lg:w-64 aspect-[3/4] rounded-none overflow-hidden bg-black ${cardFrames[index].translateY} ${cardFrames[index].zIndex} ${cardFrames[index].margin} transform-gpu origin-bottom border-0`}
                  style={{ rotate: `${rotations[index]}deg` }}
                >
                  <img
                    src={project.image}
                    alt={`Project ${project.id}`}
                    className="absolute inset-0 w-full h-full object-cover"
                  />
                  {/* Gloss Overlay */}
                  <div className="absolute inset-0 bg-gradient-to-tr from-white/20 via-transparent to-black/20 pointer-events-none mix-blend-overlay"></div>
                </motion.div>
              ))}
            </motion.div>
          </AnimatePresence>
        </div>

        {/* Bottom Left Navigation - Consistent with Photos */}
        <div className="flex flex-col items-start mt-12 space-y-5 px-4 md:px-0">
          <div className="flex gap-4">
            <button 
              onClick={prevSlide}
              className="p-3 bg-black text-white hover:bg-gray-800 transition-all duration-300 rounded-none shadow-xl border-0"
            >
              <ChevronRight size={24} />
            </button>
            <button 
              onClick={nextSlide}
              className="p-3 bg-black text-white hover:bg-gray-800 transition-all duration-300 rounded-none shadow-xl border-0"
            >
              <ChevronLeft size={24} />
            </button>
          </div>

          {/* Progress Indicators */}
          <div className="flex gap-2">
            {slides.map((_, idx) => (
              <button
                key={idx}
                onClick={() => setCurrentIndex(idx)}
                className={`w-2.5 h-2.5 transition-all duration-300 rounded-none ${
                    idx === currentIndex ? 'bg-[#ADFF2F] w-10' : 'bg-gray-300'
                }`}
              ></button>
            ))}
          </div>
        </div>
      </div>

    </section>
  );
}

export default FeaturedProjects;
