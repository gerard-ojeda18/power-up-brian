"use client";

import { useState, useEffect } from "react";
import Preloader from "@/components/preloader";
import Header from "@/components/header";
import Hero from "@/components/hero";
import About from "@/components/about";
import Services from "@/components/services";
import Testimonials from "@/components/testimonials";
import Contact from "@/components/contact";
import Footer from "@/components/footer";
import WhatsAppButton from "@/components/whatsapp-button";

export default function Home() {
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => {
      setIsLoading(false);
    }, 2500);

    return () => clearTimeout(timer);
  }, []);

  if (isLoading) {
    return <Preloader />;
  }

  return (
    <div className="min-h-screen bg-background text-foreground">
      <Header />
      <main>
        <Hero />
        <About />
        <Services />
        <Testimonials />
        <Contact />
      </main>
      <Footer />
      <WhatsAppButton />
    </div>
  );
}
