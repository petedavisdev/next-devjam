import { useForm } from "react-hook-form";
import { chocolateList } from "../data/chocolateList";
import { randomisedChoices } from "../data/choicesIndex";
import { Choice } from "./Choice";

type FormChooseProps = {};

export function FormChoose(props: FormChooseProps) {
	const { register, handleSubmit } = useForm();

	function handleVoteSubmit(data: any) {
		const scores = chocolateList.map((item, index) => {
			return Object.values(data).filter(
				(value) => index.toString() === value
			).length;
		});
		console.log(scores);
	}

	const createInputs = randomisedChoices.map(([idA, idB], i) => (
		<Choice legend="Which is yummiest?" key={i}>
			<label>
				<input
					type="radio"
					{...register(`${idA}v${idB}`)}
					value={idA}
					required
				/>
				{chocolateList[idA].name}
			</label>

			<label>
				<input
					type="radio"
					{...register(`${idA}v${idB}`)}
					value={idB}
					required
				/>
				{chocolateList[idB].name}
			</label>
		</Choice>
	));

	return (
		<form onSubmit={handleSubmit((data) => handleVoteSubmit(data))}>
			{createInputs}

			<section>
				<button type="submit">Vote</button>
			</section>
		</form>
	);
}
