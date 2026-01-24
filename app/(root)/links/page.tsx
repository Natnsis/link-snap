"use client"
import Header from "@/components/Header"
import { Separator } from "@/components/ui/separator"
import { Button } from "@/components/ui/button"
import { Select, SelectTrigger, SelectGroup, SelectContent, SelectLabel, SelectItem, SelectValue } from "@/components/ui/select"
import { Download, PencilIcon, Link, PlayIcon, Trash } from "lucide-react"
import { Badge } from "@/components/ui/badge"
import { useRouter } from "next/navigation"
import { QueryClient, useMutation, useQuery } from "@tanstack/react-query"
import { deleteLink, getAllLinks } from "@/app/api/link/route"
import { useEffect, useState } from "react"
import { createClient } from "@/utils/supabase/client"
import { AlertDialogTrigger, AlertDialog, AlertDialogContent, AlertDialogHeader, AlertDialogTitle, AlertDialogDescription, AlertDialogFooter, AlertDialogCancel, AlertDialogAction } from "@/components/ui/alert-dialog"

const page = () => {
  const router = useRouter()
  const supabase = createClient()
  const [user, setUser] = useState<any | null>(null)
  const queryClient = new QueryClient;

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

  const { data: links = [], isLoading } = useQuery({
    queryKey: ["links", user?.id],
    queryFn: () => getAllLinks(user?.id),
    enabled: !!user,
  });

  const mutation = useMutation({
    mutationKey: ['deleteLink'],
    mutationFn: async (userId: string) => {
      await deleteLink(userId)
    },
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ['links'] })
    }
  });

  return (
    <section className="p-5">
      <Header />
      <div className="bg-gray-100 mt-5 p-5">
        <h1 className="text-4xl font-extrabold">All Links</h1>
        <p className="text-gray-700 pl-2">Organize your saved links</p>
        <Separator className="my-5" />
        <p className="text-sm mb-5">Filter by:</p>

        <div className="sm:flex gap-5 sm:justify-between grid grid-rows-2">
          <div className="sm:flex gap-5 grid grid-cols-3">
            <Select>
              <SelectTrigger className="rounded-full bg-white">
                <SelectValue placeholder="Platform" />
              </SelectTrigger>
              <SelectContent>
                <SelectGroup>
                  <SelectLabel>Platforms</SelectLabel>
                  <SelectItem value="youtube">Youtube</SelectItem>
                  <SelectItem value="tiktok">Titok</SelectItem>
                  <SelectItem value="instagram">Instagram</SelectItem>
                  <SelectItem value="tweeter">Tweeter/X</SelectItem>
                  <SelectItem value="other">Other</SelectItem>
                </SelectGroup>
              </SelectContent>
            </Select>

            <Select>
              <SelectTrigger className="rounded-full bg-white">
                <SelectValue placeholder="Purpose" />
              </SelectTrigger>
              <SelectContent>
                <SelectGroup>
                  <SelectLabel>Purposes</SelectLabel>
                  <SelectItem value="apple">Learning</SelectItem>
                  <SelectItem value="banana">Working / Project</SelectItem>
                  <SelectItem value="blueberry">Inspiration</SelectItem>
                  <SelectItem value="grapes">News</SelectItem>
                  <SelectItem value="pineapple">Research</SelectItem>
                  <SelectItem value="pineapple">I'll check later</SelectItem>
                </SelectGroup>
              </SelectContent>
            </Select>

            <Select>
              <SelectTrigger className="rounded-full bg-white">
                <SelectValue placeholder="Length" />
              </SelectTrigger>
              <SelectContent>
                <SelectGroup>
                  <SelectLabel>Length</SelectLabel>
                  <SelectItem value="short">Short (≤ 1 min)</SelectItem>
                  <SelectItem value="medium">Medium (1–10 min)</SelectItem>
                  <SelectItem value="long">Long (10+ min)</SelectItem>
                  <SelectItem value="playlist">Playlist / Series</SelectItem>
                </SelectGroup>
              </SelectContent>
            </Select>

            <Select>
              <SelectTrigger className="rounded-full bg-white">
                <SelectValue placeholder="Priority" />
              </SelectTrigger>
              <SelectContent>
                <SelectGroup>
                  <SelectLabel>Priorities</SelectLabel>
                  <SelectItem value="apple">High Priority</SelectItem>
                  <SelectItem value="banana">Medium Priority</SelectItem>
                  <SelectItem value="blueberry">Low Priority</SelectItem>
                  <SelectItem value="grapes">Someday</SelectItem>
                  <SelectItem value="pineapple">Saved In Panic</SelectItem>
                </SelectGroup>
              </SelectContent>
            </Select>
          </div>
          <Button size="sm">Remove Filters</Button>
        </div>
      </div>

      <div className="grid sm:grid-cols-2 md:grid-cols-4 grid-cols-1 mt-5 gap-5 px-10">
        {!isLoading ? links.map((l, index) => (
          <div className="h-[90vh]" key={index} onClick={() => router.push(`/overview/${l.id}`)}>
            <div className="bg-gray-200 h-[60vh] rounded-t-lg flex items-center justify-center">
              <PlayIcon size={60} />
            </div>
            <div className="my-2">
              <h1 className="font-bold capitalize">{l.title}</h1>
              <p className="text-xs text-gray-600">fetch by decription</p>
              <div className="flex gap-2 my-2">
                <Badge variant="outline">{l.priority}</Badge>
                <Badge variant="outline">{l.purpose}</Badge>
                <Badge variant="outline">youtube</Badge>
              </div>
            </div>
            <div className="flex justify-start gap-2 mt-5">
              <Button size="icon"><Link /></Button>
              <Button size="icon" variant="secondary"><PencilIcon /></Button>
              <Button size="icon"><Download /></Button>
              <AlertDialog>
                <AlertDialogTrigger asChild>
                  <Button
                    size="icon"
                    variant="destructive"
                    onClick={(e) => e.stopPropagation()}
                  >
                    <Trash />
                  </Button>
                </AlertDialogTrigger>

                <AlertDialogContent onClick={(e) => e.stopPropagation()}>
                  <AlertDialogHeader>
                    <AlertDialogTitle>Are you absolutely sure?</AlertDialogTitle>
                    <AlertDialogDescription>
                      This action cannot be undone.
                    </AlertDialogDescription>
                  </AlertDialogHeader>

                  <AlertDialogFooter>
                    <AlertDialogCancel onClick={(e) => e.stopPropagation()}>
                      Cancel
                    </AlertDialogCancel>

                    <AlertDialogAction
                      disabled={mutation.isPending}
                      onClick={(e) => {
                        e.stopPropagation()
                        mutation.mutate(l.id)
                      }}
                    >
                      {mutation.isPending ? "Deleting..." : "Continue"}
                    </AlertDialogAction>
                  </AlertDialogFooter>
                </AlertDialogContent>
              </AlertDialog>
            </div>
          </div>
        )) : <div>loading...</div>}
      </div>
    </section >
  )
}

export default page
