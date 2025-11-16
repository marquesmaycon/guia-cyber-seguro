import { ArrowUpRight } from "lucide-react"

import { Button } from "../ui/button"
import { Separator } from "../ui/separator"
import { VectorBg } from "../ui/vector-bg"

const socialLinks = [
  {
    name: "LinkedIn",
    url: "https://www.linkedin.com/in/mayconhenrique/"
  },
  {
    name: "GitHub",
    url: "https://github.com/marquesmaycon"
  },
  {
    name: "Portfólio",
    url: "https://www.mklly.com.br/"
  }
]

export default function Footer() {
  return (
    <footer className="relative mt-40 flex flex-col">
      <VectorBg vector="1" position="right" className="-top-65 right-0" />

      <div className="bg-pallete-primary/5 flex-1 px-4 py-12 text-white backdrop-blur-md">
        <div className="text-center font-mono">
          <p className="text-balance">
            Guia desenvolvido durante o projeto de extensão curricular do aluno <b>Maycon Silva</b> do curso de{" "}
            <b>Análise e Desenvolvimento de Sistemas</b> do{" "}
            <a href="https://unicv.edu.br/" target="_blank" rel="noopener noreferrer" className="underline">
              Centro Universitário Cidade Verde
            </a>
            .
          </p>
        </div>
        <Separator className="bg-pallete-secondary/20 my-8" />
        <div className="z-0 flex flex-col items-center gap-8 text-center md:flex-row md:items-center md:justify-between">
          <h6>Desenvolvido por Maycon Marques © {new Date().getFullYear()}</h6>
          <div className="flex items-center justify-between">
            {socialLinks.map((link) => (
              <Button asChild key={link.name} variant="link" className="text-sm">
                <a
                  key={link.name}
                  href={link.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="hover:underline"
                >
                  {link.name} <ArrowUpRight />
                </a>
              </Button>
            ))}
          </div>
        </div>
      </div>
    </footer>
  )
}
