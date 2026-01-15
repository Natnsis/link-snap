"use client"
import { useRouter } from "next/navigation"
import { Button } from "@/components/ui/button"
import { BiArrowBack } from "react-icons/bi"
import { Copy, DownloadIcon } from "lucide-react"
import { FiExternalLink } from "react-icons/fi"

const page = () => {
  const router = useRouter()
  return (
    <section className="p-5">
      <Button variant="outline" onClick={() => router.back()}><BiArrowBack /></Button>
      <div className="mt-5 h-[80vh] flex justify-center px-10">
        <div className="h-full grid grid-cols-12 w-full items-center">
          <div className="col-span-11 h-full border rounded-lg"></div>
          <div className="col-span-1 h-full p-5 flex flex-col gap-3">
            <Button size="icon"><DownloadIcon /></Button>
            <Button size="icon"><Copy /></Button>
            <Button size="icon"><FiExternalLink /></Button>
          </div>
        </div>
      </div>
    </section>
  )
}

export default page
