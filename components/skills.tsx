"use client"

import { motion } from "framer-motion"
import { FileCode2, Palette, Database, Layout, GitBranch, Globe, Terminal, Layers } from "lucide-react"

export default function Skills() {
  const skills = [
    { name: "HTML5", icon: <Globe className="w-8 h-8 text-orange-500" /> },
    { name: "CSS", icon: <Palette className="w-8 h-8 text-blue-500" /> },
    { name: "Tailwind CSS", icon: <div className="text-cyan-400 font-bold text-xl">TW</div> },
    { name: "React", icon: <div className="text-cyan-400 font-bold text-2xl">⚛️</div> },
    { name: "Node.js", icon: <Database className="w-8 h-8 text-green-500" /> },
    { name: "PHP", icon: <FileCode2 className="w-8 h-8 text-indigo-500" /> },
    { name: "Next.js", icon: <div className="text-white font-bold text-xl">N</div> },
    { name: "WordPress", icon: <Layout className="w-8 h-8 text-blue-400" /> },
    { name: "MySQL", icon: <Database className="w-8 h-8 text-blue-500" /> },
    { name: "Git & GitHub", icon: <GitBranch className="w-8 h-8 text-red-500" /> },
  ]

  const container = {
    hidden: { opacity: 0 },
    show: {
      opacity: 1,
      transition: {
        staggerChildren: 0.05,
      },
    },
  }

  const item = {
    hidden: { opacity: 0, y: 20, scale: 0.8 },
    show: {
      opacity: 1,
      y: 0,
      scale: 1,
      transition: {
        type: "spring" as const,
        stiffness: 100,
        damping: 10,
      },
    },
  }

  return (
    <section id="skills" className="py-24 bg-card/30 relative overflow-hidden">
      <div className="absolute top-0 right-0 w-96 h-96 bg-primary/5 rounded-full blur-[100px] -z-10 animate-pulse" />

      <div className="container mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="max-w-4xl mx-auto"
        >
          <div className="flex items-center gap-2 mb-12">
            <h2 className="text-3xl md:text-4xl font-bold">Tecnologias & Ferramentas</h2>
            <motion.span
              className="h-px bg-white/20 flex-grow max-w-xs ml-4"
              animate={{ scaleX: [0, 1] }}
              transition={{ duration: 0.8, delay: 0.2 }}
            />
          </div>

          <motion.div
            variants={container}
            initial="hidden"
            whileInView="show"
            viewport={{ once: true }}
            className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-6 gap-6"
          >
            {skills.map((skill, index) => (
              <motion.div
                key={index}
                variants={item}
                whileHover={{
                  y: -8,
                  scale: 1.05,
                  backgroundColor: "rgba(59, 130, 246, 0.08)",
                  boxShadow: "0 0 30px rgba(59, 130, 246, 0.2)",
                }}
                className="bg-card border border-white/5 p-6 rounded-xl flex flex-col items-center justify-center gap-4 transition-all cursor-pointer group shadow-lg"
              >
                <motion.div
                  className="p-3 bg-background rounded-full group-hover:scale-110 transition-transform duration-300 border border-white/5"
                  whileHover={{ rotate: 10 }}
                >
                  {skill.icon}
                </motion.div>
                <span className="text-sm font-medium text-muted-foreground group-hover:text-primary transition-colors">
                  {skill.name}
                </span>
              </motion.div>
            ))}
          </motion.div>
        </motion.div>
      </div>
    </section>
  )
}
