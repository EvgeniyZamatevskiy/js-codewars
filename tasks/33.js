const converter = (word) => {
	return word.split(' ').map((w) => w[0].toUpperCase() + w.slice(1)).join(' ')
}
console.log(converter("How can mirrors")) // How Can Mirrors