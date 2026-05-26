document.addEventListener('DOMContentLoaded', () => {
    const botonPrueba = document.getElementById('btn-test');
    
    if (botonPrueba) {
        botonPrueba.addEventListener('click', () => {
            alert('Probando');
        });
    }
});

// global.js - Carga dinamica de navbar 
function initScrollEffect() {
    const navbar = document.getElementById('mainNavbar');
    if (navbar) {
        window.addEventListener('scroll', () => {
            if (window.scrollY > 50) {
                navbar.classList.add('scrolled');
            } else {
                navbar.classList.remove('scrolled');
            }
        });
    }else{
        console.warn('Navbar no encontrada para aplicar efecto de scroll');
    }
}

// fetch(`components/navbar.html`)
//     .then(response => {
//         if (!response.ok) throw new Error('No se pudo cargar el navbar');
//         return response.text();
//     })
//     .then(data => {
//         document.body.insertAdjacentHTML('afterbegin', data);
//         initScrollEffect();
//     })
//     .catch(error => console.error('Error al cargar el navbar:', error));

// Carga dinamica de footer
// fetch(`components/footer.html`)
//     .then(response => {
//         if (!response.ok) throw new Error('No se pudo cargar el footer');
//         return response.text();
//     })
//     .then(data => {
//         document.body.insertAdjacentHTML('beforeend', data);
//     })
//     .catch(error => console.error('Error al cargar el footer:', error));