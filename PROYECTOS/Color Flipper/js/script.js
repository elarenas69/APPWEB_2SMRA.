
/* --Declarar variables */

const boton = document.querySelector(".button");
const main = document.querySelector(".main");
const text = document.querySelector(".main__text");
const color = ['red', 'blue', 'green', 'yellow', 'purple', 'orange', 'pink', 'brown', 'black', 'white', 'gray', 'gold', 'maroon', 'aqua', 'cyan', 'magnenta', 'lime','silver', 'coral', 'navy'];
const text2 = document.querySelector(".main__txt2");

// --Funciones

function getRandomColor(){
    return Math.floor(Math.random() * color.length);
}


boton.addEventListener("click", function() {
    const randomColor = getRandomColor();
    main.style.backgroundColor = color[randomColor];
    text2.textContent = color[randomColor];
});



