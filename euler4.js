// Find the largest palindrome made from the product of two 3-digit numbers.

var x;
var y;
var product;
var prodArray = [];

function palindrome(i){
	var pal = parseInt(i.toString().split("").reverse("").join(""));
	if(pal == i)
		return true;
	else
		return false;
}

for(x = 100; x <= 999; x++){
	for(y = x; y <= 999; y++){
		product = x * y;
		if(palindrome(product) == true){
			prodArray.push(product);
		}
	}
}

var largestPal = Math.max.apply(Math, prodArray);

console.log(largestPal); // answer = 906609