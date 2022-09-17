const performance = require('perf_hooks');
function count(n){
    for (let i = 0; i < n; i++){
  console.log(i)
    }
}
let startTime = performance.performance.now()
count(5)
let endTime = performance.performance.now()

let duration = startTime + endTime 
console.log(`the duration time of this algorithm is ${duration} ms`)

