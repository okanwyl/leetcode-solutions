def putMarbles(weights, k):
    matrix = []
    # add all segments to new matrix
    for x, y in zip(weights, weights[1:]):
        matrix.append(x + y)
    # sort
    matrix.sort()
    print(matrix)
    M = len(matrix)

    min = weights[0] + weights[-1]
    max = weights[0] + weights[-1]

    for i in range(k - 1):
        min += matrix[i]
        max += matrix[M-i-1]

    return max - min


k = 3
inp = [1, 4, 2, 5, 2]
out = putMarbles(inp, k)
print(out)
