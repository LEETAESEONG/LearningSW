import sys
input = sys.stdin.readline
# 시간, 신도수, 체셔의 친구 수, 최소 기도 인원
# t이상이면 강림 미만이면 사라짐
n, m, k, t = map(int, input().split())
dp = [0] * (n+1)
for _ in range(m):
    start, to = map(int, input().split())
    for i in range(start, to):
        dp[i] += 1

maxL = 0
for j in range(1, n+1):
    remain = k
    howMany = 0
    cnt = 0
    for q in range(j, n+1):
        if dp[q] >= t:
            cnt += 1
            howMany = 0
        else:
            if howMany:
                if howMany + dp[q] >= t:
                    cnt += 1
                else:
                    tdpqhm = t - dp[q] - howMany
                    if remain >= tdpqhm:
                        howMany += tdpqhm
                        remain -= tdpqhm
                        cnt += 1
            else:
                tdpq = t - dp[q]
                if remain >= tdpq:
                    howMany = tdpq
                    remain -= tdpq
                    cnt += 1
    maxL = max(maxL, cnt)
print(maxL)