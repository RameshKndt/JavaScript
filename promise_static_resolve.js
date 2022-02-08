// Resolve the Promise

let promise = Promise.resolve("Got Apple-IPhoneMobile");

console.log(promise);

let anotherPromise = Promise.resolve(5);
//For the then 2nd Parameter is optional
anotherPromise.then(function(resolvedValue){
                        console.log(resolvedValue);
                        });

function multiplyByTwo(value){
    return value * 2;
}
//Promise --> Fulfiiled with New Mobile -->  When you can Amazon Prime subscription
let multiplyPromise =  anotherPromise.then(function(resolvedValue){
                            return multiplyByTwo(resolvedValue);
                        },
                      function (rejectedValue){});
console.log('Multiply Promise',multiplyPromise);

function print(value){
    
    console.log(value);
}
multiplyPromise.then((value)=>print(value));


//Promise Chaining.

console.log("Promise Chaining");

anotherPromise.then(function(resolvedValue){
                            return multiplyByTwo(resolvedValue);
                        })
              .then((value)=>print(value));

anotherPromise.then(function(resolvedValue){
                            return multiplyByTwo(resolvedValue);
                        })
              .then((value)=> multiplyByTwo(value))
              .then((value)=> multiplyByTwo(value))
              .then((value)=> print(value));

//Final Value is going to print.