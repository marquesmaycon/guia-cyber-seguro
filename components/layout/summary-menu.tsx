"use client"

import { useState } from "react"

import { sections } from "../sections/sections"
import { Button } from "../ui/button"
import { Popover, PopoverContent, PopoverTrigger } from "../ui/popover"
import { Separator } from "../ui/separator"

type SummaryMenuProps = {
  onItemClick?: () => void
}

export const SummaryMenu = ({ onItemClick }: SummaryMenuProps) => {
  const [open, setOpen] = useState(false)

  function onClick() {
    setOpen(false)
    onItemClick?.()
  }

  return (
    <Popover open={open} onOpenChange={setOpen}>
      <PopoverTrigger asChild>
        <Button variant="outline" size="lg" className="rounded-full border-transparent shadow-none">
          Sumário
        </Button>
      </PopoverTrigger>
      <PopoverContent className="bg-palette-secondary/5 w-full border-none backdrop-blur-3xl">
        <h4 className="text-center">Seções</h4>
        <Separator className="bg-palette-secondary/20 my-4" />
        <div className="flex flex-col gap-2">
          {Object.values(sections).map(({ htmlId, title }) => (
            <Button
              key={htmlId}
              variant="outline"
              size="lg"
              asChild
              onClick={onClick}
              className="rounded-full border-transparent shadow-none"
            >
              <a href={`#${htmlId}`}>{title}</a>
            </Button>
          ))}
        </div>
      </PopoverContent>
    </Popover>
  )
}
