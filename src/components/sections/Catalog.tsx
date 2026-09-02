"use client";

import { useState, useMemo } from "react";
import { MotorcycleCard } from "@/components/ui/MotorcycleCard";
import { motorcycles, CATEGORIES } from "@/data/yamaha-motorcycles";
import { Search } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";

export function Catalog() {
  const [activeCategory, setActiveCategory] = useState<string>("TODAS");
  const [searchQuery, setSearchQuery] = useState("");

  const filteredMotorcycles = useMemo(() => {
    return motorcycles.filter((moto) => {
      const matchCategory = activeCategory === "TODAS" || moto.category === activeCategory;
      const matchSearch = moto.name.toLowerCase().includes(searchQuery.toLowerCase()) || 
                          moto.category.toLowerCase().includes(searchQuery.toLowerCase());
      return matchCategory && matchSearch;
    });
  }, [activeCategory, searchQuery]);

  return (
    <div className="container-yamaha py-12">
      {/* Header and Search */}
      <div className="flex flex-col md:flex-row justify-between items-start md:items-center mb-8 gap-4">
        <div>
          <h1 className="text-4xl font-bold text-yamaha-dark uppercase tracking-tighter">Catálogo de Motocicletas</h1>
          <div className="w-16 h-1 bg-yamaha-red mt-4" />
        </div>
        
        <div className="relative w-full md:w-72">
          <input 
            type="text" 
            placeholder="Buscar motocicleta..." 
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
            className="w-full border border-yamaha-light-gray pl-10 pr-4 py-3 focus:outline-none focus:border-yamaha-red transition-colors"
          />
          <Search className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-400 w-5 h-5" />
        </div>
      </div>

      {/* Categories Filter */}
      <div className="flex flex-wrap gap-2 mb-10">
        <button
          onClick={() => setActiveCategory("TODAS")}
          className={`px-4 py-2 text-sm font-bold uppercase tracking-wider transition-colors border ${
            activeCategory === "TODAS" 
              ? "bg-yamaha-red text-white border-yamaha-red" 
              : "bg-white text-yamaha-dark border-yamaha-light-gray hover:border-yamaha-red"
          }`}
        >
          TODAS
        </button>
        {CATEGORIES.map((cat) => (
          <button
            key={cat}
            onClick={() => setActiveCategory(cat)}
            className={`px-4 py-2 text-sm font-bold uppercase tracking-wider transition-colors border ${
              activeCategory === cat 
                ? "bg-yamaha-red text-white border-yamaha-red" 
                : "bg-white text-yamaha-dark border-yamaha-light-gray hover:border-yamaha-red"
            }`}
          >
            {cat}
          </button>
        ))}
      </div>

      {/* Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
        <AnimatePresence mode="popLayout">
          {filteredMotorcycles.map((motorcycle) => (
            <motion.div
              key={motorcycle.id}
              layout
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0, scale: 0.9 }}
              transition={{ duration: 0.3 }}
            >
              <MotorcycleCard motorcycle={motorcycle} />
            </motion.div>
          ))}
        </AnimatePresence>
      </div>

      {filteredMotorcycles.length === 0 && (
        <div className="text-center py-20 text-gray-500">
          <p className="text-xl">No se encontraron motocicletas que coincidan con tu búsqueda.</p>
          <button 
            onClick={() => { setSearchQuery(""); setActiveCategory("TODAS"); }}
            className="mt-4 text-yamaha-red font-bold uppercase hover:underline"
          >
            Ver todo el catálogo
          </button>
        </div>
      )}
    </div>
  );
}
