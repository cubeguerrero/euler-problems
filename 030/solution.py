def get_digit_sum(num, n):
    total = 0
    while num != 0:
        total += (num % 10)**n
        num = num // 10

    return total


def solution(n):
    total = 0
    max_ = n*(9**n) + 1
    for i in range(10, max_):
        if get_digit_sum(i, n) == i:
            total += i

    return total


if __name__ == "__main__":
    import time


    start_time = time.time()
    print(solution(5))
    print("Solution took {} seconds".format(time.time() - start_time))