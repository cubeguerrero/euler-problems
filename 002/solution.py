def solution(n):
    sum = 0
    a = 1
    b = 1

    while b < n:
        if b%2 == 0:
            sum += b

        a, b = b, a + b

    return sum


if __name__ == "__main__":
    print(solution(4000000))