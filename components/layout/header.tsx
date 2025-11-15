import { ThemeSwitcher } from "../theme-switcher"

export default function Header() {
  return (
    <header className="fixed top-0 z-10 w-full max-w-7xl left-1/2 transform -translate-x-1/2 shadow-md bg-background rounded-b-2xl">
      <div className="flex items-center justify-between py-2 h-header-height px-4">
        <h4>Guia Cyber Seguro</h4>
        <ThemeSwitcher />
      </div>
    </header>
  )
}
