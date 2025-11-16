import { Conclusion } from "@/components/sections/conclusion"
import { DigitalOrganization } from "@/components/sections/digital-organization"
import { DownloadAndSoftwares } from "@/components/sections/download-and-softwares"
import { Hero } from "@/components/sections/hero"
import { Introduction } from "@/components/sections/introduction"
import { PersonalDataProtection } from "@/components/sections/personal-data-protection"
import { References } from "@/components/sections/references"
import { ScamAndFraudes } from "@/components/sections/scams-and-fraudes"
import { SupportChannels } from "@/components/sections/support-channels"
import { Welcome } from "@/components/sections/welcome"

export default function Home() {
  return (
    <>
      <Hero />
      <Welcome />
      <Introduction />
      <PersonalDataProtection />
      <ScamAndFraudes />
      <DownloadAndSoftwares />
      <DigitalOrganization />
      <SupportChannels />
      <Conclusion />
      <References />
    </>
  )
}
