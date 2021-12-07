const choicesIndex = [
	[Math.random(), 0, 1],
	[Math.random(), 0, 2],
	[Math.random(), 1, 2],
	[Math.random(), 0, 3],
	[Math.random(), 1, 3],
	[Math.random(), 2, 3],
];

export const randomisedChoices = choicesIndex
	.sort()
	.map(([random, a, b]) => [a, b]);
