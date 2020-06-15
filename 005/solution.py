from functools import reduce

def gcd(a, b):
    while b:
        a, b = b, a % b

    return a

def lcm(a, b):
    return (a*b)/gcd(a, b)

def solution(n):
    return reduce(lcm, list(range(2, n+1)))


if __name__ == "__main__":
    import time

    start = time.time()
    print(solution(20))
    print("Time elapsed: {}".format(time.time() - start))