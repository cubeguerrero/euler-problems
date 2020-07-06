from functools import reduce

ALPHABET = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ'

def read_names(file):
    names = []
    with open(file) as f:
        l = f.read()
        names = l.split(",")

    names = list(map(lambda a: a.replace('"', ''), names))
    return names


def solution(names):
    names.sort()
    total = 0
    for i, name in enumerate(names):
        value = reduce(lambda t, c: t + (ALPHABET.find(c) + 1), name, 0) * (i + 1)
        total += value

    return total

if __name__ == "__main__":
    import time


    names = read_names('names.txt')
    start_time = time.time()
    print(solution(names))
    print("Solution took {} seconds".format(time.time() - start_time))