//GALERÍA

// document.querySelectorAll('.gallery-item').forEach(item => {
//     item.addEventListener('click', () => {
//         alert('Has hecho clic en una imagen!');
//     });
// });




// NO FUNCIONA 

// use a script tag or an external JS file
document.addEventListener("DOMContentLoaded", (event) => {

    // gsap code here!
    gsap.registerPluging(ScrollTrigger);

    gsap.to('.square', {
        rotation:360,
        duration: 5,
        ScrollTrigger: {
            trigger: '.square',
            markers: true,
            scrub: true
        }
    })

});
  


