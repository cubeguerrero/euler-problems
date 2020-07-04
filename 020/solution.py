def factorial(n):
    total = 1
    for i in range(2, n+1):
        total *= i

    return total

def solution(n):
    f = factorial(n)
    s = 0
    while f > 0:
        s += f % 10
        f = f // 10

    return s


if __name__ == "__main__":
    import time

    start_time = time.time()
    print(solution(100))
    print("Solution took {} seconds".format(time.time() - start_time))