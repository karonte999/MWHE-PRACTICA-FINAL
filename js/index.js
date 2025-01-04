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
        x: 200,
        duration: 3,
    })

    gsap.to(".myrowitems2", {
        scrollTrigger: {
            trigger: ".myrowitems2",
            start: "top 50%",
            markers: true,
            scrub: true
        },
        x: -200,
        duration: 3,
    })

    gsap.to(".myrowitems3", {
        scrollTrigger: {
            trigger: ".myrowitems3",
            start: "top 50%",
            markers: true,
            scrub: true
        },
        x: 200,
        duration: 3,
    })

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


});
  


