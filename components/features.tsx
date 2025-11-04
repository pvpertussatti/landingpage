import { CheckCircle2 } from "lucide-react"

const features = [
  "Especialista com certificações técnicas internacionais",
  "Suporte preventivo para evitar interrupções críticas",
  "Atendimento rápido e solução eficaz de problemas",
  "Conformidade com normas técnicas aplicáveis",
  "Tecnologia de diagnóstico avançada",
  "Soluções sob medida para sua necessidade",
]

export default function Features() {
  return (
    <section id="features" className="py-20 md:py-32 px-4 sm:px-6 lg:px-8 bg-accent/5">
      <div className="max-w-6xl mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <div className="space-y-6">
            <h2 className="text-4xl md:text-5xl font-bold text-foreground">Por que me escolher</h2>
            <p className="text-lg text-muted-foreground">
              Sou especialista em transformar desafios técnicos em soluções robustas e eficientes
            </p>
          </div>

          <div className="space-y-4">
            {features.map((feature, index) => (
              <div key={index} className="flex items-start gap-3">
                <CheckCircle2 size={20} className="text-accent mt-0.5 flex-shrink-0" />
                <p className="text-foreground font-medium">{feature}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
