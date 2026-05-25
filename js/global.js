document.addEventListener('DOMContentLoaded', () => {
    const botonPrueba = document.getElementById('btn-test');
    
    if (botonPrueba) {
        botonPrueba.addEventListener('click', () => {
            alert('Probando');
        });
    }
});