"use client"

import { motion } from "framer-motion"
import { Code, Layout, Smartphone, Zap } from "lucide-react"

export default function About() {
  const features = [
    {
      icon: <Code className="w-6 h-6 text-primary" />,
      title: "Clean Code",
      description: "Código limpo, organizado e escalável em front-end e back-end.",
    },
    {
      icon: <Layout className="w-6 h-6 text-secondary" />,
      title: "Full Stack",
      description: "Desenvolvimento completo: React + Node.js + Databases.",
    },
    {
      icon: <Zap className="w-6 h-6 text-yellow-400" />,
      title: "Performance",
      description: "Otimização em todas as camadas: front-end, API e banco de dados.",
    },
    {
      icon: <Smartphone className="w-6 h-6 text-green-400" />,
      title: "Escalabilidade",
      description: "Arquitetura preparada para crescimento e manutenção a longo prazo.",
    },
  ]

  const cardVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: (i: number) => ({
      opacity: 1,
      y: 0,
      transition: {
        delay: i * 0.1,
        duration: 0.6,
      },
    }),
  }

  return (
    <section id="sobre" className="py-24 bg-background relative">
      <div className="container mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="max-w-4xl mx-auto"
        >
          <div className="flex items-center gap-2 mb-8">
            <h2 className="text-3xl md:text-4xl font-bold">Sobre Mim</h2>
            <motion.span
              className="h-px bg-white/20 flex-grow max-w-xs ml-4"
              animate={{ scaleX: [0, 1] }}
              transition={{ duration: 0.8, delay: 0.2 }}
            />
          </div>

          <div className="grid md:grid-cols-5 gap-12">
            <div className="md:col-span-3 space-y-6 text-muted-foreground leading-relaxed">
              <p>
                Olá! Meu nome é <strong className="text-foreground text-primary">Lourivaldo</strong> e sou um
                desenvolvedor Full Stack apaixonado por criar soluções web completas. Meu interesse em desenvolvimento
                começou quando decidi criar minhas primeiras aplicações e descobri o poder de transformar ideias em
                realidade através do código.
              </p>
              <p>
                Atualmente, sou focado em construir produtos robustos, escaláveis e acessíveis com as melhores práticas
                do mercado. Tenho experiência em diversos projetos, desde landing pages até aplicações web complexas,
                trabalhando tanto no front-end quanto no back-end.
              </p>
              <p>
                Meu foco principal é dominar a stack completa com{" "}
                <strong className="text-foreground">React</strong>, <strong className="text-foreground">Next.js</strong>
                {" "}no front-end e <strong className="text-foreground">Node.js</strong> no back-end para entregar
                soluções end-to-end de alta qualidade.
              </p>

              <div className="pt-4">
                <h3 className="text-foreground font-semibold mb-4">Stacks & Competências</h3>
                <ul className="grid grid-cols-2 gap-2 text-sm">
                  <li className="flex items-center gap-2">
                    <span className="text-secondary">▹</span> Front-end Moderno
                  </li>
                  <li className="flex items-center gap-2">
                    <span className="text-secondary">▹</span> Back-end Robusto
                  </li>
                  <li className="flex items-center gap-2">
                    <span className="text-secondary">▹</span> Databases & APIs
                  </li>
                  <li className="flex items-center gap-2">
                    <span className="text-secondary">▹</span> DevOps & Deployment
                  </li>
                </ul>
              </div>
            </div>

            <div className="md:col-span-2 grid grid-cols-1 gap-4">
              {features.map((feature, index) => (
                <motion.div
                  key={index}
                  custom={index}
                  variants={cardVariants}
                  initial="hidden"
                  whileInView="visible"
                  viewport={{ once: true }}
                  whileHover={{
                    y: -5,
                    boxShadow: "0 20px 25px -5px rgba(59, 130, 246, 0.1)",
                  }}
                  className="bg-card border border-white/5 p-4 rounded-lg hover:border-primary/30 transition-all group cursor-pointer"
                >
                  <motion.div
                    className="mb-3 p-2 bg-white/5 w-fit rounded-md group-hover:bg-primary/10 transition-colors"
                    whileHover={{ scale: 1.1, rotate: 5 }}
                  >
                    {feature.icon}
                  </motion.div>
                  <h4 className="font-bold mb-1">{feature.title}</h4>
                  <p className="text-xs text-muted-foreground">{feature.description}</p>
                </motion.div>
              ))}
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  )
}
