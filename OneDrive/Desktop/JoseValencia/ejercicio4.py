print("EJERCICIO 4: Impuestos progresivos")

ingreso_mensual = float(input("Ingreso mensual: "))
ingreso_anual = ingreso_mensual * 14

tramos = [
    (20000, 0.00),
    (50000, 0.10),
    (100000, 0.20),
    (float("inf"), 0.30)
]

impuesto_total = 0
limite_inferior = 0

print("IMPUESTO POR TRAMO")

for limite_superior, tasa in tramos:
    monto_sujeto = max(0, min(ingreso_anual, limite_superior) - limite_inferior)
    impuesto_tramo = monto_sujeto * tasa
    impuesto_total += impuesto_tramo

    print(f"({limite_inferior} - {limite_superior}]: "
            f"sujeto={monto_sujeto:.2f}, tasa={tasa*100:.0f}%, impuesto={impuesto_tramo:.2f}")

    limite_inferior = limite_superior
    if ingreso_anual <= limite_superior:
        break

tasa_efectiva = (impuesto_total / ingreso_anual) * 100

print("RESULTADOS")
print(f"Ingreso anual: {ingreso_anual:.2f}")
print(f"Impuesto total: {impuesto_total:.2f}")
print(f"Tasa efectiva: {tasa_efectiva:.2f}%")

