string = input()
def dfs(string):
    front = ""
    middle = ""
    back = ""
    idx = 0
    lenS = len(string)
    while idx < lenS:
        si = string[idx]
        # 여는 괄호가 나올 때까지 front에 더하기
        # 근데 front의 마지막이 숫자여야 함
        if front and "0" <= front[-1] <= "9" and si == "(":
            break
        front += si
        idx += 1
    if len(front) == len(string):
        return len(front)

    balance = 0
    while idx < lenS:
        si = string[idx]
        middle += si
        if si == "(":
            balance += 1
        elif si == ")":
            balance -= 1
        if balance == 0:
            break
        idx += 1
    
    back = string[idx+1:]
    return len(front[:-1]) + (dfs(middle[1:-1]) * int(front[-1])) + dfs(back)
print(dfs(string))