"use client"
import { createCollection } from "@/app/api/collection/route"
import { CollectionSchema, CollectionType } from "@/app/schemas/collection.schema"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import { createClient } from "@/utils/supabase/client"
import { zodResolver } from "@hookform/resolvers/zod"
import { useMutation, useQueryClient } from "@tanstack/react-query"
import { useRouter } from "next/navigation"
import { useEffect, useState } from "react"
import { useForm } from "react-hook-form"
import { BiArrowBack } from "react-icons/bi"
import { toast } from "sonner"

const page = () => {
  const router = useRouter()
  const supabase = createClient()
  const [isLoading, setIsLoading] = useState<boolean>(false)
  const [user, setUser] = useState<any | null>(null)
  useEffect(() => {
    const fetchUser = async () => {
      const { data: { user }, error } = await supabase.auth.getUser();
      if (error) {
        console.error(error);
        return;
      }
      setUser(user)
    };
    fetchUser();
  }, []);

  const { register, handleSubmit, formState: { errors }, reset } = useForm({
    resolver: zodResolver(CollectionSchema),
    defaultValues: {
      title: "",
      tag1: "",
      tag2: "",
      tag3: "",
      description: ""
    }
  })

  const queryClient = useQueryClient()

  const mutation = useMutation<void, Error, CollectionType>({
    mutationFn: async (collectionData) => {
      await createCollection(collectionData, user.id);
    },
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ['collections'] })
      toast("collection has been added!")
    },
    onError: (error) => {
      toast("an error has occured!")
      console.log(error)
    }
  })

  const onSubmit = (data: CollectionType) => {
    setIsLoading(true)
    mutation.mutate(data, user.id)
    setIsLoading(false)
  }

  return (
    <section className="p-5">
      <Button variant="outline" onClick={() => router.push("/collections")}><BiArrowBack /></Button>
      <main className="mt-10 flex justify-center">
        <div className="w-11/12">
          <h1 className="text-3xl font-extrabold mb-5">Add Collection</h1>
          <div className="flex justify-center items-center">
            <form className="border p-5 rounded-lg sm:flex sm:justify-between gap-15 grid grid-cols-1" onSubmit={handleSubmit(onSubmit)}>
              <div>
                <div>
                  <label htmlFor="title" className="text-sm text-gray-500">Title</label>
                  <Input id="title" {...register("title")} />
                  {errors.title && (<p className="text-red-600 text-sm mt-1 pl-2">{errors.title.message}</p>)}
                </div>
                <div>
                  <label htmlFor="description" className="text-sm text-gray-500">tag #1</label>
                  <Input {...register("tag1")} />
                  {errors.tag1 && (<p className="text-red-600 text-sm mt-1 pl-2">{errors.tag1.message}</p>)}
                </div>
                <div>
                  <label htmlFor="description" className="text-sm text-gray-500">tag #2</label>
                  <Input {...register("tag2")} />
                  {errors.tag2 && (<p className="text-red-600 text-sm mt-1 pl-2">{errors.tag2.message}</p>)}
                </div>
                <div>
                  <label htmlFor="description" className="text-sm text-gray-500">tag #3</label>
                  <Input {...register("tag3")} />
                  {errors.tag3 && (<p className="text-red-600 text-sm mt-1 pl-2">{errors.tag3.message}</p>)}
                </div>
              </div>
              <div>
                <label htmlFor="description" className="text-sm text-gray-500">Description</label>
                <Textarea id="description" className="h-40" {...register("description")} />
                {errors.description && (<p className="text-red-600 text-sm mt-1 pl-2">{errors.description.message}</p>)}
                <div className="flex justify-end">
                  <Button className="mt-3">Add</Button>
                </div>
              </div>
            </form>
          </div>
        </div>
      </main>
    </section>
  )
}

export default page
