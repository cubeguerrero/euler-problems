def solution(n):
    a = 1
    b = 1
    counter = 2
    divisor = 10**(n-1)
    
    while b // divisor == 0:
        a, b = b, a + b
        counter += 1

    return counter


if __name__ == "__main__":
    import time


    start_time = time.time()
    print(solution(1000))
    print("Solution took {} seconds".format(time.time() - start_time))
