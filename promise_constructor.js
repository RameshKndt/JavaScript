console.log('Promise Constructor Demo');


let promise = new Promise(function(resolve,reject){
                            resolve("Resolved Function Call");
                        });

promise.then((value)=>console.log(value));
let rejectedPromise = new Promise(function(resolve,reject){
                            reject("Rejected Function Call");
                        });

rejectedPromise.catch((value)=>console.log(value));

console.log("Promise.all Demo");

//Array of Promises
// [p1,p2,p3]
// Wait to return the result until all the promises are resolved.
// [p1-resolvedVal,p2-resolveVal,p3-resolvedVal]
// Any of the promise is rejected , returns the reason

const p1  = new Promise((resolve,reject)=>{
                        setTimeout(()=>{
                            console.log("P1 Promise");
                            resolve("P1 Promise Resolved");
                        },7000 
                        )
                        });

const p2  = new Promise((resolve,reject)=>{
                        setTimeout(()=>{
                            console.log("P2 Promise");
                            resolve("P2 Promise Resolved");
                        },3000 
                        )
                        });

const p3  = new Promise((resolve,reject)=>{
                        setTimeout(()=>{
                            console.log("P3 Promise");
                            resolve("P3 Promise Resolved");
                        },2000 
                        )
                        });

Promise.all([p1,p2,p3]).then((resolvedValue)=>{
                                console.log("Return value of All ",resolvedValue)
                            });

console.log("Rejected Scenario");
const p4 = Promise.reject("Rejected Promise");
Promise.all([p1,p2,p4,p3]).catch((reason)=>{console.log(reason)});



