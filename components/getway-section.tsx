"use client";

import Image from "next/image";

export default function GetwaySection() {
  return (
    <section id="getway" className="py-12 md:py-16 px-4 sm:px-6 lg:px-8 bg-white">
      <div className="max-w-7xl mx-auto">
        <a
          href="https://getway.com.br"
          target="_blank"
          rel="noopener noreferrer"
          className="block relative w-full rounded-2xl overflow-hidden shadow-xl hover:shadow-2xl transition-all duration-300 group cursor-pointer"
        >
          <Image
            src="/banner.jpeg"
            alt="Getway Automação Comercial - Franqueado Autorizado"
            width={1920}
            height={600}
            className="w-full h-auto object-contain group-hover:scale-105 transition-transform duration-500"
            priority
          />
        </a>
      </div>
    </section>
  );
}
