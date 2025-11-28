// we can set a default parameter if we dindt passed any value in the argument
function rollDie(numSides=6){
    // if (numSides===undefined) numSides=6 // old way to do it 
    return Math.floor(Math.random() * numSides) + 1
}
console.log(rollDie())