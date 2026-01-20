"use client"
import Header from "@/components/Header"
import { Input } from "@/components/ui/input"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { PlusIcon } from 'lucide-react'
import { Link } from 'lucide-react'
import { collections } from "@/lib/constants/collections"
import { useRouter } from "next/navigation"
import { useQuery } from "@tanstack/react-query"
import { getCollectionsWithId } from "@/app/api/collection/route"
import { useEffect, useState } from "react"
import { createClient } from "@/utils/supabase/client"

const page = () => {
  const router = useRouter()
  const supabase = createClient()
  const [user, setUser] = useState<any | null>(null)
  useEffect(() => {
    const fetchUser = async () => {
      const {
        data: { user },
        error,
      } = await supabase.auth.getUser()
      if (error) {
        console.error(error)
        return
      }
      setUser(user)
    }
    fetchUser()
  }, [supabase])

  //TODO:make it fetch collections
  /*
  const { data: collectionData, error: collectionError, isLoading } = useQuery({
    queryKey: ['collection'],
    queryFn: async () => {
      getCollectionsWithId(user.id)
    }
  })
  */

  return (
    <section className="p-5">
      <Header />
      <div className="mt-10 flex justify-center">
        <div className="w-8/9">
          <h1 className="text-4xl font-extrabold">Collections</h1>
          <p className="font-bold text-gray-500 text-xl">Organize your saved links into collections</p>
          <div className="flex mt-3 justify-between items-center gap-5 mb-5">
            <Input className="w-1/2 h-8" placeholder="search for collections..." />
            <Button size="sm" onClick={() => router.push("/add-collection")} ><PlusIcon /> Add Collections</Button>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 mt-5 gap-5">
            {collections.map((c, index) => (
              <div className="h-[30vh] border rounded-lg p-5 hover:shadow-lg" key={index} onClick={() => router.push(`/collections/${c.id}`)}>
                <h1 className="font-bold text-lg">{c.title}</h1>
                <p className="text-sm text-gray-600 mb-2">{c.description}</p>
                <div className="flex gap-3 mt-5">
                  <Badge variant="outline">{c.tags[0]}</Badge>
                  <Badge variant="outline">{c.tags[1]}</Badge>
                  <Badge variant="outline">{c.tags[2]}</Badge>
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
