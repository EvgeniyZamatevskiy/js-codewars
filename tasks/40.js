function find_average(array) {
	if (array.length === 0) {
		return 0
	} else {
		return array.reduce((acc, el) => {
			return acc + el
		}, 0) / array.length
	}
}

console.log(find_average([31, 31, 50, 69, 63, 90, 34, 79, 65, 90, 51, 53, 20, 2]))