import { Heart } from "lucide-react"
import Link from "next/link"

const LandingFooter = () => {
  return (
    <footer className="mt-40 flex flex-col gap-3">
      <div className="flex justify-center">
        <div className="grid grid-cols-4 gap-10 w-[1000px]">
          <div>
            <h1 className="font-bold">Product</h1>
            <div className="flex flex-col text-gray-600 mt-4 text-sm gap-2">
              <Link href="/">Features</Link>
              <Link href="/">Pricing</Link>
              <Link href="/">Changelog</Link>
            </div>
          </div>

          <div>
            <h1 className="font-bold">Resources</h1>
            <div className="flex flex-col text-gray-600 mt-4 text-sm gap-2">
              <Link href="/">Docs</Link>
              <Link href="/">Support</Link>
              <Link href="/">Partners</Link>
            </div>
          </div>

          <div>
            <h1 className="font-bold">Company</h1>
            <div className="flex flex-col text-gray-600 mt-4 text-sm gap-2">
              <Link href="/">About</Link>
              <Link href="/">Blog</Link>
              <Link href="/">Careers</Link>
            </div>
          </div>

          <div>
            <h1 className="font-bold">Social</h1>
            <div className="flex flex-col text-gray-600 mt-4 text-sm gap-2">
              <Link href="/">Telegram</Link>
              <Link href="/">LinkedIn</Link>
              <Link href="/">Github</Link>
            </div>
          </div>
        </div>
      </div>

      <div className="flex justify-center mt-5">
        <p className="flex gap-1 text-gray-500 text-sm items-center">
          &copy;2026 made by orca-dev with <Heart size={18} />
        </p>
      </div>
    </footer>
  )
}

export default LandingFooter
