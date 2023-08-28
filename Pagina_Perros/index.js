const btnNombre = document.getElementById('btn-nombre');
const nombrePerroInput = document.getElementById('nombre-perro');

btnNombre.addEventListener('click', () => {
    const nombrePerro = nombrePerroInput.value;
    if (nombrePerro.trim() !== '') {
        window.location.href = `lugares.html?nombre=${encodeURIComponent(nombrePerro)}`;
    }
});