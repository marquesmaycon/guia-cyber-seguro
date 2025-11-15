import "dotenv/config"
import { sections } from "@/components/sections/sections"
import { db } from "."
import { section } from "./schema"

async function main() {
  const payload: (typeof section.$inferInsert)[] = Object.values(sections).map((s) => ({
    title: s.title,
    htmlId: s.htmlId
  }))

  await db.insert(section).values(payload).onConflictDoNothing({ target: section.htmlId })

  console.log("Sections seeded")
}

main()
