"use server"
import crypto from "crypto"
import { and, eq } from "drizzle-orm"
import { headers } from "next/headers"

import { db } from "@/db"
import { likes, section } from "@/db/schema"

export const toggleLike = async (sectionHtmlId: string, fingerprint: string) => {
  const hdrs = await headers()
  const ipAddress = hdrs.get("x-forwarded-for")?.split(",")[0] || hdrs.get("x-real-ip") || "unknown"
  const userAgent = hdrs.get("user-agent") || "unknown"

  const fingerprintHash = crypto
    .createHash("sha256")
    .update(fingerprint + (process.env.FINGERPRINT_SALT || "default-salt"))
    .digest("hex")

  const [sectionData] = await db.select().from(section).where(eq(section.htmlId, sectionHtmlId)).limit(1)

  if (!sectionData) {
    throw new Error("Section not found")
  }

  const [existingLike] = await db
    .select()
    .from(likes)
    .where(and(eq(likes.sectionId, sectionData.id), eq(likes.fingerprintHash, fingerprintHash)))
    .limit(1)

  if (existingLike) {
    await db.delete(likes).where(eq(likes.id, existingLike.id))

    const newCount = Math.max(0, sectionData.likesCount - 1)

    await db.update(section).set({ likesCount: newCount }).where(eq(section.id, sectionData.id))

    return { liked: false, likesCount: newCount }
  } else {
    await db.insert(likes).values({
      sectionId: sectionData.id,
      fingerprintHash,
      ipAddress,
      userAgent
    })

    const newCount = sectionData.likesCount + 1

    await db.update(section).set({ likesCount: newCount }).where(eq(section.id, sectionData.id))

    return { liked: true, likesCount: newCount }
  }
}

export const checkIfLiked = async (sectionHtmlId: string, fingerprint: string) => {
  const fingerprintHash = crypto
    .createHash("sha256")
    .update(fingerprint + (process.env.FINGERPRINT_SALT || "default-salt"))
    .digest("hex")

  const [sectionData] = await db.select().from(section).where(eq(section.htmlId, sectionHtmlId)).limit(1)

  if (!sectionData) return false

  const [existingLike] = await db
    .select()
    .from(likes)
    .where(and(eq(likes.sectionId, sectionData.id), eq(likes.fingerprintHash, fingerprintHash)))
    .limit(1)

  return !!existingLike
}
