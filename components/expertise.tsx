"use client"

export default function Expertise() {
  return (
    <section className="py-20 md:py-32 px-4 sm:px-6 lg:px-8 bg-muted/30">
      <div className="max-w-6xl mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
          {/* Imagem */}
          <div className="order-2 md:order-1">
            <div className="rounded-lg overflow-hidden shadow-lg">
              <img
                src="/notebook-maintenance.jpg"
                alt="Manutenção profissional de notebook"
                className="w-full h-full object-cover"
              />
            </div>
          </div>

          {/* Conteúdo */}
          <div className="order-1 md:order-2 space-y-6">
            <div>
              <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
                Manutenção Profissional de Notebooks
              </h2>
              <p className="text-lg text-muted-foreground leading-relaxed">
                Serviço especializado em diagnóstico, limpeza e reparação de componentes. Trabalho com precisão e
                ferramentas profissionais para garantir máxima performance do seu equipamento.
              </p>
            </div>

            <div className="space-y-4">
              <div className="flex items-start gap-3">
                <div className="w-2 h-2 rounded-full bg-accent mt-2 flex-shrink-0" />
                <div>
                  <h3 className="font-semibold text-foreground">Diagnóstico Completo</h3>
                  <p className="text-sm text-muted-foreground">Análise detalhada de hardware e software</p>
                </div>
              </div>
              <div className="flex items-start gap-3">
                <div className="w-2 h-2 rounded-full bg-accent mt-2 flex-shrink-0" />
                <div>
                  <h3 className="font-semibold text-foreground">Limpeza Profissional</h3>
                  <p className="text-sm text-muted-foreground">Remoção de poeira e otimização térmica</p>
                </div>
              </div>
              <div className="flex items-start gap-3">
                <div className="w-2 h-2 rounded-full bg-accent mt-2 flex-shrink-0" />
                <div>
                  <h3 className="font-semibold text-foreground">Reparação Especializada</h3>
                  <p className="text-sm text-muted-foreground">Troca de componentes com garantia</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
