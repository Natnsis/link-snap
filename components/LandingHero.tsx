import { AspectRatio } from "@/components/ui/aspect-ratio"
const LandingHero = () => {
  return (
    <div className="flex items-center justify-center">
      <div>
        <AspectRatio ratio={16 / 9}>
          <Image src="..." alt="Image" className="rounded-md object-cover" />
        </AspectRatio>
        <img src="/inner/link.png" />
        <h1 className="text-3xl font-extrabold">LinkSnap</h1>
        <p>Your content, organized and beautifully previewed.</p>
      </div>
    </div>
  )
}

export default LandingHero
