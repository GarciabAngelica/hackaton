document.addEventListener("DOMContentLoaded", () => {
    const buscador = document.getElementById("buscador-noticias");

    if (buscador) {
        buscador.addEventListener("keyup", (e) => {
            const textoBusqueda = e.target.value.toLowerCase().trim();
            const columnas = document.querySelectorAll(".row.g-4 > div");
            
            console.log("Columnas encontradas:", columnas.length); 
            console.log("Texto buscado:", textoBusqueda); 

            columnas.forEach(columna => {
                const titulo = columna.querySelector(".card-title");
                const texto = columna.querySelector(".card-text");

                if (!titulo || !texto) return;

                const coincide =
                    titulo.textContent.toLowerCase().includes(textoBusqueda) ||
                    texto.textContent.toLowerCase().includes(textoBusqueda);

                columna.style.setProperty("display", coincide ? "" : "none", "important");

            });
        });
    }
});