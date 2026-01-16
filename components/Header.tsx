"use client"
import { Avatar, AvatarImage, AvatarFallback } from "@/components/ui/avatar"
import { Button } from "@/components/ui/button"
import { useRouter } from "next/navigation"
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
  DropdownMenuLabel,
  DropdownMenuSeparator
} from "@/components/ui/dropdown-menu"
import { MenuIcon } from "lucide-react"

const Header = () => {
  const router = useRouter();
  return (
    <header className="flex justify-center">
      <div className="flex justify-between w-[80%]">
        <h1 className="text-xl font-extrabold">LinkSnap</h1>

        {/*desktop navigation*/}
        <nav className="gap-5 sm:flex hidden">
          <Button className="rounded-full bg-gray-200" size="sm" variant="outline" onClick={() => router.push("/dashboard")}>
            Dashboard
          </Button>

          <Button className="rounded-full bg-gray-200" size="sm" variant="outline" onClick={() => router.push("/collections")}>
            Collections
          </Button>

          <Button className="rounded-full bg-gray-200" size="sm" variant="outline" onClick={() => router.push("/links")}>
            All Links
          </Button>
          <DropdownMenu>
            <DropdownMenuTrigger>
              <Avatar className="rounded-lg">
                <AvatarImage
                  src="https://github.com/evilrabbit.png"
                  alt="@evilrabbit"
                />
                <AvatarFallback>ER</AvatarFallback>
              </Avatar>
            </DropdownMenuTrigger>
            <DropdownMenuContent>
              <DropdownMenuLabel>Natnael Sisay</DropdownMenuLabel>
              <DropdownMenuSeparator />
              <DropdownMenuItem>nsisay49@gmail.com</DropdownMenuItem>
              <DropdownMenuItem onClick={() => router.push("/auth/login")}>Logout</DropdownMenuItem>
            </DropdownMenuContent>
          </DropdownMenu>
        </nav>

        {/*no desktop navigation*/}
        <div className="sm:hidden flex gap-5">
          <DropdownMenu>
            <DropdownMenuTrigger><MenuIcon /></DropdownMenuTrigger>
            <DropdownMenuContent>
              <DropdownMenuItem onClick={() => router.push("/dashboard")}>Dashboard</DropdownMenuItem>
              <DropdownMenuItem onClick={() => router.push("/collections")}>Collections</DropdownMenuItem>
              <DropdownMenuItem onClick={() => router.push("/links")}>All Links</DropdownMenuItem>
            </DropdownMenuContent>
          </DropdownMenu>

          <DropdownMenu>
            <DropdownMenuTrigger>
              <Avatar className="rounded-lg">
                <AvatarImage
                  src="https://github.com/evilrabbit.png"
                  alt="@evilrabbit"
                />
                <AvatarFallback>ER</AvatarFallback>
              </Avatar>
            </DropdownMenuTrigger>
            <DropdownMenuContent>
              <DropdownMenuLabel>Natnael Sisay</DropdownMenuLabel>
              <DropdownMenuSeparator />
              <DropdownMenuItem>nsisay49@gmail.com</DropdownMenuItem>
              <DropdownMenuItem onClick={() => router.push("/auth/login")}>Logout</DropdownMenuItem>
            </DropdownMenuContent>
          </DropdownMenu>
        </div>
      </div>
    </header>
  )
}

export default Header 
