import math

def is_prime(n):
    if n < 0:
        return False

    for i in range(2, round(math.sqrt(n))+1):
        if n%i == 0:
            return False

    return True


def quadratic_formula_generator(a, b):
    def formula(n):
        return n*n + a*n + b

    return formula


def solution(max_):
    min_ = max_*-1
    max_n = 0
    max_a = 0
    max_b = 0

    for a in range(min_, max_+1):
        for b in range(min_, max_+1):
            n = 0
            f = quadratic_formula_generator(a, b)
            while is_prime(f(n)):
                n += 1

            if n > max_n:
                max_n = n
                max_a = a
                max_b = b

    return max_a * max_b


if __name__ == "__main__":
    import time

    start_time = time.time()
    print(solution(1000))
    print("Solution took {} seconds".format(time.time() - start_time))