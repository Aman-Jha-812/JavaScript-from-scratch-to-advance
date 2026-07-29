/*Asynchronous javascript refers to the ability of Javascript to perform
tasks without blocking the execution of other code. This feature is crucial
for improving the performance and responsiveness of applications, 
especially when dealing with tasks like fetching data from a server, reading
files, ot executing timers.
*/ 

// Sync vs Async

console.log('sync operation 1');
console.log('sync operation 2');
console.log('sync operation 3');


console.log('Async operation 1');
setTimeout(()=>{
    console.log('async operation 2');

},5000); // 1000ms = 1s
console.log('Async operation 3');
