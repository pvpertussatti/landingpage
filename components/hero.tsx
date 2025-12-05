"use client";

import Link from "next/link";
import { ArrowRight } from "lucide-react";
import { useState, useEffect } from "react";
import Image from "next/image";

const images = [
  { src: "/1.webp", alt: "Notebook" },
  { src: "/2.jpg", alt: "Computador" },
  { src: "/3.jpg", alt: "Servidor" },
];

export default function Hero() {
  const [currentImage, setCurrentImage] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentImage((prev) => (prev + 1) % images.length);
    }, 4000);

    return () => clearInterval(interval);
  }, []);

  return (
    <section className="relative pt-24 pb-20 md:pt-32 md:pb-32 px-4 sm:px-6 lg:px-8 overflow-hidden bg-gradient-to-br from-slate-50 to-slate-100">
      <div className="max-w-7xl mx-auto">
        <div className="grid lg:grid-cols-2 gap-12 items-center min-h-[600px]">
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
          <div className="relative h-[500px] lg:h-[600px] flex items-center justify-center">
            <div className="relative w-full h-full max-w-lg mx-auto">
              {images.map((image, index) => {
                const position = (index - currentImage + images.length) % images.length;

                return (
                  <div
                    key={image.src}
                    className={`absolute inset-0 transition-all duration-700 ease-in-out ${
                      position === 0
                        ? "opacity-100 scale-100 z-30 translate-x-0"
                        : position === 1
                        ? "opacity-40 scale-90 z-20 translate-x-[60%]"
                        : "opacity-20 scale-80 z-10 -translate-x-[60%]"
                    }`}
                  >
                    <div className="relative w-full h-full rounded-3xl overflow-hidden shadow-2xl bg-white p-3">
                      <div className="relative w-full h-full rounded-2xl overflow-hidden">
                        <Image
                          src={image.src}
                          alt={image.alt}
                          fill
                          className="object-cover"
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
