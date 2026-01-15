"use client"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import { useRouter } from "next/navigation"
import { BiArrowBack } from "react-icons/bi"

const page = () => {
  const router = useRouter()
  return (
    <section className="p-5">
      <Button variant="outline" onClick={() => router.push("/collections")}><BiArrowBack /></Button>
      <main className="mt-10 flex justify-center">
        <div className="w-11/12">
          <h1 className="text-3xl font-extrabold mb-5">Add Collection</h1>
          <div className="flex justify-center items-center">
            <div className="border p-5 rounded-lg sm:flex sm:justify-between gap-15 grid grid-cols-1">
              <div>
                <div>
                  <label htmlFor="title" className="text-sm text-gray-500">Title</label>
                  <Input id="title" />
                </div>
                <div>
                  <label htmlFor="description" className="text-sm text-gray-500">tag #1</label>
                  <Input />
                </div>
                <div>
                  <label htmlFor="description" className="text-sm text-gray-500">tag #2</label>
                  <Input />
                </div>
                <div>
                  <label htmlFor="description" className="text-sm text-gray-500">tag #3</label>
                  <Input />
                </div>
              </div>
              <div>
                <label htmlFor="description" className="text-sm text-gray-500">Description</label>
                <Textarea id="description" className="h-40" />
                <div className="flex justify-end">
                  <Button className="mt-3">Add</Button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </main>
    </section>
  )
}

export default page
