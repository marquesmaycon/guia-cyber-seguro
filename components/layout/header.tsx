import { Button } from "../ui/button"
import { MobileMenu } from "./mobile-menu"
import { SectionsMenu } from "./sections-menu"

// const menuLinks = [{ label: "Início", href: "#hero" }, { label: "Seções" }, { label: "Contato", href: "#about" }]

export default function Header() {
  return (
    <header className="fixed top-0 left-1/2 z-10 w-full max-w-7xl -translate-x-1/2">
      <div className="flex items-center justify-center px-4 py-2 sm:justify-end">
        <nav className="w-full sm:w-auto">
          <ul className="bg-palette-primary/10 m-0 flex items-center gap-8 rounded-full p-4 backdrop-blur-3xl [&>:not(.mobile)]:hidden sm:[&>:not(.mobile)]:inline-flex">
            <h4 className="text-palette-accent mobile font-bold">
              <span className="text-white">Guia </span>Cyber Seguro
            </h4>
            <Button variant="outline" size="lg" asChild className="rounded-full border-transparent shadow-none">
              <a href="#hero">Início</a>
            </Button>
            <SectionsMenu />
            <Button variant="outline" size="lg" asChild className="rounded-full border-transparent shadow-none">
              <a href="#about">Sobre</a>
            </Button>
            <MobileMenu />
          </ul>
        </nav>
      </div>
    </header>
  )
}
