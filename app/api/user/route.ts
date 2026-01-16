import { createClient } from "@/utils/supabase/client"
import { redirect } from "next/navigation";
import { toast } from "sonner";

export const userData = async () => {
  try {
    const supabase = createClient();
    const { data: { user }, error: userError } = await supabase.auth.getUser();
    if (!user) {
      toast('user not authenticated');
      redirect("/auth/login")
    }
    return user
  } catch (e) {
    console.log(e)
  }
}
