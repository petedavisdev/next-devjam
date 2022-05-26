import Image from "next/image";
import { useState } from "react";
import { useForm } from "react-hook-form";
import { optionArray } from "../data/optionArray";
import { createChoices } from "../lib/options";
import { insertVote, supabaseLogin } from "../supabase";

type FormChooseProps = {};

export function FormChoose(props: FormChooseProps) {
	const { register, handleSubmit } = useForm();
	const [authorising, setAuthorising] = useState(false);

	async function handleVoteSubmit(data: any) {
		// const scores = choiceArray.map((item, index) => {
		// 	return Object.values(data).filter(
		// 		(value) => index.toString() === value
		// 	).length;
		// });

		supabaseLogin(data.email);
		// insertVote(data.email, 1, scores);
		setAuthorising(true);
	}

	if (authorising) return <p>Check your email</p>;

	// const createInputs = randomisedChoices.map(([a, b], i) => (
	// 	<fieldset key={i}>
	// 		<input
	// 			type="radio"
	// 			{...register(`${a}v${b}`)}
	// 			id={`${a}v${b}-${a}`}
	// 			value={a}
	// 			required
	// 		/>
	// 		<label htmlFor={`${a}v${b}-${a}`}>
	// 			<Image
	// 				src={choiceArray[a].imageUrl}
	// 				alt={choiceArray[a].name}
	// 				width={270}
	// 				height={270}
	// 			/>
	// 		</label>

	// 		<input
	// 			type="radio"
	// 			{...register(`${a}v${b}`)}
	// 			id={`${a}v${b}-${b}`}
	// 			value={b}
	// 			required
	// 		/>
	// 		<label htmlFor={`${a}v${b}-${b}`}>
	// 			<Image
	// 				src={choiceArray[b].imageUrl}
	// 				alt={choiceArray[b].name}
	// 				width={270}
	// 				height={270}
	// 			/>
	// 		</label>
	// 	</fieldset>
	// ));

	const choiceArray = createChoices(optionArray);

	return (
		<form onSubmit={handleSubmit((data) => handleVoteSubmit(data))}>
			{choiceArray && choiceArray.map(choice => {
				return <div>
					{choice[0] && <Image
						src={choice[0].imageUrl}
						width={270}
						height={270}
						tabIndex={0}
						alt={choice[0].name}
					/>}
					{choice[1] && <Image
						src={choice[1].imageUrl}
						width={270}
						height={270}
						tabIndex={0}
						alt={choice[1].name}
					/>}
				</div>
			})}

			<section>
				<p>Verify your vote and see the results</p>
				<label>
					Email <input type="email" {...register("email")} required />
				</label>
				<button type="submit">Vote</button>
				<h2>{authorising && "Check your email"}</h2>
			</section>
		</form>
	);
}
