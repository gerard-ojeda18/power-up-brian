import { useState } from "react";
import { motion } from "framer-motion";


// Colores de la paleta
const colors = {
  midnight: "#122C4F",
  ocean: "#5B88B2",
  noir: "#000000",
  white: "#FFFFFF",
};

// Iconos SVG inline
function MenuIcon({ className }) {
  return (
    <svg className={className} fill="none" stroke="currentColor" viewBox="0 0 24 24">
      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
    </svg>
  );
}

function CloseIcon({ className }) {
  return (
    <svg className={className} fill="none" stroke="currentColor" viewBox="0 0 24 24">
      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
    </svg>
  );
}

function WhatsAppIcon({ className }) {
  return (
    <svg className={className} fill="currentColor" viewBox="0 0 24 24">
      <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z"/>
    </svg>
  );
}

function CheckIcon({ className }) {
  return (
    <svg className={className} fill="none" stroke="currentColor" viewBox="0 0 24 24">
      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
    </svg>
  );
}

function DumbbellIcon({ className }) {
  return (
    <svg className={className} fill="none" stroke="currentColor" viewBox="0 0 24 24">
      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6.5 6.5h-2a1 1 0 00-1 1v9a1 1 0 001 1h2m0-11v11m0-11h2m-2 11h2m9-11h2a1 1 0 011 1v9a1 1 0 01-1 1h-2m0-11v11m0-11h-2m2 11h-2M8.5 12h7" />
    </svg>
  );
}

function HeartIcon({ className }) {
  return (
    <svg className={className} fill="none" stroke="currentColor" viewBox="0 0 24 24">
      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z" />
    </svg>
  );
}

function ClipboardIcon({ className }) {
  return (
    <svg className={className} fill="none" stroke="currentColor" viewBox="0 0 24 24">
      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5H7a2 2 0 00-2 2v12a2 2 0 002 2h10a2 2 0 002-2V7a2 2 0 00-2-2h-2M9 5a2 2 0 002 2h2a2 2 0 002-2M9 5a2 2 0 012-2h2a2 2 0 012 2m-3 7h3m-3 4h3m-6-4h.01M9 16h.01" />
    </svg>
  );
}

function UsersIcon({ className }) {
  return (
    <svg className={className} fill="none" stroke="currentColor" viewBox="0 0 24 24">
      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 4.354a4 4 0 110 5.292M15 21H3v-1a6 6 0 0112 0v1zm0 0h6v-1a6 6 0 00-9-5.197M13 7a4 4 0 11-8 0 4 4 0 018 0z" />
    </svg>
  );
}

function StarIcon({ className, filled }) {
  return (
    <svg className={className} fill={filled ? "currentColor" : "none"} stroke="currentColor" viewBox="0 0 24 24">
      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M11.049 2.927c.3-.921 1.603-.921 1.902 0l1.519 4.674a1 1 0 00.95.69h4.915c.969 0 1.371 1.24.588 1.81l-3.976 2.888a1 1 0 00-.363 1.118l1.518 4.674c.3.922-.755 1.688-1.538 1.118l-3.976-2.888a1 1 0 00-1.176 0l-3.976 2.888c-.783.57-1.838-.197-1.538-1.118l1.518-4.674a1 1 0 00-.363-1.118l-3.976-2.888c-.784-.57-.38-1.81.588-1.81h4.914a1 1 0 00.951-.69l1.519-4.674z" />
    </svg>
  );
}

function InstagramIcon({ className }) {
  return (
    <svg className={className} fill="currentColor" viewBox="0 0 24 24">
      <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z"/>
    </svg>
  );
}

function LocationIcon({ className }) {
  return (
    <svg className={className} fill="none" stroke="currentColor" viewBox="0 0 24 24">
      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
    </svg>
  );
}

