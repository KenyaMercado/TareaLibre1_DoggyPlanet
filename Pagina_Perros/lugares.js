const nombrePerroDiv = document.getElementById('nombre-perro');
const queryString = window.location.search;
const urlParams = new URLSearchParams(queryString);
const nombrePerro = urlParams.get('nombre');

if (nombrePerro) {
    nombrePerroDiv.textContent = `Visita estos lugares con ${decodeURIComponent(nombrePerro)}`;
} else {
    nombrePerroDiv.textContent = 'Nombre del perro no proporcionado';
}
