import { ContactSection } from "@/components/sections/ContactSection";
import { Metadata } from "next";
import { siteConfig } from "@/config/site";

export const metadata: Metadata = {
  title: "Contacto",
  description: `Encuentra la ubicación y ponte en contacto con ${siteConfig.businessName}.`,
};

export default function ContactoPage() {
  return <ContactSection />;
}
