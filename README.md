# 🤼‍♂️ Lucha Libre MX – Sitio Web de Fanáticos

Proyecto realizado en equipo durante un **hackathon** (6 horas).  
El objetivo fue construir una página web temática de **lucha libre mexicana** con secciones de **Home, Mercancía, Noticias, Luchadores y Galería**, utilizando únicamente **HTML, CSS y JavaScript** (con Bootstrap para agilizar el diseño responsivo).

---

 ## 🧱 Estructura del proyecto
 ```text
lucha-libre-hackathon/
├── index.html # Página principal (Home)
├── css/
│ ├── global.css # Estilos globales (navbar, footer, variables)
│ ├── home.css
│ ├── mercancia.css
│ ├── noticias.css
│ ├── luchadores.css
│ └── galeria.css
├── js/
│ ├── global.js # Carga dinámica de navbar y footer
│ ├── home.js
│ ├── mercancia.js
│ ├── noticias.js
│ ├── luchadores.js
│ └── galeria.js
├── pages/
│ ├── mercancia.html
│ ├── noticias.html
│ ├── luchadores.html
│ └── galeria.html
├── assets/
│ ├── img/ # Imágenes organizadas por sección
│ ├── icons/ # Favicon, redes sociales, etc.
│ └── fonts/ # Fuentes personalizadas (opcional)
├── components/
│ ├── navbar.html # Barra de navegación reutilizable
│ └── footer.html # Pie de página reutilizable
└── README.md

```


---

## 🚀 Tecnologías utilizadas

- **HTML5** – Estructura semántica.
- **CSS3** – Estilos personalizados + variables.
- **Bootstrap 5** – Diseño responsivo rápido.
- **JavaScript** – Carga dinámica de componentes (navbar/footer) e interactividad.

---

## 🧩 Características principales

- **Navbar y footer reutilizables** (carga dinámica con `fetch`).
- **Diseño 100% responsivo** (se adapta a móvil, tablet y escritorio).
- **Temática de lucha libre** (colores rojo, negro, dorado; tipografía impactante).
- **Organización modular** (cada sección tiene su propio CSS y JS).
- **Enrutamiento sencillo** entre secciones mediante enlaces relativos.

---

## 🧑‍🤝‍🧑 Equipo y分工 (división del trabajo)

| Sección       | Responsable(s)                              |
| ------------- | ------------------------------------------- |
| **Navbar + Footer + Estructura global** |  Equipo 1         |
| **Home**      | Equipo 1                                    |
| **Mercancía** | Equipo 2                                    |
| **Noticias**  | Equipo 3                                    |
| **Luchadores**| Equipo 4                                    |
| **Galería**   | Equipo 5                                    |

---

## 🛠️ ¿Cómo ejecutar el proyecto localmente?

1. **Clonar el repositorio**
   ```bash
   git clone https://github.com/tu-usuario/lucha-libre-hackathon.git
   cd lucha-libre-hackathon

2. Abrir con Live Server (recomendado)
   Usa la extensión Live Server de VS Code o cualquier servidor local.

3. Navegar por el sitio
   Abre index.html y prueba las secciones.

   ⚠️ Nota: Los componentes (navbar/footer) se cargan con fetch, por lo que necesitas un servidor local (Live Server). No funciona directamente con file://.

---

## 📂 Convenciones para seguir desarrollando
Nuevas secciones:
Crear un nuevo archivo .html dentro de pages/, su .css dentro de css/ y su .js dentro de js/.

Imágenes:
Subirlas a assets/img/<seccion>/.

Componentes compartidos:
Modificar solo components/navbar.html y components/footer.html; global.js los cargará automáticamente.

---

## 📄 Licencia
Este proyecto se realizó con fines educativos / hackathon.
No tiene fines comerciales.

---

## ✨ Créditos
Organizado por el equipo de desarrollo del hackathon.

Inspiración visual: cultura de la lucha libre mexicana (CMLL, AAA, leyendas del ring).

** 🔔 ¡De dos a tres caídas sin límite de tiempo! (suena la campana)** 🥊🤼‍♂️
