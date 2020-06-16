import math

def sieve_of_eratosthenes(n):
    l = [True for i in range(n+1)]
    for i in range(2, round(math.sqrt(n))+1):
        if l[i]:
            for j in range(i**2, n+1, i):
                l[j] = False

    result = []
    for i in range(2, n+1):
        if l[i]:
            result.append(i)

    return result

def solution():
    primes = sieve_of_eratosthenes(120000)
    return primes[10000]


if __name__ == "__main__":
    print(solution())