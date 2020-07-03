import datetime

def solution(first_year, last_year):
    total = 0
    for year in range(first_year, last_year+1):
        for month in range(1, 13):
            d = datetime.datetime(year, month, 1)
            if d.weekday() == 6:
                total += 1

    return total


if __name__ == "__main__":
    import time


    start_time = time.time()
    print(solution(1901, 2000))
    print("Solution took {} seconds".format(time.time() - start_time))