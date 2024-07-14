import sys

sys.setrecursionlimit(10**6)
input = sys.stdin.readline

# 트리의 정점 수와 간선 정보 입력 받기
n = int(input())
adjL = [[] for _ in range(n + 1)]
for _ in range(n - 1):
    u, v = map(int, input().split())
    adjL[u].append(v)
    adjL[v].append(u)


def dfs(node, parent):
    is_leaf = True
    for neighbor in adjL[node]:
        if neighbor != parent:
            is_leaf = False
            if not dfs(neighbor, node):
                return True
    return not is_leaf


# 결과를 저장할 리스트
results = [0] * (n + 1)
for i in range(1, n + 1):
    results[i] = 1 if dfs(i, -1) else 0

# 결과 출력
for result in results[1:]:
    print(result)
