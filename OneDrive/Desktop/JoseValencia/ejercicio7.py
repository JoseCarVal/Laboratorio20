estudiantes = []

def agregar():
    nombre = input("Nombre: ").strip()
    edad = int(input("Edad: "))
    promedio = float(input("Promedio: "))

    estudiante = {
        "nombre": nombre,
        "edad": edad,
        "promedio": promedio
    }

    estudiantes.append(estudiante)
    print("Estudiante agregado.")


def mostrar():
    if not estudiantes:
        print("No hay estudiantes.")
        return
    
    print("LISTA DE ESTUDIANTES")
    for e in estudiantes:
        print(f"Nombre: {e['nombre']}, Edad: {e['edad']}, Promedio: {e['promedio']}")
    print()


def mejor_promedio():
    if not estudiantes:
        print("No hay estudiantes.")
        return
    
    mejor = max(estudiantes, key=lambda e: e["promedio"])
    print("MEJOR PROMEDIO")
    print(f"Nombre: {mejor['nombre']}, Promedio: {mejor['promedio']}\n")


def buscar():
    nombre = input("Nombre a buscar: ").strip().lower()
    
    encontrados = [e for e in estudiantes if e["nombre"].lower() == nombre]

    if encontrados:
        for e in encontrados:
            print(f"Encontrado: {e}")
    else:
        print("No encontrado.")
    print()


def eliminar():
    nombre = input("Nombre a eliminar: ").strip().lower()

    global estudiantes
    antes = len(estudiantes)
    estudiantes = [e for e in estudiantes if e["nombre"].lower() != nombre]

    if len(estudiantes) < antes:
        print("Estudiante eliminado.")
    else:
        print("No se encontró ese nombre.")


# MENÚ PRINCIPAL

while True:
    print("MENU")
    print("1. Agregar estudiante")
    print("2. Mostrar estudiantes")
    print("3. Mostrar estudiante con mejor promedio")
    print("4. Buscar por nombre")
    print("5. Eliminar por nombre")
    print("6. Salir")

    op = input("Opción: ")

    if op == "1":
        agregar()
    elif op == "2":
        mostrar()
    elif op == "3":
        mejor_promedio()
    elif op == "4":
        buscar()
    elif op == "5":
        eliminar()
    elif op == "6":
        print("Saliendo...")
        break
    else:
        print("Opción inválida.")