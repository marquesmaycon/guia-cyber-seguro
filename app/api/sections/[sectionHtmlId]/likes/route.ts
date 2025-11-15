import { eq } from "drizzle-orm"
import { type NextRequest, NextResponse } from "next/server"

import { db } from "@/db"
import { section } from "@/db/schema"

export async function GET(_: NextRequest, ctx: RouteContext<"/api/sections/[sectionHtmlId]/likes">) {
  const { sectionHtmlId } = await ctx.params

  const [sectionData] = await db.select().from(section).where(eq(section.htmlId, sectionHtmlId)).limit(1)

  return NextResponse.json({ likesCount: sectionData?.likesCount || 0 })
}
