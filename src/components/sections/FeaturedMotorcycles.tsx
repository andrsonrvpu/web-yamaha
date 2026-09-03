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
      const child = scrollContainerRef.current.children[index] as HTMLElement;
      if (child) {
        scrollContainerRef.current.scrollTo({ left: child.offsetLeft - scrollContainerRef.current.offsetLeft, behavior: "smooth" });
      }
    }
  };

  return (
    <section className="py-20 bg-white">
      <div className="container-yamaha relative">
        <div className="flex justify-between items-end mb-10">
          <div>
            <h2 className="text-4xl font-bold text-yamaha-dark uppercase tracking-tighter">
              Modelos Destacados
            </h2>
            <div className="w-16 h-1 bg-yamaha-blue mt-4" />
          </div>
          
          <div className="hidden md:flex gap-2">
            <button onClick={() => scroll('left')} className="p-2 rounded-full border border-gray-200 hover:bg-gray-50 transition-colors">
              <ChevronLeft className="w-6 h-6" />
            </button>
            <button onClick={() => scroll('right')} className="p-2 rounded-full border border-gray-200 hover:bg-gray-50 transition-colors">
              <ChevronRight className="w-6 h-6" />
            </button>
          </div>
        </div>

        <div className="relative group">
          <div 
            ref={scrollContainerRef}
            onScroll={handleScroll}
            className="flex overflow-x-auto snap-x snap-mandatory gap-4 md:gap-6 pb-4 md:pb-8 [&::-webkit-scrollbar]:hidden"
            style={{ scrollbarWidth: "none", msOverflowStyle: "none" }}
          >
            {featured.map((motorcycle, index) => (
              <div 
                key={motorcycle.id} 
                className="w-full min-w-[calc(100%-0rem)] sm:min-w-[calc(50%-0.5rem)] lg:min-w-[calc(25%-1.125rem)] snap-center flex-shrink-0"
              >
                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true, margin: "-100px" }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                  className="h-full"
                >
                  <MotorcycleCard motorcycle={motorcycle} />
                </motion.div>
              </div>
            ))}
          </div>

          <button 
            onClick={() => scroll('left')} 
            className="absolute left-0 top-1/2 -translate-y-1/2 -ml-2 sm:-ml-6 p-2 rounded-full bg-white shadow-lg border border-gray-100 text-yamaha-dark hover:text-yamaha-blue transition-colors z-10 md:hidden"
          >
            <ChevronLeft className="w-6 h-6" />
          </button>
          <button 
            onClick={() => scroll('right')} 
            className="absolute right-0 top-1/2 -translate-y-1/2 -mr-2 sm:-mr-6 p-2 rounded-full bg-white shadow-lg border border-gray-100 text-yamaha-dark hover:text-yamaha-blue transition-colors z-10 md:hidden"
          >
            <ChevronRight className="w-6 h-6" />
          </button>
        </div>

        <div className="flex justify-center gap-2 mt-2 md:hidden">
          {featured.map((_, index) => (
            <button
              key={index}
              onClick={() => scrollTo(index)}
              className={`w-3 h-3 rounded-full transition-colors ${
                currentIndex === index ? 'bg-yamaha-blue' : 'bg-gray-300'
              }`}
              aria-label={`Ir a moto ${index + 1}`}
            />
          ))}
        </div>
      </div>
    </section>
  );
}
