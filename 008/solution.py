from functools import reduce

def read_fixture():
    numbers = []
    with open('./fixture.txt') as f:
        for line in f:
            l = line.strip()
            numbers += list(map(int, list(l)))

    return numbers

def solution(n):
    numbers = read_fixture()
    largest = -1
    for i in range(len(numbers) - n):
        product = reduce(lambda a, b: a * b, numbers[i:i+n])
        if product > largest:
            largest = product

    return largest

if __name__ == "__main__":
    import time

    start_time = time.time()
    print(solution(13))
    print("Solution took {} seocnds.".format(time.time()-start_time))