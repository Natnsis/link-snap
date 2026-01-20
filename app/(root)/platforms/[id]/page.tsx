"use client"

import { Button } from "@/components/ui/button"
import { ArrowLeftIcon } from "lucide-react"
import { useParams, useRouter } from "next/navigation"
import {
  FaYoutube,
  FaTiktok,
  FaInstagram,
  FaTwitter,
  FaGlobe,
  FaTag,
  FaStar,
} from "react-icons/fa"
import { useEffect, useState, type ElementType } from "react"
import { useQuery } from "@tanstack/react-query"
import { getAllLinks } from "@/app/api/link/route"
import { createClient } from "@/utils/supabase/client"


type PlatformMeta = {
  title: string
  icon: ElementType
  platform?: string
}

const PLATFORM_META: Record<string, PlatformMeta> = {
  yt: {
    title: "YouTube",
    icon: FaYoutube,
    platform: "youtube",
  },
  tk: {
    title: "TikTok",
    icon: FaTiktok,
    platform: "tiktok",
  },
  is: {
    title: "Instagram",
    icon: FaInstagram,
    platform: "instagram",
  },
  tw: {
    title: "Twitter (X)",
    icon: FaTwitter,
    platform: "x",
  },
  web: {
    title: "Websites",
    icon: FaGlobe,
    platform: "website",
  },
  tag: {
    title: "Tags",
    icon: FaTag,
  },
  fav: {
    title: "Favorites",
    icon: FaStar,
  },
}

const getPlatform = (url: string): string => {
  try {
    const hostname = new URL(url)
      .hostname
      .replace("www.", "")
      .toLowerCase()

    if (hostname.includes("youtube") || hostname.includes("youtu.be"))
      return "youtube"

    if (hostname.includes("twitter") || hostname.includes("x.com"))
      return "x"

    if (hostname.includes("instagram"))
      return "instagram"

    if (hostname.includes("tiktok"))
      return "tiktok"

    return "website"
  } catch {
    return "website"
  }
}

const Page = () => {
  const { id } = useParams<{ id: string }>()
  const router = useRouter()
  const supabase = createClient()
  const [user, setUser] = useState<any | null>(null)
  const meta = PLATFORM_META[id] ?? {
    title: "Unknown",
    icon: FaGlobe,
  }
  const Icon = meta.icon
  useEffect(() => {
    const fetchUser = async () => {
      const {
        data: { user },
        error,
      } = await supabase.auth.getUser()
      if (error) {
        console.error(error)
        return
      }
      setUser(user)
    }
    fetchUser()
  }, [supabase])

  const { data: links = [], isLoading } = useQuery({
    queryKey: ["links", user?.id],
    queryFn: () => getAllLinks(user!.id),
    enabled: !!user,
  })

  const filteredLinks = links.filter((link: any) => {
    if (!meta.platform) return true
    return getPlatform(link.url) === meta.platform
  })

  return (
    <section className="p-5">
      <Button
        size="icon"
        variant="outline"
        onClick={() => router.back()}
        aria-label="Go back"
      >
        <ArrowLeftIcon />
      </Button>
      <div className="mt-12 flex flex-col items-center gap-3">
        <Icon size={64} color="gray" />
        <h1 className="text-xl font-bold">{meta.title} Links</h1>
      </div>
      <div className="mt-10 flex justify-center">
        <div className="w-11/12 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-5">
          {isLoading && <p>Loading...</p>}
          {!isLoading && filteredLinks.length === 0 && (
            <p className="text-gray-500">No links found.</p>
          )}
          {filteredLinks.map((link: any) => (
            <div
              key={link.id}
              className="rounded-lg border hover:shadow-md transition"
            >
              <div className="h-[35vh] bg-gray-100 rounded-t-lg" />
              <div className="px-5 py-4">
                <h1 className="text-lg font-bold capitalize">{link.title}</h1>
                <p className="text-sm text-gray-600 truncate">
                  this is a description, we had to do it.
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

export default Page
