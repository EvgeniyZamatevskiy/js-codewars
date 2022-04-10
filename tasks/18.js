let array = [true, true, true, false,
   true, true, true, true,
   true, false, true, false,
   true, false, false, true,
   true, true, true, true,
   false, false, true, true];

function countSheeps(arrayOfSheep) {
   return arrayOfSheep.filter(Boolean).length
}

console.log(countSheeps(array)) // 17