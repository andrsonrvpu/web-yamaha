import { Catalog } from "@/components/sections/Catalog";
import { Metadata } from "next";
import { siteConfig } from "@/config/site";

export const metadata: Metadata = {
  title: "Catálogo de Motocicletas",
  description: `Explora la línea completa de motocicletas en ${siteConfig.businessName}. Urbanas, deportivas, scooters y más.`,
};

export default function MotosPage() {
  return (
    <div className="bg-yamaha-gray min-h-screen">
      <Catalog />
    </div>
  );
}
