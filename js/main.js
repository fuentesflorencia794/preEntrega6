    // Defino la clase para instanciar la ropa de rock
class Producto {
  constructor(id, nombre, precio, categoria) {
    this.id = id;
    this.nombre = nombre;
    this.precio = precio;
    this.categoria = categoria;
  }
}

// Creo el array con mi catálogo de indumentaria de rock
const productos = [
  new Producto(1, "Remera Metallica", 15000, "Remeras"),
  new Producto(2, "Buzo AC/DC", 35000, "Buzos"),
  new Producto(3, "Campera Cuero Ramones", 80000, "Camperas"),
  new Producto(4, "Remera Nirvana", 15000, "Remeras")
];

// Búsqueda 1: Busco una prenda específica por su ID
const productoBuscado = productos.find(p => p.id === 2);
console.log("Producto buscado:", productoBuscado);

// Búsqueda 2: Filtro para quedarme solo con las Remeras
const remeras = productos.filter(p => p.categoria === "Remeras");
console.log("Catálogo de Remeras:", remeras);

// Transformación: Paso los nombres de las prendas a mayúsculas
const nombres = productos.map(p => p.nombre.toUpperCase());
console.log("Nombres en mayúsculas:", nombres);

// Acumulación: Sumo todos los precios para saber el valor total del catálogo
const total = productos.reduce((acc, p) => acc + p.precio, 0);
console.log("Total del catálogo: $" + total);

// Creo la función para manejar la interacción con el usuario
function iniciarSimulador() {
  alert("¡Bienvenido a Ilucion Rock! Revisa la consola (F12) para ver el catálogo.");
  
  // Le pido un ID al usuario
  const idIngresado = Number(prompt("Ingresa el ID de la prenda que buscas (1 al 4):"));
  
  // Busco la prenda correspondiente
  const encontrado = productos.find(p => p.id === idIngresado);

  // Muestro el resultado en pantalla
  if (encontrado) {
    alert("Encontrado: " + encontrado.nombre + " - $" + encontrado.precio);
  } else {
    alert("Prenda no encontrada.");
  }
}

// Ejecuto el simulador
iniciarSimulador();