import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

interface FeatureBanner {
  title: string;
  description: string;
  image: string;
}

interface FeatureSliderProps {
  banners?: FeatureBanner[];
}

export default function FeatureSlider({ banners }: FeatureSliderProps) {
  const [activeIndex, setActiveIndex] = useState(0);

  if (!banners || banners.length === 0) {
    return null;
  }

  return (
    <div className="w-full bg-white py-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="mb-10 text-center">
          <h2 className="text-3xl font-bold text-yamaha-dark uppercase tracking-tight">
            Tecnología y Características
          </h2>
          <div className="w-24 h-1 bg-yamaha-blue mx-auto mt-4"></div>
        </div>

        <div className="flex flex-col lg:flex-row gap-8 items-stretch h-auto lg:h-[500px]">
          
          {/* Menu Lateral (Left Side) */}
          <div className="w-full lg:w-1/4 flex flex-col gap-2 overflow-y-auto pr-2 custom-scrollbar">
            {banners.map((banner, idx) => (
              <button
                key={idx}
                onClick={() => setActiveIndex(idx)}
                className={`text-left p-4 rounded-lg transition-all duration-300 border-l-4 ${
                  activeIndex === idx 
                    ? 'bg-yamaha-gray border-yamaha-blue shadow-md' 
                    : 'bg-white border-transparent hover:bg-gray-50'
                }`}
              >
                <h3 className={`font-bold text-lg ${activeIndex === idx ? 'text-yamaha-blue' : 'text-gray-600'}`}>
                  {banner.title}
                </h3>
              </button>
            ))}
          </div>

          {/* Banner Principal (Right Side) */}
          <div className="w-full lg:w-3/4 relative rounded-2xl overflow-hidden shadow-2xl bg-black">
            <AnimatePresence mode="wait">
              <motion.div
                key={activeIndex}
                initial={{ opacity: 0, x: 20 }}
                animate={{ opacity: 1, x: 0 }}
                exit={{ opacity: 0, x: -20 }}
                transition={{ duration: 0.5, ease: "easeInOut" }}
                className="absolute inset-0 w-full h-full"
              >
                {/* Background Image */}
                <img 
                  src={banners[activeIndex].image} 
                  alt={banners[activeIndex].title}
                  className="w-full h-full object-cover object-center opacity-80"
                />
                
                {/* Overlay Text */}
                <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/40 to-transparent flex flex-col justify-end p-8 md:p-12">
                  <motion.h3 
                    initial={{ y: 20, opacity: 0 }}
                    animate={{ y: 0, opacity: 1 }}
                    transition={{ delay: 0.2, duration: 0.5 }}
                    className="text-3xl md:text-5xl font-extrabold text-white mb-4 uppercase tracking-tighter drop-shadow-lg"
                  >
                    {banners[activeIndex].title}
                  </motion.h3>
                  <motion.p 
                    initial={{ y: 20, opacity: 0 }}
                    animate={{ y: 0, opacity: 1 }}
                    transition={{ delay: 0.3, duration: 0.5 }}
                    className="text-gray-200 text-lg md:text-xl max-w-3xl drop-shadow-md leading-relaxed"
                  >
                    {banners[activeIndex].description}
                  </motion.p>
                </div>
              </motion.div>
            </AnimatePresence>
          </div>
        </div>
      </div>
    </div>
  );
}
