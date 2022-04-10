function squareDigits(num) {
   return +num.toString().split('').map(el => el * el).join('')
}

console.log(squareDigits(2112)) // 4114