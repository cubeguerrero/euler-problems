def solution(n):
    v = 2**n
    total = 0

    while v != 0:
        total += v % 10
        v = v // 10

    return total


if __name__ == "__main__":
    import time

    start_time = time.time()
    print(solution(1000))
    print("Solution took {} seconds".format(time.time() - start_time))