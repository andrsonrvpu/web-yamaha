import { Metadata } from "next";
import { siteConfig } from "@/config/site";
import { Wrench, Settings, ShieldCheck, MessageCircle } from "lucide-react";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Repuestos y Accesorios",
  description: "Encuentra repuestos originales y accesorios para tu motocicleta Yamaha en Colombia. Garantiza el mejor rendimiento con piezas genuinas.",
};

const WhatsAppIcon = ({ className }: { className?: string }) => (
  <svg xmlns="http://www.w3.org/2000/svg" className={className} viewBox="0 0 24 24" fill="currentColor">
    <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413Z"/>
  </svg>
);

export default function RepuestosPage() {
  const whatsappUrl = `https://wa.me/${siteConfig.whatsapp}?text=${encodeURIComponent("Hola, estoy buscando un repuesto/accesorio para mi motocicleta Yamaha.")}`;

  return (
    <div>
      {/* Hero Header */}
      <section className="bg-yamaha-dark py-20 relative overflow-hidden">
        <div className="absolute top-0 right-0 w-1/2 h-full opacity-10 bg-[url('https://images.unsplash.com/photo-1599580667523-95629cda19c4?auto=format&fit=crop&q=80')] bg-cover bg-center"></div>
        <div className="container-yamaha relative z-10 text-white">
          <h1 className="text-4xl md:text-5xl font-extrabold uppercase tracking-tight mb-4">
            Repuestos y Accesorios
          </h1>
          <p className="text-lg md:text-xl max-w-2xl text-gray-300">
            Mantén tu Yamaha original. Garantiza el mejor rendimiento, durabilidad y seguridad con nuestros repuestos y accesorios genuinos.
          </p>
        </div>
      </section>

      {/* Main Content */}
      <section className="py-20 bg-gray-50">
        <div className="container-yamaha">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            
            <div className="bg-white p-8 border border-gray-200 hover:shadow-xl transition-shadow group flex flex-col h-full">
              <div className="w-16 h-16 bg-yamaha-red/10 text-yamaha-red rounded-full flex items-center justify-center mb-6 group-hover:bg-yamaha-red group-hover:text-white transition-colors">
                <Settings className="w-8 h-8" />
              </div>
              <h3 className="text-2xl font-bold uppercase text-yamaha-dark mb-4">Repuestos Originales</h3>
              <p className="text-gray-600 mb-6 flex-grow">
                Piezas diseñadas y fabricadas específicamente para tu modelo Yamaha. Aseguran un encaje perfecto y mantienen el valor de tu motocicleta.
              </p>
            </div>

            <div className="bg-white p-8 border border-gray-200 hover:shadow-xl transition-shadow group flex flex-col h-full">
              <div className="w-16 h-16 bg-yamaha-red/10 text-yamaha-red rounded-full flex items-center justify-center mb-6 group-hover:bg-yamaha-red group-hover:text-white transition-colors">
                <Wrench className="w-8 h-8" />
              </div>
              <h3 className="text-2xl font-bold uppercase text-yamaha-dark mb-4">Aceites y Lubricantes (Yamalube)</h3>
              <p className="text-gray-600 mb-6 flex-grow">
                El único aceite desarrollado específicamente para motores Yamaha. Protege tu motor y optimiza su rendimiento en cualquier condición.
              </p>
            </div>

            <div className="bg-white p-8 border border-gray-200 hover:shadow-xl transition-shadow group flex flex-col h-full">
              <div className="w-16 h-16 bg-yamaha-red/10 text-yamaha-red rounded-full flex items-center justify-center mb-6 group-hover:bg-yamaha-red group-hover:text-white transition-colors">
                <ShieldCheck className="w-8 h-8" />
              </div>
              <h3 className="text-2xl font-bold uppercase text-yamaha-dark mb-4">Accesorios Genuinos</h3>
              <p className="text-gray-600 mb-6 flex-grow">
                Personaliza tu motocicleta con accesorios diseñados a la medida. Desde baúles y defensas hasta indumentaria oficial Yamaha.
              </p>
            </div>

          </div>
        </div>
      </section>

      {/* WhatsApp CTA */}
      <section className="py-20 bg-white">
        <div className="container-yamaha">
          <div className="bg-yamaha-blue p-8 md:p-12 rounded-3xl text-center md:text-left flex flex-col md:flex-row items-center justify-between gap-8 relative overflow-hidden shadow-2xl border border-blue-800">
            <div className="absolute top-0 right-0 w-64 h-64 bg-white opacity-5 rounded-full blur-3xl -translate-y-1/2 translate-x-1/3"></div>
            
            <div className="relative z-10">
              <h2 className="text-3xl font-bold text-white uppercase tracking-tight mb-4">¿Buscas un repuesto específico?</h2>
              <p className="text-blue-100 text-lg max-w-xl">
                Contamos con un amplio inventario a nivel nacional. Escríbenos por WhatsApp con el modelo de tu moto o el número de parte y te cotizamos al instante.
              </p>
            </div>
            
            <div className="relative z-10 flex-shrink-0">
              <a 
                href={whatsappUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="group flex items-center justify-center gap-3 bg-[#25D366] text-white font-bold uppercase tracking-wider py-4 px-8 rounded-full hover:bg-green-500 transition-all duration-300 shadow-xl hover:shadow-green-500/50 hover:-translate-y-1"
              >
                <WhatsAppIcon className="w-6 h-6" />
                <span>Cotizar por WhatsApp</span>
              </a>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
