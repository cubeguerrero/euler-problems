from functools import reduce

def factorial(n):
    return reduce(lambda a, b: a * b, range(1, n+1), 1)


def solution(n):
    return factorial(2*n)/(factorial(n)**2)


if __name__ == "__main__":
    import time


    start_time = time.time()
    print(solution(20))
    print("Solution took {} seconds".format(time.time() - start_time))