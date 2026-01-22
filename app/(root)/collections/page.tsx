"use client"
import Header from "@/components/Header"
import { Input } from "@/components/ui/input"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { PlusIcon, Trash2 } from 'lucide-react'
import { Link } from 'lucide-react'
import { useRouter } from "next/navigation"
import { useEffect, useState } from "react"
import { createClient } from "@/utils/supabase/client"
import { useMutation, useQuery } from "@tanstack/react-query"
import { deleteCollection, getCollectionsByUser } from "@/app/api/collection/route"
import { AlertDialog, AlertDialogAction, AlertDialogCancel, AlertDialogContent, AlertDialogDescription, AlertDialogFooter, AlertDialogHeader, AlertDialogTitle, AlertDialogTrigger } from "@/components/ui/alert-dialog"
import { toast } from "sonner"

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

  //FIXME:deletion bug
  const mutation = useMutation({
    mutationKey: ['deleteCollections'],
    mutationFn: async ({ title, userId }: { title: string; userId: string }) => {
      await deleteCollection(title, userId)
    },
    onSuccess: () => {
      toast.success("Collection deleted successfully")
    },
    onError: () => {
      toast.error("An error has occurred!")
    }
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
                <div className="flex justify-between">
                  <h1 className="font-bold text-lg">{c.title}</h1>
                  <AlertDialog>
                    <AlertDialogTrigger asChild>
                      <Button size="sm" variant="destructive"
                        onClick={(e) => e.stopPropagation()}
                      >
                        <Trash2 />
                      </Button>
                    </AlertDialogTrigger>
                    <AlertDialogContent onClick={(e) => e.stopPropagation()}>
                      <AlertDialogHeader>
                        <AlertDialogTitle>Are you absolutely sure?</AlertDialogTitle>
                        <AlertDialogDescription>
                          This action cannot be undone. This will permanently delete your account
                          from our servers.
                        </AlertDialogDescription>
                      </AlertDialogHeader>
                      <AlertDialogFooter>
                        <AlertDialogCancel
                          onClick={(e) => e.stopPropagation()
                          }>
                          Cancel
                        </AlertDialogCancel>
                        <AlertDialogAction
                          onClick={(e) => {
                            e.stopPropagation()
                            mutation.mutate({ title: c.title, userId: user.id })
                          }}>
                          Continue
                        </AlertDialogAction>
                      </AlertDialogFooter>
                    </AlertDialogContent>
                  </AlertDialog>
                </div>
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
