import { chocolateList } from "../data/chocolateList";

export default function ChocolateResults() {
	const scores = [2, 1, 0, 3];

	const scoredChoices = scores
		.map((score, index) => [score, chocolateList[index]])
		.sort()
		.reverse();

	console.log(scoredChoices);

	const resultsList = scoredChoices.map(([score, { name }], index) => (
		<li key={index}>
			{name}: {score}
		</li>
	));

	return (
		<main>
			<h1>My results</h1>
			<ol>{resultsList}</ol>
		</main>
	);
}
