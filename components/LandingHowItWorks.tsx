import { Button } from "@/components/ui/button";

const LandingHowItWorks = () => {
  return (
    <div className="flex justify-center h-screen">
      <div className="h-[343px] w-[1000px] flex flex-col justify-evenly">
        <img src="/inner/link.png" className="w-30" />
        <div className="pl-4 mb-5">
          <h1 className="text-2xl font-extrabold">LinkSnap</h1>
          <p className="text-2xl font-bold text-gray-500">Profile</p>
        </div>

        <div className="pl-4 mb-5 w-2/4">
          <p>LinkSnap brings all your favorite links together into visually rich, interactive collections, Easily browse share and preview media across platforms like YouTube, Instagram, TikTok, Twitter/X, and more.</p>
        </div>

        <div className="pl-4 mb-5 w-2/4">
          <p>Build public collections of links for themes, interests, or sharing with friends. No clutter, just clear previews all in one, minimal UI with neutral backgrounds and subtle accent highlights.</p>
        </div>

        <div className="pl-4 mb-5 w-2/4">
          <p>Discover content, showcase what you love, and organize everything from playlists to reading lists. LinkSnap is a new way to curate and share accross the web</p>
        </div>

        <p>Explore My Collections</p>
        <div className="flex gap-5">
          <Button variant="secondary" className="rounded-full font-extrabold" size="sm">Twitter</Button>
          <Button variant="secondary" className="rounded-full font-extrabold" size="sm">Instagram</Button>
          <Button variant="secondary" className="rounded-full font-extrabold" size="sm">YouTube</Button>
        </div>
      </div>

    </div>
  )
}

export default LandingHowItWorks
