"use client";

import { useRef, useState } from "react";
import { Motorcycle } from "@/data/yamaha-motorcycles";
import { MotorcycleCard } from "@/components/ui/MotorcycleCard";
import { ChevronLeft, ChevronRight } from "lucide-react";

interface RelatedMotorcyclesSliderProps {
  motorcycles: Motorcycle[];
}

export function RelatedMotorcyclesSlider({ motorcycles }: RelatedMotorcyclesSliderProps) {
  const sliderRef = useRef<HTMLDivElement>(null);
  const [activeIndex, setActiveIndex] = useState(0);

  const handleScroll = () => {
    if (!sliderRef.current) return;
    const scrollLeft = sliderRef.current.scrollLeft;
    // Calculate based on the first item's width (or fallback to container width)
    const itemWidth = sliderRef.current.firstElementChild?.clientWidth || sliderRef.current.clientWidth;
    // The gap is around 16px (gap-4) or 32px (gap-8), we add it to itemWidth for accurate division
    const gap = window.innerWidth >= 768 ? 32 : 16;
    const index = Math.round(scrollLeft / (itemWidth + gap));
    if (index !== activeIndex && index >= 0 && index < motorcycles.length) {
      setActiveIndex(index);
    }
  };

  const scrollTo = (index: number) => {
    if (!sliderRef.current) return;
    const itemWidth = sliderRef.current.firstElementChild?.clientWidth || sliderRef.current.clientWidth;
    const gap = window.innerWidth >= 768 ? 32 : 16;
    sliderRef.current.scrollTo({
      left: (itemWidth + gap) * index,
      behavior: "smooth"
    });
    setActiveIndex(index);
  };

  const scrollLeftBtn = () => {
    if (!sliderRef.current) return;
    const itemWidth = sliderRef.current.firstElementChild?.clientWidth || sliderRef.current.clientWidth;
    const gap = window.innerWidth >= 768 ? 32 : 16;
    sliderRef.current.scrollBy({ left: -(itemWidth + gap), behavior: "smooth" });
  };

  const scrollRightBtn = () => {
    if (!sliderRef.current) return;
    const itemWidth = sliderRef.current.firstElementChild?.clientWidth || sliderRef.current.clientWidth;
    const gap = window.innerWidth >= 768 ? 32 : 16;
    sliderRef.current.scrollBy({ left: (itemWidth + gap), behavior: "smooth" });
  };

  if (!motorcycles || motorcycles.length === 0) return null;

  return (
    <div className="container-yamaha py-16 md:py-20 relative group">
      <div className="mb-10 border-b border-yamaha-light-gray pb-4 text-center">
        <h2 className="text-2xl md:text-3xl font-bold text-yamaha-dark uppercase tracking-tighter">
          También podría interesarte
        </h2>
      </div>

      <div className="relative">
        {/* Flechas de navegación superpuestas a los laterales de la imagen (aproximadamente top 30%) */}
        <button 
          onClick={scrollLeftBtn}
          className="absolute left-2 md:-left-4 top-[30%] -translate-y-1/2 z-10 w-12 h-12 flex items-center justify-center bg-white/95 border-2 border-yamaha-blue text-yamaha-blue rounded-full shadow-[0_4px_10px_rgba(0,0,0,0.2)] hover:bg-yamaha-blue hover:text-white transition-all opacity-80 md:opacity-0 group-hover:opacity-100 focus:opacity-100 hover:scale-105"
          aria-label="Anterior"
        >
          <ChevronLeft className="w-8 h-8" />
        </button>
        
        <button 
          onClick={scrollRightBtn}
          className="absolute right-2 md:-right-4 top-[30%] -translate-y-1/2 z-10 w-12 h-12 flex items-center justify-center bg-white/95 border-2 border-yamaha-blue text-yamaha-blue rounded-full shadow-[0_4px_10px_rgba(0,0,0,0.2)] hover:bg-yamaha-blue hover:text-white transition-all opacity-80 md:opacity-0 group-hover:opacity-100 focus:opacity-100 hover:scale-105"
          aria-label="Siguiente"
        >
          <ChevronRight className="w-8 h-8" />
        </button>

        <div 
          ref={sliderRef}
          onScroll={handleScroll}
          className="flex gap-4 md:gap-8 overflow-x-auto snap-x snap-mandatory pb-6 [&::-webkit-scrollbar]:hidden [-ms-overflow-style:none] [scrollbar-width:none]"
        >
          {motorcycles.map((moto) => (
            <div key={moto.id} className="min-w-full md:min-w-[320px] max-w-full md:max-w-[320px] flex-shrink-0 snap-center">
              <MotorcycleCard motorcycle={moto} />
            </div>
          ))}
        </div>

        {/* Indicadores de Paginación Inferiores */}
        <div className="flex justify-center gap-2 mt-4 flex-wrap px-4">
          {motorcycles.map((_, idx) => (
            <button
              key={idx}
              onClick={() => scrollTo(idx)}
              className={`h-2 rounded-full transition-all duration-300 ${
                activeIndex === idx ? 'bg-yamaha-blue w-6' : 'bg-gray-300 w-2'
              }`}
              aria-label={`Ir a motocicleta ${idx + 1}`}
            />
          ))}
        </div>
      </div>
    </div>
  );
}
