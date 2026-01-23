"use client"
import { Button } from "@/components/ui/button"
import {
  Dialog,
  DialogClose,
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog"
import { Input } from "@/components/ui/input"
import { Link2 } from "lucide-react"
import { Select, SelectContent, SelectGroup, SelectItem, SelectLabel, SelectTrigger, SelectValue } from "@/components/ui/select"
import { useForm, Controller } from "react-hook-form"
import { zodResolver } from "@hookform/resolvers/zod"
import { LinkForm, LinkType } from "@/app/schemas/link.schema"
import { useMutation, useQueryClient } from "@tanstack/react-query"
import { addLink } from "@/app/api/link/route"
import { createClient } from "@/utils/supabase/client"
import { useEffect, useState } from "react"
import { toast } from "sonner"
import { Spinner } from "@/components/ui/spinner"

export function AddLink() {
  const supabase = createClient()
  const [user, setUser] = useState<any | null>(null);
  const [isLoading, setIsLoading] = useState<boolean>(false);

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


  const { register, handleSubmit, control, formState: { errors }, reset } = useForm({
    resolver: zodResolver(LinkForm),
    defaultValues: {
      url: "",
      title: "",
      priority: "",
      purpose: "",
    },
  })

  const queryClient = useQueryClient()

  const mutation = useMutation<
    any,
    Error,
    LinkType & { user_id: string }
  >({
    mutationFn: addLink,
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ["link"] });
      toast.success("link added succesfully✨")
      reset();
    },
    onError: (error: any) => {
      toast.error("Error: " + error.message)
    }
  })

  const onSubmit = (data: LinkType) => {
    setIsLoading(true)
    mutation.mutate({ ...data, user_id: user.id })
    setIsLoading(false)
  }

  return (
    <Dialog>
      <DialogTrigger asChild>
        <div className="flex flex-col gap-1 items-center hover:shadow-lg py-5 cursor-pointer">
          <Link2 size={40} color="gray" />
          <p className="font-extrabold">Add Link</p>
        </div>
      </DialogTrigger>

      <DialogContent className="sm:max-w-[425px] max-w-[400px]">
        <form onSubmit={handleSubmit(onSubmit)} className="px-5 flex flex-col gap-4">
          <DialogHeader>
            <DialogTitle className="text-lg font-extrabold">Add Link</DialogTitle>
            <DialogDescription>
              Keep all your important links in one place.
            </DialogDescription>
          </DialogHeader>

          <div>
            <Input placeholder="https://example.com" {...register("url")} />
            {errors.url && <p className="text-red-500 text-sm mt-1">{errors.url.message}</p>}
          </div>

          <div>
            <p className="text-sm text-gray-500 mb-1">A short name to recognize this link</p>
            <Input placeholder="Name it in a way that makes sense to you" {...register("title")} />
            {errors.title && <p className="text-red-500 text-sm mt-1">{errors.title.message}</p>}
          </div>

          <div className="flex gap-4">
            <div className="flex-1">
              <Controller
                name="priority"
                control={control}
                render={({ field }) => (
                  <Select value={field.value} onValueChange={field.onChange}>
                    <SelectTrigger>
                      <SelectValue placeholder="Priority" />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectGroup>
                        <SelectLabel>Priority</SelectLabel>
                        <SelectItem value="low">Low</SelectItem>
                        <SelectItem value="medium">Medium</SelectItem>
                        <SelectItem value="high">High</SelectItem>
                      </SelectGroup>
                    </SelectContent>
                  </Select>
                )}
              />
              {errors.priority && <p className="text-red-500 text-sm mt-1">{errors.priority.message}</p>}
            </div>

            <div className="flex-1">
              <Controller
                name="purpose"
                control={control}
                render={({ field }) => (
                  <Select value={field.value} onValueChange={field.onChange}>
                    <SelectTrigger>
                      <SelectValue placeholder="Purpose" />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectGroup>
                        <SelectLabel>Purpose</SelectLabel>
                        <SelectItem value="learning">Learning</SelectItem>
                        <SelectItem value="work">Working / Project</SelectItem>
                        <SelectItem value="inspiration">Inspiration</SelectItem>
                        <SelectItem value="news">News</SelectItem>
                        <SelectItem value="research">Research</SelectItem>
                        <SelectItem value="later">I'll check later</SelectItem>
                      </SelectGroup>
                    </SelectContent>
                  </Select>
                )}
              />
              {errors.purpose && <p className="text-red-500 text-sm mt-1">{errors.purpose.message}</p>}
            </div>
          </div>

          <DialogFooter className="mt-4 flex justify-end gap-2">
            <DialogClose asChild>
              <Button variant="outline">Cancel</Button>
            </DialogClose>
            <Button type="submit" disabled={isLoading}>{isLoading ? <Spinner /> : "Save"}</Button>
          </DialogFooter>
        </form>
      </DialogContent>
    </Dialog>
  )
}
