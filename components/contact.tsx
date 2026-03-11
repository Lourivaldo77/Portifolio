"use client"

import { useState } from "react"
import { motion } from "framer-motion"
import { Send, Github, Linkedin, Mail, CheckCircle, AlertCircle } from "lucide-react"

export default function Contact() {
  const [formData, setFormData] = useState({ name: "", email: "", subject: "", message: "" })
  const [status, setStatus] = useState<"idle" | "success" | "error">("idle")
  const [message, setMessage] = useState("")

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { id, value } = e.target
    setFormData((prev) => ({ ...prev, [id]: value }))
  }

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    
    // For GitHub Pages, use mailto link since there's no server-side code
    const subject = encodeURIComponent(formData.subject)
    const body = encodeURIComponent(`Nome: ${formData.name}\nEmail: ${formData.email}\n\nMensagem:\n${formData.message}`)
    const mailtoLink = `mailto:lourivaldogaspar4@gmail.com?subject=${subject}&body=${body}`
    
    window.location.href = mailtoLink
    setStatus("success")
    setMessage("O seu cliente de email deve abrir para enviar a mensagem!")
    setFormData({ name: "", email: "", subject: "", message: "" })
    setTimeout(() => setStatus("idle"), 5000)
  }

  return (
    <section id="contato" className="py-24 bg-gradient-to-b from-background to-card/50">
      <div className="container mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          className="max-w-4xl mx-auto text-center"
        >
          <h2 className="text-4xl md:text-5xl font-bold mb-6">Entre em Contato</h2>
          <p className="text-muted-foreground text-lg mb-12 max-w-xl mx-auto">
            Estou sempre aberto a novas oportunidades e parcerias. Seja para discutir um projeto, uma vaga ou apenas dar
            um oi, minha caixa de entrada está sempre aberta!
          </p>

          <div className="grid md:grid-cols-2 gap-12 text-left bg-card p-8 md:p-12 rounded-2xl border border-white/5 shadow-2xl">
            <div>
              <h3 className="text-2xl font-bold mb-6 flex items-center gap-2">
                Vamos conversar! <span className="animate-pulse">👋</span>
              </h3>
              <p className="text-muted-foreground mb-8">
                Preencha o formulário ao lado ou envie um e-mail diretamente. Tento responder a todas as mensagens em
                até 24 horas.
              </p>

              <div className="space-y-4">
                <a
                  href="mailto:lourivaldogaspar4@gmail.com"
                  className="flex items-center gap-3 text-muted-foreground hover:text-primary transition-colors p-3 hover:bg-white/5 rounded-lg"
                >
                  <div className="bg-primary/10 p-2 rounded-md">
                    <Mail className="w-5 h-5 text-primary" />
                  </div>
                  <span>lourivaldogaspar4@gmail.com</span>
                </a>
                <a
                  href="https://linkedin.com"
                  target="_blank"
                  rel="noreferrer"
                  className="flex items-center gap-3 text-muted-foreground hover:text-primary transition-colors p-3 hover:bg-white/5 rounded-lg"
                >
                  <div className="bg-primary/10 p-2 rounded-md">
                    <Linkedin className="w-5 h-5 text-primary" />
                  </div>
                  <span>Lourivaldo</span>
                </a>
                <a
                  href="https://github.com/Lourivaldo77"
                  target="_blank"
                  rel="noreferrer"
                  className="flex items-center gap-3 text-muted-foreground hover:text-primary transition-colors p-3 hover:bg-white/5 rounded-lg"
                >
                  <div className="bg-primary/10 p-2 rounded-md">
                    <Github className="w-5 h-5 text-primary" />
                  </div>
                  <span>Lourivaldo77</span>
                </a>
              </div>
            </div>

            <form onSubmit={handleSubmit} className="space-y-4">
              <div className="grid grid-cols-2 gap-4">
                <div className="space-y-2">
                  <label htmlFor="name" className="text-sm font-medium">
                    Nome
                  </label>
                  <input
                    id="name"
                    type="text"
                    placeholder="Seu nome"
                    value={formData.name}
                    onChange={handleChange}
                    required
                    className="w-full bg-background border border-border rounded-md px-4 py-3 focus:outline-none focus:ring-2 focus:ring-primary/50 transition-all"
                  />
                </div>
                <div className="space-y-2">
                  <label htmlFor="email" className="text-sm font-medium">
                    Email
                  </label>
                  <input
                    id="email"
                    type="email"
                    placeholder="Seu email"
                    value={formData.email}
                    onChange={handleChange}
                    required
                    className="w-full bg-background border border-border rounded-md px-4 py-3 focus:outline-none focus:ring-2 focus:ring-primary/50 transition-all"
                  />
                </div>
              </div>

              <div className="space-y-2">
                <label htmlFor="subject" className="text-sm font-medium">
                  Assunto
                </label>
                <input
                  id="subject"
                  type="text"
                  placeholder="Sobre o que vamos falar?"
                  value={formData.subject}
                  onChange={handleChange}
                  required
                  className="w-full bg-background border border-border rounded-md px-4 py-3 focus:outline-none focus:ring-2 focus:ring-primary/50 transition-all"
                />
              </div>

              <div className="space-y-2">
                <label htmlFor="message" className="text-sm font-medium">
                  Mensagem
                </label>
                <textarea
                  id="message"
                  rows={4}
                  placeholder="Sua mensagem..."
                  value={formData.message}
                  onChange={handleChange}
                  required
                  className="w-full bg-background border border-border rounded-md px-4 py-3 focus:outline-none focus:ring-2 focus:ring-primary/50 transition-all resize-none"
                ></textarea>
              </div>

              {status === "success" && (
                <motion.div
                  initial={{ opacity: 0, y: -10 }}
                  animate={{ opacity: 1, y: 0 }}
                  className="bg-green-500/10 border border-green-500/30 rounded-md p-3 flex items-center gap-2 text-green-400"
                >
                  <CheckCircle className="w-5 h-5" />
                  <span>{message}</span>
                </motion.div>
              )}

              {status === "error" && (
                <motion.div
                  initial={{ opacity: 0, y: -10 }}
                  animate={{ opacity: 1, y: 0 }}
                  className="bg-red-500/10 border border-red-500/30 rounded-md p-3 flex items-center gap-2 text-red-400"
                >
                  <AlertCircle className="w-5 h-5" />
                  <span>{message}</span>
                </motion.div>
              )}

              <button
                type="submit"
                className="w-full bg-primary text-primary-foreground font-medium py-3 rounded-md hover:bg-primary/90 transition-colors flex items-center justify-center gap-2 mt-4 shadow-lg shadow-primary/20"
              >
                Enviar Mensagem
                <Send className="w-4 h-4" />
              </button>
            </form>
          </div>
        </motion.div>
      </div>
    </section>
  )
}
