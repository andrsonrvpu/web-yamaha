import { Metadata } from "next";
import { siteConfig } from "@/config/site";
import { Wrench, Settings, PenTool, ShieldCheck } from "lucide-react";

export const metadata: Metadata = {
  title: "Servicios",
  description: `Conoce nuestros servicios técnicos y de mantenimiento en ${siteConfig.businessName}.`,
};

export default function ServiciosPage() {
  const services = [
    {
      title: "Servicio Técnico Oficial",
      description: "Mantenimiento preventivo y correctivo realizado por mecánicos certificados por Yamaha, utilizando herramientas especializadas.",
      icon: <Wrench className="w-10 h-10 text-yamaha-red" />
    },
    {
      title: "Repuestos Originales",
      description: "Garantizamos el rendimiento de tu motocicleta instalando únicamente repuestos originales Yamaha.",
      icon: <Settings className="w-10 h-10 text-yamaha-red" />
    },
    {
      title: "Cambio de Aceite Yamalube",
      description: "Lubricantes diseñados específicamente para proteger y maximizar el rendimiento de los motores Yamaha.",
      icon: <PenTool className="w-10 h-10 text-yamaha-red" />
    },
    {
      title: "Garantía Yamaha",
      description: "Gestión y respaldo directo de fábrica para que disfrutes de tu motocicleta con total tranquilidad.",
      icon: <ShieldCheck className="w-10 h-10 text-yamaha-red" />
    }
  ];

  return (
    <div className="container-yamaha py-16 min-h-[70vh]">
      <h1 className="text-4xl font-bold text-yamaha-dark uppercase tracking-tighter mb-4 text-center">
        Nuestros Servicios
      </h1>
      <p className="text-gray-600 text-center mb-16 max-w-2xl mx-auto">
        Brindamos la mejor atención para ti y tu motocicleta con el respaldo oficial de Yamaha.
      </p>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
        {services.map((service, index) => (
          <div key={index} className="bg-yamaha-gray border border-yamaha-light-gray p-8 flex flex-col items-center text-center hover:shadow-lg transition-shadow">
            <div className="mb-6 bg-white p-4 rounded-full shadow-sm">
              {service.icon}
            </div>
            <h3 className="font-bold text-xl text-yamaha-dark uppercase tracking-wide mb-4">
              {service.title}
            </h3>
            <p className="text-gray-600">
              {service.description}
            </p>
          </div>
        ))}
      </div>
    </div>
  );
}
