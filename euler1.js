// Find the sum of all multiples of 3 or 5 below 1000.

var sum = 0;
var limit = 1000;
var i = 0;
    
for(i; i<limit; i++){
    if(i%5 == 0 || i%3 == 0){
        sum += i};
    };
 
 console.log(sum); // answer = 233168