function MiFuncion() {
       // aquí se define el ID del elemento que va a tomar la clase
     var x = document.getElementById("navegador");
     if (x.className === " ") {
         // esta es la clase que se agrega al elemento con eo id="navegador"
       x.className += "responsive";
     } else {
       x.className = " ";
     }
   }

 let currentIndex = 0; // Índice de la imagen actual
  const slides = document.getElementById('slidess2');
  const totalSlides = document.querySelectorAll('.slides2').length;

  function changeSlide(direction) {
    // Actualiza el índice de la imagen
    currentIndex += direction;

    // Vuelve al inicio o al final si el índice es inválido
    if (currentIndex >= totalSlides) {
      currentIndex = 0;
    } else if (currentIndex < 0) {
      currentIndex = totalSlides - 1;
    }

    // Aplica el cambio de imagen mediante la transformación
    slides.style.transform = `translateX(-${currentIndex * 100}%)`;
  }
