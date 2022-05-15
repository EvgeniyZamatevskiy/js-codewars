function areYouPlayingBanjo(name) {
   for (let i = 0; i < name.length; i++) {
      if (name[i] === 'r' || name[i] === 'R') {
         return `${name} plays banjo`
      } else {
         return `${name} does not play banjo`
      }
   }
}

console.log(areYouPlayingBanjo('rolf')) // rolf plays banjo