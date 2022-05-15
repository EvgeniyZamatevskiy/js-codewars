function betterThanAverage(classPoints, yourPoints) {
	const studentScore = classPoints.reduce((acc, el) => {
		return acc + el
	}, 0) / classPoints.length

	if (studentScore < yourPoints) {
		return true
	} else {
		return false
	}
}

console.log(betterThanAverage([2, 3], 5))