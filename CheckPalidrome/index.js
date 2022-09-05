function solution(inputString){
    const x = inputString.spli('') //separate each letters
    const y = x.reverse() // leters in reverse order
    const z = y.join('') // bring back letters into words again
    return z === inputString //  check if its a palidrome

}

/// simplified
function solution2(inputString){
    return inputString.split('').reverse().join('') === inputString
}