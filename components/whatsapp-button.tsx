"use client";

import { motion } from "framer-motion";
import { MessageCircle } from "lucide-react";

const whatsappNumber = "5491153452005";

export default function WhatsAppButton() {
  const handleClick = () => {
    const message = encodeURIComponent(
      "Hola! Me gustaria recibir mas informacion sobre los entrenamientos."
    );
    window.open(`https://wa.me/${whatsappNumber}?text=${message}`, "_blank");
  };

  return (
    <motion.button
      initial={{ scale: 0, opacity: 0 }}
      animate={{ scale: 1, opacity: 1 }}
      transition={{ delay: 1, type: "spring", stiffness: 200 }}
      whileHover={{ scale: 1.1 }}
      whileTap={{ scale: 0.95 }}
      onClick={handleClick}
      className="fixed bottom-6 right-6 z-50 flex h-14 w-14 items-center justify-center rounded-full bg-whatsapp text-white shadow-lg shadow-whatsapp/30 transition-shadow hover:shadow-xl hover:shadow-whatsapp/40"
      aria-label="Contactar por WhatsApp"
    >
      <MessageCircle className="h-7 w-7" />
      
      {/* Pulse animation */}
      <span className="absolute inset-0 animate-ping rounded-full bg-whatsapp opacity-25" />
    </motion.button>
  );
}
