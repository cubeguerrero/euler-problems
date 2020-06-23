import math

def get_divisors(n):
    divisors = []
    m = round(math.sqrt(n))

    for i in range(1, m):
        if n % i == 0:
            divisors.append(i)
            divisors.append(n // i)

    return set(divisors)


def solution(n):
    sum = 1
    i = 1

    while True:
        divisors = get_divisors(sum)
        if len(divisors) > n:
            break

        i += 1
        sum += i

    return sum


if __name__ == "__main__":
    import time

    start_time = time.time()
    print(solution(500))
    print("Solution took {} seconds".format(time.time() - start_time))
