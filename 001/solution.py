def solution():
    total = 0

    for i in range(1, 1000):
        if i % 3 == 0 or i % 5 == 0:
            total = total + i

    print(total)


if __name__ == "__main__":
    import time
    start = time.perf_counter()
    solution()
    end = time.perf_counter() - start
    print(end)