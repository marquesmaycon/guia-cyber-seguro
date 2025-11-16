import Image from "next/image"

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
          A internet conecta você ao mundo, mas navegar exige atenção. Aprenda, de forma simples e passo a passo, como
          proteger seus dados pessoais, criar senhas fortes e identificar os golpes e fraudes mais comuns para que você
          possa usar o mundo digital com total confiança e tranquilidade.
        </p>
      </div>
      <div className="hidden md:block">
        <Image
          src="/shield.png"
          alt="Shield"
          width={530}
          height={400}
          className="w-auto object-contain"
          loading="eager"
        />
      </div>
    </section>
  )
}
