"use client"

import FingerprintJS from "@fingerprintjs/fingerprintjs"
import { ThumbsUp } from "lucide-react"
import { useEffect, useState } from "react"

import { checkIfLiked, toggleLike } from "@/lib/actions"

import { Button } from "./ui/button"

type LikeButtonProps = {
  sectionHtmlId: string
}

export const LikeButton = ({ sectionHtmlId }: LikeButtonProps) => {
  const [likesCount, setLikesCount] = useState(0)
  const [isLiked, setIsLiked] = useState(false)
  const [fingerprint, setFingerprint] = useState<string>("")
  const [isLoading, setIsLoading] = useState(false)

  useEffect(() => {
    const initFingerprint = async () => {
      const fp = await FingerprintJS.load()
      const result = await fp.get()
      setFingerprint(result.visitorId)

      const response = await fetch(`/api/sections/${sectionHtmlId}/likes`)
      const data = await response.json()
      setLikesCount(data.likesCount)

      const liked = await checkIfLiked(sectionHtmlId, result.visitorId)
      setIsLiked(liked)
    }

    initFingerprint()
  }, [sectionHtmlId])

  const handleLike = async () => {
    if (!fingerprint || isLoading) return

    setIsLoading(true)
    try {
      const result = await toggleLike(sectionHtmlId, fingerprint)
      setIsLiked(result.liked)
      setLikesCount(result.likesCount)
    } catch (error) {
      console.error("Error toggling like:", error)
    } finally {
      setIsLoading(false)
    }
  }

  return (
    <Button onClick={handleLike} disabled={isLoading} variant={isLiked ? "default" : "outline"}>
      <ThumbsUp /> {isLiked ? "Curtiu" : "Curtir"} {likesCount}
    </Button>
  )
}
