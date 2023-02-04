
from itertools import groupby

a = [1,2,3,4]
group_obj = groupby(a, key=lambda x: x < 3)
print(group_obj)

for key, value in group_obj:
    print(key, list(value))







