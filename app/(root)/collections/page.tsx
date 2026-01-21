"use client"
import Header from "@/components/Header"
import { Input } from "@/components/ui/input"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { PlusIcon } from 'lucide-react'
import { Link } from 'lucide-react'
import { useRouter } from "next/navigation"
import { useEffect, useState } from "react"
import { createClient } from "@/utils/supabase/client"
import { useQuery } from "@tanstack/react-query"
import { getCollectionsByUser } from "@/app/api/collection/route"
import { collections } from "@/lib/constants/collections"

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

  const { data: collection, isLoading, error } = useQuery({
    queryKey: ["collections", user?.id],
    queryFn: () => getCollectionsByUser(user?.id),
    enabled: !!user,
  })

  console.log(collection)
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
            {collection && collection.map((c, index) => (
              <div className="h-[30vh] border rounded-lg p-5 hover:shadow-lg" key={index} onClick={() => router.push(`/collections/${c.title}`)}>
                <h1 className="font-bold text-lg">{c.title}</h1>
                <p className="text-sm text-gray-600 mb-2">{c.description}</p>
                <div className="flex gap-3 mt-5">
                  <Badge variant="outline">{c.tag1}</Badge>
                  <Badge variant="outline">{c.tag2}</Badge>
                  <Badge variant="outline">{c.tag3}</Badge>
                </div>
                <div className="flex gap-2 mt-5">
                  <Link size={20} />
                  <p>20 Links</p>
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
