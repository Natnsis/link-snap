
import { Button } from "@/components/ui/button"

const Header = () => {
  return (
    <header className="flex justify-center">
      <div className="flex justify-between w-[80%]">
        <h1 className="text-xl font-extrabold">LinkSnap</h1>
        <nav className="flex gap-5">
          <Button className="rounded-full bg-gray-200" size="sm" variant="outline">Dashboard</Button>
          <Button className="rounded-full bg-gray-200" size="sm" variant="outline">Collections</Button>
          <Button className="rounded-full bg-gray-200" size="sm" variant="outline">All Links</Button>
        </nav>
      </div>
    </header>
  )
}

export default Header 
