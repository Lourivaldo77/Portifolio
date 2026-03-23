"use client"

import { motion } from "framer-motion"
import { Github, ExternalLink, Folder, Loader2 } from "lucide-react"
import Image from "next/image"
import Link from "next/link"
import { useEffect, useState } from "react"

interface GitHubRepo {
  id: number
  name: string
  description: string | null
  html_url: string
  homepage: string | null
  language: string | null
  topics: string[]
  default_branch: string
}

function ProjectImage({ src, alt }: { src: string; alt: string }) {
  const [imgSrc, setImgSrc] = useState(src)

  return (
    <Image
      src={imgSrc}
      alt={alt}
      fill
      className="object-cover group-hover:scale-110 transition-transform duration-500"
      onError={() => setImgSrc("/placeholder.svg")}
    />
  )
}

export default function Projects() {
  const [projects, setProjects] = useState<any[]>([])
  const [loading, setLoading] = useState(true)

  // ⬇️ ADICIONE AQUI os links ou nomes dos repositórios que você quer exibir
  // Exemplo: ["https://github.com/Lourivaldo77/meu-projeto", "outro-projeto"]
  // Se deixar vazio [], ele mostrará os 6 últimos atualizados automaticamente.
  const selectedRepos: string[] = ["Site_Turismo_Tokio", "Nike-website-Replica-", "Reservas_de_hoteis"]

  useEffect(() => {
    const fetchProjects = async () => {
      try {
        let data: GitHubRepo[] = []

        if (selectedRepos.length > 0) {
          const promises = selectedRepos.map(async (repo) => {
            // Extrai o nome do repositório caso seja um link completo
            const repoName = repo.includes("/") ? repo.replace(/\/$/, "").split("/").pop() : repo
            const res = await fetch(`https://api.github.com/repos/Lourivaldo77/${repoName}`)
            if (!res.ok) return null
            return res.json()
          })
          const results = await Promise.all(promises)
          data = results.filter((item): item is GitHubRepo => item !== null)
        } else {
          const response = await fetch(
            "https://api.github.com/users/Lourivaldo77/repos?sort=updated&direction=desc&per_page=6"
          )
          if (!response.ok) throw new Error("Failed to fetch projects")
          data = await response.json()
        }

        const formattedProjects = data.map((repo) => {
          let imageUrl = `https://raw.githubusercontent.com/Lourivaldo77/${repo.name}/${repo.default_branch}/cover.png`
          
          if (repo.name === "Site_Turismo_Tokio") {
            imageUrl = "/tokyo-tourism.png"
          } else if (repo.name === "Nike-website-Replica-") {
            imageUrl = "/nike-replica.png"
          } else if (repo.name === "Reservas_de_hoteis") {
            imageUrl = "/hotel-reservations-v2.png"
          }

          return {
            title: repo.name.replace(/-/g, " ").replace(/_/g, " "),
            description: repo.description || "Projeto desenvolvido com tecnologias modernas.",
            tech: [repo.language, ...(repo.topics || [])].filter((item): item is string => !!item),
            image: imageUrl,
            github: repo.name === "Reservas_de_hoteis" ? "https://github.com/Lourivaldo77/Reservas_de_hoteis" : repo.html_url,
            demo: repo.name === "Reservas_de_hoteis" ? "https://reservas-de-hoteis.vercel.app/" : (repo.homepage || repo.html_url),
          }
        })

        setProjects(formattedProjects)
      } catch (error) {
        console.error("Error fetching projects:", error)
      } finally {
        setLoading(false)
      }
    }

    fetchProjects()
  }, [])

  const cardVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: (i: number) => ({
      opacity: 1,
      y: 0,
      transition: {
        delay: i * 0.15,
        duration: 0.6,
      },
    }),
  }

  return (
    <section id="projetos" className="py-24 bg-background relative">
      <div className="absolute bottom-0 left-0 w-96 h-96 bg-secondary/5 rounded-full blur-[100px] -z-10 animate-pulse" />

      <div className="container mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="max-w-6xl mx-auto"
        >
          <div className="flex items-center gap-2 mb-12">
            <h2 className="text-3xl md:text-4xl font-bold">Projetos em Destaque</h2>
            <motion.span
              className="h-px bg-white/20 flex-grow max-w-xs ml-4"
              animate={{ scaleX: [0, 1] }}
              transition={{ duration: 0.8, delay: 0.2 }}
            />
          </div>

          {loading ? (
            <div className="flex justify-center items-center h-64">
              <Loader2 className="w-10 h-10 animate-spin text-primary" />
            </div>
          ) : (
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {projects.map((project, index) => (
              <motion.div
                key={index}
                custom={index}
                variants={cardVariants}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true }}
                whileHover={{
                  y: -12,
                  boxShadow: "0 30px 40px -10px rgba(59, 130, 246, 0.15)",
                }}
                className="bg-card rounded-xl overflow-hidden border border-white/5 hover:border-primary/50 transition-all duration-300 shadow-xl flex flex-col group"
              >
                <div className="relative h-48 w-full overflow-hidden">
                  <motion.div
                    className="absolute inset-0 bg-primary/20 group-hover:bg-transparent transition-colors z-10 duration-300"
                    initial={{ opacity: 0.3 }}
                    whileHover={{ opacity: 0 }}
                  />
                  <ProjectImage src={project.image} alt={project.title} />
                </div>

                <div className="p-6 flex flex-col flex-grow">
                  <motion.div
                    className="flex justify-between items-center mb-4"
                    initial={{ opacity: 0, y: 10 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                  >
                    <motion.div whileHover={{ scale: 1.2, rotate: 5 }}>
                      <Folder className="w-10 h-10 text-primary" />
                    </motion.div>
                    <div className="flex gap-4">
                      <motion.div whileHover={{ scale: 1.2, y: -3 }} whileTap={{ scale: 0.9 }}>
                        <Link
                          href={project.github}
                          className="text-muted-foreground hover:text-primary transition-colors"
                        >
                          <Github className="w-5 h-5" />
                        </Link>
                      </motion.div>
                      <motion.div whileHover={{ scale: 1.2, y: -3 }} whileTap={{ scale: 0.9 }}>
                        <Link
                          href={project.demo}
                          className="text-muted-foreground hover:text-primary transition-colors"
                        >
                          <ExternalLink className="w-5 h-5" />
                        </Link>
                      </motion.div>
                    </div>
                  </motion.div>

                  <h3 className="text-xl font-bold mb-2 group-hover:text-primary transition-colors">{project.title}</h3>
                  <p className="text-muted-foreground text-sm mb-6 flex-grow">{project.description}</p>

                  <ul className="flex flex-wrap gap-x-4 gap-y-2 text-xs font-mono text-secondary">
                    {project.tech.map((t: string, i: number) => (
                      <li key={i}>{t}</li>
                    ))}
                  </ul>
                </div>
              </motion.div>
            ))}
          </div>
          )}

          <motion.div
            className="mt-16 text-center"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
              <Link
                href="https://github.com/Lourivaldo77"
                className="inline-flex items-center gap-2 border border-primary text-primary px-8 py-4 rounded-md hover:bg-primary/10 transition-colors font-mono"
              >
                Ver Mais no GitHub
              </Link>
            </motion.div>
          </motion.div>
        </motion.div>
      </div>
    </section>
  )
}
