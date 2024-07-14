string = input()

stack = []
depth_result = [0] * 50  # [0 for _ in range(50)] 전자가 더 빠르고 간결하다.
# 하지만 이차원 배열이상인 경우 [[0] * 2] * 50 arr[0][0]을 1로 바꿨을 때 요소 리스트들의 0번 인덱스가 모두 1로 바뀐다.
# [[1, 0], [1, 0], ... ,[1, 0]]
# 이런 경우 arr = [[0] * 2 for _ in range(50)]으로 하면 빠르고 간결하다.
depth = 0

for ch in string:
    if ch != ")":
        if ch == "(":
            depth += 1
            depth_result[depth] = 0
        stack += [ch]
    else:
        lenS = len(stack)
        for i in range(lenS - 1, -1, -1):
            if stack[i] == "(":
                num = depth_result[depth]
                num += lenS - i - 1
                depth -= 1
                depth_result[depth] += num * int(stack[i - 1])
                del stack[
                    i - 1 :
                ]  # stack = stack[:i-1] 메모리나 속도면에서 del이 더 좋다.

                break
print(depth_result[0] + len(stack))
