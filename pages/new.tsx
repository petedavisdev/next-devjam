export default function New() {
	const choices = [0, 1, 2, 3].map((id, index) => (
		<fieldset key={id}>
			<legend>{`choice-${index}-text`}</legend>
			<label htmlFor={`choice-${index}-text`}>Text</label>
			<input type="text" id={`choice-${index}-text`} />
			<label htmlFor={`choice-${index}-image-url`}>Image URL</label>
			<input type="text" id={`choice-${index}-image-url`} />
		</fieldset>
	));

	return (
		<form action="">
			<h1>New</h1>
			<label htmlFor="Question">Question</label>
			{choices}
		</form>
	);
}
