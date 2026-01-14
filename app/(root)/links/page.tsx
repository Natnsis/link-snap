import Header from "@/components/Header"
import { Separator } from "@/components/ui/separator"
import { Button } from "@/components/ui/button"
import { Select, SelectTrigger, SelectGroup, SelectContent, SelectLabel, SelectItem, SelectValue } from "@/components/ui/select"
import { Download, Edit, Link, PlayIcon, Save } from "lucide-react"
import { Badge } from "@/components/ui/badge"
import { linkCards } from "@/lib/constants/collections"
const page = () => {
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
                <SelectValue placeholder="Content type" />
              </SelectTrigger>
              <SelectContent>
                <SelectGroup>
                  <SelectLabel>Contents</SelectLabel>
                  <SelectItem value="apple">Video</SelectItem>
                  <SelectItem value="banana">Article</SelectItem>
                  <SelectItem value="blueberry">Tutorial</SelectItem>
                  <SelectItem value="grapes">Course</SelectItem>
                  <SelectItem value="pineapple">Tool / Website</SelectItem>
                  <SelectItem value="pineapple">Repo / Code</SelectItem>
                  <SelectItem value="pineapple">Thread</SelectItem>
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

      <div className="grid sm:grid-cols-4 grid-cols-1 mt-5 gap-5 px-10">
        {linkCards ? linkCards.map((l, index) => (
          <div className="h-[90vh]" key={index}>
            <div className="bg-gray-200 h-[60vh] rounded-t-lg flex items-center justify-center">
              <PlayIcon size={60} />
            </div>
            <div className="my-2">
              <h1 className="font-bold">{l.title}</h1>
              <p className="text-xs text-gray-600">{l.description}</p>
              <div className="flex gap-2 my-2">
                <Badge variant="outline">{l.categories[0]}</Badge>
                <Badge variant="outline">{l.categories[1]}</Badge>
                <Badge variant="outline">{l.categories[2]}</Badge>
                <Badge variant="outline">{l.categories[3]}</Badge>
              </div>
            </div>
            <div className="flex justify-start gap-2 mt-5">
              <Button size="icon"><Link /></Button>
              <Button size="icon" variant="outline"><Edit /></Button>
              <Button size="icon"><Download /></Button>
            </div>
          </div>
        )) : <div>"no links found"</div>}
      </div>
    </section >
  )
}

export default page
