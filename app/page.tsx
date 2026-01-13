import LandingCards from "@/components/LandingCards"
import LandingFooter from "@/components/LandingFooter"
import LandingHeader from "@/components/LandingHeader"
import LandingHero from "@/components/LandingHero"
import LandingHowItWorks from "@/components/LandingHowItWorks"

const page = () => {
  return (
    <section className="p-5">
      <LandingHeader />
      <LandingHero />
      <LandingHowItWorks />
      <LandingCards />
      <LandingFooter />
    </section>
  )
}

export default page
