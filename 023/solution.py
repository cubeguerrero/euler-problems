def get_divisors_sum(n):
    sum = 1
    for i in range(2, n//2+1):
        if n%i == 0:
            sum += i
    return sum


def is_abundant(n):
    return get_divisors_sum(n) > n


def get_all_abundant(limit):
    numbers = [];
    for i in range(12, limit+1):
        if is_abundant(i):
            numbers.append(i)

    return numbers


def get_can_be_written(limit, abundant_nums):
    can_be_written = [False] * (limit + 1)
    for i in range(0, len(abundant_nums)):
        for j in range(i, len(abundant_nums)):
            if (abundant_nums[i] + abundant_nums[j] <= limit):
                can_be_written[abundant_nums[i] + abundant_nums[j]] = True
            else:
                break

    return can_be_written



def solution(n):
    cbw = get_can_be_written(n, get_all_abundant(n))
    sum = 0
    for i in range(1, n+1):
        if not cbw[i]:
            sum += i

    return sum


if __name__ == "__main__":
    import time

    start_time = time.time()
    print(solution(28123))
    print("Solution took {} seconds".format(time.time() - start_time))