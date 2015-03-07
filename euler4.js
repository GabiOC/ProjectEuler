// Find the largest palindrome made from the product of two 3-digit numbers.

var x;
var y;
var prodArray = [];

for(x = 100; x <= 999; x++){
	for(y = x; y <= 999; y++){
		var product = x * y;
		var palTest = parseInt(product.toString().split("").reverse("").join(""));
		if(palTest == product) {
			prodArray.push(product);
		}
	}
}

var largestPal = Math.max.apply(Math, prodArray);

console.log(largestPal); // answer = 906609