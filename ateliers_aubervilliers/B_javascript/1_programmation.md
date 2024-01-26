// double(3) --> 6
// triple(3) --> 9
// minutesToSecond(2) --> 120
// add(2, 3 ) --> 5
// mult(2, 3) --> 6

// max(2, 3) --> 3
// saison(1) --> "Printemps"

Manque exo de pseudo code into vrai code

// longueur([1, 2, 3, 4, 5]) --> 5
// total([1, 2, 3, 4, 5]) --> 15
// contient(liste, b) --> true
// contientPas(liste, b) --> false

// https://www.w3resource.com/python-exercises/python-functions-exercises.php
// nbMajuscule("Bonjour") --> 1
// nbMajusculeMinuscule("Bonjour") --> {"maj": 1, "min": 6}

// isEven(2) --> true
// isDivisible(100, 10) --> true
// printSuite(10) // 0 1 2 3 4 5 6 7 8 9 10
// printSuite(1, 10) // 1 2 3 4 5 6 7 8 9 10
// fooBar(10) // 1 2 'foo' 4 5 'foo' 'bar' 8 9 10 ... 20 'foobar' 22

## Niveau 1.5 UNIT TESTS

ajouter tests à tous les exos du dessus

## Niveau 2

// unique([1, 2, 3, 3, 3, 3, 4, 5]) --> [1, 2, 3, 4, 5]
// filtrePairs([1,2,3,4,5,6,7,8,9]) --> [2, 4, 6, 8]

# Niveau 3

temperatures déséquilibrées (Ababaacccc)
plus grands nombres de 0 d'affilés (1000100100001000000 => réponse 4)


### Exos challenger

Exo 1
Given a string of two letters in uppercase, inverse them
"ACCCA" => "CAAAC"

Exo 2
Given two integers A >=1 and B < 20000 find a C that makes a triangle rectangle
ex A = 3, B = 5 => C = 4
Return -1 if impossible

Exo 3

```
initial_data = [6, 4, 3, "*", 5, "-", "<>", "*", "+"]
def treat_moins(data):
    print(f"data avant moins: {data}")
    new_data = []
    new_data.append(-data[-1])
    new_data += data[:-1]
    print(f"data après moins: {new_data}")
    return new_data


def treat_plus(data):
    print(f"data avant plus: {data}")
    new_data = []
    new_data.append(data[-1] + data[-2])
    new_data += data[:-2]
    print(f"data après plus: {new_data}")
    return new_data


def treat_fois(data):
    print(f"data avant fois: {data}")
    new_data = []
    new_data.append(data[-1] * data[-2])
    new_data += data[:-2]
    print(f"data après fois: {new_data}")
    return new_data


def treat_inverse(data):
    print(f"data avant inverse: {data}")
    new_data = []
    new_data.append(data[-1])
    new_data.append(data[-2])
    new_data += data[:-2]
    print(f"data après inverse: {new_data}")
    return new_data


def treat_int(data, number):
    print(f"data avant int: {data}, with number {number}")
    new_data = []
    new_data.append(number)
    new_data += data
    print(f"data après int: {new_data}")
    return new_data


result = []

for a in initial_data:
    if type(a) == int:
        result = treat_int(result, a)
    elif a == "*":
        result = treat_fois(result)
    elif a == "+":
        result = treat_plus(result)
    elif a == "-":
        result = treat_moins(result)
    elif a == "<>":
        result = treat_inverse(result)

print(result[0])
```
