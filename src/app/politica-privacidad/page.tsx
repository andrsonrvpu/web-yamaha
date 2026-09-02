import { Metadata } from "next";
import { siteConfig } from "@/config/site";

export const metadata: Metadata = {
  title: "Política de Privacidad",
};

export default function PoliticaPrivacidadPage() {
  return (
    <div className="container-yamaha py-16 min-h-[60vh] max-w-4xl mx-auto">
      <h1 className="text-3xl font-bold text-yamaha-dark uppercase tracking-tighter mb-8 border-b border-yamaha-light-gray pb-4">
        Política de Privacidad
      </h1>
      <div className="prose text-gray-700">
        <p>Esta es la política de privacidad de {siteConfig.businessName}.</p>
        <p>
          En cumplimiento con la Ley de Protección de Datos Personales aplicable en Colombia, le informamos que sus datos serán tratados de manera confidencial y segura.
        </p>
        {/* Aquí el cliente agregaría el texto legal completo */}
      </div>
    </div>
  );
}
