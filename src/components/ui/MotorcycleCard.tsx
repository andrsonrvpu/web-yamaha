"use client";

import { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { motion } from "framer-motion";
import { Motorcycle } from "@/data/yamaha-motorcycles";
import { siteConfig } from "@/config/site";

interface MotorcycleCardProps {
  motorcycle: Motorcycle;
}

export function MotorcycleCard({ motorcycle }: MotorcycleCardProps) {
  const [activeColorIndex, setActiveColorIndex] = useState(0);
  // Formatear precio a formato colombiano COP
  const formattedPrice = new Intl.NumberFormat("es-CO", {
    style: "currency",
    currency: "COP",
    minimumFractionDigits: 0,
    maximumFractionDigits: 0,
  }).format(motorcycle.price);

  return (
    <motion.div 
      whileHover={{ y: -5 }}
      transition={{ duration: 0.2 }}
      className="group bg-white border border-yamaha-light-gray flex flex-col h-full shadow-sm hover:shadow-md transition-shadow"
    >
      {/* Etiqueta Superior */}
      <div className="absolute z-10 flex flex-col gap-2 p-4">
        {motorcycle.isNew && (
          <span className="bg-yamaha-blue text-white text-xs font-bold px-2 py-1 uppercase tracking-wider">
            Nuevo
          </span>
        )}
      </div>

      {/* Imagen */}
      <Link href={`/motos/${motorcycle.slug}`} className="block relative aspect-[4/3] p-6 bg-white overflow-hidden">
        <motion.img 
          src={motorcycle.colors?.[activeColorIndex]?.image || motorcycle.image} 
          alt={motorcycle.name} 
          className="w-full h-full object-contain"
          whileHover={{ scale: 1.03 }}
          transition={{ duration: 0.3 }}
        />
      </Link>

      {/* Contenido */}
      <div className="p-6 flex flex-col flex-grow border-t border-yamaha-light-gray bg-gray-50/50">
        <span className="text-xs font-bold text-gray-500 uppercase tracking-widest mb-1">
          {motorcycle.category}
        </span>
        <h3 className="text-2xl font-bold text-yamaha-dark uppercase tracking-tight mb-2">
          {motorcycle.name}
        </h3>
        
        {/* Colors */}
        {motorcycle.colors && motorcycle.colors.length > 0 && (
          <div className="flex gap-2 mt-1 mb-2">
            {motorcycle.colors.map((color, index) => (
              <div 
                key={index}
                className={`w-5 h-5 rounded-full border-2 cursor-pointer transition-transform ${activeColorIndex === index ? 'border-yamaha-red scale-110' : 'border-transparent hover:scale-110 shadow-sm'}`}
                style={{ backgroundColor: color.hex }}
                onClick={(e) => {
                  e.preventDefault();
                  setActiveColorIndex(index);
                }}
                title={color.name}
              />
            ))}
          </div>
        )}
        
        <div className="mt-auto pt-4 flex flex-col gap-1">
          {motorcycle.price > 0 ? (
            <div className="text-gray-700">
              {motorcycle.priceLabel && (
                <span className="text-xs font-bold text-gray-500 mr-1 uppercase">{motorcycle.priceLabel}</span>
              )}
              <span className="text-xl font-bold">{formattedPrice}</span>
            </div>
          ) : (
            <span className="text-lg font-bold text-yamaha-dark uppercase">Consultar Precio</span>
          )}
        </div>
      </div>

      {/* Botones de Acción */}
      <div className="grid grid-cols-2 border-t border-yamaha-light-gray">
        <Link 
          href={`/motos/${motorcycle.slug}`}
          className="py-4 text-center font-bold text-sm uppercase tracking-wider text-yamaha-dark hover:bg-yamaha-gray transition-colors border-r border-yamaha-light-gray"
        >
          Ver Más
        </Link>
        <a 
          href={`https://wa.me/${siteConfig.whatsapp}?text=${encodeURIComponent(motorcycle.whatsappMessage)}`}
          target="_blank"
          rel="noopener noreferrer"
          className="py-4 text-center font-bold text-sm uppercase tracking-wider text-yamaha-blue hover:bg-blue-50 transition-colors"
        >
          Cotizar
        </a>
      </div>
    </motion.div>
  );
}
