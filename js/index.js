//GALERÍA

// document.querySelectorAll('.gallery-item').forEach(item => {
//     item.addEventListener('click', () => {
//         alert('Has hecho clic en una imagen!');
//     });
// });



// use a script tag or an external JS file
document.addEventListener("DOMContentLoaded", (event) => {

    // gsap code here!
    gsap.registerPlugin(ScrollTrigger);


    gsap.to(".welcome", {
        scrollTrigger: {
            trigger: ".welcome",
            start: 400,
            markers: true,
            scrub: true
        },
        x: 700,
        duration: 3,
    })


});
  


