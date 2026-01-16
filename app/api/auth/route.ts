import { createClient } from "@/utils/supabase/client"


export const registerWithPassword = async (data) => {
  try {
    const supabase = createClient();
    const { email, password } = data
    const { error: registerError } = await supabase.auth.signUp({
      email,
      password
    });

    if (registerError) throw registerError
  } catch (error) {
    if (error) throw error
  }
}

export const loginWithPassword = async (data) => {
  try {
    const supabase = createClient();
    const { email, password } = data
    const { error: loginError } = await supabase.auth.signInWithPassword({
      email,
      password
    });
    if (loginError) throw loginError
  } catch (error) {
    if (error) throw error
  }
}

export const signUpWithGoogle = async (data) => {
  try {
    const supabase = createClient()
    const { error: googleError } = await supabase.auth.signInWithOAuth({
      provider: "google",
    });
    if (googleError) throw googleError
  } catch (error) {
    if (error) throw error
  }
}

