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

export function AddLink() {
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
            <Input placeholder="https://example.com" />
            <div>
              <p>A short name to recognize this link</p>
              <Input placeholder="Name it in a way that makes sense to you" />
            </div>
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
          </div>
          <DialogFooter>
            <DialogClose asChild>
              <Button variant="outline">Cancel</Button>
            </DialogClose>
            <Button type="submit">Save changes</Button>
          </DialogFooter>
        </DialogContent>
      </form>
    </Dialog>
  )
}
