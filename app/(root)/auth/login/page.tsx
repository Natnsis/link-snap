"use client"
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { FcGoogle } from "react-icons/fc";
import Link from "next/link";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { AuthSchema, AuthType } from "@/app/schemas/auth.schema";
import { googleOAuth, loginWithPassword } from "@/app/api/auth/route";
import { toast } from "sonner"
import { useRouter } from "next/navigation";
import { useState } from "react";

const page = () => {
  const router = useRouter()
  const [isLoading, setIsLoading] = useState<boolean>(false);
  const { register, handleSubmit, formState: { errors, isSubmitting } } = useForm<AuthType>({
    resolver: zodResolver(AuthSchema),
    defaultValues: {
      email: "",
      password: ""
    }
  });

  const onSubmit = async (data: AuthType) => {
    try {
      const response = await loginWithPassword(data)
      toast("welcome back! ✨");
      console.log(response);
      router.push("/dashboard")
    } catch (e: any) {
      toast(e.message);
    }
  }

  const loginWithGoogle = async () => {
    try {
      setIsLoading(true)
      await googleOAuth()
      toast("Welcome back! ✨")
    } catch (error) {
      console.error(error)
      toast("Login failed 😢")
    } finally {
      setIsLoading(false)
    }
  }

  return (
    <section className="h-screen flex justify-center items-center">
      <div className="flex flex-col">
        <div className="flex justify-center">
          <img src="/inner/logo.png" className="w-30" />
        </div>
        <h1 className="text-4xl font-extrabold text-center mb-5">Login to Commit</h1>
        <form onSubmit={handleSubmit(onSubmit)} className="flex justify-center">
          <div className="w-60 flex flex-col gap-3">
            <Input className="bg-gray-100" placeholder="example@gmail.com" {...register("email")} />
            <p className="text-center text-red-700 text-sm">{errors.email?.message}</p>
            <Input
              className="bg-gray-100"
              type="password"
              placeholder="*******"
              {...register("password")}
            />
            <p className="text-center text-red-700 text-sm">{errors.password?.message}</p>
            <Button className="w-full" size="sm" disabled={isSubmitting} type="submit">
              {isSubmitting ? "loading..." : "Login"}
            </Button>
            <p className="text-center">or</p>
            <Button variant="outline" onClick={loginWithGoogle} disabled={isLoading}><FcGoogle size={20} />Continue with google</Button>
            <p className="text-sm text-center">
              Don't have an account? register <Link href="/auth/register" className="font-bold hover:underline">here</Link>
            </p>
          </div>
        </form>
      </div>
    </section>
  )
}

export default page
