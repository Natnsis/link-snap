import { Button } from "@/components/ui/button"

const LandingHero = () => {
  return (
    <div className="flex-col flex h-screen">
      <div className="flex justify-center mt-20">
        <img src="/inner/logo.png" alt="Image" className="rounded-md object-cover h-30" />
      </div>
      <div className="flex flex-col gap-2 mb-10">
        <h1 className="text-6xl font-extrabold text-center">LinkSnap</h1>
        <p className="text-5xl text-gray-400 font-bold text-center">Your content, organized and beautifully previewed.</p>
      </div>
      <div className="flex justify-center gap-5">
        <Button size="sm">Share Collection</Button>
        <Button variant="outline" size="sm">Follow</Button>
      </div>
    </div>
  )
}

export default LandingHero
