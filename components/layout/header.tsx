import { Button } from "../ui/button"
import { MobileMenu } from "./mobile-menu"
import { SummaryMenu } from "./summary-menu"

export function Header() {
  return (
    <header className="fixed top-0 left-1/2 z-10 w-full max-w-7xl -translate-x-1/2">
      <div className="flex items-center justify-center px-4 py-2 sm:justify-end">
        <nav className="w-full sm:w-auto">
          <ul className="bg-palette-secondary/5 m-0 flex list-none items-center gap-8 rounded-full p-4 backdrop-blur-3xl [&>:not(.mobile)]:hidden sm:[&>:not(.mobile)]:inline-flex">
            <li className="mobile">
              <h4 className="text-palette-accent font-bold">
                <span className="text-white">Guia </span>Cyber Seguro
              </h4>
            </li>

            <li>
              <Button variant="outline" size="lg" asChild className="rounded-full border-transparent shadow-none">
                <a href="#hero">Início</a>
              </Button>
            </li>

            <li>
              <SummaryMenu />
            </li>

            <li>
              <Button variant="outline" size="lg" asChild className="rounded-full border-transparent shadow-none">
                <a href="#about">Sobre</a>
              </Button>
            </li>

            <li className="mobile ml-auto">
              <MobileMenu />
            </li>
          </ul>
        </nav>
      </div>
    </header>
  )
}