// Componente Header/Navbar
function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const navLinks = [
    { href: "#inicio", label: "Inicio" },
    { href: "#sobre-mi", label: "Sobre Mi" },
    { href: "#servicios", label: "Servicios" },
    { href: "#testimonios", label: "Testimonios" },
    { href: "#contacto", label: "Contacto" },
  ];

  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-white/95 backdrop-blur-sm shadow-sm">
      <nav className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16 md:h-20">
          <a href="#inicio" className="flex items-center gap-2">
            <img src="/power-up.jpg" alt="PowerUp Logo" className="h-12 md:h-14 w-auto" />
          </a>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center gap-8">
            {navLinks.map((link) => (
              <a
                key={link.href}
                href={link.href}
                className="text-sm font-medium transition-colors hover:text-[#5B88B2]"
                style={{ color: colors.midnight }}
              >
                {link.label}
              </a>
            ))}
            <a
              href="#contacto"
              className="px-5 py-2.5 rounded-lg text-white text-sm font-semibold transition-all hover:opacity-90"
              style={{ backgroundColor: colors.ocean }}
            >
              Empezar Ahora
            </a>
          </div>

          {/* Mobile Menu Button */}
          <button
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            className="md:hidden p-2"
            style={{ color: colors.midnight }}
          >
            {isMenuOpen ? <CloseIcon className="w-6 h-6" /> : <MenuIcon className="w-6 h-6" />}
          </button>
        </div>

        {/* Mobile Navigation */}
        {isMenuOpen && (
          <div className="md:hidden py-4 border-t border-gray-100">
            <div className="flex flex-col gap-4">
              {navLinks.map((link) => (
                <a
                  key={link.href}
                  href={link.href}
                  onClick={() => setIsMenuOpen(false)}
                  className="text-base font-medium py-2 transition-colors hover:text-[#5B88B2]"
                  style={{ color: colors.midnight }}
                >
                  {link.label}
                </a>
              ))}
              <a
                href="#contacto"
                onClick={() => setIsMenuOpen(false)}
                className="px-5 py-3 rounded-lg text-white text-center font-semibold transition-all hover:opacity-90"
                style={{ backgroundColor: colors.ocean }}
              >
                Empezar Ahora
              </a>
            </div>
          </div>
        )}
      </nav>
    </header>
  );
}

