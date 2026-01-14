import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { FcGoogle } from "react-icons/fc";
import Link from "next/link";

const page = () => {
  return (
    <section className="h-screen flex justify-center items-center">
      <div className="flex flex-col">
        <div className="flex justify-center">
          <img src="/inner/link.png" className="w-30" />
        </div>
        <h1 className="text-4xl font-extrabold text-center mb-5">Welcome to the platform</h1>
        <div className="flex justify-center">
          <div className="w-60 flex flex-col gap-3">
            <Input className="bg-gray-100" placeholder="example@gmail.com" />
            <Input className="bg-gray-100" placeholder="*******" />
            <Button className="w-full" size="sm">Register</Button>
            <p className="text-center">or</p>
            <Button variant="outline"><FcGoogle size={20} />Continue with google</Button>
            <p className="text-sm text-center">
              Aleady have an accoutn? login <Link href="/auth/login" className="font-bold hover:underline">here</Link>
            </p>
          </div>
        </div>
      </div>
    </section>
  )
}

export default page
