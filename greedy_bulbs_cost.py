
def bulbs(a, n):
	# To keep track of switch presses so far
	count = 0
	for i in range(n):
		# if the bulb's original state is on and count
		# is even, it is currently on...
		# no need to press this switch
		if (a[i] == 1 and count % 2 == 0):
			continue

		# If the bulb's original state is off and count
		# is odd, it is currently on...
		# no need to press this switch
		elif(a[i] == 0 and count % 2 != 0):
			continue

		# if the bulb's original state is on and count
		# is odd, it is currently off...
		# Press this switch to on the bulb and increase
		# the count
		elif (a[i] == 1 and count % 2 != 0):
			count += 1

		# if the bulb's original state is off and
		# count is even, it is currently off...
		# press this switch to on the bulb and
		# increase the count
		elif (a[i] == 0 and count % 2 == 0):
			count += 1
	return count



states = [0, 1, 0, 1]
n = len(states)
print("The minimum number of switches needed are", bulbs(states, n))

