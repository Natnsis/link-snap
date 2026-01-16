import { AuthType } from "@/app/schemas/auth.schema";
import { createClient } from "@/utils/supabase/client"


export const registerWithPassword = async (data: AuthType) => {
  try {
    const supabase = createClient();
    const { email, password } = data
    const { data: registeredUser, error: registerError } = await supabase.auth.signUp({
      email,
      password
    });
    if (registerError) throw registerError
    if (registeredUser) return registeredUser;
  } catch (error) {
    if (error) throw error
  }
}

export const loginWithPassword = async (data: AuthType) => {
  try {
    const supabase = createClient();
    const { email, password } = data
    const { data: userData, error: loginError } = await supabase.auth.signInWithPassword({
      email,
      password
    });
    if (loginError) throw loginError
    if (userData) return userData;
  } catch (error) {
    if (error) throw error
  }
}

export const signUpWithGoogle = async () => {
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

export const logout = async () => {
  try {
    const supabase = createClient()
    const { error } = await supabase.auth.signOut()
    if (error) throw error
  } catch (error) {
    if (error) throw error
  }
}
