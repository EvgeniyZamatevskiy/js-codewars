function positiveSum(arr) {
	const positive = []

	arr.forEach((el) => {
		if (el === Math.abs(el)) {
			positive.push(el)
		}
	})

	return positive.reduce((acc, el) => {
		return acc + el
	}, 0)
}

console.log(positiveSum([1, -2, 3, 4, 5]))