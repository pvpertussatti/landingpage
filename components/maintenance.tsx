"use client"

import { useState, useEffect } from "react"
import Image from "next/image"

export default function Maintenance() {
  const [currentNotebookImage, setCurrentNotebookImage] = useState(0)
  const [currentNetworkImage, setCurrentNetworkImage] = useState(0)

  const notebookImages = ["/notebook-maintenance.jpg", "/pc.jpeg"]
  const networkImages = ["/img-1.png", "/img-2.png"]

  useEffect(() => {
    const notebookInterval = setInterval(() => {
      setCurrentNotebookImage((prev) => (prev + 1) % notebookImages.length)
    }, 3000)

    const networkInterval = setInterval(() => {
      setCurrentNetworkImage((prev) => (prev + 1) % networkImages.length)
    }, 3000)

    return () => {
      clearInterval(notebookInterval)
      clearInterval(networkInterval)
    }
  }, [])

  return (
    <section className="py-10 md:py-12 px-4 sm:px-6 lg:px-8">
      <div className="max-w-6xl mx-auto space-y-12">
        {/* Seção de Manutenção de Notebook/Desktop */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <div className="space-y-6 order-2 lg:order-1">
            <h2 className="text-4xl md:text-5xl font-bold text-foreground">
              Precisa de manutenção no seu notebook ou desktop?
            </h2>
            <div className="space-y-4 text-muted-foreground">
              <p className="text-lg leading-relaxed">
                Realizamos atendimentos em domicílio, empresas e estabelecimentos comerciais,
                oferecendo <span className="font-semibold text-foreground">praticidade</span> e{" "}
                <span className="font-semibold text-foreground">agilidade</span> para você ou seu negócio.
              </p>
              <p className="text-lg leading-relaxed">
                Também contamos com um sistema de leva e traz para o nosso laboratório, onde utilizamos
                ferramentas profissionais e processos técnicos avançados para garantir a máxima eficiência
                do seu equipamento.
              </p>
              <ul className="space-y-2 mt-6">
                <li className="flex items-start gap-2">
                  <span className="text-accent mt-1">●</span>
                  <span>Diagnóstico Completo</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-accent mt-1">●</span>
                  <span>Higienização e Limpeza do Hardware</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-accent mt-1">●</span>
                  <span>Otimização Térmica</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-accent mt-1">●</span>
                  <span>Reparação Especializada</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-accent mt-1">●</span>
                  <span>Upgrade e Atualizações</span>
                </li>
              </ul>
            </div>
          </div>

          <div className="order-1 lg:order-2 relative h-[400px] lg:h-[500px] rounded-lg overflow-hidden">
            {notebookImages.map((image, index) => (
              <div
                key={index}
                className={`absolute inset-0 transition-opacity duration-1000 ${
                  currentNotebookImage === index ? "opacity-100" : "opacity-0"
                }`}
              >
                <Image
                  src={image}
                  alt={`Manutenção profissional de notebook ${index + 1}`}
                  fill
                  className="object-cover rounded-lg"
                />
              </div>
            ))}
          </div>
        </div>

        {/* Seção de Infraestrutura de Rede */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <div className="relative h-[400px] lg:h-[500px] rounded-lg overflow-hidden">
            {networkImages.map((image, index) => (
              <div
                key={index}
                className={`absolute inset-0 transition-opacity duration-1000 ${
                  currentNetworkImage === index ? "opacity-100" : "opacity-0"
                }`}
              >
                <Image
                  src={image}
                  alt={`Infraestrutura de Rede ${index + 1}`}
                  fill
                  className="object-cover rounded-lg"
                />
              </div>
            ))}
          </div>

          <div className="space-y-6">
            <h2 className="text-4xl md:text-5xl font-bold text-foreground">
              Necessita de suporte ou melhoria na infraestrutura de rede?
            </h2>
            <p className="text-lg text-muted-foreground leading-relaxed">
              Contamos com equipamentos adequados para a sua necessidade.
            </p>
            <ul className="space-y-2 mt-6 text-muted-foreground">
              <li className="flex items-start gap-2">
                <span className="text-accent mt-1">●</span>
                <span>Readequação e Reestruturação da Infraestrutura</span>
              </li>
              <li className="flex items-start gap-2">
                <span className="text-accent mt-1">●</span>
                <span>Mapeamento e Organização de Cabeamento</span>
              </li>
              <li className="flex items-start gap-2">
                <span className="text-accent mt-1">●</span>
                <span>Montagem e Manutenção de Racks</span>
              </li>
              <li className="flex items-start gap-2">
                <span className="text-accent mt-1">●</span>
                <span>Medições de Fibra Óptica e Rede LAN</span>
              </li>
              <li className="flex items-start gap-2">
                <span className="text-accent mt-1">●</span>
                <span>Testes de comprimento de cabo CAT5/CAT6</span>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </section>
  )
}
