type ChoiceProps = {
	legend: string;
	children: React.ReactNode;
};

export function Choice(props: ChoiceProps) {
	return (
		<fieldset>
			<legend>{props.legend}</legend>
			{props.children}
		</fieldset>
	);
}
