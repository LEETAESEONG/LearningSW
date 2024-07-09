def find_next_number(n):
    digits = list(str(n))
    length = len(digits)
    
    for i in range(length-2, -1, -1):
        if digits[i] < digits[i + 1]:
            break
    else:
        return n
    
    for j in range(length-1, i, -1):
        if digits[j] > digits[i]:
            break
    
    digits[i], digits[j] = digits[j], digits[i]
    digits = digits[:i+1] + sorted(digits[i+1:])
    
    return int(''.join(digits))

N = int(input())
print(find_next_number(N))
