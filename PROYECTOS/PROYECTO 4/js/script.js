// Variables

const main = document.querySelector(".main");
const btn = document.querySelector(".section1__button");
const txt = document.querySelector(".section1__text");
const secul = document.querySelector(".section2__ul");
console.log(btn);


// Funciones 

function AddTask(){

    // const texto = txt.value;

    if ( txt.value.trim() != ""){

    // Crear elementos
        const secil = document.createElement("li");
        const secilbtn = document.createElement("button");
   
    // Añadir Clases
        secil.classList.add("section2__ul__li");
        secilbtn.classList.add("section2__ul__li__button");
    
    //Añadir contenido
        secil.textContent = txt.value;
        secilbtn.textContent = "X";  
   
   // Hacer hijos
        secul.appendChild(secil);
        secil.appendChild(secilbtn);
    console.log("sdds");

    //Eliminar tarea creada
    secilbtn.addEventListener("click", function(){

        secil.remove();

    });

    // Eliminar texto despues de enviar
        txt.value = "";

    }else{
        alert("No ha introducido ninguna tarea");
    };
} 

// Llamar a la funcion para crear una nueva tarea
btn.addEventListener("click", function(){
        AddTask();

});

