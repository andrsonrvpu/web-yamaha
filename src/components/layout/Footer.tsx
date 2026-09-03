import Link from "next/link";
import Image from "next/image";
import { MapPin, Phone, Mail, MessageCircle } from "lucide-react";
import { siteConfig } from "@/config/site";

export function Footer() {
  return (
    <footer className="bg-yamaha-dark text-white pt-16 pb-8">
      <div className="container-yamaha">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-12">
          
          {/* Columna 1: Contacto */}
          <div className="flex flex-col gap-4">
            <h3 className="font-bold text-xl mb-2 text-white uppercase tracking-wider">Contacto</h3>
            <div className="flex items-start gap-3 text-gray-300">
              <MapPin className="w-5 h-5 mt-0.5 flex-shrink-0" />
              <span className="text-sm">{siteConfig.address}</span>
            </div>
            <div className="flex items-center gap-3 text-gray-300">
              <Phone className="w-5 h-5 flex-shrink-0" />
              <span className="text-sm">{siteConfig.phone}</span>
            </div>
            <div className="flex items-center gap-3 text-gray-300">
              <MessageCircle className="w-5 h-5 flex-shrink-0" />
              <span className="text-sm">{siteConfig.phone} (WhatsApp)</span>
            </div>
          </div>

          {/* Columna 2: Enlaces Rápidos */}
          <div className="flex flex-col gap-4">
            <h3 className="font-bold text-xl mb-2 text-white uppercase tracking-wider">Enlaces Rápidos</h3>
            <Link href="/motos" className="text-sm text-gray-300 hover:text-white transition-colors">Motocicletas</Link>
            <Link href="/servicios" className="text-sm text-gray-300 hover:text-white transition-colors">Servicio Técnico</Link>
            <Link href="/repuestos" className="text-sm text-gray-300 hover:text-white transition-colors">Repuestos y Accesorios</Link>
            <Link href="/contacto" className="text-sm text-gray-300 hover:text-white transition-colors">Red de Distribuidores</Link>
          </div>

          {/* Columna 3: Legal */}
          <div className="flex flex-col gap-4">
            <h3 className="font-bold text-xl mb-2 text-white uppercase tracking-wider">Legal</h3>
            <Link href="/terminos-y-condiciones" className="text-sm text-gray-300 hover:text-white transition-colors">Términos y Condiciones</Link>
            <Link href="/politica-privacidad" className="text-sm text-gray-300 hover:text-white transition-colors">Política de Privacidad</Link>
            <Link href="/politica-cookies" className="text-sm text-gray-300 hover:text-white transition-colors">Política de Cookies</Link>
          </div>

          {/* Columna 4: Redes Sociales */}
          <div className="flex flex-col gap-4">
            <h3 className="font-bold text-xl mb-2 text-white uppercase tracking-wider">Síguenos</h3>
            <div className="flex items-center gap-4">
              <a href={siteConfig.socials.facebook} target="_blank" rel="noopener noreferrer" className="bg-gray-800 p-2 rounded-full hover:bg-yamaha-blue transition-colors" aria-label="Facebook">
                <svg className="w-5 h-5 fill-current" viewBox="0 0 24 24"><path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.469h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.469h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z"/></svg>
              </a>
              <a href={siteConfig.socials.instagram} target="_blank" rel="noopener noreferrer" className="bg-gray-800 p-2 rounded-full hover:bg-yamaha-red transition-colors" aria-label="Instagram">
                <svg className="w-5 h-5 fill-current" viewBox="0 0 24 24"><path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zM12 0C8.741 0 8.333.014 7.053.072 2.695.272.273 2.69.073 7.052.014 8.333 0 8.741 0 12c0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98C8.333 23.986 8.741 24 12 24c3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98C15.668.014 15.259 0 12 0zm0 5.838a6.162 6.162 0 100 12.324 6.162 6.162 0 000-12.324zM12 16a4 4 0 110-8 4 4 0 010 8zm6.406-11.845a1.44 1.44 0 100 2.881 1.44 1.44 0 000-2.881z"/></svg>
              </a>
              <a href={siteConfig.socials.youtube} target="_blank" rel="noopener noreferrer" className="bg-gray-800 p-2 rounded-full hover:bg-red-600 transition-colors" aria-label="YouTube">
                <svg className="w-5 h-5 fill-current" viewBox="0 0 24 24"><path d="M23.498 6.186a3.016 3.016 0 0 0-2.122-2.136C19.505 3.545 12 3.545 12 3.545s-7.505 0-9.377.505A3.017 3.017 0 0 0 .502 6.186C0 8.07 0 12 0 12s0 3.93.502 5.814a3.016 3.016 0 0 0 2.122 2.136c1.871.505 9.376.505 9.376.505s7.505 0 9.377-.505a3.015 3.015 0 0 0 2.122-2.136C24 15.93 24 12 24 12s0-3.93-.502-5.814zM9.545 15.568V8.432L15.818 12l-6.273 3.568z"/></svg>
              </a>
            </div>
          </div>

        </div>

        <div className="border-t border-gray-800 pt-8 mt-8 flex flex-col md:flex-row items-center justify-between gap-4">
          <p className="text-sm text-gray-400 text-center md:text-left">
            © {new Date().getFullYear()} {siteConfig.businessName}. Todos los derechos reservados.
          </p>
          <div className="flex items-center gap-4">
            <Image 
              src="/images/incolmotos-50-anos.png" 
              alt="50 Años Incolmotos Yamaha" 
              width={160} 
              height={120} 
              className="object-contain w-32 md:w-40 h-auto"
            />
          </div>
        </div>
      </div>
    </footer>
  );
}
