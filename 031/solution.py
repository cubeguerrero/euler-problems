coins = [1, 2, 5, 10, 20, 50, 100, 200]

def solution(n):
    table = [[]] * (n + 1)
    for i in range(n + 1):
        table[i] = [[]] * (len(coins))
        table[i][0] = 1

    for i in range(n + 1):
        for j in range(1, len(coins)):
            table[i][j] = table[i][j - 1]
            if coins[j] <= i:
                table[i][j] += table[i - coins[j]][j]

    return table[n][len(coins) - 1]

if __name__ == "__main__":
    import time

    start_time = time.time()
    print(solution(200))
    print("Solution took {} seconds".format(time.time() - start_time))