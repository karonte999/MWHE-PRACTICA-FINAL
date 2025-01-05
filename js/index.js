//GALERÍA

// document.querySelectorAll('.gallery-item').forEach(item => {
//     item.addEventListener('click', () => {
//         alert('Has hecho clic en una imagen!');
//     });
// });



// use a script tag or an external JS file
document.addEventListener("DOMContentLoaded", (event) => {

    // gsap code here!
    gsap.registerPlugin(Flip,ScrollTrigger,TextPlugin);


    gsap.to(".myrowitems1", {
        scrollTrigger: {
            trigger: ".myrowitems1",
            start: "top 50%",
            markers: true,
            scrub: true
        },
        x: 100,
        duration: 3,
    })

    gsap.to(".myrowitems2", {
        scrollTrigger: {
            trigger: ".myrowitems2",
            start: "top 50%",
            markers: true,
            scrub: true
        },
        x: -100,
        duration: 3,
    })

    gsap.to(".myrowitems3", {
        scrollTrigger: {
            trigger: ".myrowitems3",
            start: "top 50%",
            markers: true,
            scrub: true
        },
        x: 100,
        duration: 3,
    })

    gsap.from(".introduccion", {
        opacity: 0,
        filter: "blur(10px)", // Comienza desenfocado
        duration: 1.5,
    });

    const Main = document.getElementsByClassName("title");

    gsap.to(Main, {
        scrollTrigger: {
            trigger: Main,
            start: 300,
            markers: true,
            scrub: true
        },
        duration: 3,
        text: {
            value: "DESIGN AGENCY",
            oldClass: "start",
            newclass: "end",
        }
    })

   
    
    // Seleccionamos el contenedor del carrusel
    const carousel = document.querySelector(".carousel");

    // Calculamos el ancho total del carrusel
    const totalWidth = carousel.scrollWidth - window.innerWidth; // Ancho total menos el tamaño de la ventana

    // Animamos el desplazamiento del carrusel
    gsap.to(carousel, {
        scrollTrigger: {
            trigger: "#carousel", // El área que activa la animación
            start: "top center", // Inicia cuando el inicio del contenedor esté en la parte superior de la ventana
            end: () => `+=${totalWidth}`, // La animación se extiende hasta cubrir todo el ancho
            scrub: true, // Sincroniza el desplazamiento con el scroll
            pin: true, // Fija el contenedor durante el scroll
        },
        x: -totalWidth, // Desplazamos el carrusel hacia la izquierda
        ease: "none", // Movimiento sin aceleración ni desaceleración
        
    });



    
    



});
  


