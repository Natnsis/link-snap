"use client"

import { Bookmark, StarIcon } from "lucide-react"
import { useRouter } from "next/navigation"
import { FaGlobe, FaInstagram, FaTiktok, FaYoutube } from "react-icons/fa"
import { FaXTwitter } from "react-icons/fa6"
import { AddLink } from "./AddLink"

const Options = () => {
  const router = useRouter()
  return (
    <main className="flex justify-center mt-25">
      <div className="w-6/9 grid sm:grid-cols-4 gap-5 gap-y-15 grid-cols-3">
        <AddLink />
        <div className="flex flex-col gap-1 items-center hover:shadow-lg py-5" onClick={() => router.push("/platforms/yt")}>
          <FaYoutube size={40} color="gray" />
          <p className="font-extrabold">YouTube</p>
        </div>

        <div className="flex flex-col gap-1 items-center hover:shadow-lg py-5" onClick={() => router.push("/platforms/tk")}>
          <FaTiktok size={40} color="gray" />
          <p className="font-extrabold">Tiktok</p>
        </div>

        <div className="flex flex-col gap-1 items-center hover:shadow-lg py-5" onClick={() => router.push("/platforms/is")}>
          <FaInstagram size={40} color="gray" />
          <p className="font-extrabold">Instagram</p>
        </div>

        <div className="flex flex-col gap-1 items-center hover:shadow-lg py-5" onClick={() => router.push("/platforms/tw")}>
          <FaXTwitter size={40} color="gray" />
          <p className="font-extrabold">Tweeter/X</p>
        </div>

        <div className="flex flex-col gap-1 items-center hover:shadow-lg py-5" onClick={() => router.push("/platforms/web")}>
          <FaGlobe size={40} color="gray" />
          <p className="font-extrabold">Websites</p>
        </div>

        <div className="flex flex-col gap-1 items-center hover:shadow-lg py-5" onClick={() => router.push("/collections")}>
          <Bookmark size={40} color="gray" />
          <p className="font-extrabold">Collections</p>
        </div>


        <div className="flex flex-col gap-1 items-center hover:shadow-lg py-5" onClick={() => router.push("/platforms/fav")}>
          <StarIcon size={40} color="gray" />
          <p className="font-extrabold">Favorites</p>
        </div>
      </div>
    </main >
  )
}

export default Options
