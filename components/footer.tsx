"use client";

import Image from "next/image";
import Link from "next/link";
import { MessageCircle, MapPin } from "lucide-react";

function InstagramIcon({ className }: { className?: string }) {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
      className={className}
    >
      <rect width="20" height="20" x="2" y="2" rx="5" ry="5" />
      <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z" />
      <line x1="17.5" x2="17.51" y1="6.5" y2="6.5" />
    </svg>
  );
}

const navLinks = [
  { href: "#inicio", label: "Inicio" },
  { href: "#sobre-mi", label: "Sobre Mi" },
  { href: "#servicios", label: "Servicios" },
  { href: "#testimonios", label: "Testimonios" },
  { href: "#contacto", label: "Contacto" },
];

const socialLinks = [
  {
    href: "https://wa.me/5491153452005",
    icon: MessageCircle,
    label: "WhatsApp",
  },
  {
    href: "https://www.instagram.com/_brian_bclio/",
    icon: InstagramIcon,
    label: "Instagram",
  },
];

export default function Footer() {
  return (
    <footer className="border-t border-border bg-card py-12">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="grid gap-8 md:grid-cols-3">
          {/* Brand */}
          <div className="flex flex-col items-center md:items-start">
            <Link href="#inicio" className="mb-4">
              <Image
                src="/power-up.jpg"
                alt="PowerUp Logo"
                width={80}
                height={80}
                className="rounded-lg"
              />
            </Link>
            <p className="text-center text-sm text-muted-foreground md:text-left">
              Mejorando Juntos. Entrenamiento personalizado para alcanzar tus
              metas.
            </p>
          </div>

          {/* Navigation */}
          <div className="flex flex-col items-center">
            <h3 className="mb-4 font-semibold text-foreground">Navegacion</h3>
            <nav className="flex flex-wrap justify-center gap-x-6 gap-y-2">
              {navLinks.map((link) => (
                <Link
                  key={link.href}
                  href={link.href}
                  className="text-sm text-muted-foreground transition-colors hover:text-foreground"
                >
                  {link.label}
                </Link>
              ))}
            </nav>
          </div>

          {/* Contact & Social */}
          <div className="flex flex-col items-center md:items-end">
            <h3 className="mb-4 font-semibold text-foreground">Contacto</h3>
            <div className="mb-4 flex items-center gap-4">
              {socialLinks.map((social) => (
                <a
                  key={social.label}
                  href={social.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex h-10 w-10 items-center justify-center rounded-full bg-secondary text-muted-foreground transition-all hover:bg-primary hover:text-primary-foreground"
                  aria-label={social.label}
                >
                  <social.icon className="h-5 w-5" />
                </a>
              ))}
            </div>
            <div className="flex items-center gap-2 text-sm text-muted-foreground">
              <MapPin className="h-4 w-4" />
              <span>Buenos Aires, Argentina</span>
            </div>
          </div>
        </div>

        {/* Copyright */}
        <div className="mt-10 border-t border-border pt-8 text-center">
          <p className="text-sm text-muted-foreground">
            &copy; {new Date().getFullYear()} PowerUp - Brian Perez. Todos los
            derechos reservados.
          </p>
        </div>
      </div>
    </footer>
  );
}
