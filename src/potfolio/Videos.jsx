import React, { useState, useRef, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Play, Loader2 } from 'lucide-react';

const VideoCard = ({ video, index, isMobile }) => {
  const videoRef = useRef(null);
  const [isPlaying, setIsPlaying] = useState(false);

  const activePlay = isPlaying || isMobile;

  useEffect(() => {
    if (isMobile && videoRef.current) {
      videoRef.current.play().catch(e => console.log("Mobile autoplay protected:", e));
    } else if (!isMobile && !isPlaying && videoRef.current) {
      videoRef.current.pause();
    }
  }, [isMobile, isPlaying]);

  const handleMouseEnter = () => {
    if (videoRef.current) {
      videoRef.current.play().catch(err => console.log("Autoplay blocked or failed", err));
      setIsPlaying(true);
    }
  };

  const handleMouseLeave = () => {
    if (videoRef.current) {
      videoRef.current.pause();
      videoRef.current.currentTime = 0;
      setIsPlaying(false);
    }
  };

  return (
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ delay: index * 0.1 }}
      className="group relative aspect-[9/16] bg-black/30 rounded-3xl overflow-hidden border border-white/5 cursor-pointer shadow-2xl"
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
    >
      {/* Video Element */}
      <video
        ref={videoRef}
        src={video.url}
        muted
        loop
        playsInline
        autoPlay={isMobile}
        className={`absolute inset-0 w-full h-full object-cover transition-all duration-700 ${
          activePlay ? 'opacity-100 scale-100 grayscale-0' : 'opacity-60 grayscale group-hover:grayscale-0 group-hover:opacity-100 group-hover:scale-105'
        }`}
      />
      
      {/* Brutalist Label Overlay */}
      <div className="absolute bottom-0 left-0 right-0 p-3 md:p-6 bg-gradient-to-t from-black via-black/60 to-transparent flex flex-col items-start z-10">
        <h3 className="text-white text-sm md:text-xl font-bold">{video.title}</h3>
      </div>

      {/* Central Play Icon Overlay - Hidden when playing */}
      {!activePlay && (
        <div className="absolute rounded-full inset-0 flex items-center justify-center pointer-events-none">
          <div className="w-10 h-10 md:w-16 md:h-16 bg-[#ADFF2F]/10 border border-[#ADFF2F]/20 rounded-full flex items-center justify-center backdrop-blur-sm group-hover:bg-[#ADFF2F] group-hover:shadow-[0_0_30px_rgba(173,255,47,0.4)] transition-all duration-500">
            <Play className="text-[#ADFF2F] group-hover:text-black fill-current ml-1 w-4 h-4 md:w-8 md:h-8" />
          </div>
        </div>
      )}

      {/* Glass Glare Effect */}
      <div className="absolute inset-0 bg-gradient-to-tr from-white/10 via-transparent to-transparent pointer-events-none mix-blend-overlay z-20"></div>
    </motion.div>
  );
};

const Videos = () => {
  const [isLoading, setIsLoading] = useState(true);
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    const checkMobile = () => setIsMobile(window.innerWidth < 768);
    checkMobile();
    window.addEventListener('resize', checkMobile);
    return () => window.removeEventListener('resize', checkMobile);
  }, []);
  
  const videoData = [
    {
      id: 1,
      url: "https://portback.elhachimivisionlab.com/storage/videos/reel1.mp4",
      
    },
    {
      id: 2,
      url: "https://portback.elhachimivisionlab.com/storage/videos/reel2.mp4",
      
    },
    {
      id: 3,
      url: "https://portback.elhachimivisionlab.com/storage/videos/reel3.mp4",
      
    },
  
    {
      id: 5,
      url: "https://portback.elhachimivisionlab.com/storage/videos/reel4.mp4",
      
    }
  ];

  useEffect(() => {
    const preloadContent = async () => {
      // Simulate "fetching" and preloading for fluency
      const promises = videoData.map(video => {
        return new Promise((resolve) => {
          const v = document.createElement('video');
          v.src = video.url;
          v.preload = "auto";
          // We wait for metadata or partial load to ensure fluency without waiting for full high-res download
          v.onloadedmetadata = () => resolve();
          v.onerror = () => resolve(); // Resolve anyway to not block UI forever
          // Failsafe timeout
          setTimeout(resolve, 2000);
        });
      });

      await Promise.all(promises);
      // Extra artificial delay for smooth transition
      setTimeout(() => setIsLoading(false), 800);
    };

    preloadContent();
  }, []);

  return (
    <section className="relative w-full bg-[#0a0a0a] py-32 px-6 md:px-16 overflow-hidden" dir="rtl" style={{ fontFamily: 'lightfont' }}>
      
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

      <div className="relative z-10 max-w-7xl mx-auto">
        
        {/* Header - Modern Brutalist */}
        <div className="flex flex-col items-center mb-24 text-center">
          <motion.h2 
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            className="text-6xl md:text-8xl font-black text-white mb-6 uppercase tracking-tight"
          >
            الفيديوهات <span className="text-[#ADFF2F]">Reels</span>
          </motion.h2>
          <motion.div 
            initial={{ width: 0 }}
            whileInView={{ width: "200px" }}
            viewport={{ once: true }}
            className="h-2 bg-[#ADFF2F] rounded-xl shadow-[0_0_20px_rgba(173,255,47,0.5)]"
          ></motion.div>
        </div>

        <AnimatePresence mode="wait">
          {isLoading ? (
            <motion.div 
              key="loader"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              className="flex flex-col items-center justify-center min-h-[400px] gap-4"
            >
              <Loader2 className="animate-spin text-[#ADFF2F]" size={48} />
              <p className="text-white/40 text-lg font-light tracking-widest animate-pulse">جاري التحميل...</p>
            </motion.div>
          ) : (
            <motion.div 
              key="content"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.8 }}
              className="grid grid-cols-2 lg:grid-cols-4 gap-3 md:gap-6"
            >
              {videoData.map((video, index) => (
                <VideoCard key={`${video.id}-${index}`} video={video} index={index} isMobile={isMobile} />
              ))}
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </section>
  );
};

export default Videos;

