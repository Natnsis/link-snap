import Header from "@/components/Header"
import { Separator } from "@/components/ui/separator"
import { Button } from "@/components/ui/button"
import { Select, SelectTrigger, SelectGroup, SelectContent, SelectLabel, SelectItem, SelectValue } from "@/components/ui/select"
const page = () => {
  return (
    <section className="p-5">
      <Header />
      <div className="bg-gray-100 mt-5 p-5">
        <h1 className="text-4xl font-extrabold">Collections</h1>
        <p className="text-gray-700 pl-2">Organize your saved links</p>
        <Separator className="my-5" />
        <p className="text-sm mb-5">Filter by:</p>

        <div className="flex gap-5 justify-between">
          <div className="flex gap-5">
            <Select>
              <SelectTrigger className="rounded-full bg-white">
                <SelectValue placeholder="Select a fruit" />
              </SelectTrigger>
              <SelectContent>
                <SelectGroup>
                  <SelectLabel>Fruits</SelectLabel>
                  <SelectItem value="apple">Apple</SelectItem>
                  <SelectItem value="banana">Banana</SelectItem>
                  <SelectItem value="blueberry">Blueberry</SelectItem>
                  <SelectItem value="grapes">Grapes</SelectItem>
                  <SelectItem value="pineapple">Pineapple</SelectItem>
                </SelectGroup>
              </SelectContent>
            </Select>

            <Select>
              <SelectTrigger className="rounded-full bg-white">
                <SelectValue placeholder="Select a fruit" />
              </SelectTrigger>
              <SelectContent>
                <SelectGroup>
                  <SelectLabel>Fruits</SelectLabel>
                  <SelectItem value="apple">Apple</SelectItem>
                  <SelectItem value="banana">Banana</SelectItem>
                  <SelectItem value="blueberry">Blueberry</SelectItem>
                  <SelectItem value="grapes">Grapes</SelectItem>
                  <SelectItem value="pineapple">Pineapple</SelectItem>
                </SelectGroup>
              </SelectContent>
            </Select>

            <Select>
              <SelectTrigger className="rounded-full bg-white">
                <SelectValue placeholder="Select a fruit" />
              </SelectTrigger>
              <SelectContent>
                <SelectGroup>
                  <SelectLabel>Fruits</SelectLabel>
                  <SelectItem value="apple">Apple</SelectItem>
                  <SelectItem value="banana">Banana</SelectItem>
                  <SelectItem value="blueberry">Blueberry</SelectItem>
                  <SelectItem value="grapes">Grapes</SelectItem>
                  <SelectItem value="pineapple">Pineapple</SelectItem>
                </SelectGroup>
              </SelectContent>
            </Select>

            <Select>
              <SelectTrigger className="rounded-full bg-white">
                <SelectValue placeholder="Select a fruit" />
              </SelectTrigger>
              <SelectContent>
                <SelectGroup>
                  <SelectLabel>Fruits</SelectLabel>
                  <SelectItem value="apple">Apple</SelectItem>
                  <SelectItem value="banana">Banana</SelectItem>
                  <SelectItem value="blueberry">Blueberry</SelectItem>
                  <SelectItem value="grapes">Grapes</SelectItem>
                  <SelectItem value="pineapple">Pineapple</SelectItem>
                </SelectGroup>
              </SelectContent>
            </Select>
          </div>
          <Button size="sm">Remove Filters</Button>
        </div>
      </div>

      <div className="grid grid-cols-4 mt-5 gap-5">
        <div className="bg-black h-40"></div>
        <div className="bg-black h-40"></div>
        <div className="bg-black h-40"></div>
        <div className="bg-black h-40"></div>
        <div className="bg-black h-40"></div>
        <div className="bg-black h-40"></div>
        <div className="bg-black h-40"></div>
        <div className="bg-black h-40"></div>
        <div className="bg-black h-40"></div>
        <div className="bg-black h-40"></div>
      </div>
    </section >
  )
}

export default page
