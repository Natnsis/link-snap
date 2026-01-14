"use client"
import { Avatar, AvatarImage, AvatarFallback } from "@/components/ui/avatar"
import { Button } from "@/components/ui/button"
import { useRouter } from "next/navigation"

const Header = () => {
  const router = useRouter();
  return (
    <header className="flex justify-center">
      <div className="flex justify-between w-[80%]">
        <h1 className="text-xl font-extrabold">LinkSnap</h1>
        <nav className="flex gap-5">
          <Button className="rounded-full bg-gray-200" size="sm" variant="outline" onClick={() => router.push("/dashboard")}>
            Dashboard
          </Button>

          <Button className="rounded-full bg-gray-200" size="sm" variant="outline" onClick={() => router.push("/collections")}>
            Collections
          </Button>

          <Button className="rounded-full bg-gray-200" size="sm" variant="outline" onClick={() => router.push("/links")}>
            All Links
          </Button>

          <Avatar className="rounded-lg">
            <AvatarImage
              src="https://github.com/evilrabbit.png"
              alt="@evilrabbit"
            />
            <AvatarFallback>ER</AvatarFallback>
          </Avatar>
        </nav>
      </div>
    </header>
  )
}

export default Header 
