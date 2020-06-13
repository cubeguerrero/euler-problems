def is_palindrome(n):
    s = list(str(n))
    return s == s[::-1]

def solution():
    p = []
    for i in range(999, 99, -1):
        for j in range(999, 99, -1):
            if is_palindrome(i * j):
                p.append(i * j)

    return max(p)


if __name__ == "__main__":
    import time

    start = time.time()
    print(solution())
    print("Time elapsed: {}".format(time.time() - start))