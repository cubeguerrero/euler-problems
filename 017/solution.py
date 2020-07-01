belowTwenty = ["zero", "one", "two", "three", "four", "five", "six", "seven", "eight", "nine", "ten", "eleven", "twelve", "thirteen", "fourteen", "fifteen", "sixteen", "seventeen", "eighteen", "nineteen"]
tens = ["zero", "ten", "twenty", "thirty", "forty", "fifty", "sixty", "seventy", "eighty", "ninety"]
thousand = "thousand"
hundred = "hundred"
and_ = "and"

def solution(n):
    total = 0

    for i in range(1, n+1):
        sum = 0
        if i >= 1000:
            sum += len(belowTwenty[i // 1000]) + len(thousand)
            i = i % 1000

        if i >= 100:
            sum += len(belowTwenty[i // 100]) + len(hundred)
            i = i % 100
            if i > 0:
                sum += len(and_)

        if i >= 20:
            sum += len(tens[i // 10])
            i = i % 10

        if i > 0:
            sum += len(belowTwenty[i])

        total += sum

    return total


if __name__ == "__main__":
    import time

    start_time = time.time()
    print(solution(1000))
    print("Solution took {} seconds".format(time.time() - start_time))