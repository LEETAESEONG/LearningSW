import sys
from itertools import combinations

def dfs(res, x, sum_, now, m):
    if x == len(res):
        now.append(sum_ + m)
        return
    dfs(res, x + 1, sum_, now, m)
    dfs(res, x + 1, sum_ + res[x], now, m)

def solve():
    n = int(input())
    v = list(map(int, input().split()))
    v.sort()
    res = []
    now = []
    for i in range(1, len(v)):
        if v[i] not in now:
            m = v[i]
            dfs(res, 0, 0, now, m)
            res.append(v[i])
        now.remove(v[i])
    print(' '.join(map(str, res)))

if __name__ == "__main__":
    solve()
