import LandingHeader from "@/components/LandingHeader"
import LandingHero from "@/components/LandingHero"
import LandingHowItWorks from "@/components/LandingHowItWorks"

const page = () => {
  return (
    <section className="p-5 h-screen">
      <LandingHeader />
      <LandingHero />
      <LandingHowItWorks />
    </section>
  )
}

export default page
