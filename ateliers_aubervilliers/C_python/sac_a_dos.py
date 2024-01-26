poids = [0, 2, 5, 7, 12, 9]
valeurs = [0, 1, 2, 3, 7, 10]
poids_max = 16


def sac_a_dos(poids, valeurs, poids_max):
    n = len(poids)
    vals_max = [[0 for c in range(poids_max + 1)] for i in range(n + 1)]
    for i in range(1, n + 1):
        for c in range(poids_max + 1):
            if c >= poids[i - 1]:
                vals_max[i][c] = max(
                    vals_max[i - 1][c],
                    vals_max[i - 1][c - poids[i - 1]] + valeurs[i - 1],
                )
            else:
                vals_max[i][c] = vals_max[i - 1][c]
    return vals_max


def remonte(vals_max, poids, poids_max):
    i = len(poids) - 1
    c = poids_max
    objets = []
    while i > 0:
        print(f"\ni: {i} - On compare {vals_max[i + 1][c]} et {vals_max[i][c]}")
        if vals_max[i + 1][c] != vals_max[i][c]:
            print(
                f"On prend l'objet {i} de poids {poids[i]} et le poids passe de {c} à {c - poids[i]}"
            )
            objets.append(i)
            c -= poids[i]
        else:
            print(f"On ne prend pas l'objet {i}")
        i -= 1
    return objets


if __name__ == "__main__":
    r = sac_a_dos(poids, valeurs, poids_max)
    for row in r:
        print(row)
    sol = remonte(r, poids, poids_max)
    print("sol", sol)
    print([(poids[i], valeurs[i]) for i in sol])
