def tribonacci(self, N: int) -> int:
    dp = [0] * (n + 5)
    dp[0] = 0
    dp[1] = 1
    dp[2] = 1

    for i in range(3, N+1):
        dp[i] = dp[i - 3] + dp[i - 2] + dp[i - 1]
    return dp[N]


print(tribonacci(1))