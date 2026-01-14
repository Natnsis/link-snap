import Header from "@/components/Header"
import Counts from "@/components/Counts"
import Options from "@/components/Options"

const page = () => {
  return (
    <section className="p-5">
      <Header />
      <Counts />
      <Options />
    </section>
  )
}

export default page
