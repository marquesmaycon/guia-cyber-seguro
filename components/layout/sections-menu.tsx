import React from "react"

import { sections } from "../sections/sections"
import { Button } from "../ui/button"
import { Popover, PopoverContent, PopoverTrigger } from "../ui/popover"
import { Separator } from "../ui/separator"

type SectionsMenuProps = {
  onItemClick?: () => void
  DrawerClose?: React.ComponentType<{ children: React.ReactNode }>
}

export const SectionsMenu = ({ onItemClick, DrawerClose }: SectionsMenuProps) => {
  return (
    <Popover>
      <PopoverTrigger asChild>
        <Button variant="outline" size="lg" className="rounded-full border-transparent shadow-none">
          Seções
        </Button>
      </PopoverTrigger>
      <PopoverContent className="bg-palette-secondary/5 border-none backdrop-blur-3xl">
        <h4 className="text-center">Seções</h4>
        <Separator className="bg-palette-secondary/30 my-4" />
        <div className="flex flex-col gap-2">
          {Object.values(sections).map((section) =>
            DrawerClose ? (
              <DrawerClose key={section.htmlId}>
                <Button
                  key={section.htmlId}
                  variant="outline"
                  size="lg"
                  className="rounded-full border-transparent px-2 shadow-none"
                  asChild
                >
                  <a href={`#${section.htmlId}`}>{section.title}</a>
                </Button>
              </DrawerClose>
            ) : (
              <Button
                key={section.htmlId}
                variant="outline"
                size="lg"
                className="rounded-full border-transparent px-2 shadow-none"
                asChild
              >
                <a href={`#${section.htmlId}`}>{section.title}</a>
              </Button>
            )
          )}
        </div>
      </PopoverContent>
    </Popover>
  )
}
