import Image from "next/image";
import { useForm } from "react-hook-form";
import { chocolateList } from "../data/chocolateList";
import { randomisedChoices } from "../data/choicesIndex";

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

	const createInputs = randomisedChoices.map(([a, b], i) => (
		<fieldset key={i}>
			<input
				type="radio"
				{...register(`${a}v${b}`)}
				id={`${a}v${b}-${a}`}
				value={a}
				required
			/>
			<label htmlFor={`${a}v${b}-${a}`}>
				<Image
					src={chocolateList[a].imageUrl}
					alt={chocolateList[a].name}
					width={540}
					height={540}
				/>
			</label>

			<input
				type="radio"
				{...register(`${a}v${b}`)}
				id={`${a}v${b}-${b}`}
				value={b}
				required
			/>
			<label htmlFor={`${a}v${b}-${b}`}>
				<Image
					src={chocolateList[b].imageUrl}
					alt={chocolateList[b].name}
					width={540}
					height={540}
				/>
			</label>
		</fieldset>
	));

	return (
		<form onSubmit={handleSubmit((data) => handleVoteSubmit(data))}>
			{createInputs}

			<section>
				<label>
					Email <input type="email" {...register("email")} required />
				</label>
				<button type="submit">Vote</button>
			</section>
		</form>
	);
}
