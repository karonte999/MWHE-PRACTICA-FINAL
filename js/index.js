//GALERÍA

// document.querySelectorAll('.gallery-item').forEach(item => {
//     item.addEventListener('click', () => {
//         alert('Has hecho clic en una imagen!');
//     });
// });



// TYPE.JS

document.addEventListener("DOMContentLoaded", () => {
    const targetElement = document.getElementById("typewriter");
  
    // La frase que queremos escribir
    const text = "Endlessly shaping, endlessly refining. A design mindset fueled by curiosity and the pursuit of better.";
  
    // Configuración de la velocidad de escritura
    const typingSpeed = 50; // milisegundos por carácter
  
    // Función para escribir el texto
    function typeText(element, text, speed, callback) {
      let index = 0;
  
      function type() {
        if (index < text.length) {
          element.textContent += text[index];
          index++;
          setTimeout(type, speed);
        } else if (callback) {
          callback();
        }
      }
  
      type();
    }
  
    // Iniciar el efecto de escritura
    typeText(targetElement, text, typingSpeed);
  });
  


  // GSAP--------------------------------

  document.addEventListener("DOMContentLoaded", (event) => {

    
    gsap.registerPlugin(Flip,ScrollTrigger,TextPlugin);


    gsap.to(".myrowitems1", {
        scrollTrigger: {
            trigger: ".myrowitems1",
            start: "top 50%",
            // markers: true,
            scrub: true
        },
        x: 100,
        duration: 3,
    })

    gsap.to(".myrowitems2", {
        scrollTrigger: {
            trigger: ".myrowitems2",
            start: "top 50%",
            // markers: true,
            scrub: true
        },
        x: -100,
        duration: 3,
    })

    gsap.to(".myrowitems3", {
        scrollTrigger: {
            trigger: ".myrowitems3",
            start: "top 50%",
            // markers: true,
            scrub: true
        },
        x: 100,
        duration: 3,
    })

    // gsap.from(".introduccion", {
    //     opacity: 0,
    //     filter: "blur(10px)", // Comienza desenfocado
    //     duration: 1.5,
    // });




    // DESIGN AGENCY-----------------

    const Main = document.getElementsByClassName("title");

    gsap.to(Main, {
        scrollTrigger: {
            trigger: Main,
            start: 300,
            // markers: true,
            scrub: true
        },
        duration: 3,
        text: {
            value: "Design agency",
            oldClass: "start",
            newclass: "end",
        }
    })


    // COLOR FONDO----------------------

    gsap.to("body", {
        backgroundColor: ["#fefe79", "#f4f4f4"],
        scrollTrigger: {
          trigger: "body", 
          start: "top top", 
          end: "bottom bottom", // Final de la animación (scroll hasta el final)
          scrub: true,
        },
    });



    
    // CURSOR-----------------------------

    const cursor = document.getElementById("custom-cursor");

    document.addEventListener("mousemove", (event) => {
    gsap.to(cursor, {
        x: event.clientX,
        y: event.clientY,
        duration: 0.1, 
        ease: "power2.out",
    });
    });



    // HOVER---------------------------

        
        const images = document.querySelectorAll(".rounded");

        images.forEach(image => {

        // Animación cuando el mouse entra sobre la imagen
        image.addEventListener("mouseover", () => {
        gsap.to(image, { 
        scale: 1.1,          
        x: -10,           
        duration: 0.3,     
        ease: "power1.out" 
        });
    });

        // Animación cuando el mouse sale de la imagen
        image.addEventListener("mouseout", () => {
        gsap.to(image, { 
        scale: 1,   
        x: 0,            
        duration: 0.3,    
        ease: "power1.out"  
        });
    });
    });

    // LOGO ROTANDO-----------------------------------
    
    gsap.to(".rotate", { 
        rotation: 900,
        duration: 1,
        scrollTrigger: {
          trigger: '.rotate',
          scrub: 2,
        }
    });


    // HOVER IMAGENES---------------------------------------

    gsap.fromTo(".destacado", {
        opacity: 0, 
        scale: 0.8, 
        y: 50, 
      },
      {
        opacity: 1, // Opacidad final
        scale: 1, // Tamaño normal
        y: 0, 
        duration: 1.5, 
        stagger: 0.3, 
        ease: "power4.out", 
        scrollTrigger: {
          trigger: ".destacado",
          start: "top 50%",
          // markers: true,
          scrub: true
        },
      }
    );



});




// GALERIA



document.addEventListener('DOMContentLoaded', () => {
    const items = document.querySelectorAll('.gallery-item');
    const containerWidth = window.innerWidth;
    const containerHeight = window.innerHeight;

    items.forEach(item => {
        // Genera coordenadas aleatorias para posicionar los elementos
        const randomX = Math.random() * (containerWidth - 300); // Evita que salga del viewport
        const randomY = Math.random() * (containerHeight - 200);

        item.style.left = `${randomX}px`;
        item.style.top = `${randomY}px`;
    });
});




// GRADIENT




var colors = new Array(
    [245,229,11],
    [236,219,11],
    [229,188,6],
    [229,161,8]);
  
  var step = 0;
  //color table indices for: 
  // current color left
  // next color left
  // current color right 
  // next color right
  var colorIndices = [0,1,2,3];
  
  //transition speed
  var gradientSpeed = 0.002;
  
  function updateGradient()
  {
    
    if ( $===undefined ) return;
    
  var c0_0 = colors[colorIndices[0]];
  var c0_1 = colors[colorIndices[1]];
  var c1_0 = colors[colorIndices[2]];
  var c1_1 = colors[colorIndices[3]];
  
  var istep = 1 - step;
  var r1 = Math.round(istep * c0_0[0] + step * c0_1[0]);
  var g1 = Math.round(istep * c0_0[1] + step * c0_1[1]);
  var b1 = Math.round(istep * c0_0[2] + step * c0_1[2]);
  var color1 = "rgb("+r1+","+g1+","+b1+")";
  
  var r2 = Math.round(istep * c1_0[0] + step * c1_1[0]);
  var g2 = Math.round(istep * c1_0[1] + step * c1_1[1]);
  var b2 = Math.round(istep * c1_0[2] + step * c1_1[2]);
  var color2 = "rgb("+r2+","+g2+","+b2+")";
  
   $('#gradient').css({
     background: "-webkit-gradient(linear, left top, right top, from("+color1+"), to("+color2+"))"}).css({
      background: "-moz-linear-gradient(left, "+color1+" 0%, "+color2+" 100%)"});
    
    step += gradientSpeed;
    if ( step >= 1 )
    {
      step %= 1;
      colorIndices[0] = colorIndices[1];
      colorIndices[2] = colorIndices[3];
      
      //pick two new target color indices
      //do not pick the same as the current one
      colorIndices[1] = ( colorIndices[1] + Math.floor( 1 + Math.random() * (colors.length - 1))) % colors.length;
      colorIndices[3] = ( colorIndices[3] + Math.floor( 1 + Math.random() * (colors.length - 1))) % colors.length;
      
    }
  }
  
  setInterval(updateGradient,5);

  
  
// AOS-------------------------

AOS.init();
