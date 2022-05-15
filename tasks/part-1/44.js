function opposite(number) {
	if (number === Math.abs(number)) {
		return -Math.abs(number)
	} else {
		return Math.abs(number)
	}
}

console.log(opposite(1))