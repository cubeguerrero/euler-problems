def solution(n):
    values = []
    for i in range(2, n+1):
        for j in range(2, n+1):
            values.append(i**j)

    return len(set(values))


if __name__ == "__main__":
    import time

    start_time = time.time()
    print(solution(100))
    print("Solution took {} seconds.".format(time.time() - start_time))