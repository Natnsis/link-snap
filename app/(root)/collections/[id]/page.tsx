"use client"
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import { collections } from "@/lib/constants/collections"
import { linkCards } from "@/lib/constants/links"
import { Download, Edit, Link, PlayIcon } from "lucide-react"
import { useParams, useRouter } from "next/navigation"
import { BiArrowBack } from "react-icons/bi"
const page = () => {
  const router = useRouter()
  const params = useParams()
  const id = Number(params.id) as Number
  const collection = collections.find(c => c.id === id)
  return (
    <section className="p-5">
      <Button variant="outline" onClick={() => router.push("/collections")}><BiArrowBack /></Button>
      <main className="flex flex-col gap-2 sm:px-20">
        <h1 className="text-4xl font-extrabold">
          {collection?.title}
        </h1>
        <p className="text-xl font-bold text-gray-500">{collection?.description}</p>

        <div className="grid sm:grid-cols-2 md:grid-cols-4 grid-cols-1 mt-5 gap-5 px-10">
          {linkCards ? linkCards.map((l, index) => (
            <div className="h-[90vh]" key={index} onClick={() => router.push(`/overview/${l.id}`)}>
              <div className="bg-gray-200 h-[60vh] rounded-t-lg flex items-center justify-center">
                <PlayIcon size={60} />
              </div>
              <div className="my-2">
                <h1 className="font-bold">{l.title}</h1>
                <p className="text-xs text-gray-600">{l.description}</p>
                <div className="flex gap-2 my-2">
                  <Badge variant="outline">{l.categories[0]}</Badge>
                  <Badge variant="outline">{l.categories[1]}</Badge>
                  <Badge variant="outline">{l.categories[2]}</Badge>
                  <Badge variant="outline">{l.categories[3]}</Badge>
                </div>
              </div>
              <div className="flex justify-start gap-2 mt-5">
                <Button size="icon"><Link /></Button>
                <Button size="icon" variant="outline"><Edit /></Button>
                <Button size="icon"><Download /></Button>
              </div>
            </div>
          )) : <div>"no links found"</div>}
        </div>
      </main>
    </section>
  )
}

export default page
