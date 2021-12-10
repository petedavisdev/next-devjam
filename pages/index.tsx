import { Session } from "@supabase/supabase-js";
import Link from "next/link";
import { useEffect, useState } from "react";
import { useLocalStorage } from "react-use";
import { insertVote, supabase } from "../supabase";

export default function Home() {
	const [session, setSession] = useState<Session | null>(null);
	const [vote] = useLocalStorage("vote");

	useEffect(() => {
		setSession(supabase.auth.session());

		supabase.auth.onAuthStateChange((_event, session) => {
			setSession(session);
		});

		const userId = session?.user?.id;
		console.log(userId);

		if (!userId) return;

		insertVote(userId, 1, vote);
	}, [session?.user?.id, vote]);

	return (
		<main>
			<p>Hi {session?.user?.email}</p>
			<h1>
				<Link href={session ? "/results" : "/choose"}>
					<a>Which milk chocolate is yummiest?</a>
				</Link>
			</h1>
		</main>
	);
}
