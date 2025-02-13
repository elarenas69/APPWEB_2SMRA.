/* --Declarar variables */

const boton = document.querySelector(".button");
const main = document.querySelector(".main_2");
const text = document.querySelector(".main__text");
const color = ['0', '1', '2', '3', '4', '5', '6', '7', '8', '9', 'A', 'B', 'C', 'D', 'E', 'F'];
const text2 = document.querySelector(".main__txt2");

// --Funciones

function getRandomColor(){
        return Math.floor(Math.random() * color.length);
        
        }



boton.addEventListener("click", function() {
    let hexColor = "#";
    for (let i = 0; i < 6; i++){
        hexColor += color[getRandomColor()];
    }
    main.style.backgroundColor = hexColor;
    text2.textContent = hexColor;
});

