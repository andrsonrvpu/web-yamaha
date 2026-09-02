import React from 'react';
import { MessageCircle } from 'lucide-react';
import { siteConfig } from '@/config/site';

export function WhatsAppCta() {
  const whatsappUrl = `https://wa.me/${siteConfig.whatsapp}?text=${encodeURIComponent("Hola, quisiera recibir más información de las motos.")}`;

  return (
    <section className="py-20 bg-yamaha-blue text-white relative overflow-hidden">
      {/* Decorative background elements */}
      <div className="absolute top-0 left-0 w-full h-full opacity-10 pointer-events-none">
        <div className="absolute -top-24 -left-24 w-96 h-96 rounded-full bg-white blur-3xl"></div>
        <div className="absolute bottom-0 right-0 w-1/2 h-full bg-gradient-to-l from-white/20 to-transparent transform -skew-x-12"></div>
      </div>

      <div className="container mx-auto px-4 relative z-10">
        <div className="max-w-4xl mx-auto flex flex-col md:flex-row items-center justify-between gap-8 bg-white/10 backdrop-blur-md p-8 md:p-12 rounded-3xl border border-white/20 shadow-2xl">
          <div className="flex-1 text-center md:text-left">
            <h2 className="text-3xl md:text-4xl font-extrabold mb-4 uppercase tracking-tight">
              ¿Listo para dar el siguiente paso?
            </h2>
            <p className="text-lg text-white/90 mb-0">
              Contáctanos directamente por WhatsApp. Nuestro equipo de asesores está listo para resolver tus dudas y ayudarte a elegir tu próxima Yamaha.
            </p>
          </div>
          
          <div className="flex-shrink-0">
            <a 
              href={whatsappUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="group flex items-center justify-center gap-3 bg-white text-yamaha-blue font-bold uppercase tracking-wider py-4 px-8 rounded-full hover:bg-green-500 hover:text-white transition-all duration-300 shadow-xl hover:shadow-green-500/50 hover:-translate-y-1"
            >
              <MessageCircle className="w-6 h-6" />
              <span>Contactar por WhatsApp</span>
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
