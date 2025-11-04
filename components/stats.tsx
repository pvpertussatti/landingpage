export default function Stats() {
  const stats = [
    { label: "Anos de Experiência", value: "15+" },
    { label: "Profissionais Certificados", value: "20+" },
    { label: "Atendimentos Mensais", value: "200+" },
  ]

  return (
    <section className="py-20 md:py-32 px-4 sm:px-6 lg:px-8">
      <div className="max-w-6xl mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {stats.map((stat, index) => (
            <div key={index} className="space-y-2">
              <p className="text-4xl md:text-5xl font-bold text-accent">{stat.value}</p>
              <p className="text-muted-foreground font-medium">{stat.label}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
