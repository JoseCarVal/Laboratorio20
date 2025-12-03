import numpy as np

def normalizar_np(lista, modo):
    datos = np.array(lista, dtype=float)

    if modo not in ["minmax", "zscore", "unit"]:
        print("Error: modo inválido.")
        return None

    # MIN–MAX
    if modo == "minmax":
        minimo = datos.min()
        maximo = datos.max()
        rango = maximo - minimo

        if rango == 0:
            return np.zeros_like(datos).tolist()

        return ((datos - minimo) / rango).tolist()

    # Z–SCORE
    if modo == "zscore":
        media = datos.mean()
        desvest = datos.std()

        if desvest == 0:
            return np.zeros_like(datos).tolist()

        return ((datos - media) / desvest).tolist()

    # UNIT
    if modo == "unit":
        norma = np.linalg.norm(datos)

        if norma == 0:
            return np.zeros_like(datos).tolist()

        return (datos / norma).tolist()
    
valores = [10, 20, 30]

print("MinMax:", normalizar_np(valores, "minmax"))
print("Z-score:", normalizar_np(valores, "zscore"))
print("Unit:", normalizar_np(valores, "unit"))
print("Original:", valores)