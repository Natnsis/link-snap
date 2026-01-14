import { Bookmark, StarIcon, TagIcon } from "lucide-react"
import { FaGlobe, FaInstagram, FaTiktok, FaYoutube } from "react-icons/fa"
import { FaXTwitter } from "react-icons/fa6"

const Options = () => {
  return (
    <main className="flex justify-center mt-25">
      <div className="w-6/9 grid grid-cols-4 gap-5 gap-y-20">
        <div className="flex flex-col gap-1 items-center">
          <FaYoutube size={40} color="gray" />
          <p className="font-extrabold">YouTube</p>
        </div>

        <div className="flex flex-col gap-1 items-center">
          <FaTiktok size={40} color="gray" />
          <p className="font-extrabold">Tiktok</p>
        </div>

        <div className="flex flex-col gap-1 items-center">
          <FaInstagram size={40} color="gray" />
          <p className="font-extrabold">Instagram</p>
        </div>

        <div className="flex flex-col gap-1 items-center">
          <FaXTwitter size={40} color="gray" />
          <p className="font-extrabold">Tweeter/X</p>
        </div>

        <div className="flex flex-col gap-1 items-center">
          <FaGlobe size={40} color="gray" />
          <p className="font-extrabold">Websites</p>
        </div>

        <div className="flex flex-col gap-1 items-center">
          <Bookmark size={40} color="gray" />
          <p className="font-extrabold">Collections</p>
        </div>

        <div className="flex flex-col gap-1 items-center">
          <TagIcon size={40} color="gray" />
          <p className="font-extrabold">Tags</p>
        </div>

        <div className="flex flex-col gap-1 items-center">
          <StarIcon size={40} color="gray" />
          <p className="font-extrabold">Favorites</p>
        </div>
      </div>
    </main>
  )
}

export default Options
