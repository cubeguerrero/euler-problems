def collatz_sequence(n):
    digits = [n]

    while n != 1:
        if n%2 == 0:
            n = n//2
        else:
            n = 3*n+1

        digits.append(n)

    return digits


def solution(n):
    longestLength = 0
    longest = 0

    for i in range(2, n):
        sequence = collatz_sequence(i)
        if (len(sequence) > longestLength):
            longestLength = len(sequence)
            longest = i

    return longest


if __name__ == "__main__":
    import time


    start_time = time.time()
    print(solution(1000000))
    print('Solution took {} seconds'. format(time.time() - start_time))