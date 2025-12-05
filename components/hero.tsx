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
    }, 5000);

    return () => clearInterval(interval);
  }, []);

  return (
    <section className="relative pt-24 pb-32 md:pt-32 md:pb-40 px-4 sm:px-6 lg:px-8 overflow-hidden min-h-[600px] md:min-h-[700px] flex item-center">
      <div className="absolute inset-0 z-0">
        {images.map((image, index) => (
          <div
            key={image.src}
            className={`absolute inset-0 transition-opacity duration-1000 ${
              index === currentImage ? "opacity-100" : "opacity-0"
            }`}
          >
            <Image
              src={image.src}
              alt={image.alt}
              fill
              className="object-cover"
              priority={index === 0}
            />
          </div>
        ))}
      </div>

      <div className="absolute inset-0 bg-gradient-to-br from-slate-900/75 via-slate-900/75 to-red-900/60 z-10" />

      <div className="max-4xl mx-auto relative z-20">
        <div className="space-y-8">
          <div className="space-y-1/4">
            <h1 className="py-10 text-5xl md:-text-6xl lg:text-7xl font-bold text-white leading-ti-fate-in-up">
              Suporte técnico <br />
              <span className="text-red-400">onde você estiver.</span>
            </h1>

            <p className="text-lg text-justify md:text-xl text-slate-200 max-w-2xl leading-relaxed animate-fade-in-up">
              Especialista em soluções técnicas. Manutenções preventivas e
              corretivas, infraestrutura crítica e suporte técnico. Garantimos
              máxima performance para seu negócio. ”
            </p>

            <div className="flex flex-col sm:flex-row gap-4 animate-fade-in-up pt-4">
              <Link
                href={"#contact"}
                className="px-8 py-3 bg-red-500 text-white rounded-full font-semibold transition-all flex items-center justify-center gap-2 shadow-lg "
              >
                Solicitar serviço <ArrowRight size={18} />
              </Link>
            </div>
          </div>
        </div>
      </div>

      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 z-20 flex gap-2">
        {images.map((_, index) => (
          <button
            key={index}
            onClick={() => setCurrentImage(index)}
            className={`w-2 h-2 rounded-full transition-all ${
              index === currentImage
                ? "bg-red-400 w-8"
                : "bg-white/50 hover:bg-white/70"
            }`}
            aria-label={`Ir para imagem ${index + 1}`}
          />
        ))}
      </div>
    </section>
  );
}
