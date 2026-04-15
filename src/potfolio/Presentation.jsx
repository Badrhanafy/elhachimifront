import React from 'react';
import { motion } from 'framer-motion';

const SectionTitle = ({ children, isActive }) => (
  <span className="relative inline-block px-2">
    <motion.span
      initial={{ width: 0 }}
      animate={{ width: isActive ? "100%" : 0 }}
      transition={{ duration: 0.6, ease: "circOut" }}
      className="absolute bottom-1 right-0 h-4 bg-[#ADFF2F] z-0 opacity-40 rounded-sm"
    />
    <span className="relative z-10">{children}</span>
  </span>
);

const StepItem = ({ section, index, isLast }) => {
  return (
    <motion.div 
      initial={{ opacity: 0, x: 20 }}
      whileInView={{ opacity: 1, x: 0 }}
      viewport={{ once: true, margin: "-10%" }}
      transition={{ duration: 0.8, delay: index * 0.1 }}
      className="relative flex gap-8 md:gap-12"
    >
      {/* Vertical Stepper Part */}
      <div className="flex flex-col items-center">
        {/* Step Node */}
        <motion.div 
          initial={{ scale: 0.8, backgroundColor: "rgba(255,255,255,0.1)" }}
          whileInView={{ 
            scale: 1.2, 
            backgroundColor: "#ADFF2F",
            boxShadow: "0 0 20px rgba(173,255,47,0.6)" 
          }}
          viewport={{ once: false, amount: 0.8 }}
          className="w-4 h-4 rounded-full border-2 border-[#ADFF2F] z-10 relative mt-3"
        >
          <div className="absolute inset-0 rounded-full animate-ping bg-[#ADFF2F] opacity-20"></div>
        </motion.div>
        
        {/* Connecting Line */}
        {!isLast && (
          <motion.div 
            initial={{ height: 0 }}
            whileInView={{ height: "100%" }}
            viewport={{ once: true }}
            transition={{ duration: 1, delay: 0.5 }}
            className="w-[2px] bg-gradient-to-b from-[#ADFF2F] to-transparent flex-grow -mt-1 opacity-20"
          ></motion.div>
        )}
      </div>

      {/* Content Part */}
      <div className="flex-grow pb-16">
        <h3 className="text-gray-900 text-2xl md:text-4xl font-black mb-6 flex items-center gap-4">
          <motion.span 
            initial={{ opacity: 0.3 }}
            whileInView={{ opacity: 1 }}
            className="text-[#ADFF2F] font-mono text-xl"
          >
            0{index + 1}
          </motion.span>
          <SectionTitle isActive={true}>{section.title}</SectionTitle>
        </h3>
        <p className="text-gray-700 text-sm md:text-xl leading-relaxed font-semibold opacity-60 hover:opacity-100 transition-opacity duration-300">
          {section.content}
        </p>
      </div>
    </motion.div>
  );
};

function Presentation() {
  const captionSections = [
    {
      title: "كشف اللاعب",
      content: "تقديم لاعبة جديدة بطريقة احترافية باش نخلقو بحال الأندية العالمية."
    },
    {
      title: "هوية اللاعبة",
      content: "تعريف باللاعبة: الاسم، المركز، أسلوب اللعب، مع جملة قصيرة كتعبّر على شخصيتها."
    },
    {
      title: "أول يوم للاعبة",
      content: "توثيق أول يوم للاعبة مع الفريق (الوصول، التدريب، الأجواء) باش نعطيو story واقعية وجذابة."
    },
    {
      title: "الخلاصة",
      content: "كنحوّلو تقديم اللاعبات من حاجة عادية إلى تجربة إعلامية احترافية، كتخلي كل لاعبة عندها هوية وقصة خاصة , نحيطكم علما أننا نهتم  باجميع  الفئات السنية "
    }
  ];

  return (
    <section className="relative w-full bg-white py-32 px-6 md:px-16 flex flex-col items-center justify-center min-h-screen overflow-hidden" dir="rtl" style={{ fontFamily: 'lightfont' }}>
      
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

      <div className="relative z-10 w-full max-w-7xl mx-auto flex flex-col items-center">
        
        {/* Header - Brutalist & Centered */}
        <div className="mb-32 w-full flex justify-center">
          <div className="flex flex-col items-end text-right">
            <motion.h2 
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              className="text-black text-5xl md:text-8xl font-black mb-6 uppercase tracking-tighter"
            >
              تقديم اللاعبين
            </motion.h2>
            <motion.div
              initial={{ width: 0 }}
              whileInView={{ width: "200px" }}
              viewport={{ once: true }}
              transition={{ duration: 1, delay: 0.3 }}
              className="h-2 "
            ></motion.div>
          </div>
        </div>

        {/* Hero Image Showcase */}
        <div className="relative mb-32 flex justify-center">
          <motion.div 
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="relative group"
          >
            <img 
              src="/images/image.jpeg" 
              alt="Professional Presentation" 
              className="w-[100vh] max-w-full h-auto  rounded-2xl border  transition-transform duration-700 group-hover:scale-[1.02]"
            />
            
            {/* Context Badge */}
            <motion.div 
              initial={{ scale: 0, rotate: 15 }}
              whileInView={{ scale: 1, rotate: 0 }}
              viewport={{ once: true }}
              transition={{ type: "spring", stiffness: 260, damping: 20, delay: 0.5 }}
              className="absolute -top-8 -left-8 w-20 h-20 md:w-32 md:h-32 bg-[#ef4444] rounded-full flex items-center justify-center shadow-[0_20px_40px_rgba(239,68,68,0.4)] border-8 border-white z-20"
            >
              <svg viewBox="0 0 24 24"  className="w-4 h-4 md:w-16 md:h-16 text-white stroke-[3.5]" fill="none" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12" />
              </svg>
            </motion.div>
          </motion.div>
        </div>

        {/* Structured Content with Stepper */}
        <div className="w-full max-w-4xl text-right">
          {captionSections.map((section, index) => (
            <StepItem 
              key={index} 
              section={section} 
              index={index} 
              isLast={index === captionSections.length - 1} 
            />
          ))}
        </div>
      </div>
    </section>
  );
}

export default Presentation;
