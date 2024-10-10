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

var slideIndex = 1;
    showDivs(slideIndex);
 
    function plusDivs(n) {
    showDivs(slideIndex += n);
    }
 
    function showDivs(n) {
        var i;
 
        // acá define qué elemento entra en el slider
        var x = document.getElementsByClassName("slidepris");
        if (n > x.length) {slideIndex = 1}
        if (n < 1) {slideIndex = x.length} 
        for (i = 0; i < x.length; i++) {
            x[i].style.display = "none";
        }
        x[slideIndex-1].style.display = "block";
    }
 
    carousel();
 
    function carousel() {
 
    var i;
 
    var x = document.getElementsByClassName("slidepris");
 
    for (i = 0; i < x.length; i++) {
        x[i].style.display = "none";
    }
 
    slideIndex++;
 
    if (slideIndex > x.length) {slideIndex = 1}
    x[slideIndex-1].style.display = "block";
 
    setTimeout(carousel, 2000); // Cambia la imagen cada 2 segundos
 
    }


var slideIndex = 1;
    showDivs(slideIndex);
 
    function plusDivs(n) {
    showDivs(slideIndex += n);
    }
 
    function showDivs(n) {
        var i;
 
        // acá define qué elemento entra en el slider
        var x = document.getElementsByClassName("slidebio1990");
        if (n > x.length) {slideIndex = 1}
        if (n < 1) {slideIndex = x.length} 
        for (i = 0; i < x.length; i++) {
            x[i].style.display = "none";
        }
        x[slideIndex-1].style.display = "block";
    }
 
    carousel();
 
    function carousel() {
 
    var i;
 
    var x = document.getElementsByClassName("slidebio1990");
 
    for (i = 0; i < x.length; i++) {
        x[i].style.display = "none";
    }
 
    slideIndex++;
 
    if (slideIndex > x.length) {slideIndex = 1}
    x[slideIndex-1].style.display = "block";
 
    setTimeout(carousel, 2000); // Cambia la imagen cada 2 segundos
 
    }

var slideIndex = 1;
    showDivs(slideIndex);
 
    function plusDivs(n) {
    showDivs(slideIndex += n);
    }
 
    function showDivs(n) {
        var i;
 
        // acá define qué elemento entra en el slider
        var x = document.getElementsByClassName("slidebio2003");
        if (n > x.length) {slideIndex = 1}
        if (n < 1) {slideIndex = x.length} 
        for (i = 0; i < x.length; i++) {
            x[i].style.display = "none";
        }
        x[slideIndex-1].style.display = "block";
    }
 
    carousel();
 
    function carousel() {
 
    var i;
 
    var x = document.getElementsByClassName("slidebio2003");
 
    for (i = 0; i < x.length; i++) {
        x[i].style.display = "none";
    }
 
    slideIndex++;
 
    if (slideIndex > x.length) {slideIndex = 1}
    x[slideIndex-1].style.display = "block";
 
    setTimeout(carousel, 2000); // Cambia la imagen cada 2 segundos
 
    }

var slideIndex = 1;
    showDivs(slideIndex);
 
    function plusDivs(n) {
    showDivs(slideIndex += n);
    }
 
    function showDivs(n) {
        var i;
 
        // acá define qué elemento entra en el slider
        var x = document.getElementsByClassName("slidebio2006");
        if (n > x.length) {slideIndex = 1}
        if (n < 1) {slideIndex = x.length} 
        for (i = 0; i < x.length; i++) {
            x[i].style.display = "none";
        }
        x[slideIndex-1].style.display = "block";
    }
 
    carousel();
 
    function carousel() {
 
    var i;
 
    var x = document.getElementsByClassName("slidebio2006");
 
    for (i = 0; i < x.length; i++) {
        x[i].style.display = "none";
    }
 
    slideIndex++;
 
    if (slideIndex > x.length) {slideIndex = 1}
    x[slideIndex-1].style.display = "block";
 
    setTimeout(carousel, 2000); // Cambia la imagen cada 2 segundos
 
    }

















