// import {useForm} from "react-hook-form"

type InputChoiceProps = {
	name: string;
	idA: number;
	labelA: string;
	idB: number;
	labelB: string;
};

export function InputChoice(props: InputChoiceProps) {
	// const { register } = useForm();

	function createInput(id: string, value: number, label: string) {
		return (
			<>
				<input
					type="radio"
					name={props.name}
					id={id}
					value={value}
					required
				/>
				<label htmlFor={id}>{label}</label>
			</>
		);
	}

	return (
		<fieldset>
			<legend>Which milk chocolate is yummiest?</legend>

			{createInput(props.name + "-" + props.idA, props.idA, props.labelA)}
			{createInput(props.name + "-" + props.idB, props.idB, props.labelB)}
		</fieldset>
	);
}
