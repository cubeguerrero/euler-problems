def get_repeating_cycle(denominator):
    remainders = []
    is_repeating = False
    rem = 1 % denominator

    while rem != 0:
        rem = rem * 10
        rem = rem % denominator
        if rem in remainders:
            is_repeating = True
            break
        remainders.append(rem)

    return len(remainders), is_repeating


def solution(n):
    longest = 0
    longest_n = 0

    for i in range(1, n):
        l, r = get_repeating_cycle(i)
        if r and longest < l:
            longest = l
            longest_n = i

    return longest_n


if __name__ == "__main__":
    import time


    start_time = time.time()
    print(solution(1000))
    print("Solution took {} seconds".format(time.time() - start_time))
