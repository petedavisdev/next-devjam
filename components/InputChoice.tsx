type InputChoiceProps = {
	name: string;
	idA: number;
	choiceA: string;
	idB: number;
	choiceB: string;
};

export function InputChoice(props: InputChoiceProps) {
	const idA = props.name + props.idA;
	const idB = props.name + props.idB;

	return (
		<fieldset>
			<legend>Which milk chocolate is yummiest?</legend>
			<input
				type="radio"
				name={props.name}
				id={idA}
				value={idA}
				required
			/>
			<label htmlFor={idA}>{props.choiceA}</label>

			<input
				type="radio"
				name={props.name}
				id={idB}
				value={idB}
				required
			/>
			<label htmlFor={idB}>{props.choiceB}</label>
		</fieldset>
	);
}
