from functools import reduce


def get_divisors(n):
    divisors = [1]
    for i in range(2, n//2+1):
        if n%i == 0:
            divisors.append(i)

    return divisors


def get_sum(d):
    return reduce(lambda total, i: total + i, d)


def solution(n):
    numbers = []
    for i in range(1, n):
        if i in numbers:
            continue

        divisors_i = get_divisors(i)
        j = get_sum(divisors_i)
        sum_j = get_sum(get_divisors(j))

        if i == sum_j and i != j:
            if i not in numbers:
                numbers.append(i)

            if j not in numbers:
                numbers.append(j)

    return get_sum(numbers)


if __name__ == "__main__":
    import time

    start_time = time.time()
    print(solution(10000))
    print("Solution took {} seconds".format(time.time() - start_time))
