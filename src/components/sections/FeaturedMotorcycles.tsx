"use client";

import { useRef, useState } from "react";
import { MotorcycleCard } from "@/components/ui/MotorcycleCard";
import { motorcycles } from "@/data/yamaha-motorcycles";
import { motion } from "framer-motion";
import { ChevronLeft, ChevronRight } from "lucide-react";

export function FeaturedMotorcycles() {
  const featured = motorcycles.filter(m => m.featured).slice(0, 4);
  const scrollContainerRef = useRef<HTMLDivElement>(null);
  const [currentIndex, setCurrentIndex] = useState(0);

  const scroll = (direction: "left" | "right") => {
    if (scrollContainerRef.current) {
      const scrollAmount = scrollContainerRef.current.offsetWidth;
      scrollContainerRef.current.scrollBy({ left: direction === "left" ? -scrollAmount : scrollAmount, behavior: "smooth" });
    }
  };

  const handleScroll = () => {
    if (scrollContainerRef.current) {
      const scrollLeft = scrollContainerRef.current.scrollLeft;
      const width = scrollContainerRef.current.offsetWidth;
      const index = Math.round(scrollLeft / width);
      setCurrentIndex(index);
    }
  };

  const scrollTo = (index: number) => {
    if (scrollContainerRef.current) {
      const width = scrollContainerRef.current.offsetWidth;
      scrollContainerRef.current.scrollTo({ left: width * index, behavior: "smooth" });
    }
  };

  return (
    <section className="py-20 bg-white">
      <div className="container-yamaha">
        <div className="flex justify-between items-end mb-10">
          <div>
            <h2 className="text-4xl font-bold text-yamaha-dark uppercase tracking-tighter">
              Modelos Destacados
            </h2>
            <div className="w-16 h-1 bg-yamaha-blue mt-4" />
          </div>
        </div>

        {/* Versión Desktop: Grid */}
        <div className="hidden md:grid grid-cols-2 lg:grid-cols-4 gap-6">
          {featured.map((motorcycle, index) => (
            <motion.div
              key={motorcycle.id}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
            >
              <MotorcycleCard motorcycle={motorcycle} />
            </motion.div>
          ))}
        </div>

        {/* Versión Móvil: Carrusel */}
        <div className="md:hidden relative group">
          <div 
            ref={scrollContainerRef}
            onScroll={handleScroll}
            className="flex overflow-x-auto snap-x snap-mandatory pb-4 [&::-webkit-scrollbar]:hidden"
            style={{ scrollbarWidth: "none", msOverflowStyle: "none" }}
          >
            {featured.map((motorcycle) => (
              <div 
                key={motorcycle.id} 
                className="w-full min-w-full snap-center flex-shrink-0 px-1"
              >
                <MotorcycleCard motorcycle={motorcycle} />
              </div>
            ))}
          </div>

          {/* Flechas superpuestas en los laterales de la imagen (aprox 35% desde arriba) */}
          <button 
            onClick={() => scroll('left')} 
            className="absolute left-2 top-[30%] -translate-y-1/2 p-1.5 rounded-full bg-white/90 shadow-md text-yamaha-dark hover:text-yamaha-blue transition-colors z-10"
            aria-label="Anterior"
          >
            <ChevronLeft className="w-6 h-6" />
          </button>
          <button 
            onClick={() => scroll('right')} 
            className="absolute right-2 top-[30%] -translate-y-1/2 p-1.5 rounded-full bg-white/90 shadow-md text-yamaha-dark hover:text-yamaha-blue transition-colors z-10"
            aria-label="Siguiente"
          >
            <ChevronRight className="w-6 h-6" />
          </button>

          {/* Paginación */}
          <div className="flex justify-center gap-2 mt-4">
            {featured.map((_, index) => (
              <button
                key={index}
                onClick={() => scrollTo(index)}
                className={`w-2.5 h-2.5 rounded-full transition-colors ${
                  currentIndex === index ? 'bg-yamaha-blue' : 'bg-gray-300'
                }`}
                aria-label={`Ir a moto ${index + 1}`}
              />
            ))}
          </div>
        </div>

      </div>
    </section>
  );
}
