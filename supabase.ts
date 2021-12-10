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

export async function insertVote(
	user_id: string,
	choice_id: number,
	scores: any
) {
	const { data, error } = await supabase
		.from("votes")
		.insert([{ user_id, choice_id, scores }]);
}

export async function readMyVote(user_id: string, choice_id: number) {
	let { data: votes, error } = await supabase
		.from("votes")
		.select("scores")
		.eq("user_id", user_id)
		.eq("choice_id", choice_id);

	if (!votes) return [];

	console.log(votes[0].scores);

	return votes[0].scores;
}

export async function readAllVotes(choice_id: number) {
	let { data: votes, error } = await supabase
		.from("votes")
		.select("scores")
		.eq("choice_id", choice_id);

	if (!votes) return [];

	const votesArray = votes.map(({ scores }) => [...scores]);

	return votesArray;
}
