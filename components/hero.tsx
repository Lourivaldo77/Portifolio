"use client"

import { motion } from "framer-motion"
import { ArrowRight, Mail, Github, Linkedin } from "lucide-react"
import Link from "next/link"

export default function Hero() {
  const textVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: (i: number) => ({
      opacity: 1,
      y: 0,
      transition: {
        delay: i * 0.1,
        duration: 0.8,
      },
    }),
  }

  return (
    <section className="min-h-screen flex items-center justify-center pt-20 px-6 relative overflow-hidden">
      {/* Background gradients */}
      <div className="absolute top-20 right-0 w-[500px] h-[500px] bg-primary/10 rounded-full blur-[120px] -z-10 animate-pulse" />
      <div className="absolute bottom-0 left-0 w-[500px] h-[500px] bg-secondary/10 rounded-full blur-[120px] -z-10 animate-pulse" />

      <div className="container mx-auto">
        <motion.div
          initial={{ opacity: 0, x: -50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8 }}
          className="max-w-2xl"
        >
          <motion.div
            className="flex items-center gap-2 mb-4"
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
          >
            <motion.span
              className="h-px w-8 bg-primary"
              animate={{ scaleX: [0, 1] }}
              transition={{ duration: 0.8, delay: 0.3 }}
            />
            <span className="text-primary font-mono font-medium tracking-wider text-sm">OLÁ, MEU NOME É</span>
          </motion.div>

          <h1 className="text-5xl md:text-7xl font-bold mb-6 leading-tight">
            <motion.span custom={0} variants={textVariants} initial="hidden" animate="visible" className="block">
              Lourivaldo
            </motion.span>
            <motion.span
              custom={1}
              variants={textVariants}
              initial="hidden"
              animate="visible"
              className="text-muted-foreground block"
            >
              Full Stack Developer.
            </motion.span>
          </h1>

          <motion.p
            className="text-lg md:text-xl text-muted-foreground mb-8 max-w-lg leading-relaxed"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
          >
            Construo interfaces modernas e experiências digitais eficientes. Transformo ideias complexas em código
            limpo, acessível e funcional.
          </motion.p>

          <motion.div
            className="flex flex-wrap gap-4 mb-12"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.6 }}
          >
            <Link
              href="#projetos"
              className="group bg-primary text-primary-foreground px-8 py-3.5 rounded-full font-medium flex items-center gap-2 hover:bg-primary/90 transition-all hover:scale-105 shadow-lg shadow-primary/25"
            >
              Ver Projetos
              <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
            </Link>
            <Link
              href="#contato"
              className="bg-transparent border border-white/20 text-foreground px-8 py-3.5 rounded-full font-medium hover:bg-white/5 transition-all hover:border-white/40"
            >
              Contactar
            </Link>
          </motion.div>

          <motion.div
            className="flex items-center gap-6 text-muted-foreground"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.8, delay: 0.8 }}
          >
            <motion.a
              href="https://github.com/Lourivaldo77"
              target="_blank"
              rel="noreferrer"
              className="hover:text-primary transition-colors"
              whileHover={{ y: -4, scale: 1.1 }}
              whileTap={{ scale: 0.95 }}
            >
              <Github className="w-6 h-6" />
              <span className="sr-only">GitHub</span>
            </motion.a>
            <motion.a
              href="https://www.linkedin.com/in/lourivaldo-gaspar-618927297"
              target="_blank"
              rel="noreferrer"
              className="hover:text-primary transition-colors"
              whileHover={{ y: -4, scale: 1.1 }}
              whileTap={{ scale: 0.95 }}
            >
              <Linkedin className="w-6 h-6" />
              <span className="sr-only">LinkedIn</span>
            </motion.a>
            <motion.a
              href="mailto:lourivaldogaspar4@gmail.com"
              className="hover:text-primary transition-colors"
              whileHover={{ y: -4, scale: 1.1 }}
              whileTap={{ scale: 0.95 }}
            >
              <Mail className="w-6 h-6" />
              <span className="sr-only">Email</span>
            </motion.a>
          </motion.div>
        </motion.div>
      </div>
    </section>
  )
}
