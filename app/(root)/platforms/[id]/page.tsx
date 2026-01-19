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
  FaFolder,
  FaTag,
  FaStar,
} from "react-icons/fa"
import { useEffect, useState, type ElementType } from "react"
import { linkCards } from "@/lib/constants/links"
import { useQuery } from "@tanstack/react-query"
import { getAllLinks } from "@/app/api/link/route"
import { createClient } from "@/utils/supabase/client"

type PlatformMeta = {
  title: string
  icon: ElementType
  color?: string
  platform?: string
}

const PLATFORM_META: Record<string, PlatformMeta> = {
  yt: {
    title: "YouTube",
    icon: FaYoutube,
    platform: "youtube"
  },
  tk: {
    title: "TikTok",
    icon: FaTiktok,
    platform: "youtube"
  },
  is: {
    title: "Instagram",
    icon: FaInstagram,
    platform: "instagram"
  },
  tw: {
    title: "Twitter",
    icon: FaTwitter,
    platform: "x"
  },
  web: {
    title: "Website",
    icon: FaGlobe,
  },
  coll: {
    title: "Collection",
    icon: FaFolder,
  },
  tag: {
    title: "Tag",
    icon: FaTag,
  },
  fav: {
    title: "Favorites",
    icon: FaStar,
  },
}

const Page = () => {
  const { id } = useParams<{ id: string }>()
  const supabase = createClient()
  const router = useRouter()
  const [user, setUser] = useState<any | null>(null)
  const meta = PLATFORM_META[id] ?? {
    title: "Unknown",
    icon: FaGlobe,
  }
  const Icon = meta.icon

  useEffect(() => {
    const fetchUser = async () => {
      const { data: { user }, error } = await supabase.auth.getUser();
      if (error) {
        console.error(error);
        return;
      }
      setUser(user)
    };
    fetchUser();
  }, []);

  const { data: links, error: linkError } = useQuery({
    queryKey: ['links'],
    queryFn: () => getAllLinks(user.id),
  });

  const getPlatform = (url: string) => {
    try {
      const hostname = new URL(url).hostname.replace("www.", "").replace(".com", "")
      if (hostname.includes("youtube") || hostname.includes("youtu.be")) return "youtube"
      if (hostname.includes("tweeter") || hostname.includes("x")) return "x"
      if (hostname.includes("instagram")) return "instagram"
      if (hostname.includes("tiktok")) return "tiktok"
      if (!hostname.includes("youtube") || !hostname.includes("youtu.be") || !hostname.includes("tweeter") || !hostname.includes("instagram") || !hostname.includes("tiktok")) {
        return "website"
      }
    } catch (e) {
      return e
    }
  }

  console.log(getPlatform("https://www.jlsjdgs.com/lsjfl.jsldfsdjf/ljfsdljf.com"))

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
        <div className="w-11/12 grid grid-cols-4 gap-5">
          {linkCards.map((l, index) => (
            <div className="rounded-lg border" key={index}>
              <div className="h-[35vh]"></div>
              <div className="px-5">
                <h1 className="text-lg font-bold">{l.title}</h1>
                <p className="text-sm text-gray-600">{l.description}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

export default Page
