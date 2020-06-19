import math

def is_prime(n):
    for i in range(2, round(math.sqrt(n))):
        if n%i == 0:
            return False

    return True

def solution(n):
    total = 0;
    for i in range(2, n):
        if is_prime(i):
            total += i;

    return total

if __name__ == "__main__":
    import time

    start_time = time.time()
    print(solution(2000000))
    print("Solution took {} seconds".format(time.time() - start_time))