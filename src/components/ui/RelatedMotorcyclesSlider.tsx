"use client";

import { useRef } from "react";
import { Motorcycle } from "@/data/yamaha-motorcycles";
import { MotorcycleCard } from "@/components/ui/MotorcycleCard";
import { ChevronLeft, ChevronRight } from "lucide-react";

interface RelatedMotorcyclesSliderProps {
  motorcycles: Motorcycle[];
}

export function RelatedMotorcyclesSlider({ motorcycles }: RelatedMotorcyclesSliderProps) {
  const sliderRef = useRef<HTMLDivElement>(null);

  const scrollLeft = () => {
    if (sliderRef.current) {
      sliderRef.current.scrollBy({ left: -320, behavior: "smooth" });
    }
  };

  const scrollRight = () => {
    if (sliderRef.current) {
      sliderRef.current.scrollBy({ left: 320, behavior: "smooth" });
    }
  };

  if (!motorcycles || motorcycles.length === 0) return null;

  return (
    <div className="container-yamaha py-20 relative group">
      <div className="mb-10 border-b border-yamaha-light-gray pb-4 text-center">
        <h2 className="text-3xl font-bold text-yamaha-dark uppercase tracking-tighter">
          También podría interesarte
        </h2>
      </div>

      <div className="relative">
        {/* Flechas de navegación (flotantes) */}
        <button 
          onClick={scrollLeft}
          className="absolute left-0 top-1/2 -translate-y-1/2 -translate-x-1/2 z-10 w-16 h-12 flex items-center justify-center bg-white border-2 border-yamaha-blue text-yamaha-blue rounded-[30px] shadow-[0_4px_10px_rgba(0,0,0,0.15)] hover:bg-yamaha-blue hover:text-white transition-all hidden md:flex opacity-0 group-hover:opacity-100 focus:opacity-100 hover:scale-105"
          aria-label="Anterior"
        >
          <ChevronLeft className="w-8 h-8" />
        </button>
        
        <button 
          onClick={scrollRight}
          className="absolute right-0 top-1/2 -translate-y-1/2 translate-x-1/2 z-10 w-16 h-12 flex items-center justify-center bg-white border-2 border-yamaha-blue text-yamaha-blue rounded-[30px] shadow-[0_4px_10px_rgba(0,0,0,0.15)] hover:bg-yamaha-blue hover:text-white transition-all hidden md:flex opacity-0 group-hover:opacity-100 focus:opacity-100 hover:scale-105"
          aria-label="Siguiente"
        >
          <ChevronRight className="w-8 h-8" />
        </button>

        <div 
          ref={sliderRef}
          className="flex gap-8 overflow-x-auto snap-x snap-mandatory hide-scrollbar pb-4"
          style={{ scrollbarWidth: 'none', msOverflowStyle: 'none' }}
        >
        {motorcycles.map((moto) => (
          <div key={moto.id} className="min-w-[280px] sm:min-w-[320px] max-w-[320px] flex-shrink-0 snap-start">
            <MotorcycleCard motorcycle={moto} />
          </div>
        ))}
      </div>
      </div>
      
      {/* Estilos para ocultar scrollbar en navegadores webkit */}
      <style dangerouslySetInnerHTML={{__html: `
        .hide-scrollbar::-webkit-scrollbar {
          display: none;
        }
      `}} />
    </div>
  );
}
