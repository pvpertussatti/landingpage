"use client";

import Image from "next/image";
import { CheckCircle2, Cloud, BarChart3, Shield, Headphones } from "lucide-react";

export default function GetwaySection() {
  return (
    <section id="getway" className="py-20 px-4 sm:px-6 lg:px-8 bg-white">
      <div className="max-w-7xl mx-auto">
        {/* Header */}
        <div className="text-center mb-16">
          <span className="inline-block px-4 py-2 bg-accent/10 rounded-full text-accent font-semibold text-sm mb-4">
            FRANQUEADO AUTORIZADO
          </span>
          <h2 className="text-4xl md:text-5xl font-bold text-foreground mb-4">
            Getway Automação Comercial
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Sistema ERP completo para gestão do varejo alimentar, com mais de 30 anos de experiência e 1.600+ clientes em todo Brasil.
          </p>
        </div>

        {/* Imagem Principal + Texto */}
        <div className="grid lg:grid-cols-2 gap-16 items-center mb-20">
          <div className="relative aspect-[4/3] rounded-2xl overflow-hidden shadow-xl">
            <Image
              src="/erp.jpeg"
              alt="Sistema Getway ERP"
              fill
              className="object-cover"
            />
          </div>

          <div className="space-y-6">
            <h3 className="text-3xl font-bold text-foreground">
              O ERP completo para seu varejo
            </h3>
            <p className="text-lg text-muted-foreground">
              Plataforma integrada que conecta vendas, estoque, financeiro e gestão em tempo real.
              Desenvolvido especialmente para supermercados, mercearias e varejo alimentar.
            </p>

            <div className="space-y-3">
              {[
                "Frente de Caixa otimizado para alta performance",
                "Gestão de estoque e compras em tempo real",
                "Controle financeiro completo e integrado",
                "Relatórios gerenciais detalhados",
                "Integração com balanças, etiquetas e PDV",
                "Gestão de promoções e ofertas",
              ].map((item, i) => (
                <div key={i} className="flex items-start gap-3">
                  <CheckCircle2 className="text-accent flex-shrink-0 mt-1" size={20} />
                  <span className="text-muted-foreground">{item}</span>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Cards de Benefícios - Estilo mais limpo */}
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 mb-16">
          {[
            {
              icon: Cloud,
              title: "100% Nuvem",
              desc: "Acesse de qualquer lugar",
            },
            {
              icon: BarChart3,
              title: "Gestão Completa",
              desc: "Tudo em uma plataforma",
            },
            {
              icon: Shield,
              title: "Segurança",
              desc: "Dados protegidos",
            },
            {
              icon: Headphones,
              title: "Suporte 24h",
              desc: "Atendimento integral",
            },
          ].map((item, i) => (
            <div key={i} className="group p-6 rounded-xl border border-slate-200 hover:border-accent/30 hover:shadow-lg transition-all">
              <div className="w-12 h-12 bg-accent/10 rounded-lg flex items-center justify-center mb-4 group-hover:bg-accent/20 transition-colors">
                <item.icon className="text-accent" size={24} />
              </div>
              <h4 className="font-bold text-foreground mb-2">{item.title}</h4>
              <p className="text-sm text-muted-foreground">{item.desc}</p>
            </div>
          ))}
        </div>

        {/* CTA */}
        <div className="text-center bg-gradient-to-br from-slate-900 to-slate-800 rounded-2xl p-12">
          <h3 className="text-3xl font-bold text-white mb-4">
            Quer modernizar a gestão do seu varejo?
          </h3>
          <p className="text-slate-300 mb-8 text-lg">
            Entre em contato e conheça as soluções Getway
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
