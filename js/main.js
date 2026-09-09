const botones = document.querySelectorAll(".filter-btn");
const proyectos = document.querySelectorAll(".project");

botones.forEach(function(boton) {

    boton.addEventListener("click", function() {

        const filtro = boton.dataset.filter;

        proyectos.forEach(function(proyecto) {

            if (filtro === "todos") {
                proyecto.style.display = "block";
            } 
            else if (proyecto.dataset.category === filtro) {
                proyecto.style.display = "block";
            } 
            else {
                proyecto.style.display = "none";
            }

        });

    });

});


const botonModo = document.getElementById("darkMode");

botonModo.addEventListener("click", function() {

    document.body.classList.toggle("dark");

});
