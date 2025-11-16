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
      <PopoverContent className="bg-palette-secondary/5 border-none backdrop-blur-3xl">
        <h4 className="text-center">Seções</h4>
        <Separator className="bg-palette-secondary/20 my-4" />
        <div className="flex flex-col gap-2">
          {Object.values(sections).map((section) => (
            <Button
              key={section.htmlId}
              variant="outline"
              size="lg"
              className="rounded-full border-transparent px-2 shadow-none"
              asChild
              onClick={onClick}
            >
              <a href={`#${section.htmlId}`}>{section.title}</a>
            </Button>
          ))}
        </div>
      </PopoverContent>
    </Popover>
  )
}
