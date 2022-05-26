type Option = {
	name: string
	imageUrl: string
}

function isOdd(num: number) {
	return num % 2 === 1
}

export function createChoices(options: Option[]): Option[][] | undefined {
	let choices

	if (isOdd(options.length)) {
		choices = [[options[options.length - 1]]] // e.g. [[4]]
	}

	options.forEach((opt, i) => {
		if (isOdd(i)) choices.push([options[i - 1], opt]) // e.g. [[4],[0,1],[2,3]]
	})

	return choices
}

export function createOptions(choices: Option[][]) {
	let options = []

	choices.forEach((choice) => {
		if (choice.length < 2) return options.push(choice[0]) // e.g. [4]

		const chosen = confirm(`Cancel for ${choice[0]}, OK for ${choice[1]}`)

		options.push(chosen ? choice[1] : choice[0]) // e.g. [4,0,3]
	})
}
