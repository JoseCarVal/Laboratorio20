def normalizar(lista, modo):
    # Copia para no modificar la original
    datos = lista[:]  

    if modo not in ["minmax", "zscore", "unit"]:
        print("Error: modo inválido.")
        return None

    n = len(datos)

    # MIN–MAX
    if modo == "minmax":
        minimo = min(datos)
        maximo = max(datos)
        rango = maximo - minimo

        if rango == 0:
            return [0 for _ in datos]

        return [(x - minimo) / rango for x in datos]

    # Z–SCORE
    elif modo == "zscore":
        media = sum(datos) / n
        var = sum((x - media) ** 2 for x in datos) / n
        desvest = var ** 0.5

        if desvest == 0:
            return [0 for _ in datos]

        return [(x - media) / desvest for x in datos]

    # UNIT (vector unitario)
    elif modo == "unit":
        norma = sum(x*x for x in datos) ** 0.5
        
        if norma == 0:
            return [0 for _ in datos]

        return [x / norma for x in datos]

valores = [10, 20, 30]

print("MinMax:", normalizar(valores, "minmax"))
print("Z-score:", normalizar(valores, "zscore"))
print("Unit:", normalizar(valores, "unit"))
print("Original:", valores)