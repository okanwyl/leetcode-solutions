class Solution:

    def monkeyMove(n: int) -> int:
        # constrait
        MOD = 10 ** 9 + 7
        # -2 means all monkeys goes clockwise or
        # all monkeys goes to counter-clockwise
        return ((pow(2, n, MOD) - 2) % MOD)


inp: int = 4
a = monkeyMove(inp)
print(a)
