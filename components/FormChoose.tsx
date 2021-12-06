import Link from "next/link";
import { chocolateList } from "../data/chocolateList";
import { choicesIndex } from "../data/choicesIndex";
import { InputChoice } from "./InputChoice";

type FormChooseProps = {};

export function FormChoose(props: FormChooseProps) {
	const choiceInputs = choicesIndex.map(([idA, idB], i) => (
		<InputChoice
			key={i}
			name={"chocolate" + i}
			idA={idA}
			choiceA={chocolateList[idA].name}
			idB={idB}
			choiceB={chocolateList[idB].name}
		></InputChoice>
	));

	return (
		<form action="">
			{choiceInputs}

			<section>
				<Link href="/chocolate/results" passHref>
					<button type="button">Vote</button>
				</Link>
			</section>
		</form>
	);
}
