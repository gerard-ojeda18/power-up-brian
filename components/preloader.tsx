"use client";

import { motion } from "framer-motion";
import Image from "next/image";

export default function Preloader() {
  return (
    <div className="fixed inset-0 z-[100] flex flex-col items-center justify-center bg-background">
      <motion.div
        initial={{ opacity: 0, scale: 0.8 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.5 }}
        className="relative"
      >
        <motion.div
          animate={{
            scale: [1, 1.1, 1],
            opacity: [1, 0.8, 1],
          }}
          transition={{
            duration: 2,
            repeat: Infinity,
            ease: "easeInOut",
          }}
        >
          <Image
            src="/power-up.jpg"
            alt="PowerUp Logo"
            width={150}
            height={150}
            className="rounded-2xl"
            priority
          />
        </motion.div>

        {/* Loading bar */}
        <motion.div
          className="mt-8 h-1 w-32 overflow-hidden rounded-full bg-secondary"
        >
          <motion.div
            className="h-full bg-primary"
            initial={{ x: "-100%" }}
            animate={{ x: "100%" }}
            transition={{
              duration: 1.5,
              repeat: Infinity,
              ease: "easeInOut",
            }}
          />
        </motion.div>

        <motion.p
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.3 }}
          className="mt-4 text-sm text-muted-foreground"
        >
          Cargando...
        </motion.p>
      </motion.div>
    </div>
  );
}
