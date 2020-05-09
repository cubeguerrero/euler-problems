def fibonacci():
    i = 1
    j = 1
    total = 0
    while j <= 4000000:
        i, j = j, i + j
        if j % 2 == 0:
            total += j
    
    print(total)


if __name__ == "__main__":
    import time

    start = time.perf_counter()
    fibonacci()
    end = time.perf_counter() - start
    print(end)