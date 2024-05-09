



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
        let tlSm = gsap.timeline({
            scrollTrigger: {
                trigger: ".aircraft-sm",
                start: "100 center" ,
                end: "800 center" ,
                scrub: true,
                markers: false,
                //toggleActions: "play pause pause pause"
            }
        })
        tlSm.to('.aircraft-sm', {
            y: 380,
            x: 130,
            rotation: 45
        })
        .from('.aircraft-light-sm', {
            opacity: 0
        })
        .to('.aircraft-text-sm', {
            color: "#000000"
        }, "<" )
        .to('.aircraft-btn-text-sm', {
            color: "#000000"
        }, "<" )

        
        
        let tlMd = gsap.timeline({
            scrollTrigger: {
                trigger: ".aircraft-md",
                start: "200 center" ,
                end: "950 center" ,
                scrub: true,
                markers: false,
                //toggleActions: "play pause pause pause"
            }
        })
        tlMd.to('.aircraft-md', {
            y: 510,
            rotation: 45
        })
        .from('.aircraft-light-md', {
            opacity: 0
        })
        .to('.aircraft-text-md', {
            color: "#000000"
        }, "<" )
        .to('.aircraft-btn-text-md', {
            color: "#000000"
        }, "<" )
        
        let tlLg = gsap.timeline({
            scrollTrigger: {
                trigger: ".aircraft-lg",
                start: "400 center" ,
                end: "1200 center" ,
                scrub: true,
                markers: false,
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
        .to('.aircraft-text-lg', {
            color: "#000000"
        }, "<" )
        .to('.aircraft-btn-text-lg', {
            color: "#000000"
        }, "<" )




        //animation for scrolling card in product page
        const cards = gsap.utils.toArray(".sl-card-scroll");
        const spacer = 20;

        cards.forEach((card, index) => {
        ScrollTrigger.create({
            trigger: card,
            start: `top-=${index * spacer} top+=400px`,
            endTrigger: ".pin-panel",
            end: `bottom top+=${200 + cards.length * spacer}`,
            pin: true,
            pinSpacing: false,
            markers: true,
            id: "card-pin",
            invalidateOnRefresh: true
        });
        });

        ScrollTrigger.create({
        trigger: ".sl-card-main",
        start: "top 400",
        end: (self) => self.previous().end,
        pin: true,
        markers: false
        });
        

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
