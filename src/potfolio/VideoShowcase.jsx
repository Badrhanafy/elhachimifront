import React from 'react';
import { motion } from 'framer-motion';

const videoUrl = "https://www.youtube.com/embed/cBZhAe5Pb0E";

function VideoShowcase() {
  return (
    <section className="relative w-full bg-white pt-24 overflow-hidden flex flex-col items-center justify-center min-h-[70vh]" dir="rtl" style={{ fontFamily: 'lightfont' }}>
      
      {/* Animated Background Shapes matching theme */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none z-0">
        <motion.div 
          animate={{ 
            rotate: [0, 360],
            scale: [1, 1.1, 1],
            x: [0, 30, 0],
            y: [0, 50, 0]
          }}
          transition={{ duration: 15, repeat: Infinity, ease: "linear" }}
          className="absolute -top-40 -right-40 w-[600px] h-[600px] bg-[#ADFF2F]/20 blur-[120px] rounded-full"
        />
        <motion.div 
          animate={{ 
            rotate: [0, -360],
            scale: [1, 1.2, 1],
            x: [0, -40, 0],
            y: [0, -20, 0]
          }}
          transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
          className="absolute top-1/3 -left-40 w-[500px] h-[500px] bg-[#ADFF2F]/15 blur-[100px] rounded-full"
        />
      </div>

      {/* Main Content Container: Single Column Stacking */}
      <div className="relative z-10 w-full max-w-7xl mx-auto flex flex-col items-center gap-10 mt-8 px-6 md:px-16 text-center">
        
        {/* 1. ONE TITLE ABOVE ALL THEM */}
        <div className='flex flex-col items-center pt-8'>
           <h1 className='text-4xl md:text-5xl lg:text-6xl font-black text-black mb-6 leading-tight' style={{ fontFamily: 'ae_arab' }}>
             اقتراحات من أعمالنا في مشاريع الويب
           </h1>
           <div className="h-[3px] w-32 bg-[#ADFF2F] rounded-full shadow-[0_0_15px_rgba(173,255,47,0.8)]"></div>
        </div>

        {/* 2. THE TEXT DIV */}
        <div className="w-full max-w-3xl">
          <p className="text-gray-600 text-lg md:text-xl leading-relaxed">
            نحن نؤمن بأن كل فيديو يروي قصة فريدة، لذلك ندمج بين أحدث التقنيات 
            واللمسات الفنية الاحترافية لنخرج بمحتوى يتحدث عن نفسه بكل قوة و جودة.
            نسعى لايصال رسالتكم بأفضل صورة.
          </p>
        </div>

        {/* 3. THE VIDEO WITH BIGGER DIMENSIONS */}
        <div className="w-full xl:w-[90%] mt-4">
          <div className="relative w-full aspect-video rounded-3xl overflow-hidden shadow-[0_40px_80px_-20px_rgba(173,255,47,0.4)] border border-[#ADFF2F]/60 bg-black transition-all duration-500">
            <iframe 
               src={videoUrl} 
               loading="lazy"
               title="Main Video Showcase"
               allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
               allowFullScreen
               className="absolute inset-0 w-full h-full border-0 shadow-lg"
            ></iframe>
            {/* Subtle Green Glass Edge (non-blocking) */}
            <div className="absolute inset-0 backdrop:blur-lg shadow-yellow-500 rounded-3xl pointer-events-none border border-white/20"></div>
          </div>
        </div>

      </div>

      {/* 4. THEN THE IMAGE */}
      <div className="relative z-10 w-full mt-24">
           <img src="/images/screenhsoot.png" alt="Photography Grid Screenshot" loading="lazy" className="w-full h-auto block object-cover opacity-0 animate-[fadeIn_1s_ease-in_forwards]" />
      </div>

    </section>
  );
}

export default VideoShowcase;
