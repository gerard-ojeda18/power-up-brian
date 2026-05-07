"use client";

import { useState, useRef } from "react";
import { motion, useInView } from "framer-motion";
import { Rocket } from "lucide-react";

const whatsappNumber = "5491153452005";

const container = {
  hidden: {},
  show: {
    transition: {
      staggerChildren: 0.1,
    },
  },
};

const item = {
  hidden: { opacity: 0, y: 25 },
  show: { opacity: 1, y: 0 },
};

export default function Contact() {
  const [form, setForm] = useState({
    name: "",
    goal: "",
    level: "",
    availability: "",
  });

  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>
  ) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();

    const message = encodeURIComponent(
      `Hola, que tal? Nuevo contacto PowerUp\n\n` +
        `Nombre: ${form.name}\n` +
        `Objetivo: ${form.goal}\n` +
        `Nivel: ${form.level}\n` +
        `Disponibilidad: ${form.availability}`
    );

    window.open(`https://wa.me/${whatsappNumber}?text=${message}`, "_blank");
  };

  return (
    <section
      id="contacto"
      className="flex min-h-screen items-center justify-center bg-background px-4 py-20"
    >
      <motion.div
        ref={ref}
        variants={container}
        initial="hidden"
        animate={isInView ? "show" : "hidden"}
        className="w-full max-w-md rounded-3xl bg-card p-8 shadow-2xl"
      >
        {/* Badge */}
        <motion.span
          variants={item}
          className="mb-4 inline-block rounded-full bg-primary px-4 py-1 text-sm font-semibold text-primary-foreground"
        >
          Coaching Personalizado
        </motion.span>

        {/* Title */}
        <motion.h2
          variants={item}
          className="mb-3 text-3xl font-extrabold leading-tight text-foreground"
        >
          Transforma tu cuerpo <br /> y tu disciplina
        </motion.h2>

        {/* Subtitle */}
        <motion.p variants={item} className="mb-8 text-muted-foreground">
          Entrenamiento 100% adaptado a tu nivel, objetivos y rutina.
        </motion.p>

        {/* Form */}
        <motion.form
          variants={container}
          onSubmit={handleSubmit}
          className="space-y-5"
        >
          <motion.input
            variants={item}
            whileFocus={{ scale: 1.02 }}
            type="text"
            name="name"
            required
            placeholder="Como te llamas?"
            onChange={handleChange}
            className="w-full rounded-2xl border border-border bg-secondary px-4 py-4 text-foreground placeholder:text-muted-foreground focus:border-primary focus:outline-none focus:ring-2 focus:ring-primary/20"
          />

          <motion.input
            variants={item}
            whileFocus={{ scale: 1.02 }}
            type="text"
            name="goal"
            required
            placeholder="Objetivo: (Ej: Bajar grasa)"
            onChange={handleChange}
            className="w-full rounded-2xl border border-border bg-secondary px-4 py-4 text-foreground placeholder:text-muted-foreground focus:border-primary focus:outline-none focus:ring-2 focus:ring-primary/20"
          />

          <motion.select
            variants={item}
            name="level"
            required
            onChange={handleChange}
            className="w-full rounded-2xl border border-border bg-secondary px-4 py-4 text-foreground focus:border-primary focus:outline-none focus:ring-2 focus:ring-primary/20"
          >
            <option value="">Nivel de entrenamiento</option>
            <option value="Principiante">Principiante</option>
            <option value="Intermedio">Intermedio</option>
            <option value="Avanzado">Avanzado</option>
          </motion.select>

          <motion.select
            variants={item}
            name="availability"
            required
            onChange={handleChange}
            className="w-full rounded-2xl border border-border bg-secondary px-4 py-4 text-foreground focus:border-primary focus:outline-none focus:ring-2 focus:ring-primary/20"
          >
            <option value="">Cuantos días podes entrenar?</option>
            <option value="2-3 veces por semana">2-3 veces por semana</option>
            <option value="4-5 veces por semana">4-5 veces por semana</option>
            <option value="Todos los días">Todos los días</option>
          </motion.select>

          <motion.button
            variants={item}
            whileTap={{ scale: 0.95 }}
            whileHover={{ scale: 1.03 }}
            type="submit"
            className="flex w-full items-center justify-center gap-2 rounded-2xl bg-whatsapp py-5 text-lg font-extrabold text-white shadow-xl transition-all hover:shadow-whatsapp/30"
          >
            <Rocket className="h-5 w-5" />
            Quiero empezar ahora
          </motion.button>
        </motion.form>

        {/* Trust text */}
        <motion.p
          variants={item}
          className="mt-6 text-center text-xs text-muted-foreground"
        >
          Respuesta rapida - Cupos limitados - Atencion personalizada
        </motion.p>
      </motion.div>
    </section>
  );
}
