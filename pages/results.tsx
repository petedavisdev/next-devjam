import Image from "next/image";
import { chocolateList } from "../data/chocolateList";

export default function ChocolateResults() {
	const scores = [2, 1, 0, 3];

	const scoredChoices = scores
		.map((score, index) => [score, chocolateList[index]])
		.sort()
		.reverse();

	console.log(scoredChoices);

	const resultsList = scoredChoices.map(
		([score, { name, imageUrl }], index) => (
			<li key={index}>
				<Image src={imageUrl} alt={name} width={80} height={80} />
				{score}
			</li>
		)
	);

	return (
		<main>
			<h1>My results</h1>
			<ol>{resultsList}</ol>
		</main>
	);
}
