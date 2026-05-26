const btnExplorar = document.getElementById("btnExplorar");
const categorias = document.getElementById("categorias");

btnExplorar.addEventListener("click", () => {
  categorias.scrollIntoView({
    behavior: "smooth"
  });
});