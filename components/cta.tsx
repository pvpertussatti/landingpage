"use client"

import { useState } from "react"

import type React from "react"
import { ArrowRight, MessageCircle } from "lucide-react"

export default function CTA() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    company: "",
    message: "",
  })

  const [submitted, setSubmitted] = useState(false)
  const [loading, setLoading] = useState(false)
  const [error, setError] = useState<string | null>(null)

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }))
  }

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setLoading(true)
    setError(null)

    try {
      const response = await fetch("/api/contact", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(formData),
      })

      if (!response.ok) {
        throw new Error("Erro ao enviar formulário")
      }

      setSubmitted(true)
      setTimeout(() => {
        setFormData({ name: "", email: "", company: "", message: "" })
        setSubmitted(false)
      }, 3000)
    } catch (err) {
      setError(err instanceof Error ? err.message : "Erro desconhecido")
    } finally {
      setLoading(false)
    }
  }

  return (
    <section id="contact" className="py-20 md:py-32 px-4 sm:px-6 lg:px-8 bg-foreground text-background">
      <div className="max-w-5xl mx-auto">
        <div className="grid md:grid-cols-2 gap-12 items-start">
          <div className="space-y-8">
            <div>
              <h2 className="text-4xl md:text-5xl font-bold mb-4">Pronto para otimizar sua infraestrutura?</h2>
              <p className="text-lg text-muted opacity-90">
                Entre em contato e receba um diagnóstico personalizado para sua empresa
              </p>
            </div>

            <div className="space-y-4">
              <div>
                <h3 className="font-semibold mb-2">Informações</h3>
                <ul className="space-y-2 text-sm text-muted opacity-90">
                  <li>Email: contato@propv.com.br</li>
                  <li>Localização: Barreiros, SC - Brasil</li>
                </ul>
              </div>
            </div>

            <a
              href="https://wa.me/554891197994"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-3 px-8 py-3 bg-accent text-accent-foreground rounded-full font-semibold hover:opacity-90 transition"
            >
              <MessageCircle size={20} />
              Fale comigo no WhatsApp
            </a>
          </div>

          <form onSubmit={handleSubmit} className="space-y-4">
            <div>
              <label className="block text-sm font-medium mb-2">Nome</label>
              <input
                type="text"
                name="name"
                value={formData.name}
                onChange={handleChange}
                disabled={loading}
                required
                placeholder="Seu nome"
                className="w-full px-4 py-2 bg-background/10 border border-background/20 rounded-lg text-background placeholder-muted focus:outline-none focus:border-accent transition disabled:opacity-50"
              />
            </div>

            <div>
              <label className="block text-sm font-medium mb-2">Email</label>
              <input
                type="email"
                name="email"
                value={formData.email}
                onChange={handleChange}
                disabled={loading}
                required
                placeholder="seu@email.com"
                className="w-full px-4 py-2 bg-background/10 border border-background/20 rounded-lg text-background placeholder-muted focus:outline-none focus:border-accent transition disabled:opacity-50"
              />
            </div>

            <div>
              <label className="block text-sm font-medium mb-2">Empresa</label>
              <input
                type="text"
                name="company"
                value={formData.company}
                onChange={handleChange}
                disabled={loading}
                placeholder="Sua empresa"
                className="w-full px-4 py-2 bg-background/10 border border-background/20 rounded-lg text-background placeholder-muted focus:outline-none focus:border-accent transition disabled:opacity-50"
              />
            </div>

            <div>
              <label className="block text-sm font-medium mb-2">Mensagem</label>
              <textarea
                name="message"
                value={formData.message}
                onChange={handleChange}
                disabled={loading}
                required
                placeholder="Descreva sua necessidade..."
                rows={4}
                className="w-full px-4 py-2 bg-background/10 border border-background/20 rounded-lg text-background placeholder-muted focus:outline-none focus:border-accent transition resize-none disabled:opacity-50"
              />
            </div>

            {error && (
              <div className="p-3 bg-red-500/20 border border-red-500/30 rounded-lg text-red-200 text-sm">{error}</div>
            )}

            <button
              type="submit"
              disabled={loading || submitted}
              className="w-full px-8 py-3 bg-accent text-accent-foreground rounded-full font-semibold hover:opacity-90 transition flex items-center justify-center gap-2 disabled:opacity-50"
            >
              {submitted ? "Mensagem Enviada!" : loading ? "Enviando..." : "Solicitar Atendimento"}
              {!submitted && !loading && <ArrowRight size={18} />}
            </button>
          </form>
        </div>
      </div>
    </section>
  )
}
