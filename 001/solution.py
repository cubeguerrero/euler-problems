def solution(n):
    total = 0
    for i in range(n):
        if i % 3 == 0 or i % 5 == 0:
            total += i

    return total

if __name__ == '__main__':
    print(solution(1000))
