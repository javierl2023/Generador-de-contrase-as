let contador = 1;

function generarContraseña() {
    const longitud = document.getElementById('length').value;
    const nombre = document.getElementById('name').value;
    const caracteres = "abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789";
    let contraseña = "";
    for (let i = 0; i < longitud; i++) {
        const indiceAleatorio = Math.floor(Math.random() * caracteres.length);
        contraseña += caracteres[indiceAleatorio];
    }
    document.getElementById('password').innerText = contraseña;
    agregarAHistorial(nombre, contraseña);
}

function agregarAHistorial(nombre, contraseña) {
    const historial = document.getElementById('history');
    const elementoLista = document.createElement('li');
    const fecha = new Date().toLocaleString();
    const idUnico = `password-${contador++}`;
    const registro = {
        id: idUnico,
        nombre: nombre,
        contraseña: contraseña,
        fecha: fecha
    };
    guardarEnLocalStorage(registro);
    elementoLista.textContent = `${contador - 1}. ${nombre}: ${contraseña} (Generada el: ${fecha})`;
    elementoLista.id = idUnico;
    historial.appendChild(elementoLista);
}

function guardarEnLocalStorage(registro) {
    let historialContraseñas = JSON.parse(localStorage.getItem('historialContraseñas')) || [];
    historialContraseñas.push(registro);
    localStorage.setItem('historialContraseñas', JSON.stringify(historialContraseñas));
}

function obtenerHistorial() {
    return JSON.parse(localStorage.getItem('historialContraseñas')) || [];
}

// Asegurarse de que el script se ejecute después de que el DOM esté completamente cargado
document.addEventListener('DOMContentLoaded', () => {
    document.getElementById('generate').addEventListener('click', generarContraseña);
    actualizarVisualizacionHistorial();
});

function actualizarVisualizacionHistorial() {
    const visualizacionHistorial = document.getElementById('history-display');
    visualizacionHistorial.innerHTML = '';
    obtenerHistorial().forEach((registro, index) => {
        const elementoLista = document.createElement('li');
        elementoLista.innerText = `${index + 1}. ${registro.nombre}: ${registro.contraseña} (Generada el: ${registro.fecha})`;
        visualizacionHistorial.appendChild(elementoLista);
    });
}