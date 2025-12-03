def matriz_espiral(n):
    matriz = [[0] * n for _ in range(n)]

    top, bottom = 0, n - 1
    left, right = 0, n - 1
    num = 1
    maxnum = n * n

    while num <= maxnum:
        for j in range(left, right + 1):
            matriz[top][j] = num
            num += 1
        top += 1

        for i in range(top, bottom + 1):
            matriz[i][right] = num
            num += 1
        right -= 1

        if top <= bottom:
            for j in range(right, left - 1, -1):
                matriz[bottom][j] = num
                num += 1
            bottom -= 1

        if left <= right:
            for i in range(bottom, top - 1, -1):
                matriz[i][left] = num
                num += 1
            left += 1

    return matriz


def ejecutar_espiral():
    print("EJERCICIO 5: Matriz en espiral")
    n = int(input("Ingrese N (>= 3): "))

    if n < 3:
        print("Error: N debe ser mayor o igual a 3.")
        return

    matriz = matriz_espiral(n)

    print("MATRIZ ESPIRAL")
    for fila in matriz:
        print(" ".join(f"{x:3d}" for x in fila))


if __name__ == "__main__":
    ejecutar_espiral()