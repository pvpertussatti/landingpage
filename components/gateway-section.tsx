"use client";

import Image from "next/image";
import { Cloud, TrendingUp, Shield, Headphones, GraduationCap, CheckCircle } from "lucide-react";

const vantagens = [
  {
    icon: Cloud,
    title: "100% EM NUVEM",
    description: "Acesse de qualquer lugar, a qualquer hora, com segurança e performance.",
  },
  {
    icon: TrendingUp,
    title: "GESTÃO COMPLETA",
    description: "Controle total do seu negócio em uma única plataforma.",
  },
  {
    icon: Shield,
    title: "CONFIANÇA E SEGURANÇA",
    description: "Dados protegidos com tecnologia de ponta e atualizações constantes.",
  },
];

const servicos = [
  {
    icon: Headphones,
    title: "SUPORTE 24 HORAS",
    description: "Atendimento com especialistas em tempo integral para garantir que sua operação nunca pare.",
  },
  {
    icon: GraduationCap,
    title: "TREINAMENTO GRATUITO",
    description: "Ensino à distância (EAD) para capacitar sua equipe e potencializar resultados.",
  },
];

const diferenciais = [
  "Frente de Caixa intuitivo e rápido",
  "Gestão de estoque em tempo real",
  "Relatórios gerenciais completos",
  "Integração com balanças e etiquetas",
  "Controle financeiro integrado",
  "Sistema de compras e fornecedores",
  "PDV touch screen otimizado",
  "Gestão de promoções e ofertas",
];

export default function GatewaySection() {
  return (
    <section className="py-20 px-4 sm:px-6 lg:px-8 bg-gradient-to-br from-slate-50 to-white">
      <div className="max-w-7xl mx-auto">
        {/* Header da Seção */}
        <div className="text-center mb-16">
          <div className="inline-block px-4 py-2 bg-accent/10 rounded-full mb-4">
            <span className="text-accent font-semibold text-sm">FRANQUEADO AUTORIZADO</span>
          </div>
          <h2 className="text-4xl md:text-5xl font-bold text-foreground mb-4">
            Soluções Gateway
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Como franqueado autorizado Gateway, oferecemos o mais completo sistema de gestão ERP
            para o varejo alimentar, com mais de 30 anos de experiência no mercado.
          </p>
        </div>

        {/* Imagem e Descrição Principal */}
        <div className="grid lg:grid-cols-2 gap-12 items-center mb-20">
          <div className="relative h-[400px] rounded-2xl overflow-hidden shadow-2xl">
            <Image
              src="/erp.jpeg"
              alt="Sistema Gateway ERP"
              fill
              className="object-cover"
            />
          </div>
          <div className="space-y-6">
            <h3 className="text-3xl font-bold text-foreground">
              O ERP que seu varejo precisa
            </h3>
            <p className="text-lg text-muted-foreground leading-relaxed">
              O Gateway é muito mais que um sistema. É uma plataforma completa que
              conecta todos os setores do seu negócio: vendas, estoque, financeiro,
              compras e relatórios gerenciais em tempo real.
            </p>
            <div className="grid grid-cols-2 gap-4">
              {diferenciais.map((item, index) => (
                <div key={index} className="flex items-start gap-2">
                  <CheckCircle className="text-accent flex-shrink-0 mt-1" size={20} />
                  <span className="text-sm text-muted-foreground">{item}</span>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Vantagens que Geram Resultados */}
        <div className="mb-16">
          <h3 className="text-3xl font-bold text-center text-foreground mb-12">
            Vantagens que Geram Resultados
          </h3>
          <div className="grid md:grid-cols-3 gap-6">
            {vantagens.map((item, index) => (
              <div
                key={index}
                className="bg-accent/5 border border-accent/10 rounded-2xl p-8 hover:shadow-lg transition-all group"
              >
                <div className="w-16 h-16 bg-accent/10 rounded-xl flex items-center justify-center mb-6 group-hover:bg-accent/20 transition-all">
                  <item.icon className="text-accent" size={32} />
                </div>
                <h4 className="text-xl font-bold text-foreground mb-3">{item.title}</h4>
                <p className="text-muted-foreground leading-relaxed">{item.description}</p>
              </div>
            ))}
          </div>
        </div>

        {/* Serviços que Fazem a Diferença */}
        <div className="bg-gradient-to-br from-slate-900 to-slate-800 rounded-3xl p-12 text-white">
          <h3 className="text-3xl font-bold text-center mb-12">
            Serviços que Fazem a Diferença
          </h3>
          <div className="grid md:grid-cols-2 gap-8 max-w-4xl mx-auto">
            {servicos.map((item, index) => (
              <div key={index} className="flex gap-6 items-start">
                <div className="w-16 h-16 bg-accent rounded-xl flex items-center justify-center flex-shrink-0">
                  <item.icon size={32} />
                </div>
                <div>
                  <h4 className="text-xl font-bold mb-3">{item.title}</h4>
                  <p className="text-slate-300 leading-relaxed">{item.description}</p>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* CTA Final */}
        <div className="text-center mt-16">
          <p className="text-lg text-muted-foreground mb-6">
            Quer modernizar a gestão do seu varejo?
          </p>
          <a
            href="#contact"
            className="inline-flex items-center gap-2 px-8 py-4 bg-accent text-white rounded-full font-semibold hover:opacity-90 transition-all shadow-lg"
          >
            Solicitar Demonstração
          </a>
        </div>
      </div>
    </section>
  );
}
