def solution(n):
    total = 1
    for spiral in range(3, n+1, 2):
        m = spiral*spiral
        for i in range(4):
            total += m - ((spiral - 1) * i)

    return total


if __name__ == "__main__":
    import time


    start_time = time.time()
    print(solution(1001))
    print("Solution took {} seconds".format(time.time() - start_time))