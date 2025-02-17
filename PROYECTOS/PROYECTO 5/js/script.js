// DECLARAR VARIABLES

const btn = document.querySelector(".section1__button");
const txt = document.querySelector(".section1__text");
const secul = document.querySelector(".section2__ul");
const btn_r = document.querySelector(".section3_button");
const array = [];

// CREAR FUNCIONES

function AddTask() {
    if (txt.value.trim() !== "") {
        // CREAR ELEMENTOS
        const secil = document.createElement("li");
        const secilbtn = document.createElement("button");

        // AÑADIR CLASES
        secil.classList.add("section2__ul__li");
        secilbtn.classList.add("section2__ul__li__button");

        // AÑADIR CONTENIDO
        secil.textContent = txt.value;
        secilbtn.textContent = "X";

        // AGREGAR TAREA AL ARRAY
        array.push(txt.value);
        console.log(array);

        // HACERLOS HIJOS
        secil.appendChild(secilbtn);
        secul.appendChild(secil);

        // ELIMINAR TAREA
        secilbtn.addEventListener("click", function () {
            const index = array.indexOf(txt.value);
            if (index !== -1) {
                array.splice(index, 1);
                console.log(array);
            }
            secil.remove();
        });

        // ELIMINAR TEXTO ENVIADO
        txt.value = "";
    } else {
        alert("No ha introducido ninguna tarea");
    }
}

// SELECCIONAR Y RESALTAR UNA TAREA ALEATORIAMENTE
btn_r.addEventListener("click", function () {
    if (array.length > 0) {
        const tarea_texto = array[Math.floor(Math.random() * array.length)];
        const tareas = document.querySelectorAll(".section2__ul__li");

        tareas.forEach((tarea) => {
            if (tarea.firstChild.textContent === tarea_texto) {
                tarea.style.backgroundColor = "yellow";
            } else {
                tarea.style.backgroundColor = "";
            }
        });
    } else {
        alert("No hay tareas para seleccionar.");
    }
});


btn.addEventListener("click", AddTask);
