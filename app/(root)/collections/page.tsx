import Header from "@/components/Header"
import { Input } from "@/components/ui/input"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { Separator } from "@/components/ui/separator"
import { PlusIcon } from 'lucide-react'
import { Link } from 'lucide-react'
import { collections } from "@/lib/constants/collections"

const page = () => {
  return (
    <section className="p-5">
      <Header />
      <div className="mt-10 flex justify-center">
        <div className="w-8/9">
          <h1 className="text-4xl font-extrabold">Collections</h1>
          <p className="font-bold text-gray-500 text-xl">Organize your saved links into collections</p>
          <div className="flex mt-3 justify-between items-center gap-5 mb-5">
            <Input className="w-1/2 h-8" placeholder="search for collections..." />
            <Button size="sm"><PlusIcon /> Add Collections</Button>
          </div>
          <Separator />
          <div className="grid grid-cols-3 mt-5 gap-5">
            {collections.map((c, index) => (
              <div className="h-[30vh] border rounded-lg p-5" key={index}>
                <h1 className="font-bold text-lg">{c.title}</h1>
                <p className="text-sm text-gray-600 mb-2">{c.description}</p>
                <div className="flex gap-3 mt-5">
                  <Badge>{c.tags[0]}</Badge>
                  <Badge>{c.tags[1]}</Badge>
                  <Badge>{c.tags[2]}</Badge>
                </div>
                <div className="flex gap-2 mt-5">
                  <Link size={20} />
                  <p>{c.links} Links</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section >
  )
}

export default page
