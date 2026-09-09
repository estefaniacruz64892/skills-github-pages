const botones = document.querySelectorAll(".filter-btn");
const proyectos = document.querySelectorAll(".project");

botones.forEach(function(boton) {

    boton.addEventListener("click", function() {

        const filtro = boton.getAttribute("data-filter");

        proyectos.forEach(function(proyecto) {

            const categoria = proyecto.getAttribute("data-category");

            if (filtro === "todos" || filtro === categoria) {
                proyecto.style.display = "block";
            } else {
                proyecto.style.display = "none";
            }

        });

    });

});

const botonModo = document.getElementById("darkMode");

botonModo.addEventListener("click", function() {

    document.body.classList.toggle("dark");

});
