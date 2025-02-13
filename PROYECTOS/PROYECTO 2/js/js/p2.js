function toggleBox() {

    if (box.style.display == "none") {
      box.style.display = "block";
      button.textContent = "Ocultar caja";
    } else {
      box.style.display = "none";
      button.textContent = "Mostrar caja";
    }
  }
  
  const box = document.querySelector(".box");
  const button = document.querySelector(".toggleButton");


 button.addEventListener("click", toggleBox);
  