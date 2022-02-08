console.log("Promise.reject Demo");

let rejectedPromise = Promise.reject("Due to Lack Of Money"); //Reason 

//then(resolveFun,rejectFunc)

rejectedPromise.then(null,
                     function(reason)
                     {
                      console.log(reason)
                     }
                    );
//catch() // Method ==> then(null,rejectedFunc)

console.log("catch() function demo");

rejectedPromise.catch((reason)=>console.log(reason));
/*
rejectedPromise.then(null,
                     function(reason)
                     {
                      console.log(reason)
                     }
                    );
*/
