const luchadoresleyenda = [
    {
        id: 6,
        nombre: "El Santo",
        bando: "Técnico",
        tecnica: "La de a Caballo",
        biografia: "Ícono cultural y cinematográfico de México. Rodolfo Guzmán convirtió su máscara plateada en el símbolo de justicia y el héroe técnico más grande de la historia",
        imagen: "../assets/luchadoresleyenda/ElSanto.jpg" 
    },
    {
        id: 7,
        nombre: "Blue Demon",
        bando: "Técnico",
        tecnica: "El Pulpo",
        biografia: "Con su icónico lema 'Alejandro Muñoz dio vida al legendario: Manotas. Legendario acérrimo rival de El Santo y baluarte técnico que internacionalizó la época de oro de la lucha libre Miedo!', ha conquistado tanto las arenas de México como el extranjero con su estilo recio y destructor.",
        imagen: "../assets/luchadoresleyenda/BlueDemon.jpg"
    },
    {
        id: 8,
        nombre: "KeMonito",
        bando: "Técnico", 
        tecnica: "Plancha Cruzada",
        biografia: "El micro-luchador consentido y mánager técnico del CMLL. Con su icónico traje azul y amarillo, es una de las figuras más virales y queridas de internet.",
        imagen: "../assets/luchadoresleyenda/kemonito.jpg"
    },
    {
        id: 9,
        nombre: "El perro Aguayo",
        bando: "Rudo",
        tecnica: "La Psycho Bomb / Plancha Sapo",
        biografia: "Pedro Aguayo fue un implacable y sanguinario rudo zacatecano. Conquistó al público con su fiereza en el ring, frentes ensangrentadas y sus icónicas botas peludas.",
        imagen: "../assets/luchadoresleyenda/PerroAguayo.jpg"
    },
    {
        id: 10,
        nombre: "La Park",
        bando: "Rudo / Tweener",
        tecnica: "La Lanza Zacatecana",
        biografia: "Adolfo Tapia es el esqueleto original más temido del pancracio. Un rudo indomable, famoso por su agresividad, carisma irreverente y uso rudo de sillas.",
        imagen: "../assets/luchadoresleyenda/LaPark.jpg"
    }
];
function mostrarLuchadores() {
    const contenedor = document.getElementById('contenedor-luchadores');
    luchadoresleyenda.forEach(luchador => {
        const tarjetaHTML = `
            <div class="card" style="width: 18rem;">
                <img src="${luchador.imagen}" class="card-img-top" alt="${luchador.nombre}">
                <div class="card-body">
                    <h5 class="card-title">${luchador.nombre}</h5>
                    <p class="card-text">${luchador.biografia}</p>
                </div>
                <ul class="list-group list-group-flush">
                    <li class="list-group-item"><strong>Técnica:</strong> ${luchador.tecnica}</li>
                    <li class="list-group-item"><strong>Bando:</strong> ${luchador.bando}</li>
                </ul>
            </div>
        `;
        contenedor.innerHTML += tarjetaHTML;
    });
}

document.addEventListener('DOMContentLoaded', mostrarLuchadores);