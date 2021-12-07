import Link from "next/link";
import { chocolateList } from "../data/chocolateList";
import { randomisedChoices } from "../data/choicesIndex";
import { InputChoice } from "./InputChoice";

type FormChooseProps = {};

export function FormChoose(props: FormChooseProps) {
	const createInputs = randomisedChoices.map(([idA, idB], i) => (
		<InputChoice
			key={i}
			name={`chocolate-${idA}v${idB}`}
			idA={idA}
			labelA={chocolateList[idA].name}
			idB={idB}
			labelB={chocolateList[idB].name}
			randomBool={Math.random() < 0.5}
		></InputChoice>
	));

	return (
		<form action="">
			{createInputs}

			<section>
				<Link href="/chocolate/results" passHref>
					<button type="button">Vote</button>
				</Link>
			</section>
		</form>
	);
}
