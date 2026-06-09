// --- GESTOR DE TAREAS PROFESIONAL ---

// 1. Nuestra "base de datos" y el contador de IDs
const tareasIniciales = [
    { id: 1, descripcion: "Dominar Git y GitHub", completada: true },
    { id: 2, descripcion: "Aprender fundamentos de JS", completada: true },
    { id: 3, descripcion: "Practicar programación funcional", completada: false },
    { id: 4, descripcion: "Crear mi primera API", completada: false }
];
let idSiguiente = 5; // Contador externo para evitar IDs duplicados

// 2. Función PURA: Recibe un array de tareas y devuelve uno NUEVO.
const agregarTarea = (listaDeTareas, descripcion) => {
    const nuevaTarea = {
        id: idSiguiente++, // Usamos el contador y luego lo incrementamos
        descripcion: descripcion,
        completada: false
    };
    // Devolvemos una copia del array original + la nueva tarea
    return [...listaDeTareas, nuevaTarea];
};

// 3. Función PURA para completar tareas
const completarTarea = (listaDeTareas, id) => {
    return listaDeTareas.map(tarea => 
        tarea.id === id ? { ...tarea, completada: true } : tarea
    );
};

// 4. Función para mostrar pendientes (esta puede imprimir, no necesita ser pura)
const mostrarPendientes = (listaDeTareas) => {
    const pendientes = listaDeTareas.filter(tarea => !tarea.completada);
    console.log("\n--- TAREAS PENDIENTES ---");
    pendientes.forEach(tarea => {
        console.log(`[ ] ID: ${tarea.id} - ${tarea.descripcion}`);
    });
};


// --- EJECUCIÓN DEL PROGRAMA ---

// Empezamos con el estado inicial
let misTareas = tareasIniciales;
console.log("--- Estado Inicial ---");
console.log(misTareas);

// Las funciones ahora devuelven el nuevo estado, así que lo reasignamos
misTareas = agregarTarea(misTareas, "Entender el concepto de inmutabilidad");
misTareas = completarTarea(misTareas, 3);

console.log("\n--- Estado Final ---");
console.log(misTareas);

mostrarPendientes(misTareas);