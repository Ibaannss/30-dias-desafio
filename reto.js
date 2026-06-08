// 1. Objeto: Agrupa información relacionada
const perfilProfesional = {
    nombre: "Ivan",
    cargo: "Analista Programador en formación",
    habilidades: ["Git", "Markdown", "Terminal"],
    estaMotivado: true
};

// 2. Función que usa el objeto
function mostrarPerfil(usuario) {
    console.log(`Perfil de: ${usuario.nombre}`);
    console.log(`Objetivo: ${usuario.cargo}`);
    
    // 3. Reto: Usa .forEach para imprimir cada habilidad
    console.log("Habilidades actuales:");
    usuario.habilidades.forEach(hab => {
        console.log(`- ${hab}`);
    });
}

mostrarPerfil(perfilProfesional);