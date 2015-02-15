=begin
By considering the terms in the Fibonacci sequence whose values do not exceed four million,
find the sum of the even-valued terms.
=end

last = 1
current = 2
temp = 0
sum = 0
limit = 4000000

while current < limit do
	if current%2 == 0
		sum += current
	end
	temp = current
	current += last
	last = temp
end

print sum # answer = 4613732