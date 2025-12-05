export default function About() {
  return (
    <section id="about" className="py-5 px-4 lg:px-8 bg-background">
      <div className="max-w-6xl mx-auto">
        <div className="grid md:grid-cols-1 gap-12 items-center">
          <div className="space-y-6">
            <div className="space-y-4">
              <h2 className="text-5xl md:text-6xl font-bold text-foreground tracking-tight">
                Sobre <span className="text-accent">nós</span>
              </h2>

              <div className="w-16 h-1 bg-accent"></div>

              <div className="space-y-8 text-lg md:text-xl text-muted-foreground leading-relaxed">
                <p className="text-justify">
                  Na PROPV, nossa missão é atender às necessidades dos clientes
                  com qualidade, agilidade e eficiência. Oferecemos atendimento
                  técnico presencial e soluções completas em tecnologia, onde
                  quer que você esteja — em casa, no escritório ou na sua
                  empresa. Com experiência prática e conhecimento técnico
                  especializado, atuamos com informática e microinformática,
                  hardware, infraestrutura, redes, servidores e automação.
                  Garantindo resultados rápidos, confiáveis e sob medida. Nosso
                  compromisso é proporcionar um atendimento humano, próximo e
                  profissional.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
