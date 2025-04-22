document.querySelector("button").addEventListener("click", function() {
    alert("Gracias por tu mensaje, te contactaré pronto!");
});
// Animaciones al desplazarse
window.addEventListener("scroll", function() {
    let header = document.querySelector("header");
    if (window.scrollY > 50) {
        header.style.background = "#222";
    } else {
        header.style.background = "#333";
    }
});

// Efecto en el formulario de contacto
document.querySelector("form").addEventListener("submit", function(event) {
    event.preventDefault(); // Evita el envío automático
    alert("Gracias por tu mensaje, Oscar. ¡Te responderé pronto!");
});
document.addEventListener("DOMContentLoaded", function() {
    let sections = document.querySelectorAll("section");
    sections.forEach(section => {
        section.style.opacity = "0";
        section.style.transform = "translateY(30px)";
    });

    window.addEventListener("scroll", function() {
        sections.forEach(section => {
            let position = section.getBoundingClientRect().top;
            let windowHeight = window.innerHeight;
            if (position < windowHeight - 100) {
                section.style.opacity = "1";
                section.style.transform = "translateY(0)";
                section.style.transition = "opacity 0.8s ease-out, transform 0.8s ease-out";
            }
        });
    });
});
document.addEventListener("DOMContentLoaded", function() {
    let sections = document.querySelectorAll("section");
    sections.forEach(section => {
        section.style.opacity = "0";
        section.style.transform = "translateY(30px)";
    });

    window.addEventListener("scroll", function() {
        sections.forEach(section => {
            let position = section.getBoundingClientRect().top;
            let windowHeight = window.innerHeight;
            if (position < windowHeight - 100) {
                section.style.opacity = "1";
                section.style.transform = "translateY(0)";
                section.style.transition = "opacity 0.8s ease-out, transform 0.8s ease-out";
            }
        });
    });
});
document.querySelectorAll(".tech-btn").forEach(button => {
    button.addEventListener("click", function() {
        alert("Has seleccionado " + this.textContent.trim() + " como tecnología destacada!");
    });
});
