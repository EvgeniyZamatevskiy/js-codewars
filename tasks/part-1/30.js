var capitals = function (word) {
   return word.split('').reduce((acc, el, i) => {
      if (el === el.toUpperCase()) {
         acc.push(i)
      }
      return acc
   }, [])
}

console.log(capitals('CodEWaRs')) // [0, 3, 4, 6]