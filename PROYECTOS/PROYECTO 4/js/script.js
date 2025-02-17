// DECLARAR VARIABLES

const main = document.querySelector(".main");
const btn = document.querySelector(".section1__button");
const txt = document.querySelector(".section1__text");
const secul = document.querySelector(".section2__ul");



// CREAR FUNCIONES 

function AddTask(){

    // const texto = txt.value;

    if ( txt.value.trim() != ""){ // QUITAR ESPACIOS EN BLANCO

    // CREAR ELEMENTOS
        const secil = document.createElement("li");
        const secilbtn = document.createElement("button");
   
    // AÑADIR LAS CLASES
        secil.classList.add("section2__ul__li");
        secilbtn.classList.add("section2__ul__li__button");
    
    //AÑADIR EL COBNTENIDO
        secil.textContent = txt.value;
        secilbtn.textContent = "X";  
   
   // HACER LOS HIJOS
        secul.appendChild(secil);
        secil.appendChild(secilbtn);
    console.log("sdds");

    //ELIMINAR LAS TAREAS
    secilbtn.addEventListener("click", function(){

        secil.remove();

    });

    // ELIMINAR EL TEXTO AL ENVIAR
        txt.value = "";

    }else{
        alert("No ha introducido ninguna tarea");
    };
} 

// LLAMAR FUNCIONM PARA LA TAREA CREADA
btn.addEventListener("click", function(){
        AddTask();

});

