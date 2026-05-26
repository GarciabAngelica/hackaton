const luchadoresleyenda = [
    {
        id: 1,
        nombre: "Místico",
        bando: "Técnico",
        tecnica: "La Mística",
        biografia: "Comenzó con el nombre de Dr. Karonte Jr. en 1998 tomando el nombre con el que había luchado su padre. En 2004, se convirtió en Místico, un personaje que rápidamente se convirtió en uno de los más populares de México, conocido por su estilo aéreo y su carisma inigualable.",
        imagen: "../assets/luchadoresleyenda/mistico.jpg" // Cambia por tu ruta real
    },
    {
        id: 2,
        nombre: "Atlantis Jr",
        bando: "Técnico",
        tecnica: "La Atlántida",
        biografia: "Hijo del legendario Atlantis, ha heredado el legado de su padre con un estilo técnico y elegante que lo ha llevado a ser uno de los luchadores más queridos por el público, destacando por su habilidad en el ring y su carisma.",
        imagen: "../assets/luchadoresleyenda/Atlantis.jpg"
    },
    {
        id: 3,
        nombre: "Soberano Jr.",
        bando: "Rudo", 
        tecnica: "Tope suicida",
        biografia: "Heredero de una gran dinastía. Debutó en la Arena México el 27 de Junio del 2011. Y combina una elegancia estética impecable en el ring con una actitud arrogante que domina al público.",
        imagen: "../assets/luchadoresleyenda/soberano.jpg"
    },
    {
        id: 4,
        nombre: "Psycho Clown",
        bando: "Técnico",
        tecnica: "La Psycho Bomb",
        biografia: "Heredero de una de las dinastías más grandes de México (Los Brazos). Actualmente, el Psicópata del Ring no solo forjó su propio camino, sino que tiene todo para ser una leyenda de la AAA.",
        imagen: "../assets/luchadoresleyenda/Clowns.jpg"
    },
    {
        id: 5,
        nombre: "El Hijo del Vikingo",
        bando: "Técnico",
        tecnica: "Cuerno del Vikingo (630 Senton)",
        biografia: "Vikingo hizo su debut en la lucha libre profesional en 2017, su increíble agilidad, acrobacias y maniobras aéreas que dejaban al público asombrado. El estilo de Vikingo combina una mezcla de lucha libre y técnicas aéreas, demostrando su dominio de movimientos rápidos y desafiantes a la gravedad.",
        imagen: "../assets/luchadoresleyenda/Vikingo.jpg"
    },
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
    const contenedor = document.getElementById('contenedorLeyendas');
    
    // Limpiamos el contenedor antes de renderizar para que no se dupliquen
    contenedor.innerHTML = "";

    // ForEach corregido con el nombre de la constante en minúsculas
    luchadoresleyenda.forEach(luchador => {
        const tarjetaHTML = `
            <div class="col d-flex justify-content-center">
        <div class="card h-100 borde-rojo-actual">
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
            </div>
        `;
        contenedor.innerHTML += tarjetaHTML;
    });
}

document.addEventListener('DOMContentLoaded', mostrarLuchadores);