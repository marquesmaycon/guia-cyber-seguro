import { Hero } from "@/components/sections/hero"
import { Introduction } from "@/components/sections/introduction"
import { PersonalDataProtection } from "@/components/sections/personal-data-protection"
import { Welcome } from "@/components/sections/welcome"

export default function Home() {
  return (
    <>
      <Hero />
      <Welcome />
      <Introduction />
      <PersonalDataProtection />
    </>
  )
}
