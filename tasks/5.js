// I'm new to coding and now I want to get the sum of two arrays...actually the sum of all their elements. I'll appreciate for your help.

// P.S. Each array includes only integer numbers. Output is a number too.

function arrayPlusArray(arr1, arr2) {

   const arrSum = [...arr1, ...arr2]

   return arrSum.reduce((acc, item) => {
      return acc + item
   }, 0)
}

console.log(arrayPlusArray([100, 200, 300], [400, 500, 600])) // 2100