"use client";

import { useRef, useEffect, useCallback } from "react";
import { motion, useInView } from "framer-motion";
import { Star, ChevronLeft, ChevronRight } from "lucide-react";
import useEmblaCarousel from "embla-carousel-react";
import Autoplay from "embla-carousel-autoplay";

interface Testimonial {
  name: string;
  role: string;
  text: string;
  rating: number;
}

const testimonials: Testimonial[] = [
  {
    name: "Martin Rodriguez",
    role: "Perdio 15kg en 4 meses",
    text: "Brian no solo me ayudo a perder peso, sino que me enseno a mantener un estilo de vida saludable. Su dedicacion y conocimiento son increibles.",
    rating: 5,
  },
  {
    name: "Laura Fernandez",
    role: "Aumento de masa muscular",
    text: "Despues de anios sin poder lograr mis objetivos, encontre en PowerUp la guia que necesitaba. Los resultados hablan por si solos.",
    rating: 5,
  },
  {
    name: "Carlos Mendez",
    role: "Preparacion deportiva",
    text: "Me prepare para mi primera maraton con Brian. Su metodologia y seguimiento constante fueron clave para cruzar la meta.",
    rating: 5,
  },
  {
    name: "Sofia Garcia",
    role: "Tonificacion y bienestar",
    text: "Nunca pense que iba a disfrutar tanto entrenar. Brian hace que cada sesion sea diferente y motivadora. Totalmente recomendado!",
    rating: 5,
  },
  {
    name: "Diego Lopez",
    role: "Rehabilitacion deportiva",
    text: "Despues de mi lesion, Brian me ayudo a recuperarme de forma segura y volver a mi nivel anterior. Profesionalismo total.",
    rating: 5,
  },
];

function TestimonialCard({ testimonial }: { testimonial: Testimonial }) {
  return (
    <div className="flex-[0_0_100%] px-4 md:flex-[0_0_50%] lg:flex-[0_0_33.333%]">
      <div className="h-full rounded-2xl bg-card p-8 shadow-lg transition-all hover:shadow-xl">
        <div className="mb-4 flex gap-1">
          {[...Array(testimonial.rating)].map((_, i) => (
            <Star
              key={i}
              className="h-5 w-5 fill-yellow-400 text-yellow-400"
            />
          ))}
        </div>

        <p className="mb-6 leading-relaxed text-muted-foreground italic">
          &quot;{testimonial.text}&quot;
        </p>

        <div className="flex items-center gap-3">
          <div className="flex h-12 w-12 items-center justify-center rounded-full bg-primary text-lg font-bold text-primary-foreground">
            {testimonial.name.charAt(0)}
          </div>
          <div>
            <div className="font-semibold text-foreground">
              {testimonial.name}
            </div>
            <div className="text-sm text-muted-foreground">
              {testimonial.role}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default function Testimonials() {
  const headerRef = useRef(null);
  const isHeaderInView = useInView(headerRef, { once: true, margin: "-100px" });

  const [emblaRef, emblaApi] = useEmblaCarousel(
    { loop: true, align: "start" },
    [Autoplay({ delay: 4000, stopOnInteraction: false })]
  );

  const scrollPrev = useCallback(() => {
    if (emblaApi) emblaApi.scrollPrev();
  }, [emblaApi]);

  const scrollNext = useCallback(() => {
    if (emblaApi) emblaApi.scrollNext();
  }, [emblaApi]);

  return (
    <section id="testimonios" className="bg-card py-20">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <motion.div
          ref={headerRef}
          initial={{ opacity: 0, y: 30 }}
          animate={isHeaderInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.5 }}
          className="mb-16 text-center"
        >
          <span className="mb-4 inline-block rounded-full bg-primary/20 px-4 py-1.5 text-sm font-medium text-primary">
            Testimonios
          </span>
          <h2 className="mb-4 text-3xl font-bold text-foreground sm:text-4xl">
            Lo que dicen mis clientes
          </h2>
          <p className="mx-auto max-w-2xl text-muted-foreground">
            Historias reales de personas que transformaron sus vidas con
            PowerUp.
          </p>
        </motion.div>

        <div className="relative">
          {/* Carousel */}
          <div className="overflow-hidden" ref={emblaRef}>
            <div className="-mx-4 flex">
              {testimonials.map((testimonial, index) => (
                <TestimonialCard key={index} testimonial={testimonial} />
              ))}
            </div>
          </div>

          {/* Navigation Buttons */}
          <button
            onClick={scrollPrev}
            className="absolute -left-4 top-1/2 z-10 flex h-12 w-12 -translate-y-1/2 items-center justify-center rounded-full bg-primary text-primary-foreground shadow-lg transition-all hover:scale-110 hover:shadow-xl md:-left-6"
            aria-label="Previous testimonial"
          >
            <ChevronLeft className="h-6 w-6" />
          </button>
          <button
            onClick={scrollNext}
            className="absolute -right-4 top-1/2 z-10 flex h-12 w-12 -translate-y-1/2 items-center justify-center rounded-full bg-primary text-primary-foreground shadow-lg transition-all hover:scale-110 hover:shadow-xl md:-right-6"
            aria-label="Next testimonial"
          >
            <ChevronRight className="h-6 w-6" />
          </button>
        </div>
      </div>
    </section>
  );
}
