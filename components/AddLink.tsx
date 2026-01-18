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
import { Select, SelectContent, SelectGroup, SelectItem, SelectLabel, SelectTrigger, SelectValue } from "./ui/select"
import { useForm, Controller } from "react-hook-form"
import { zodResolver } from "@hookform/resolvers/zod"
import { LinkForm } from "@/app/schemas/link.schema"

export function AddLink() {
  const { register, handleSubmit, control, formState: { errors } } = useForm({
    resolver: zodResolver(LinkForm),
    defaultValues: {
      url: "",
      title: "",
      priority: "medium",
      purpose: "learning",
    },
  })

  const onSubmit = (data: any) => {
    console.log("Form submitted:", data)
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
            <Button type="submit">Save Link</Button>
          </DialogFooter>
        </form>
      </DialogContent>
    </Dialog>
  )
}
