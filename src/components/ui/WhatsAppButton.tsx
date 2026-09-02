"use client";

import { MessageCircle } from "lucide-react";
import { siteConfig } from "@/config/site";
import { motion, AnimatePresence } from "framer-motion";
import { useEffect, useState } from "react";

export function WhatsAppButton() {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    // Show after scrolling a bit or immediately, depending on preference
    // Showing immediately is fine for business sites
    setIsVisible(true);
  }, []);

  return (
    <AnimatePresence>
      {isVisible && (
        <motion.a
          initial={{ scale: 0, opacity: 0 }}
          animate={{ scale: 1, opacity: 1 }}
          exit={{ scale: 0, opacity: 0 }}
          whileHover={{ scale: 1.1 }}
          whileTap={{ scale: 0.9 }}
          href={`https://wa.me/${siteConfig.whatsapp}?text=${encodeURIComponent("Hola, quisiera recibir más información.")}`}
          target="_blank"
          rel="noopener noreferrer"
          className="fixed bottom-6 right-6 z-50 bg-[#25D366] text-white p-4 rounded-full shadow-lg hover:shadow-xl transition-shadow flex items-center justify-center"
          aria-label="Contactar por WhatsApp"
        >
          <MessageCircle className="w-8 h-8" />
        </motion.a>
      )}
    </AnimatePresence>
  );
}
