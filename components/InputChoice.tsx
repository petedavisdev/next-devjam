type InputChoiceProps = {
	name: string;
	idA: number;
	labelA: string;
	idB: number;
	labelB: string;
};

export function InputChoice(props: InputChoiceProps) {
	const idA = props.name + "-" + props.idA;
	const idB = props.name + "-" + props.idB;

	function createInput(id: string, label: string) {
		return (
			<>
				<input
					type="radio"
					name={props.name}
					id={id}
					value={id}
					required
				/>
				<label htmlFor={id}>{label}</label>
			</>
		);
	}

	return (
		<fieldset>
			<legend>Which milk chocolate is yummiest?</legend>

			{createInput(idA, props.labelA)}
			{createInput(idB, props.labelB)}
		</fieldset>
	);
}
