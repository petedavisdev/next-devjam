function isOdd(num: number) {
	return num % 2 === 1
}

export function createChoices(options: number[]) {
	let choices = []

	if (isOdd(options.length)) choices.push([options.pop()]) // e.g. [[4]]

	options.forEach((opt, i) => {
		if (isOdd(i)) choices.push([options[i - 1], opt]) // e.g. [[4],[0,1],[2,3]]
	})
}

export function createOptions(choices: number[][]) {
	let options = []

	choices.forEach((choice) => {
		if (choice.length < 2) return options.push(choice[0]) // e.g. [4]

		const chosen = confirm(`Cancel for ${choice[0]}, OK for ${choice[1]}`)

		options.push(chosen ? choice[1] : choice[0]) // e.g. [4,0,3]
	})
}
