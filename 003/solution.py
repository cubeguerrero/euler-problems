import math

def solution(n):
    factors = []

    while n%2 == 0:
        factors.append(2)
        n = n//2

    for i in range(3, round(math.sqrt(n)) + 1, 2):
        while n%i == 0:
            factors.append(i)
            n = n//i

    return max(factors)


if __name__ == "__main__":
    print(solution(600851475143))