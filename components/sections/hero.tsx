import Image from "next/image"

import { Button } from "../ui/button"
import { VectorBg } from "../ui/vector-bg"

export const Hero = () => {
  return (
    <section className="pt-header-height relative flex items-center justify-between px-4" id="hero">
      <VectorBg vector="1" position="left" className="-top-60" />
      <div className="space-y-6 text-white">
        <h1 className="text-start font-sans text-5xl text-pretty md:text-7xl lg:text-8xl">
          Guia <br /> Cyber Seguro
        </h1>
        <p className="max-w-lg text-pretty">
          Lorem, ipsum dolor sit amet consectetur adipisicing elit. Dolores, eveniet, voluptate voluptatibus aut maiores
          recusandae eum quam, nisi ea incidunt totam. Laudantium quam inventore amet iure labore, repudiandae ea?
          Laboriosam.
        </p>
        <Button size="lg" variant="gradient">
          HERO BUTTON
        </Button>
      </div>
      <div className="hidden md:block">
        <Image src="/shield.png" alt="Shield" width={530} height={400} className="object-contain" />
      </div>
    </section>
  )
}
