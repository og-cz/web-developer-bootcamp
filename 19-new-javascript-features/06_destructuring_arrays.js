// destructuring is a way to unpack multiple values in a multiple variables

const scores = [5,10,15,20,25,30,35,45,50]

const [gold,silver,bronze, ...everyoneElse] = scores
console.log(gold, silver, bronze, everyoneElse) // 5 10 15 -> indexed at the 0 till n