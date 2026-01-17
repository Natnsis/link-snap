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
import { useForm } from "react-hook-form"
import { zodResolver } from "@hookform/resolvers/zod"
import { LinkForm } from "@/app/schemas/link.schema"
import { Controller } from "react-hook-form"

export function AddLink() {
  const { register, handleSubmit, control, formState: { errors } } = useForm({
    resolver: zodResolver(LinkForm),
    defaultValues: {
      url: "",
      title: "",
      priority: "",
      purpose: ""
    }
  })

  return (
    <Dialog>
      <form>
        <DialogTrigger asChild>
          <div className="flex flex-col gap-1 items-center hover:shadow-lg py-5">
            <Link2 size={40} color="gray" />
            <p className="font-extrabold">Add Link</p>
          </div>
        </DialogTrigger>
        <DialogContent className="sm:max-w-[425px] max-w-[400px]">
          <DialogHeader>
            <DialogTitle className="text-lg font-extrabold">Add Link</DialogTitle>
            <DialogDescription>
              Keep all your important links in one place..
            </DialogDescription>
          </DialogHeader>
          <div className="px-5 flex flex-col gap-3">
            <Input placeholder="https://example.com" {...register("url")} />
            <p>"hehe"</p>
            <div>
              <p>A short name to recognize this link</p>
              <Input placeholder="Name it in a way that makes sense to you"  {...register("title")} />
              {errors.title && (
                <p className="text-red-500 text-sm mt-1">
                  {errors.title.message}
                </p>
              )}
            </div>
            <div className="flex gap-10">

              <Controller
                name="priority"
                control={control}
                render={({ field }) => (
                  <Select
                    value={field.value}
                    onValueChange={field.onChange}
                  >
                    <SelectTrigger>
                      <SelectValue placeholder="Priority" />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectGroup>
                        <SelectLabel>Priorities</SelectLabel>
                        <SelectItem value="learning">Learning</SelectItem>
                        <SelectItem value="work">Working</SelectItem>
                      </SelectGroup>
                    </SelectContent>
                  </Select>
                )}
              />
              {errors.priority && (
                <p className="text-red-500 text-sm mt-1">
                  {errors.priority.message}
                </p>
              )}

              <Controller
                name="purpose"
                control={control}
                render={({ field }) => (
                  <Select
                    value={field.value}
                    onValueChange={field.onChange}
                  >
                    <SelectTrigger>
                      <SelectValue placeholder="Purpose" />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectGroup>
                        <SelectLabel>Priorities</SelectLabel>
                        <SelectItem value="learning">Learning</SelectItem>
                        <SelectItem value="work">Working</SelectItem>
                      </SelectGroup>
                    </SelectContent>
                  </Select>
                )}
              />
              {errors.purpose && (
                <p className="text-red-500 text-sm mt-1">
                  {errors.purpose.message}
                </p>
              )}

            </div>
          </div>
          <DialogFooter>
            <DialogClose asChild>
              <Button variant="outline">Cancel</Button>
            </DialogClose>
            <Button type="submit">Save link</Button>
          </DialogFooter>
        </DialogContent>
      </form>
    </Dialog >
  )
}
