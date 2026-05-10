// Slider
const imagenes = [
    "imagenes/FRA2.jpg",
    "imagenes/Cultura 1.jpg",
    "imagenes/innovacion 1.jpg",
    "imagenes/Comida 1.jpg"
];

let contador = 0;
const sliderImg = document.querySelector(".slider img");

function cambiarImagen(direccion = 1) {
    if (!sliderImg) return; 

    contador += direccion;
    if (contador >= imagenes.length) contador = 0;
    if (contador < 0) contador = imagenes.length - 1;
    
    sliderImg.style.opacity = "0";
    setTimeout(() => {
        sliderImg.src = imagenes[contador];
        sliderImg.style.opacity = "1";
    }, 300);
}


if (sliderImg) {
    setInterval(() => cambiarImagen(1), 4000);
}

// Menu
function toggleMenu() {
    const sidebar = document.getElementById("sidebar");
    const btn = document.querySelector(".menu-btn");
    
    sidebar.classList.toggle("active");
    
    
    if (sidebar.classList.contains("active")) {
        btn.innerHTML = "&times;"; 
    } else {
        btn.innerHTML = "&#9776;"; 
    }
}
function mostrarSaludo() {
    const mensajeElemento = document.getElementById("mensaje");
    
    if (mensajeElemento) {
        let hora = new Date().getHours();
        let saludo = "";

        if (hora < 12) {
            saludo = "Good Morning - Willkommen!";
        } else if (hora < 18) {
            saludo = "Good Afternoon - Willkommen!";
        } else {
            saludo = "Good Evening - Willkommen!";
        }
        
        mensajeElemento.innerHTML = `<strong>${saludo}</strong>`;
    }
}

window.onload = mostrarSaludo;