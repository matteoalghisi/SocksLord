



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
        let tlMd = gsap.timeline({
            scrollTrigger: {
                trigger: ".aircraft-md",
                start: "400 center" ,
                end: "1200 center" ,
                scrub: true,
                markers: true,
                //toggleActions: "play pause pause pause"
            }
        })
        tlMd.to('.aircraft-md', {
            y: 430,
            rotation: 45
        })
        .from('.aircraft-light-md', {
            opacity: 0
        })
        .to('.aircraft-text', {
            color: "#000000"
        }, "<" )
        
        let tlLg = gsap.timeline({
            scrollTrigger: {
                trigger: ".aircraft-lg",
                start: "400 center" ,
                end: "1200 center" ,
                scrub: true,
                markers: true,
                //toggleActions: "play pause pause pause"
            }
        })
        tlLg.to('.aircraft-lg', {
            y: 660,
            rotation: 45
        })
        .from('.aircraft-light-lg', {
            opacity: 0
        })
        .to('.aircraft-text', {
            color: "#000000"
        }, "<" )



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
