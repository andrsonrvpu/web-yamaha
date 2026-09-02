import { Metadata } from "next";
import { siteConfig } from "@/config/site";

export const metadata: Metadata = {
  title: "Términos y Condiciones",
};

export default function TerminosPage() {
  return (
    <div className="container-yamaha py-16 min-h-[60vh] max-w-4xl mx-auto">
      <h1 className="text-3xl font-bold text-yamaha-dark uppercase tracking-tighter mb-8 border-b border-yamaha-light-gray pb-4">
        Términos y Condiciones
      </h1>
      <div className="prose text-gray-700">
        <p>Estos son los términos y condiciones de {siteConfig.businessName}.</p>
        <p>
          Los precios, disponibilidad y especificaciones de las motocicletas están sujetos a cambios sin previo aviso. Las imágenes son de referencia.
        </p>
        {/* Aquí el cliente agregaría el texto legal completo */}
      </div>
    </div>
  );
}
