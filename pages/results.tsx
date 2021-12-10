import { Session } from "@supabase/supabase-js";
import Image from "next/image";
import { useEffect, useState } from "react";
import { chocolateList } from "../data/chocolateList";
import { readAllVotes, supabase } from "../supabase";

export default function ChocolateResults() {
	const [session, setSession] = useState<Session | null>(null);
	const [allVotes, setAllVotes] = useState([]);
	const [myVotes, setMyVotes] = useState([]);

	async function getAllVotes(choice: number) {
		const votes: any = await readAllVotes(choice);
		setAllVotes(votes);
	}

	async function getMyVotes(email: string, choice: number) {
		const votes: any = await readMyVotes(email, choice);
		setMyVotes(votes);
	}

	useEffect(() => {
		getAllVotes(1);

		setSession(supabase.auth.session());

		supabase.auth.onAuthStateChange((_event, session) => {
			setSession(session);
		});

		const userEmail = session?.user?.email;

		if (!userEmail) return;

		getMyVotes(userEmail, 1);
	}, [session?.user?.email]);

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

	const myScoredChoices = chocolateList.map((item, i) => [myVotes[i], item]);

	const myResultsList = myScoredChoices
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
			<h1>Results</h1>
			<div className="flex">
				<div>
					<h2>All</h2>
					<ol>{resultsList}</ol>
				</div>
				<div>
					<h2>Me</h2>
					<ol>{myResultsList}</ol>
				</div>
			</div>
		</main>
	);
}
function readMyVotes(email: string, choice: number): any {
	throw new Error("Function not implemented.");
}
