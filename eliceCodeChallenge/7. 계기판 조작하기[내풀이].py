strN, strK = input().split()
n = int(strN)
k = int(strK)
answer = 0
myList = [10, 102, 1023, 10234, 102345, 1023456, 10234567, 102345678, 1023456789]
if len(strN) < k:
    for ml in myList:
        if  len(set(str(ml))) == k and n < ml:
            answer = ml
            break
else:
    for num in range(n+1, 10**7+1):
        cnt = len(set(str(num)))
        if cnt == k:
            answer = num
            break
print(answer)