// Componente Hero
       function Hero() {
  return (
    <section
      id="inicio"
      className="relative min-h-screen flex items-center pt-20 
             bg-[url('/power-up.jpg')] 
             bg-cover bg-center 
             md:bg-[length:60%] md:bg-right md:bg-no-repeat"
    >
      {/* Overlay */}
      <div className="absolute inset-0 bg-gradient-to-r from-white via-white/90 to-white/70"></div>

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 md:py-20">
        <div className="grid md:grid-cols-2 gap-12 items-center">
          
          <div className="text-center md:text-left">
            <span
              className="inline-block px-4 py-1.5 rounded-full text-sm font-medium mb-6"
              style={{ backgroundColor: `${colors.ocean}20`, color: colors.ocean }}
            >
              Personal Trainer Certificado
            </span>

            <h1
              className="text-4xl sm:text-5xl lg:text-6xl font-bold leading-tight mb-6"
              style={{ color: colors.midnight }}
            >
              Transforma tu cuerpo con{" "}
              <span style={{ color: colors.ocean }}>Brian Perez</span>
            </h1>

            <p className="text-lg text-gray-600 mb-8 leading-relaxed max-w-lg mx-auto md:mx-0">
              Entrenamiento personalizado diseñado para alcanzar tus metas.
              Juntos construiremos la mejor version de vos mismo.
            </p>

            <div className="flex flex-col sm:flex-row gap-4 justify-center md:justify-start">
              <a
                href="#contacto"
                className="px-8 py-4 rounded-lg text-white font-semibold text-lg transition-all hover:scale-105 hover:shadow-lg inline-flex items-center justify-center gap-2"
                style={{ backgroundColor: colors.midnight }}
              >
                <WhatsAppIcon className="w-5 h-5" />
                Contactame
              </a>

              <a
                href="#servicios"
                className="px-8 py-4 rounded-lg font-semibold text-lg transition-all hover:bg-gray-100 border-2 inline-flex items-center justify-center"
                style={{ borderColor: colors.ocean, color: colors.ocean }}
              >
                Ver Servicios
              </a>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
}


// Componente About
function About() {
  const stats = [
    { number: "500+", label: "Clientes Satisfechos" },
    { number: "5+", label: "Años de Experiencia" },
    { number: "100%", label: "Compromiso" },
  ];

  return (
    <section id="sobre-mi" className="py-20 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid md:grid-cols-2 gap-12 items-center">
          <div
            className="relative rounded-2xl overflow-hidden h-96 md:h-[500px] flex items-center justify-center"
            style={{ backgroundColor: colors.midnight }}
          >
            <img
              src="/entrenamiento.webp"
              alt="Entrenamiento"
              className="w-full h-auto object-cover opacity-90"
            />
          </div>
          <div>
            <span
              className="inline-block px-4 py-1.5 rounded-full text-sm font-medium mb-4"
              style={{ backgroundColor: `${colors.ocean}20`, color: colors.ocean }}
            >
              Sobre Mi
            </span>
            <h2
              className="text-3xl sm:text-4xl font-bold mb-6 text-balance"
              style={{ color: colors.midnight }}
            >
              Mejorando Juntos hacia tus objetivos
            </h2>
            <p className="text-gray-600 mb-6 leading-relaxed">
              Soy Brian Perez, entrenador personal certificado con mas de 5 años de experiencia 
              ayudando a personas a transformar sus vidas a traves del fitness. Mi filosofia 
              se basa en el acompañamiento constante y la personalizacion de cada plan de entrenamiento.
            </p>
            <p className="text-gray-600 mb-8 leading-relaxed">
              Con PowerUp, no solo entrenas tu cuerpo, sino que desarrollas habitos saludables 
              que perduran en el tiempo. Creo firmemente que todos podemos alcanzar nuestras 
              metas con la guia adecuada.
            </p>
            <div className="grid grid-cols-3 gap-4">
              {stats.map((stat, index) => (
                <div key={index} className="text-center p-4 bg-white rounded-xl shadow-sm">
                  <div className="text-2xl sm:text-3xl font-bold" style={{ color: colors.ocean }}>
                    {stat.number}
                  </div>
                  <div className="text-sm text-gray-600 mt-1">{stat.label}</div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

// Componente Services
function Services() {
  const services = [
    {
      icon: DumbbellIcon,
      title: "Entrenamiento Personal",
      description:
        "Sesiones one-on-one adaptadas a tus objetivos especificos, ya sea perdida de peso, ganancia muscular o mejora del rendimiento.",
      features: ["Plan personalizado", "Seguimiento semanal", "Correccion de tecnica"],
    },
    {
      icon: ClipboardIcon,
      title: "Planes de Nutricion",
      description:
        "Guias nutricionales complementarias para maximizar tus resultados y mantener un estilo de vida saludable.",
      features: ["Dieta balanceada", "Recetas faciles", "Suplementacion basica"],
    },
    {
      icon: UsersIcon,
      title: "Entrenamiento Grupal",
      description:
        "Clases grupales dinamicas para quienes disfrutan entrenar en compañia y buscan motivacion extra.",
      features: ["Grupos reducidos", "Ambiente motivador", "Precios accesibles"],
    },
    {
      icon: HeartIcon,
      title: "Seguimiento Online",
      description:
        "Para quienes prefieren entrenar por su cuenta pero con el respaldo de un profesional.",
      features: ["App de seguimiento", "Videos explicativos", "Soporte por chat"],
    },
  ];

  return (
    <section id="servicios" className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <span
            className="inline-block px-4 py-1.5 rounded-full text-sm font-medium mb-4"
            style={{ backgroundColor: `${colors.ocean}20`, color: colors.ocean }}
          >
            Servicios
          </span>
          <h2 className="text-3xl sm:text-4xl font-bold mb-4 text-balance" style={{ color: colors.midnight }}>
            Soluciones para cada objetivo
          </h2>
          <p className="text-gray-600 max-w-2xl mx-auto">
            Ofrezco diferentes modalidades de entrenamiento para adaptarme a tus necesidades y estilo de vida.
          </p>
        </div>
        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {services.map((service, index) => (
            <div
              key={index}
              className="group p-6 rounded-2xl border border-gray-100 bg-white hover:shadow-xl transition-all duration-300 hover:-translate-y-1"
            >
              <div
                className="w-14 h-14 rounded-xl flex items-center justify-center mb-5 group-hover:scale-110 transition-transform"
                style={{ backgroundColor: `${colors.ocean}15` }}
              >
                <service.icon className="w-7 h-7" style={{ color: colors.ocean }} />
              </div>
              <h3 className="text-xl font-bold mb-3" style={{ color: colors.midnight }}>
                {service.title}
              </h3>
              <p className="text-gray-600 text-sm mb-4 leading-relaxed">{service.description}</p>
              <ul className="space-y-2">
                {service.features.map((feature, idx) => (
                  <li key={idx} className="flex items-center gap-2 text-sm text-gray-600">
                    <CheckIcon className="w-4 h-4 flex-shrink-0" style={{ color: colors.ocean }} />
                    {feature}
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

// Componente Testimonials
function Testimonials() {
  const testimonials = [
    {
      name: "Martin Rodriguez",
      role: "Perdio 15kg en 4 meses",
      text: "Brian no solo me ayudo a perder peso, sino que me enseño a mantener un estilo de vida saludable. Su dedicacion y conocimiento son increibles.",
      rating: 5,
    },
    {
      name: "Laura Fernandez",
      role: "Aumento de masa muscular",
      text: "Despues de años sin poder lograr mis objetivos, encontre en PowerUp la guia que necesitaba. Los resultados hablan por si solos.",
      rating: 5,
    },
    {
      name: "Carlos Mendez",
      role: "Preparacion deportiva",
      text: "Me prepare para mi primera maraton con Brian. Su metodologia y seguimiento constante fueron clave para cruzar la meta.",
      rating: 5,
    },
  ];

  return (
    <section id="testimonios" className="py-20 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <span
            className="inline-block px-4 py-1.5 rounded-full text-sm font-medium mb-4"
            style={{ backgroundColor: `${colors.ocean}20`, color: colors.ocean }}
          >
            Testimonios
          </span>
          <h2 className="text-3xl sm:text-4xl font-bold mb-4 text-balance" style={{ color: colors.midnight }}>
            Lo que dicen mis clientes
          </h2>
          <p className="text-gray-600 max-w-2xl mx-auto">
            Historias reales de personas que transformaron sus vidas con PowerUp.
          </p>
        </div>
        <div className="grid md:grid-cols-3 gap-8">
          {testimonials.map((testimonial, index) => (
            <div key={index} className="bg-white p-8 rounded-2xl shadow-sm hover:shadow-md transition-shadow">
              <div className="flex gap-1 mb-4">
                {[...Array(testimonial.rating)].map((_, i) => (
                  <StarIcon key={i} className="w-5 h-5" style={{ color: "#FBBF24" }} filled />
                ))}
              </div>
              <p className="text-gray-600 mb-6 leading-relaxed italic">"{testimonial.text}"</p>
              <div className="flex items-center gap-3">
                <div
                  className="w-12 h-12 rounded-full flex items-center justify-center text-white font-bold"
                  style={{ backgroundColor: colors.midnight }}
                >
                  {testimonial.name.charAt(0)}
                </div>
                <div>
                  <div className="font-semibold" style={{ color: colors.midnight }}>
                    {testimonial.name}
                  </div>
                  <div className="text-sm text-gray-500">{testimonial.role}</div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

// Componente Contact (WhatsApp)
const container = {
  hidden: {},
  show: {
    transition: {
      staggerChildren: 0.12,
    },
  },
};

const item = {
  hidden: { opacity: 0, y: 25 },
  show: { opacity: 1, y: 0 },
};

function Contact() {
  const [form, setForm] = useState({
    name: "",
    goal: "",
    level: "",
    availability: "",
  });

  const whatsappNumber = "5491153452005";

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    const message = encodeURIComponent(
      `🔥 Nuevo contacto PowerUp 🔥\n\n` +
      `👤 Nombre: ${form.name}\n` +
      `🎯 Objetivo: ${form.goal}\n` +
      `💪 Nivel: ${form.level}\n` +
      `⏱ Disponibilidad: ${form.availability}`
    );

    window.open(`https://wa.me/${whatsappNumber}?text=${message}`, "_blank");
  };

  return (
    <section
      id="contacto"
      className="min-h-screen flex items-center justify-center px-4"
      style={{ backgroundColor: colors.midnight }}
    >
      <motion.div
        variants={container}
        initial="hidden"
        animate="show"
        className="w-full max-w-md bg-white rounded-[32px] p-8 shadow-2xl"
      >
        {/* Badge */}
        <motion.span
          variants={item}
          className="inline-block mb-4 px-4 py-1 rounded-full text-sm font-semibold text-white"
          style={{ backgroundColor: colors.ocean }}
        >
          Coaching Personalizado
        </motion.span>

        {/* Title */}
        <motion.h2
          variants={item}
          className="text-3xl font-extrabold mb-3 leading-tight"
        >
          Transformá tu cuerpo <br /> y tu disciplina
        </motion.h2>

        {/* Subtitle */}
        <motion.p
          variants={item}
          className="text-gray-600 mb-8"
        >
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
            placeholder="¿Cómo te llamás?"
            onChange={handleChange}
            className="w-full px-4 py-4 rounded-2xl border border-gray-200 focus:outline-none focus:border-black"
          />

          <motion.input
            variants={item}
            whileFocus={{ scale: 1.02 }}
            type="text"
            name="goal"
            required
            placeholder="Objetivo: (Ej: Bajar grasa)"
            onChange={handleChange}
            className="w-full px-4 py-4 rounded-2xl border border-gray-200 focus:outline-none focus:border-black"
          />

          <motion.select
            variants={item}
            name="level"
            required
            onChange={handleChange}
            className="w-full px-4 py-4 rounded-2xl border border-gray-200 focus:outline-none focus:border-black text-gray-700"
          >
            <option value="">Nivel de entrenamiento</option>
            <option>Principiante</option>
            <option>Intermedio</option>
            <option>Avanzado</option>
          </motion.select>

          <motion.select
            variants={item}
            name="availability"
            required
            onChange={handleChange}
            className="w-full px-4 py-4 rounded-2xl border border-gray-200 focus:outline-none focus:border-black text-gray-700"
          >
            <option value="">¿Cuántos días podés entrenar?</option>
            <option>2–3 veces por semana</option>
            <option>4–5 veces por semana</option>
            <option>Todos los días</option>
          </motion.select>

          <motion.button
            variants={item}
            whileTap={{ scale: 0.95 }}
            whileHover={{ scale: 1.03 }}
            type="submit"
            className="w-full py-5 rounded-2xl font-extrabold text-lg text-white shadow-xl"
            style={{ backgroundColor: "#25D366" }}
          >
            Quiero empezar ahora 🚀
          </motion.button>
        </motion.form>

        {/* Trust text */}
        <motion.p
          variants={item}
          className="text-xs text-center text-gray-400 mt-6"
        >
          Respuesta rápida • Cupos limitados • Atención personalizada
        </motion.p>
      </motion.div>
    </section>
  );
}

// Componente Footer
function Footer() {
  return (
    <footer style={{ backgroundColor: colors.noir }} className="py-12 text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col md:flex-row items-center justify-between gap-6">
          <div className="flex items-center gap-3">
            <img src="/power-up.jpg" alt="PowerUp Logo" className="h-10 w-auto brightness-0 invert" />
          </div>
          <nav className="flex flex-wrap justify-center gap-6 text-sm text-gray-400">
            <a href="#inicio" className="hover:text-white transition-colors">
              Inicio
            </a>
            <a href="#sobre-mi" className="hover:text-white transition-colors">
              Sobre Mi
            </a>
            <a href="#servicios" className="hover:text-white transition-colors">
              Servicios
            </a>
            <a href="#testimonios" className="hover:text-white transition-colors">
              Testimonios
            </a>
            <a href="#contacto" className="hover:text-white transition-colors">
              Contacto
            </a>
          </nav>
          <div className="flex items-center gap-4">
            <a
              href="https://wa.me/5491153452005"
              target="_blank"
              rel="noopener noreferrer"
              className="w-10 h-10 rounded-full flex items-center justify-center transition-colors hover:bg-white/10"
              style={{ backgroundColor: `${colors.ocean}30` }}
            >
              <WhatsAppIcon className="w-5 h-5" />
            </a>
            <a
              href="https://www.instagram.com/_brian_bclio/"
              target="_blank"
              rel="noopener noreferrer"
              className="w-10 h-10 rounded-full flex items-center justify-center transition-colors hover:bg-white/10"
              style={{ backgroundColor: `${colors.ocean}30` }}
            >
              <InstagramIcon className="w-5 h-5" />
            </a>
          </div>
        </div>
        <div className="mt-10 pt-8 border-t border-gray-800 text-center text-sm text-gray-500">
          <p>&copy; {new Date().getFullYear()} PowerUp - Brian Perez. Todos los derechos reservados.</p>
        </div>
      </div>
    </footer>
  );
}

// Componente Principal
export default function App() {
  return (
    <div className="min-h-screen bg-white">
      <Header />
      <main>
        <Hero />
        <About />
        <Services />
        <Testimonials />
        <Contact />
      </main>
      <Footer />
    </div>
  );
}

