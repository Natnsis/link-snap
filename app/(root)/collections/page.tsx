import Header from "@/components/Header"
import { Input } from "@/components/ui/input"
import { Button } from "@/components/ui/button"
import { PlusIcon } from 'lucide-react'

const page = () => {
  return (
    <section className="p-5">
      <Header />
      <div className="mt-10 font-extrabold">
        <h1 className="text-4xl">Collections</h1>
        <p className="font-bold text-gray-500 text-xl">Organize your saved links into collections</p>
        <div className="flex justify-between mt-8 items-center">
          <Input className="w-1/2 h-8" placeholder="search for collections..." />
          <Button size="sm"><PlusIcon /> Add Collections</Button>
        </div>
      </div>
    </section >
  )
}

export default page
