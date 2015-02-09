// What is the largest prime factor of the number 600851475143?

var num = 600851475143;
var factors = [];
var primeFactors = [];

function isPrime(num){
	for(var i = 2; i <= Math.sqrt(num); i++){
		if(num % i === 0){
			return false;
		}
	}
	return true;
}

for(i=2; i<=Math.sqrt(num); i++) {
    if (num % i === 0) {
        factors.push(i);
    }
}

for(j=0; j<factors.length; j++){
	if(isPrime(factors[j]) === true){
		primeFactors.push(factors[j]);
	}
}

var largestPrime = Math.max.apply(Math, primeFactors);

console.log(largestPrime); // answer = 6857