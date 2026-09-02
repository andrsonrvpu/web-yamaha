import { motorcycles } from "@/data/yamaha-motorcycles";
import { MotorcycleDetail } from "@/components/sections/MotorcycleDetail";
import { notFound } from "next/navigation";
import { Metadata } from "next";
import { siteConfig } from "@/config/site";

export async function generateStaticParams() {
  return motorcycles.map((moto) => ({
    slug: moto.slug,
  }));
}

export async function generateMetadata({ params }: { params: Promise<{ slug: string }> }): Promise<Metadata> {
  const { slug } = await params;
  const motorcycle = motorcycles.find((m) => m.slug === slug);

  if (!motorcycle) {
    return { title: "Motocicleta no encontrada" };
  }

  return {
    title: `${motorcycle.name} | ${siteConfig.businessName}`,
    description: motorcycle.description,
    openGraph: {
      title: `${motorcycle.name} | ${siteConfig.businessName}`,
      description: motorcycle.description,
      images: [motorcycle.image],
    },
  };
}

export default async function MotorcyclePage({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  const motorcycle = motorcycles.find((m) => m.slug === slug);

  if (!motorcycle) {
    notFound();
  }

  return <MotorcycleDetail motorcycle={motorcycle} />;
}
