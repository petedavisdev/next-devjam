import { createClient } from "@supabase/supabase-js";

const supabaseUrl = process.env.NEXT_PUBLIC_SUPABASE_URL || "";
const supabaseAnonKey = process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY || "";

export const supabase = createClient(supabaseUrl, supabaseAnonKey);

export async function supabaseLogin(email: string) {
	try {
		const { error } = await supabase.auth.signIn({ email });
		if (error) throw error;
		alert(`A magic login link was sent to ${email}`);
	} catch (error: any) {
		alert(error.error_description || error.message);
	}
}
