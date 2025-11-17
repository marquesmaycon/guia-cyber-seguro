import type React from "react"

function TableCard({ children }: React.HtmlHTMLAttributes<HTMLDivElement>) {
  return <div className="bg-palette-secondary/20 space-y-4 rounded-lg border p-4">{children}</div>
}

function TableCardRow({ title, description }: { title: string; description: React.ReactNode }) {
  return (
    <div className="flex flex-col">
      <b>{title}</b>
      <span>{description}</span>
    </div>
  )
}

export { TableCard, TableCardRow }
