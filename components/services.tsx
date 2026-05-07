"use client";

import { useRef } from "react";
import { motion, useInView } from "framer-motion";
import {
  Dumbbell,
  ClipboardList,
  Users,
  Heart,
  Check,
  MessageCircle,
} from "lucide-react";
import type { LucideIcon } from "lucide-react";

interface Service {
  icon: LucideIcon;
  title: string;
  description: string;
  features: string[];
}

const services: Service[] = [
  {
    icon: Dumbbell,
    title: "Entrenamiento Personal",
    description:
      "Sesiones one-on-one adaptadas a tus objetivos especificos, ya sea perdida de peso, ganancia muscular o mejora del rendimiento.",
    features: ["Plan personalizado", "Seguimiento semanal", "Correccion de tecnica"],
  },
  {
    icon: ClipboardList,
    title: "Planes de Nutricion",
    description:
      "Guias nutricionales complementarias para maximizar tus resultados y mantener un estilo de vida saludable.",
    features: ["Dieta balanceada", "Recetas faciles", "Suplementacion basica"],
  },
  {
    icon: Users,
    title: "Entrenamiento Grupal",
    description:
      "Clases grupales dinamicas para quienes disfrutan entrenar en compania y buscan motivacion extra.",
    features: ["Grupos reducidos", "Ambiente motivador", "Precios accesibles"],
  },
  {
    icon: Heart,
    title: "Seguimiento Online",
    description:
      "Para quienes prefieren entrenar por su cuenta pero con el respaldo de un profesional.",
    features: ["App de seguimiento", "Videos explicativos", "Soporte por chat"],
  },
];

const whatsappNumber = "5491153452005";

function ServiceCard({ service, index }: { service: Service; index: number }) {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-50px" });

  const handleWhatsApp = () => {
    const message = encodeURIComponent(
      `Hola! Me interesa el servicio de ${service.title}. Me gustaria recibir mas informacion.`
    );
    window.open(`https://wa.me/${whatsappNumber}?text=${message}`, "_blank");
  };

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, y: 50 }}
      animate={isInView ? { opacity: 1, y: 0 } : {}}
      transition={{ duration: 0.5, delay: index * 0.1 }}
      className="group relative overflow-hidden rounded-2xl border border-border bg-card p-6 transition-all duration-300 hover:-translate-y-2 hover:border-primary/50 hover:shadow-xl hover:shadow-primary/10"
    >
      {/* Hover glow effect */}
      <div className="absolute inset-0 bg-gradient-to-br from-primary/5 to-accent/5 opacity-0 transition-opacity group-hover:opacity-100" />

      <div className="relative">
        <div className="mb-5 flex h-14 w-14 items-center justify-center rounded-xl bg-primary/10 transition-all duration-300 group-hover:scale-110 group-hover:bg-primary/20">
          <service.icon className="h-7 w-7 text-primary" />
        </div>

        <h3 className="mb-3 text-xl font-bold text-foreground">
          {service.title}
        </h3>

        <p className="mb-4 text-sm leading-relaxed text-muted-foreground">
          {service.description}
        </p>

        <ul className="mb-6 space-y-2">
          {service.features.map((feature, idx) => (
            <li
              key={idx}
              className="flex items-center gap-2 text-sm text-muted-foreground"
            >
              <Check className="h-4 w-4 flex-shrink-0 text-primary" />
              {feature}
            </li>
          ))}
        </ul>

        <button
          onClick={handleWhatsApp}
          className="flex w-full items-center justify-center gap-2 rounded-xl bg-whatsapp py-3 font-semibold text-white transition-all hover:scale-105 hover:shadow-lg hover:shadow-whatsapp/30"
        >
          <MessageCircle className="h-5 w-5" />
          Consultar
        </button>
      </div>
    </motion.div>
  );
}

export default function Services() {
  const headerRef = useRef(null);
  const isHeaderInView = useInView(headerRef, { once: true, margin: "-100px" });

  return (
    <section id="servicios" className="bg-background py-20">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <motion.div
          ref={headerRef}
          initial={{ opacity: 0, y: 30 }}
          animate={isHeaderInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.5 }}
          className="mb-16 text-center"
        >
          <span className="mb-4 inline-block rounded-full bg-primary/20 px-4 py-1.5 text-sm font-medium text-primary">
            Servicios
          </span>
          <h2 className="mb-4 text-3xl font-bold text-foreground sm:text-4xl">
            Soluciones para cada objetivo
          </h2>
          <p className="mx-auto max-w-2xl text-muted-foreground">
            Ofrezco diferentes modalidades de entrenamiento para adaptarme a tus
            necesidades y estilo de vida.
          </p>
        </motion.div>

        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {services.map((service, index) => (
            <ServiceCard key={index} service={service} index={index} />
          ))}
        </div>
      </div>
    </section>
  );
}
