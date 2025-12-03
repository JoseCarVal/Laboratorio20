print("EJERCICIO 3: Cálculo de salario")

salario_base = float(input("Salario base: "))
horas_extras = float(input("Horas extras: "))
pago_hora_extra = float(input("Pago por hora extra: "))
bono = float(input("Bono: "))
afp = float(input("Porcentaje AFP: "))
salud = float(input("Porcentaje Salud: "))

salario_bruto = salario_base + (horas_extras * pago_hora_extra) + bono
descuento_afp = salario_base * (afp / 100)
descuento_salud = salario_base * (salud / 100)
descuentos_totales = descuento_afp + descuento_salud
salario_neto = salario_bruto - descuentos_totales

print("RESULTADOS")
print(f"Salario bruto: {salario_bruto:.2f}")
print(f"Descuento AFP: {descuento_afp:.2f}")
print(f"Descuento Salud: {descuento_salud:.2f}")
print(f"Descuentos totales: {descuentos_totales:.2f}")
print(f"Salario neto: {salario_neto:.2f}")

