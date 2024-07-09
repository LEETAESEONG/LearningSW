import sys
input = sys.stdin.readline
n, m = map(int, input().split())
arr = list(map(int, input().split()))
for _ in range(m):
    start, to, index = map(int, input().split())
    start -= 1
    index -= 1
    part = sorted(arr[start:to])
    print(part[index])