function count(n){
    for (let i = 0; i < n; i++){
  console.log(i);
    }
}


let startTime = console.time('time-elapsed-count');

count(5)

let endTime = console.timeEnd('time-elapsed-count');
 


