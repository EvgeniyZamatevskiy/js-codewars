function XO(str) {
	str = str.toLowerCase().split('')

	const x = str.filter((el) => el === 'x')
	const o = str.filter((el) => el === 'o')

	return x.length === o.length
}

console.log(XO("xxOo"))