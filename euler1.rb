# Find the sum of all multiples of 3 or 5 below 1000.

sum = 0
i = 0
limit = 1000

while i < limit do
	if i%5 == 0 || i%3 == 0
		sum += i
	end
	i += 1
end

print sum # answer = 233168