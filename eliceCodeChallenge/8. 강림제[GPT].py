import sys
input = sys.stdin.readline

# 시간, 신도수, 체셔의 친구 수, 최소 기도 인원
n, m, k, t = map(int, input().split())

# 기도 인원의 변화를 기록할 리스트
delta = [0] * (n + 2)

# 신도들의 기도 시간 기록
for _ in range(m):
    start, end = map(int, input().split())
    delta[start] += 1
    delta[end] -= 1

# 각 시간대별 기도 인원
praying = [0] * (n + 1)
current_prayers = 0
for i in range(1, n + 1):
    current_prayers += delta[i]
    praying[i] = current_prayers

# 최대로 엘리스가 강림할 수 있는 시간 계산
max_time = 0
current_time = 0
friends_used = 0

i = 1
while i <= n:
    if praying[i] >= t:
        # 현재 기도 인원이 T명 이상인 경우
        start_time = i
        while i <= n and praying[i] >= t:
            i += 1
        current_time += (i - start_time)
    else:
        # 기도 인원이 T명 미만인 경우
        start_time = i
        required_friends = 0
        while i <= n and praying[i] < t:
            required_friends += t - praying[i]
            if required_friends > k:
                break
            i += 1
        if required_friends <= k:
            current_time += (i - start_time)
            friends_used += required_friends
        else:
            i = start_time + 1  # 다음 시간대로 이동
            max_time = max(max_time, current_time)
            current_time = 0
            friends_used = 0


max_time = max(max_time, current_time)
print(max_time)
