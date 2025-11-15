import React from "react"

import { cn } from "@/lib/utils"

type VectorBgProps = React.HTMLAttributes<HTMLDivElement> & {
  position?: "left" | "right"
  vector: "1" | "2"
  flipX?: boolean
  flipY?: boolean
}

export const VectorBg = ({ vector = "2", position = "right", className, ...props }: VectorBgProps) => {
  return (
    <div
      className={cn(
        "absolute top-0 -z-10 bg-cover bg-center bg-no-repeat",
        {
          "bg-vector-2 h-[726px] w-[488px]": vector === "2",
          "bg-vector-1 -top-50 h-[500px] w-[1000px]": vector === "1",
          "-left-64": position === "left",
          "-right-64": position === "right",
          "scale-x-[-1]": props.flipX,
          "scale-y-[-1]": props.flipY
        },
        className
      )}
      {...props}
    />
  )
}
