"use client"

import { useState } from "react"
import Image from "next/image"

const services = [
  {
    iconImage: "/informatica-e-microinformatica.png",
    label: "Informática e Microinformática",
    image: "/informática_1.png",
    intro: "Oferecemos atendimento em domicílio, escritórios, empresas e estabelecimentos comerciais, garantindo praticidade e agilidade para você e seu negócio. Além disso, disponibilizamos um serviço de leva e traz para o nosso laboratório, onde utilizamos ferramentas profissionais e processos técnicos avançados para assegurar o máximo desempenho e eficiência do seu equipamento.",
    items: [
      "Montagem de computadores e periféricos",
      "Manutenção preventiva e corretiva em desktop e notebooks",
      "Higienização e limpeza de hardware",
      "Upgrade e reparo de hardware",
      "Formatação e atualização de drivers e softwares",
      "Remoção de vírus, malwares e spywares",
      "Backup e recuperação de dados",
      "Análise e diagnóstico técnico",
      "Otimização térmica",
      "Suporte técnico remoto",
      "Monitoramento e manutenção periódica",
    ],
  },
  {
    iconImage: "/infra-rede.png",
    label: "Infraestrutura de Rede",
    image: "/cabeamento_1.jpg",
    intro: "Oferecemos soluções completas em infraestrutura de redes para domicílios, construtoras, empreiteiras, escritórios, empresas e estabelecimentos comerciais, garantindo conectividade estável, segura e de alto desempenho. Realizamos a implantação, organização, padronização de redes e cabeamento estruturado, seguindo as normas ABNT NBR 14565 e TIA-569.",
    items: [
      "Elaboração e execução de projetos de cabeamento estruturado e redes",
      "Passagem de cabos backbone vertical e horizontal",
      "Cabeamento estruturado e conectorização",
      "Identificação e verificação do cabeamento",
      "Readequação e reestruturação de redes",
      "Montagem de patch panels, keystones e crimpagem de cabos",
      "Expansão e migração de redes",
      "Testes e medições de porta (Port Flash)",
      "Mapeamento e organização de cabeamento",
      "Testes e medições de fibra óptica e redes LAN",
      "Verificação de comprimento e performance de cabos CAT5/CAT6",
    ],
  },
  {
    iconImage: "/pdv.png",
    label: "PDVs e Automação Comercial",
    image: "/pdv_1.jpg",
    intro: "Oferecemos soluções completas de informática para PDVs em lojas, garantindo o funcionamento eficiente, seguro e contínuo do seu sistema de vendas. Atuamos com automação comercial, manutenção preventiva e corretiva de hardware, além de suporte completo em software, assegurando que seu caixa opere sem interrupções.",
    items: [
      "Projetos e implantação de soluções para PDV e automação comercial",
      "Instalação e montagem de equipamentos (hardware)",
      "Instalação e configuração de periféricos",
      "Manutenção preventiva e corretiva",
      "Suporte técnico no local",
      "Gerenciamento de redes e conectividade",
      "Configuração de sistemas de vendas e ERP para o varejo",
    ],
  },
  {
    iconImage: "/cftv.png",
    label: "Segurança e CFTV",
    image: "/segurança_1.png",
    intro: "Oferecemos soluções completas em segurança eletrônica e sistemas de CFTV (Circuito Fechado de Televisão), incluindo o desenvolvimento e execução de projetos personalizados, garantindo o monitoramento contínuo e a proteção do seu patrimônio. Atuamos com instalação, configuração e manutenção de equipamentos, proporcionando mais controle, prevenção e tranquilidade para sua residência, comércio ou negócio.",
    items: [
      "Projetos e implantação de sistemas de CFTV e segurança eletrônica",
      "Instalação e configuração de câmeras de segurança (CFTV)",
      "Implantação de sistemas de monitoramento local e remoto",
      "Configuração de gravadores (DVR/HVR/NVR) e armazenamento de imagens",
      "Manutenção preventiva e corretiva dos equipamentos",
      "Manutenção de sistemas de CFTV (câmeras analógicas, HD e IP)",
      "Implantação de infraestrutura, redes dedicadas e cabeamento estruturado",
    ],
  },
  {
    iconImage: "/fieldservice.png",
    label: "Suporte Field Service",
    image: "/field_1.jpg",
    intro: "Oferecemos serviços de Field Service altamente especializados para empresas de tecnologia, com atendimento técnico em campo ágil, padronizado e eficiente. Atuamos como extensão da sua operação, garantindo qualidade no atendimento, cumprimento de SLA e suporte técnico diretamente no local do cliente.",
    items: [
      "Projetos e implantação de infraestrutura de TI em campo",
      "Projetos e integração de sistemas de automação industrial e eletrônica",
      "Instalação e configuração de equipamentos e dispositivos tecnológicos",
      "Instalação, manutenção e suporte em sistemas eletrônicos e de automação",
      "Atendimento técnico presencial (Field Service) conforme demanda ou contrato",
      "Manutenção preventiva e corretiva de hardware, redes e sistemas eletrônicos",
      "Suporte técnico para usuários finais (hands and eyes)",
      "Atendimento de chamados com SLA e relatórios técnicos",
      "Expansão, migração e readequação de ambientes tecnológicos",
      "Apoio a equipes remotas (NOC/Service Desk)",
      "Identificação e resolução de falhas em campo",
      "Documentação técnica e padronização de atendimentos",
    ],
  },
]

