function descendingOrder(n) {
	return Number(n.toString().split('').sort((a, b) => a < b ? 1 : -1).join(''))
}

console.log(descendingOrder(123456789)) // 987654321