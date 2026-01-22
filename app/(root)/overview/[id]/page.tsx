"use client"
import { useParams, useRouter } from "next/navigation"
import { Button } from "@/components/ui/button"
import { BiArrowBack } from "react-icons/bi"
import { Copy, DownloadIcon, StarIcon } from "lucide-react"
import { FiExternalLink } from "react-icons/fi"
import { useQuery } from "@tanstack/react-query"
import { getLinkById } from "@/app/api/link/route"

const page = () => {
  const router = useRouter()
  //FIXME: fetching single link
  const { id } = useParams();
  const { data: link, isLoading } = useQuery({
    queryKey: ["links", id],
    queryFn: (id: string) => getLinkById(id),
  });
  return (
    <section className="p-5">
      <Button variant="outline" onClick={() => router.back()}><BiArrowBack /></Button>
      <div className="mt-5 h-[80vh] flex justify-center px-10">
        <div className="h-full grid grid-cols-12 w-full items-center">
          <div className="col-span-11 h-full border rounded-lg"></div>
          <div className="col-span-1 h-full p-5 flex flex-col gap-3">
            <Button size="icon"><DownloadIcon /></Button>
            <Button size="icon" variant="outline"><Copy /></Button>
            <Button size="icon"><FiExternalLink /></Button>
            <Button size="icon" variant="outline"><StarIcon /></Button>
          </div>
        </div>
      </div>
    </section>
  )
}

export default page