export default function Services() {
  const [active, setActive] = useState(0)
  const current = services[active]

  return (
    <section id="services" className="py-5 md:py-5 px-4 sm:px-6 lg:px-8">
      <div className="max-w-6xl mx-auto">
        {/* Header */}
        <div className="space-y-4 mb-12">
          <h2 className="text-5xl md:text-6xl font-bold text-foreground tracking-tight">
            Serviços
          </h2>
          <div className="w-16 h-1 bg-accent" />
          <p className="text-lg text-muted-foreground max-w-2xl">
            Soluções técnicas abrangentes, que demandam confiabilidade e performance.
          </p>
        </div>

        {/* Icon row */}
        <div className="flex justify-center gap-2 sm:gap-4 md:gap-8 lg:gap-12 mb-0">
          {services.map((service, index) => {
            const isActive = active === index
            return (
              <button
                key={index}
                onMouseEnter={() => setActive(index)}
                onClick={() => setActive(index)}
                className="flex flex-col items-center gap-2 md:gap-3 group focus:outline-none"
                style={{ flex: "0 0 auto" }}
              >
                <div
                  className="relative w-14 h-14 sm:w-20 sm:h-20 md:w-40 md:h-40 lg:w-48 lg:h-48 transition-all duration-300"
                  style={{
                    filter: isActive
                      ? "brightness(1.2) drop-shadow(0 0 10px hsl(var(--accent) / 0.6))"
                      : "brightness(0.7) grayscale(0.3)",
                    transform: isActive ? "scale(1.18) translateY(-4px)" : "scale(1)",
                  }}
                >
                  <Image
                    src={service.iconImage!}
                    alt={service.label}
                    fill
                    className="object-contain transition-all duration-300 group-hover:brightness-110"
                    sizes="192px"
                    style={{
                      filter: "none",
                      transform: isActive ? "none" : undefined,
                    }}
                  />
                </div>
                {/* Active indicator dot */}
                <div
                  className={`w-1 h-1 md:w-1.5 md:h-1.5 rounded-full transition-all duration-300 ${isActive ? "bg-accent scale-100 opacity-100" : "bg-transparent scale-0 opacity-0"}`}
                />
              </button>
            )
          })}
        </div>

        {/* Content panel */}
        <div
          key={active}
          className="mt-2 border border-border rounded-xl overflow-hidden bg-background"
          style={{ animation: "fadeSlideIn 0.28s ease forwards" }}
        >
          <div className="flex flex-col">
            {/* Image */}
            <div className="relative h-96 w-full overflow-hidden">
              <Image
                src={current.image}
                alt={current.label}
                fill
                className="object-cover transition-transform duration-500 hover:scale-105"
                sizes="100vw"
              />
              <div className="absolute inset-0 bg-gradient-to-b from-transparent to-background/70" />
            </div>

            {/* Text */}
            <div className="p-6 md:p-8 flex flex-col justify-start">
              <h3 className="text-2xl md:text-3xl font-bold text-foreground mb-3 leading-tight">
                {current.label}
              </h3>
              <p className="text-base md:text-lg text-muted-foreground mb-5 leading-relaxed text-justify">
                {current.intro}
              </p>
              <p className="text-xs font-semibold uppercase tracking-widest text-accent mb-3">
                Nossos serviços incluem
              </p>
              <ul className="space-y-1.5">
                {current.items.map((item, i) => (
                  <li key={i} className="flex items-start gap-2 text-sm md:text-base text-muted-foreground">
                    <span className="text-accent mt-0.5 shrink-0">–</span>
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </div>

      <style jsx>{`
        @keyframes fadeSlideIn {
          from {
            opacity: 0;
            transform: translateY(8px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }
      `}</style>
    </section>
  )
}
