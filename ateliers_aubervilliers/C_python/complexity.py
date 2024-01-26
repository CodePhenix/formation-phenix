lis = [1, 2, 3]
n = len(lis)


def sum(l):
    total = 0  # 1 opération
    for i in l:  # n opérations
        total += i
    return total


# la complexity en temps de sum est n +1 c'est à dire O(n)

l = [1, 2, 4]
# =>
#    1, 2, 4
# 1, 2, 3, 5
# 2, 3, 4, 6
# 4, 5, 6, 8
def tableau(l):
    for i in l:
        for j in l:
            # faire des choses
            pass
    return


# la complexité est en n*n: O(n²)


def tableau_3D(l):
    for i in l:
        for j in l:
            for k in l:
                # faire des choses
                pass
    return


# la complexité est en n*n*n: O(n³)


def blabla(l):
    for i in l:
        # des choses
        pass

    for j in l:
        pass
        #  des choses


# O(2*n) = O(n)


def truc(l):
    # choses
    # chose
    for i in l:
        for j in l:
            # trucs
            pass

    for k in l:
        pass


# O(n² + n) = O(n²)


def tri(l):
    # Tri fusion
    pass


# => O(n * log(n))


def algo(l):
    l.sort()  # => n * Log(n)

    for i in l:
        pass
    # => O(n)


# Total => O(n*log(n))


def truc(l):
    # choses
    # chose
    for i in l:
        for j in l:
            # trucs
            pass

    l.sort()

    for k in l:
        pass


# => n + n.log(n) + n² = O(n²)
