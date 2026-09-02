"use client";

import { MotorcycleCard } from "@/components/ui/MotorcycleCard";
import { motorcycles } from "@/data/yamaha-motorcycles";
import { motion } from "framer-motion";

export function FeaturedMotorcycles() {
  const featured = motorcycles.filter(m => m.featured).slice(0, 4);

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

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
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
      </div>
    </section>
  );
}
