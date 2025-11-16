"use client"

import { Menu } from "lucide-react"
import { useState } from "react"

import { Button } from "../ui/button"
import { Drawer, DrawerClose, DrawerContent, DrawerHeader, DrawerTitle, DrawerTrigger } from "../ui/drawer"
import { SectionsMenu } from "./sections-menu"

export const MobileMenu = () => {
  const [open, setOpen] = useState(false)

  return (
    <Drawer open={open} onOpenChange={setOpen}>
      <DrawerTrigger asChild>
        <Button className="mobile ml-auto rounded-full border-transparent shadow-none sm:hidden" variant="outline">
          <Menu />
        </Button>
      </DrawerTrigger>
      <DrawerContent className="border-input/20 bg-palette-accent/5 backdrop-blur-2xl">
        <DrawerHeader>
          <DrawerTitle className="border-b-palette-secondary/10">
            <h4>Menu</h4>
          </DrawerTitle>
        </DrawerHeader>
        <div className="flex flex-col gap-4 p-4">
          <DrawerClose>
            <Button variant="outline" size="lg" asChild className="rounded-full border-transparent shadow-none">
              <a href="#hero">Início</a>
            </Button>
          </DrawerClose>
          <SectionsMenu DrawerClose={DrawerClose} />
          <Button variant="outline" size="lg" asChild className="rounded-full border-transparent shadow-none">
            <a href="#about">Sobre</a>
          </Button>
        </div>
      </DrawerContent>
    </Drawer>
  )
}
