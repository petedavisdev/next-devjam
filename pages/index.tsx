import { Session } from "@supabase/supabase-js";
import Link from "next/link";
import { useEffect, useState } from "react";
import { supabase } from "../supabase";

export default function Home() {
	const [session, setSession] = useState<Session | null>(null);

	useEffect(() => {
		setSession(supabase.auth.session());

		supabase.auth.onAuthStateChange((_event, session) => {
			setSession(session);
		});
	}, []);

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
