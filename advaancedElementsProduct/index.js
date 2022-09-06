function solution(inputArray) {
    const newArray = []
for (let i = 0; i < inputArray.length -1; i++){ 
  const x = inputArray[i] * inputArray[i+1]// multipliying the array by 3X6, 6x-2,-5x7,7x3
  newArray.push(x)
    
}
console.log(newArray)
console.log(...newArray)
console.log (Math.max(...newArray))
}

solution([3, 6, -2, -5, 7, 3])
