def solution(n):
    nums = range(1, n+1)
    sum_of_squares = sum(list(map(lambda x: x**2, nums)))
    square_of_sum = sum(list(nums))**2
    return square_of_sum - sum_of_squares


if __name__ == "__main__":
    import time

    start = time.time()
    print(solution(100))
    print("Time elapsed: {}".format(time.time() - start))