import { Session } from "@supabase/supabase-js";
import Image from "next/image";
import { useEffect, useState } from "react";
import { chocolateList } from "../data/chocolateList";
import { readAllVotes, supabase } from "../supabase";

export default function ChocolateResults() {
	const [session, setSession] = useState<Session | null>(null);
	const [allVotes, setAllVotes] = useState([]);

	async function getVotes(choice: number) {
		const votes: any = await readAllVotes(choice);
		setAllVotes(votes);
	}

	useEffect(() => {
		setSession(supabase.auth.session());

		supabase.auth.onAuthStateChange((_event, session) => {
			setSession(session);
		});

		const userId = session?.user?.id;

		if (!userId) return;

		getVotes(1);
	}, [session?.user?.id]);

	const scoredChoices = chocolateList.map((item, i) => {
		let total = 0;

		allVotes.forEach((vote) => {
			total += vote[i];
		});

		return [total, item];
	});

	const resultsList = scoredChoices
		.sort()
		.reverse()
		.map(([score, { name, imageUrl }]: any, index) => (
			<li key={index}>
				<Image src={imageUrl} alt={name} width={80} height={80} />
				{score}
			</li>
		));

	return (
		<main>
			<h1>My results</h1>
			<ol>{resultsList}</ol>
		</main>
	);
}
