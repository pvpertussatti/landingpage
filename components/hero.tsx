"use client";

import Link from "next/link";
import { ArrowRight, Calendar, MapPin, Handshake, Users } from "lucide-react";
import { useState, useEffect } from "react";
import Image from "next/image";

const images = [
  { src: "/1.webp", alt: "Notebook", type: "standard" },
  { src: "/2.jpg", alt: "Computador", type: "standard" },
  { src: "/3.jpg", alt: "Servidor", type: "standard" },
  { src: "/solucoes-getway.png", alt: "Gateway", type: "gateway" },
];

const gatewayBadges = [
  { icon: Calendar, label: "DESDE 1990", subtitle: "Tradição e inovação no varejo." },
  { icon: MapPin, label: "CAMPINAS - SP", subtitle: "São Paulo. Atuação nacional." },
  { icon: Handshake, label: "+ DE 1.600", subtitle: "Clientes ativos em todo o Brasil." },
  { icon: Users, label: "FOCO NO VAREJO", subtitle: "Alimentar, supermercados e conveniência." },
];

export default function Hero() {
  const [currentImage, setCurrentImage] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentImage((prev) => (prev + 1) % images.length);
    }, 4000);

    return () => clearInterval(interval);
  }, []);

  const isGateway = images[currentImage].type === "gateway";

  return (
    <section className="relative pt-2 pb-2 md:pt-3 md:pb-3 px-4 sm:px-6 lg:px-8 overflow-hidden bg-gradient-to-br from-slate-50 to-slate-100">
      <div className="max-w-7xl mx-auto">
        <div className="grid lg:grid-cols-2 gap-12 items-center min-h-[600px]">
          {/* Lado Esquerdo - Texto */}
          <div className="space-y-8 animate-fade-in-up">
            <h1 className="text-5xl md:text-6xl lg:text-7xl font-bold text-foreground leading-tight">
              {isGateway ? (
                <>
                  Tecnologia que conecta <br />
                  <span className="text-accent">gestão que transforma.</span>
                </>
              ) : (
                <>
                  Suporte técnico <br />
                  <span className="text-accent">onde você estiver.</span>
                </>
              )}
            </h1>

            <p className="text-lg md:text-xl text-muted-foreground max-w-xl leading-relaxed">
              {isGateway ? (
                <>
                  Gateway Automação Comercial é uma empresa brasileira fundada em 1990 e especializada no desenvolvimento de software de gestão (ERP) para o{" "}
                  <span className="text-accent font-semibold">varejo alimentar.</span>
                </>
              ) : (
                <>
                  Especialista em soluções técnicas. Manutenções preventivas e
                  corretivas, infraestrutura crítica e suporte técnico. Garantimos
                  máxima performance para seu negócio.
                </>
              )}
            </p>

            {isGateway && (
              <div className="grid grid-cols-2 gap-4 pt-4">
                {gatewayBadges.map((badge, index) => (
                  <div key={index} className="flex gap-3 items-start">
                    <div className="flex-shrink-0 w-12 h-12 rounded-lg bg-accent/10 flex items-center justify-center">
                      <badge.icon className="text-accent" size={24} />
                    </div>
                    <div>
                      <p className="font-bold text-sm text-foreground">{badge.label}</p>
                      <p className="text-xs text-muted-foreground leading-tight">{badge.subtitle}</p>
                    </div>
                  </div>
                ))}
              </div>
            )}

            {!isGateway && (
              <div className="flex flex-col sm:flex-row gap-4 pt-4">
                <Link
                  href={"#contact"}
                  className="px-8 py-3 bg-accent text-white rounded-full font-semibold hover:opacity-90 transition-all flex items-center justify-center gap-2 shadow-lg"
                >
                  Solicitar serviço <ArrowRight size={18} />
                </Link>
              </div>
            )}
          </div>

          {/* Lado Direito - Carrossel de Imagens */}
          <div className="relative h-[400px] md:h-[500px] lg:h-[600px] flex items-center justify-center">
            <div className="relative w-full h-full max-w-lg mx-auto">
              {images.map((image, index) => {
                const position = (index - currentImage + images.length) % images.length;
                const isActive = position === 0;
                const isGatewayImage = image.type === "gateway";

                // Mobile: apenas fade simples
                let mobileClasses = isActive
                  ? "opacity-100 scale-100 z-30"
                  : "opacity-0 scale-95 z-10 pointer-events-none";

                // Desktop: efeito 3D com múltiplas imagens
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
                      <div className="relative w-full h-full rounded-2xl overflow-hidden bg-white">
                        <Image
                          src={image.src}
                          alt={image.alt}
                          fill
                          className={isGatewayImage ? "object-contain p-8" : "object-cover"}
                          priority={index === 0}
                        />
                      </div>
                    </div>
                  </div>
                );
              })}
            </div>

            {/* Indicadores */}
            <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 z-40 flex gap-2">
              {images.map((_, index) => (
                <button
                  key={index}
                  onClick={() => setCurrentImage(index)}
                  className={`h-2 rounded-full transition-all ${
                    index === currentImage
                      ? "bg-accent w-8"
                      : "bg-slate-300 w-2 hover:bg-slate-400"
                  }`}
                  aria-label={`Ir para imagem ${index + 1}`}
                />
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
