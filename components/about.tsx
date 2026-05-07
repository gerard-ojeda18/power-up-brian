"use client";

import { useEffect, useRef, useState } from "react";
import { motion, useInView } from "framer-motion";
import Image from "next/image";

interface CounterProps {
  end: number;
  suffix: string;
  label: string;
}

function AnimatedCounter({ end, suffix, label }: CounterProps) {
  const [count, setCount] = useState(0);
  const ref = useRef<HTMLDivElement>(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  useEffect(() => {
    if (!isInView) return;

    const duration = 2000;
    const steps = 60;
    const stepDuration = duration / steps;
    const increment = end / steps;
    let current = 0;

    const timer = setInterval(() => {
      current += increment;
      if (current >= end) {
        setCount(end);
        clearInterval(timer);
      } else {
        setCount(Math.floor(current));
      }
    }, stepDuration);

    return () => clearInterval(timer);
  }, [isInView, end]);

  return (
    <div ref={ref} className="rounded-xl bg-card p-4 text-center shadow-lg">
      <div className="counter-number text-2xl font-bold text-primary sm:text-3xl">
        {count}
        {suffix}
      </div>
      <div className="mt-1 text-sm text-muted-foreground">{label}</div>
    </div>
  );
}

const stats = [
  { end: 30, suffix: "+", label: "Clientes Satisfechos" },
  { end: 5, suffix: "+", label: "Años de Experiencia" },
  { end: 100, suffix: "%", label: "Compromiso" },
];

export default function About() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section id="sobre-mi" className="bg-card py-20">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div
          ref={ref}
          className="grid items-center gap-12 md:grid-cols-2"
        >
          {/* Image */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.6 }}
            className="relative h-96 overflow-hidden rounded-2xl md:h-[500px]"
          >
            <Image
              src="/entrenamiento.webp"
              alt="Brian Perez Entrenamiento"
              fill
              className="object-cover"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-background/50 to-transparent" />
          </motion.div>

          {/* Content */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            <span className="mb-4 inline-block rounded-full bg-primary/20 px-4 py-1.5 text-sm font-medium text-primary">
              Sobre Mi
            </span>

            <h2 className="mb-6 text-3xl font-bold text-foreground sm:text-4xl">
              Mejorando Juntos hacia tus objetivos
            </h2>

            <p className="mb-6 leading-relaxed text-muted-foreground">
              Soy Brian Perez, entrenador personal certificado con mas de 5 años
              de experiencia ayudando a personas a transformar sus vidas a
              través del fitness. Mi filosofía se basa en el acompanamiento
              constante y la personalización de cada plan de entrenamiento.
            </p>

            <p className="mb-8 leading-relaxed text-muted-foreground">
              Con PowerUp, no solo entrenas tu cuerpo, sino que desarrollas
              habitos saludables que perduran en el tiempo. Creo firmemente que
              todos podemos alcanzar nuestras metas con la guia adecuada.
            </p>

            {/* Animated Stats */}
            <div className="grid grid-cols-3 gap-4">
              {stats.map((stat, index) => (
                <AnimatedCounter
                  key={index}
                  end={stat.end}
                  suffix={stat.suffix}
                  label={stat.label}
                />
              ))}
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
