"use client"
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { FcGoogle } from "react-icons/fc";
import Link from "next/link";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { AuthSchema, AuthType } from "@/app/schemas/auth.schema";
import { loginWithGoogle, registerWithPassword } from "@/app/api/auth/route";
import { toast } from "sonner"
import { useRouter } from "next/navigation";

const page = () => {
  const router = useRouter();
  const { register, handleSubmit, formState: { errors, isSubmitting } } = useForm({
    resolver: zodResolver(AuthSchema),
    defaultValues: {
      email: "",
      password: ""
    }
  });

  const onSubmit = async (data: AuthType) => {
    try {
      const response = await registerWithPassword(data)
      toast("email verfication sent successfully!");
      console.log(response);
      router.push("/auth/login")
    } catch (e) {
      console.log(e)
    }
  }

  return (
    <section className="h-screen flex justify-center items-center">
      <div className="flex flex-col">
        <div className="flex justify-center">
          <img src="/inner/logo.png" className="w-30" />
        </div>
        <h1 className="text-4xl font-extrabold text-center mb-5">Welcome to the platform</h1>
        <form onSubmit={handleSubmit(onSubmit)} className="flex justify-center">
          <div className="w-60 flex flex-col gap-3">
            <Input className="bg-gray-100" placeholder="example@gmail.com" {...register("email")} />
            <p className="text-sm text-center text-red-700">{errors.email?.message}</p>
            <Input
              className="bg-gray-100"
              type="password"
              placeholder="*******"
              {...register("password")}
            />
            <p className="text-sm text-center text-red-700">{errors.password?.message}</p>
            <Button className="w-full" size="sm" type="submit" disabled={isSubmitting}>
              {isSubmitting ? "registering..." : "Register"}
            </Button>
            <p className="text-center">or</p>
            <Button variant="outline" onClick={() => loginWithGoogle}><FcGoogle size={20} />Continue with google</Button>
            <p className="text-sm text-center">
              Aleady have an accoutn? login <Link href="/auth/login" className="font-bold hover:underline">here</Link>
            </p>
          </div>
        </form>
      </div>
    </section >
  )
}

export default page
