def is_pythagorean_triplet(a, b, c):
    return a**2 + b**2 == c**2

def sum_equals_to_1000(a, b, c):
    return a + b + c == 1000

def solution():
    for c in range(500, 0, -1):
        for b in range(c-1, 0, -1):
            for a in range(b-1, 0, -1):
                if sum_equals_to_1000(a, b, c) and is_pythagorean_triplet(a, b, c):
                    print(a, b, c)
                    return a * b * c


if __name__ == "__main__":
    import time

    start_time = time.time()
    print(solution())
    print("Solution took {} seconds".format(time.time() - start_time))