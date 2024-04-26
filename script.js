



$(document).ready(function(){
    
    //script for toggling the navbar corner
    $("#navbar-toggler").click(function(){
        if ( $('.navbar-toggler').attr('aria-expanded') == 'true' ) {
            $(".sl-not-collapsed").css({"border-radius": "1rem 1rem 1rem 0rem"});
        } else {
            $(".sl-not-collapsed").delay(400).queue(function (next) { 
                $(this).css({"border-radius": "1rem"}); 
                next(); 
            });
        }
    });

});



// use a script tag or an external JS file
document.addEventListener("DOMContentLoaded", (event) => {
    gsap.registerPlugin(ScrollTrigger)

        
        //gsap animation for aircraft in product page
        let tl = gsap.timeline({
            scrollTrigger: {
                trigger: ".aircraft",
                start: "100",
                end: "800",
                scrub: true,
                markers: false
            }
        })
        
        tl.to('.aircraft', {
            y: 660,
            rotation: 45
        })
    


   });
  




//for smooth scroll animaions 
/*
const lenis = new Lenis()

lenis.on('scroll', (e) => {
  console.log(e)
})

function raf(time) {
  lenis.raf(time)
  requestAnimationFrame(raf)
}

requestAnimationFrame(raf)

*/
