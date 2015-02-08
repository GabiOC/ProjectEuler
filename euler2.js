//By considering the terms in the Fibonacci sequence whose values do not exceed
// four million, find the sum of the even-valued terms.

var last = 1;
var current = 2;
var temp = 0;
var sum = 0;
var limit = 4000000;

while(current<limit){
	if(current%2 === 0){
		sum += current;
	}
	temp = current;
	current += last;
	last = temp;
};
console.log(sum);
