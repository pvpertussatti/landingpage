import Link from "next/link"
import { ArrowRight } from "lucide-react"

export default function Hero() {
  return (
    <section className="pt-20 pb-16 md:pt-32 md:pb-24 px-4 sm:px-6 lg:px-8 bg-gradient-to-b from-slate-50 to-background">
      <div className="max-w-4xl mx-auto">
        <div className="space-y-8">
          <div className="space-y-6">
            <div className="inline-block">
              <span className="px-4 py-1.5 bg-accent/10 text-accent text-sm font-medium rounded-full">
                Soluções Técnicas Confiáveis
              </span>
            </div>

            <h1 className="text-5xl md:text-6xl lg:text-7xl font-bold text-foreground leading-tight">
              Infraestrutura<span className="text-accent">.</span> <br />
              Otimizada
            </h1>

            <p className="text-lg md:text-xl text-muted-foreground max-w-2xl leading-relaxed">
              Especialistas em soluções técnicas completas. De manutenção preventiva a infraestrutura crítica,
              garantimos máxima performance para seu negócio.
            </p>
          </div>

          <div className="flex flex-col sm:flex-row gap-4">
            <Link
              href="#contact"
              className="px-8 py-3 bg-accent text-accent-foreground rounded-full font-semibold hover:opacity-90 transition flex items-center justify-center gap-2"
            >
              Solicitar Diagnóstico
              <ArrowRight size={18} />
            </Link>
            <Link
              href="#services"
              className="px-8 py-3 border border-border rounded-full font-semibold hover:bg-muted transition"
            >
              Nossos Serviços
            </Link>
          </div>

          <div className="pt-12">
            <div className="space-y-1">
              <p className="text-3xl md:text-4xl font-bold text-accent">500+</p>
              <p className="text-sm text-muted-foreground">Clientes Atendidos</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
