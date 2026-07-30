"use client";

import Link from "next/link";
import { ArrowRight, Calendar, MapPin, Handshake, Users } from "lucide-react";
import { useState, useEffect } from "react";
import Image from "next/image";

const techImages = [
  { src: "/1.webp", alt: "Notebook" },
  { src: "/2.jpg", alt: "Computador" },
  { src: "/3.jpg", alt: "Servidor" },
];

export default function Hero() {
  const [showGetway, setShowGetway] = useState(false);
  const [currentTechImage, setCurrentTechImage] = useState(0);

  useEffect(() => {
    // Alterna entre hero tech e hero Getway
    // Ambos ficam 20s
    const heroInterval = setInterval(() => {
      setShowGetway((prev) => !prev);
    }, 20000);

    return () => clearInterval(heroInterval);
  }, [showGetway]);

  useEffect(() => {
    // Carrossel das imagens tech (só quando não está mostrando Getway)
    if (!showGetway) {
      const imageInterval = setInterval(() => {
        setCurrentTechImage((prev) => (prev + 1) % techImages.length);
      }, 3000);

      return () => clearInterval(imageInterval);
    }
  }, [showGetway]);

  return (
    <section className="relative pt-2 pb-2 md:pt-3 md:pb-3 px-4 sm:px-6 lg:px-8 overflow-hidden bg-gradient-to-br from-slate-50 to-slate-100">
      <div className="max-w-7xl mx-auto relative">
        {/* HERO SUPORTE TÉCNICO */}
        <div
          className={`grid lg:grid-cols-2 gap-12 items-center min-h-[600px] transition-all duration-1000 ease-in-out ${
            showGetway
              ? "opacity-0 scale-95 absolute inset-0 pointer-events-none"
              : "opacity-100 scale-100"
          }`}
        >
          {/* Lado Esquerdo - Texto */}
          <div className="space-y-8 animate-fade-in-up">
            <h1 className="text-5xl md:text-6xl lg:text-7xl font-bold text-foreground leading-tight">
              Suporte técnico <br />
              <span className="text-accent">onde você estiver.</span>
            </h1>

            <p className="text-lg md:text-xl text-muted-foreground max-w-xl leading-relaxed">
              Especialista em soluções técnicas. Manutenções preventivas e
              corretivas, infraestrutura crítica e suporte técnico. Garantimos
              máxima performance para seu negócio.
            </p>

            <div className="flex flex-col sm:flex-row gap-4 pt-4">
              <Link
                href={"#contact"}
                className="px-8 py-3 bg-accent text-white rounded-full font-semibold hover:opacity-90 transition-all flex items-center justify-center gap-2 shadow-lg"
              >
                Solicitar serviço <ArrowRight size={18} />
              </Link>
            </div>
          </div>

          {/* Lado Direito - Carrossel de Imagens */}
          <div className="relative h-[400px] md:h-[500px] lg:h-[600px] flex items-center justify-center">
            <div className="relative w-full h-full max-w-lg mx-auto">
              {techImages.map((image, index) => {
                const position = (index - currentTechImage + techImages.length) % techImages.length;
                const isActive = position === 0;

                let mobileClasses = isActive
                  ? "opacity-100 scale-100 z-30"
                  : "opacity-0 scale-95 z-10 pointer-events-none";

                let desktopClasses = "";
                if (position === 0) {
                  desktopClasses = "md:opacity-100 md:scale-100 md:z-30 md:translate-x-0";
                } else if (position === 1) {
                  desktopClasses = "md:opacity-40 md:scale-90 md:z-20 md:translate-x-[60%] md:pointer-events-none";
                } else {
                  desktopClasses = "md:opacity-20 md:scale-80 md:z-10 md:-translate-x-[60%] md:pointer-events-none";
                }

                return (
                  <div
                    key={image.src}
                    className={`absolute inset-0 transition-all duration-700 ease-in-out ${mobileClasses} ${desktopClasses}`}
                  >
                    <div className="relative w-full h-full rounded-3xl overflow-hidden shadow-2xl">
                      <Image
                        src={image.src}
                        alt={image.alt}
                        fill
                        className="object-cover"
                        priority={index === 0}
                      />
                    </div>
                  </div>
                );
              })}
            </div>
          </div>
        </div>

        {/* HERO GETWAY */}
        <div
          className={`grid lg:grid-cols-2 gap-12 items-center min-h-[600px] transition-all duration-1000 ease-in-out ${
            showGetway
              ? "opacity-100 scale-100"
              : "opacity-0 scale-95 absolute inset-0 pointer-events-none"
          }`}
        >
          {/* Lado Esquerdo - Texto */}
          <div className="space-y-8 animate-fade-in-up max-w-2xl">
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-foreground leading-tight">
              Tecnologia que conecta <br />
              <span className="text-accent">gestão que transforma.</span>
            </h1>

            <p className="text-lg md:text-xl text-muted-foreground max-w-xl leading-relaxed">
              Getway Automação Comercial é uma empresa brasileira fundada em 1990 e especializada no desenvolvimento de software de gestão (ERP) para o{" "}
              <span className="text-accent font-semibold">varejo alimentar.</span>
            </p>

          </div>

          {/* Lado Direito - Imagem Getway */}
          <div className="relative h-[400px] md:h-[500px] lg:h-[600px] flex items-start justify-center lg:justify-end pt-8">
            <div className="relative w-full h-[120%] lg:w-[130%] lg:-mr-32 animate-float">
              <Image
                src="/solucoes-getway.png"
                alt="Getway"
                fill
                className="object-contain drop-shadow-2xl"
                priority
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
