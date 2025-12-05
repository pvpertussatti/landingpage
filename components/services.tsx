import { Server, Zap, Lock, Cpu, Network, BarChart3 } from "lucide-react"

const services = [
  {
    icon: Cpu,
    title: "Informática e Microinformática",
    description: ["- Manutenções Preventivas ou Corretivas", "- Atualização de drivers e Software", "- Upgrade e Reparo de Hardware", "- Análises e Diagnósticos", "- Suporte Técnico"],
    highlight: "Testes rigorosos",
  },
  {
    icon: Network,
    title: "Infraestrutura de Rede",
    description: ["- Cabeamento Estruturado e Conectorização", "- Identificação e Verificação do Cabeamento", "- Readequação e Reestruturação", "- Expansão e Migração de Rede", "- Medições e teste Port Flash"],
    highlight: "Performance máxima",
  },
  {
    icon: Server,
    title: "Servidores e Rack Server",
    description: ["- Montagem, Organização e Manutenções", "- Upgrade e Migração de Tecnologia", "- Medições de Fibra Óptica e Rede LAN", "- Testes de comprimento de cabo CAT5/CAT6", "- Testes de Porta PoE"],
    highlight: "Disponibilidade garantida",
  },
  // {
  //   icon: Lock,
  //   title: "Backup & Recuperação",
  //   description: ["Soluções seguras com redundância e proteção de dados"],
  //   highlight: "Segurança em primeiro lugar",
  // },
  {
    icon: Zap,
    title: "PDVs e Automação Comercial",
    description: ["- Instalações e Atualizações", "- Manutenções no Hardware e Periféricos","- Migração ou Atualização de Software"],
    highlight: "Eficiência operacional",
  },
  {
    icon: BarChart3,
    title: "Suporte Field Service",
    description: ["Atendimentos Técnicos Especializado", "- Comunicação Eficaz e Empatia ao Cliente", "- Resolução de Problemas e Adaptabilidade"],
    highlight: "Resposta imediata",
  },
]

export default function Services() {
  return (
    <section id="services" className="py-10 md:py-12 px-4 sm:px-6 lg:px-8">
      <div className="max-w-6xl mx-auto">
        <div className="space-y-4 mb-16">
          <h2 className="text-5xl md:text-6xl font-bold text-foreground tracking-tight">
            Serviços
          </h2>

          <div className="w-16 h-1 bg-accent"></div>
          <p className="text-lg text-muted-foreground max-w-2xl">
            Soluções técnicas abrangentes, que demandam confiabilidade e performance. 
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {services.map((service, index) => {
            const Icon = service.icon
            return (
              <div key={index} className="relative group">
                <div className="absolute inset-0 bg-gradient-to-br from-accent/20 to-accent/5 rounded-lg opacity-0 group-hover:opacity-100 transition duration-300" />
                <div className="relative p-6 border border-border rounded-lg hover:border-accent/50 transition duration-300 h-full flex flex-col bg-background">
                  <div className="w-14 h-14 rounded-lg bg-accent/10 flex items-center justify-center mb-4 group-hover:bg-accent/20 transition">
                    <Icon size={28} className="text-accent" />
                  </div>
                  <h3 className="text-xl font-semibold text-foreground mb-2">{service.title}</h3>
                  {service.description.map((d, i) => {
                    return (
                      <p key={`d-${i}`} className="text-muted-foreground text-sm leading-relaxed flex-grow">
                        {
                          d
                        }
                      </p>
                    )
                  })}
                  <div className="mt-4 pt-4 border-t border-border/50">
                    <p className="text-accent text-xs font-semibold uppercase tracking-wide">{service.highlight}</p>
                  </div>
                </div>
              </div>
            )
          })}
        </div>
      </div>
    </section>
  )
}
