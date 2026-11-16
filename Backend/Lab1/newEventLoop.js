console.log("This is the starting point of my code");
// process.nextTick(()=>{
//     console.log("this is process.nextTick code");
// })
setTimeout(()=>{
console.log("This is first timeout function");
},5000); //time changes from 2000 to 5000 then after some time it comes to output
setTimeout(()=>{
console.log("This is second timeout function");
},2000);//then for another timeout it is copied,as macro task queue   2000=2 sec
setTimeout(()=>{
    console.log("This statement will run after zero delay");
},0)
process.nextTick(()=>{
    console.log("this is process.nextTick code");
})
console.log("This is the end point of my code");
// output order -> syn , asy-> micro , macro
            // (cosole.log)(setTimeout)(process.nextTick)(promise)
