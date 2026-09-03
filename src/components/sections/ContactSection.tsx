"use client";

import { siteConfig } from "@/config/site";
import { MapPin, Phone, Mail, Clock } from "lucide-react";

export function ContactSection() {
  return (
    <div className="container-yamaha py-16">
      <div className="max-w-4xl mx-auto">
        <h1 className="text-4xl font-bold text-yamaha-dark uppercase tracking-tighter mb-4 text-center">
          Contacto y Ubicación
        </h1>
        <p className="text-gray-600 text-center mb-12">
          Estamos aquí para ayudarte. Encuentra tu distribuidor más cercano o escríbenos directamente.
        </p>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
          
          {/* Info */}
          <div className="flex flex-col gap-8 bg-yamaha-gray p-8 border border-yamaha-light-gray">
            <h2 className="text-2xl font-bold text-yamaha-dark uppercase tracking-wider mb-2">
              {siteConfig.businessName}
            </h2>
            
            <div className="flex items-start gap-4">
              <MapPin className="w-6 h-6 text-yamaha-red flex-shrink-0" />
              <div>
                <span className="block font-bold text-yamaha-dark">Dirección Principal</span>
                <span className="text-gray-700">{siteConfig.address}</span>
              </div>
            </div>

            <div className="flex items-start gap-4">
              <Phone className="w-6 h-6 text-yamaha-red flex-shrink-0" />
              <div>
                <span className="block font-bold text-yamaha-dark">Teléfono y WhatsApp</span>
                <span className="text-gray-700">{siteConfig.phone}</span>
              </div>
            </div>

            <div className="flex items-start gap-4">
              <Clock className="w-6 h-6 text-yamaha-red flex-shrink-0" />
              <div>
                <span className="block font-bold text-yamaha-dark">Horario de Atención</span>
                <span className="text-gray-700">{siteConfig.businessHours}</span>
              </div>
            </div>

            <div className="mt-4 pt-4 border-t border-gray-300">
              <span className="block font-bold text-yamaha-dark mb-2">Zonas de Atención:</span>
              <div className="flex flex-wrap gap-2">
                {siteConfig.serviceArea.map(area => (
                  <span key={area} className="bg-white px-3 py-1 text-sm font-medium border border-gray-300">
                    {area}
                  </span>
                ))}
              </div>
            </div>
          </div>

          {/* Form */}
          <div className="flex flex-col">
            <h2 className="text-2xl font-bold text-yamaha-dark uppercase tracking-wider mb-6">
              Envíanos un mensaje
            </h2>
            <form className="flex flex-col gap-4" onSubmit={(e) => { e.preventDefault(); alert("Formulario enviado (simulación)"); }}>
              <div>
                <label htmlFor="name" className="block text-sm font-bold text-gray-700 mb-1">Nombre Completo *</label>
                <input type="text" id="name" required className="w-full border border-yamaha-light-gray p-3 focus:outline-none focus:border-yamaha-red" />
              </div>
              
              <div className="grid grid-cols-1 gap-4">
                <div>
                  <label htmlFor="phone" className="block text-sm font-bold text-gray-700 mb-1">Teléfono *</label>
                  <input type="tel" id="phone" required className="w-full border border-yamaha-light-gray p-3 focus:outline-none focus:border-yamaha-red" />
                </div>
              </div>

              <div>
                <label htmlFor="subject" className="block text-sm font-bold text-gray-700 mb-1">Asunto</label>
                <select id="subject" className="w-full border border-yamaha-light-gray p-3 focus:outline-none focus:border-yamaha-red bg-white">
                  <option>Información sobre motocicleta</option>
                  <option>Servicio Técnico</option>
                  <option>Repuestos y Accesorios</option>
                  <option>Otro</option>
                </select>
              </div>

              <div>
                <label htmlFor="message" className="block text-sm font-bold text-gray-700 mb-1">Mensaje *</label>
                <textarea id="message" rows={4} required className="w-full border border-yamaha-light-gray p-3 focus:outline-none focus:border-yamaha-red"></textarea>
              </div>

              <div className="flex items-start gap-2 mt-2">
                <input type="checkbox" id="terms" required className="mt-1" />
                <label htmlFor="terms" className="text-sm text-gray-600">
                  Acepto las <a href="/politica-privacidad" className="text-yamaha-red hover:underline">políticas de privacidad</a> y el tratamiento de mis datos personales.
                </label>
              </div>

              <button type="submit" className="bg-yamaha-red text-white font-bold uppercase tracking-wider py-4 mt-4 hover:bg-red-700 transition-colors">
                Enviar Mensaje
              </button>
            </form>
          </div>

        </div>
      </div>
    </div>
  );
}
