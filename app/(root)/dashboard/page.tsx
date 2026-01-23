import Header from "@/components/Header"
import Counts from "@/components/Counts"
import Options from "@/components/Options"
import Demo from "@/components/Demo"
import Demo2 from "@/components/Demo2"
import Footer from "@/components/Footer"

const page = () => {
  return (
    <section className="p-5">
      <Header />
      <Counts />
      <Options />
      <Demo />
      <Demo2 />
      <Footer />
    </section>
  )
}

export default page
