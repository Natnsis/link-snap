"use client"
import { Avatar, AvatarImage, AvatarFallback } from "@/components/ui/avatar"
import { Button } from "@/components/ui/button"
import { ModeToggle } from "@/components/mode-toggle"
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
import { createClient } from "@/utils/supabase/client"
import { useEffect, useState } from "react"
import { logout } from "@/app/api/auth/route"

const Header = () => {
  const router = useRouter();
  const supabase = createClient()
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

  const signOut = async () => {
    await logout()
    router.push("/auth/login")
  }

  return (
    <header className="flex justify-center">
      <div className="flex justify-between w-[80%]">
        <div className="flex gap-1">
          <img src="/inner/logo.png" className="w-10 rounded-full" />
          <h1 className="text-xl font-extrabold">Commit</h1>
        </div>

        {/*desktop navigation*/}
        <nav className="gap-5 sm:flex sm:items-center hidden">
          <Button className="rounded-full bg-gray-200" size="sm" variant="outline" onClick={() => router.push("/dashboard")}>
            Dashboard
          </Button>

          <Button className="rounded-full bg-gray-200" size="sm" variant="outline" onClick={() => router.push("/links")}>
            All Links
          </Button>
          <ModeToggle />
          <DropdownMenu>
            <DropdownMenuTrigger>
              <Avatar className="rounded-lg">
                <AvatarImage
                  src={user?.user_metadata?.avatar_url ?? "https://github.com/evilrabbit.png"} alt="@evilrabbit"
                />
                <AvatarFallback>PF</AvatarFallback>
              </Avatar>
            </DropdownMenuTrigger>
            <DropdownMenuContent>
              <DropdownMenuLabel>{user ? user?.user_metadata?.full_name : "guest"}</DropdownMenuLabel>
              <DropdownMenuSeparator />
              <DropdownMenuItem>{user ? user?.email : "unauthorized"}</DropdownMenuItem>
              <DropdownMenuItem onClick={signOut}>Logout</DropdownMenuItem>
            </DropdownMenuContent>
          </DropdownMenu>
        </nav>

        {/*no desktop navigation*/}
        <div className="sm:hidden flex gap-5">
          <DropdownMenu>
            <DropdownMenuTrigger><MenuIcon /></DropdownMenuTrigger>
            <DropdownMenuContent>
              <DropdownMenuItem onClick={() => router.push("/dashboard")}>Dashboard</DropdownMenuItem>
              <DropdownMenuItem onClick={() => router.push("/links")}>All Links</DropdownMenuItem>
            </DropdownMenuContent>
          </DropdownMenu>

          <DropdownMenu>
            <DropdownMenuTrigger>
              <Avatar className="rounded-lg">
                <AvatarImage
                  src={user?.user_metadata?.avatar_url ?? "https://github.com/evilrabbit.png"}
                  alt="@evilrabbit"
                />
                <AvatarFallback>PF</AvatarFallback>
              </Avatar>
            </DropdownMenuTrigger>
            <DropdownMenuContent>
              <DropdownMenuLabel>{user ? user?.user_metadata?.full_name : "guest"}</DropdownMenuLabel>
              <DropdownMenuSeparator />
              <DropdownMenuItem>{user ? user?.email : "unauthorized"}</DropdownMenuItem>
              <DropdownMenuItem onClick={signOut}>Logout</DropdownMenuItem>
            </DropdownMenuContent>
          </DropdownMenu>
        </div>
      </div>
    </header>
  )
}

export default Header 
