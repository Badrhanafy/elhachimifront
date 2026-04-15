import React, { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { ChevronRight, ChevronLeft } from "lucide-react";

function PostsDesign() {
  const BASE_URL = "https://portback.elhachimivisionlab.com/storage/designs";

  const fileNames = [
    "8-DAYS-AGO.jpg","almawlid-husa.jpg","AMAL-MOUGADOR.jpg","annonce-jerseys.jpg",
    "ASFA-DERBY-WEEK-1.jpg","asfa-vs--cllk-c.jpg","asfa-vs-aniss.jpg","ASFA-VS-ASUS.jpg",
    "asfa-vs-ccwss.jpg","ASFA-VS-DKFC-MATCHDAY-1221.jpg","asfa-vs-fcaat.jpg","asfa-vs-irtbs.jpg",
    "ASFA-WOMEN-VS-ASRTB.jpg","asfa-women-vs-clkk-retour.jpg","ayoub.jpg","called-up-elouardi.jpg",
    "calledupsaad.jpg","CCSWS.jpg","CHAMPIONS-HANDISOUSS.jpg","chuaa.jpg","chwa23a.jpg",
    "derby-fffin.jpg","DERBY-U20.jpg","DERBY-VS-ASWSA.jpg","ELYASSINII.jpg","fgndfbsvd.jpg",
    "filictation-tiznit.jpg","fin-du-histore.jpg","fullt-ime-vs-fcaat.jpg","FUS-VS-SCC.jpg",
    "FUS-VS-SCM.jpg","GAMEDAY-RCMA.jpg","GOAL-DKFC.jpg","HBD-SAAD.jpg","HUSA-JERSEY-150DH.jpg",
    "HUSA-KIRA.jpg","husa-qw.jpg","husa-vs-codm-32.jpg","husa-vs-rcaaaa.jpg","ihjghgf.jpg",
    "iotejn.jpg","irsf.jpg","ISTIQLAL.jpg","Jersey-scsc.jpg","jersey.jpg",
    "KICK-OFF-VS-DKFC.jpg","kit-cover.jpg","KJNF.jpg","Lahcen-called-up.jpg","lokous.jpg",
  ];

  const designs = fileNames.map(name => `${BASE_URL}/${name}`);

  const slides = [];
  for (let i = 0; i < designs.length; i += 5) {
    const chunk = designs.slice(i, i + 5);
    if (chunk.length === 5) {
      slides.push({ id: i / 5, images: chunk });
    }
  }

  const [currentIndex, setCurrentIndex] = useState(0);
  const [imagesCache, setImagesCache] = useState({});
  const [loaded, setLoaded] = useState(false);

  // 🔥 preload + cache images
  useEffect(() => {
    let isMounted = true;

    const preload = async () => {
      const cache = {};

      await Promise.all(
        designs.map(src => {
          return new Promise(resolve => {
            const img = new Image();
            img.src = src;
            img.onload = () => {
              cache[src] = img;
              resolve();
            };
            img.onerror = resolve;
          });
        })
      );

      if (isMounted) {
        setImagesCache(cache);
        setLoaded(true);
      }
    };

    preload();

    return () => (isMounted = false);
  }, []);

  const nextSlide = () => {
    setCurrentIndex(prev => (prev + 1) % slides.length);
  };

  const prevSlide = () => {
    setCurrentIndex(prev => (prev - 1 + slides.length) % slides.length);
  };

  useEffect(() => {
    if (!loaded) return;
    const timer = setInterval(nextSlide, 3500);
    return () => clearInterval(timer);
  }, [currentIndex, loaded]);

  const currentSlide = slides[currentIndex];

  return (
    <section className="relative w-full bg-white py-24 px-6 md:px-16 overflow-hidden flex justify-center">

      {/* 🔥 Green glowing background */}
      <div className="absolute inset-0 z-0">
        <div className="absolute w-[600px] h-[600px] bg-[#ADFF2F]/20 blur-[140px] rounded-full top-0 left-1/2 -translate-x-1/2"></div>
      </div>

      <div className="relative z-10 w-full max-w-6xl">

        <div className="relative">

          {/* 🔥 glass frame */}
          <div className="absolute -inset-6 bg-[#ADFF2F]/30 blur-2xl"></div>

          <div className="relative border-4 border-black bg-black/40 backdrop-blur-xl">

            {!loaded ? (
              <div className="h-[600px] flex items-center justify-center text-white">
                Loading designs...
              </div>
            ) : (
              <AnimatePresence mode="wait">
                <motion.div
                  key={currentIndex}
                  initial={{ opacity: 0, scale: 0.95 }}
                  animate={{ opacity: 1, scale: 1 }}
                  exit={{ opacity: 0, scale: 1.05 }}
                  transition={{ duration: 0.6 }}
                  className="grid grid-cols-12"
                >

                  {/* Left */}
                  <div className="col-span-3 flex flex-col">
                    {[0, 1].map(i => (
                      <div key={i} className="relative aspect-[4/5] overflow-hidden border border-black/50 backdrop-blur-sm">
                        <img src={currentSlide.images[i]} className="w-full h-full object-cover" />
                      </div>
                    ))}
                  </div>

                  {/* Center */}
                  <div className="col-span-6">
                    <div className="relative h-full aspect-[4/5] overflow-hidden border border-black/50 backdrop-blur-sm">
                      <img src={currentSlide.images[2]} className="w-full h-full object-cover" />
                    </div>
                  </div>

                  {/* Right */}
                  <div className="col-span-3 flex flex-col">
                    {[3, 4].map(i => (
                      <div key={i} className="relative aspect-[4/5] overflow-hidden border border-black/50 backdrop-blur-sm">
                        <img src={currentSlide.images[i]} className="w-full h-full object-cover" />
                      </div>
                    ))}
                  </div>

                </motion.div>
              </AnimatePresence>
            )}

          </div>
        </div>

        {/* Controls */}
        <div className="flex gap-4 mt-8">
          <button onClick={prevSlide} className="p-3 bg-white text-black">
            <ChevronRight />
          </button>
          <button onClick={nextSlide} className="p-3 bg-white text-black">
            <ChevronLeft />
          </button>
        </div>

      </div>
    </section>
  );
}

export default PostsDesign;