const section = document.querySelector('.main__article');
const text = document.querySelector('.main__article__parrafo');
const button = document.querySelector('.main__article__btn');
const frasesFrikisInformatica = ['Los programadores no tienen errores, solo experiencias inesperadas.', 'La programación es como montar en bicicleta: una vez que lo aprendes, nunca lo olvidas.', 'En la informática, el único límite es la imaginación (y la memoria RAM).', 'Los programadores no duermen, solo hacen pausas de ejecución.', 'La mejor forma de resolver un problema es dividirlo en problemas más pequeños.','Programar es como cocinar: a veces, una pizca de creatividad hace la diferencia.','En la programación, cada punto y coma cuenta.','El código es como el vino: mejora con el tiempo (y las revisiones).'];

function frasealeatoria () {
   return Math.floor(Math.random() * frasesFrikisInformatica.length);
}

button.addEventListener('click', function() {
    const fraseramdom = frasealeatoria();
    text.textContent = frasesFrikisInformatica[fraseramdom];
});
