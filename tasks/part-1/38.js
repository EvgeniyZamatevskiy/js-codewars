function highAndLow(numbers) {
	numbers = numbers.split(' ')
	const max = Math.max(...numbers)
	const min = Math.min(...numbers)
	return [max, min].join(' ')
}

console.log(highAndLow("8 3 -5 42 -1 0 0 -9 4 7 4 -4")) // 42 -9