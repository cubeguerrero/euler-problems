numbers = ['0', '1', '2', '3', '4', '5', '6', '7', '8', '9']
numbers_len = len(numbers)

def get_permutations():
    permutations = []
    # 0
    for a in range(0, numbers_len):
        # 1
        for b in range(0, numbers_len):
            if a == b:
                continue
            # 2
            for c in range(0, numbers_len):
                if a == c or b == c:
                    continue
                # 3
                for d in range(0, numbers_len):
                    if a == d or b == d or c == d:
                        continue
                    # 4
                    for e in range(0, numbers_len):
                        if a == e or b == e or c == e or d == e:
                            continue
                        # 5
                        for f in range(0, numbers_len):
                            if a == f or b == f or c == f or d == f or e == f:
                                continue
                            # 6
                            for g in range(0, numbers_len):
                                if a == g or b == g or c == g or d == g or e == g or f == g:
                                    continue
                                # 7
                                for h in range(0, numbers_len):
                                    if a == h or b == h or c == h or d == h or e == h or f == h or g == h:
                                        continue
                                    # 8
                                    for i in range(0, numbers_len):
                                        if a == i or b == i or c == i or d == i or e == i or f == i or g == i or h == i:
                                            continue
                                        # 9
                                        for j in range(0, numbers_len):
                                            if a == j or b == j or c == j or d == j or e == j or f == j or g == j or h == j or i == j:
                                                continue
                                            permutations.append("{}{}{}{}{}{}{}{}{}{}".format(a, b, c, d, e, f, g, h, i, j))

    return permutations

def solution(n):
    permutations = get_permutations()
    return permutations[n]


if __name__ == "__main__":
    import time

    start_time = time.time()
    print(solution(999999))
    print("Solution took {} seconds".format(time.time() - start_time))

