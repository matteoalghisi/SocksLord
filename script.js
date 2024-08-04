// HOMEPAGE FILE //

// Navbar animation //
document.addEventListener("DOMContentLoaded", function() {
  var navbarContainer = document.getElementById("navbarContainer");
  var navbarSupportedContent = document.getElementById("navbarSupportedContent");

  function updateNavbarRadius() {
    if (window.innerWidth > 1200) {
      navbarContainer.classList.remove("no-radius");
    } else {
      if (navbarSupportedContent.classList.contains('show')) {
        navbarContainer.classList.add("no-radius");
      }
    }
  }

  navbarSupportedContent.addEventListener('show.bs.collapse', function() {
    navbarContainer.classList.add("no-radius");
  });

  navbarSupportedContent.addEventListener('hidden.bs.collapse', function() {
    setTimeout(function() {
      navbarContainer.classList.remove("no-radius");
    }, 10);  
  });

  window.addEventListener('resize', updateNavbarRadius);
  updateNavbarRadius(); 
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
            y: 300,
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
        var minWidth768 = window.matchMedia("(min-width: 768px)")
        let slCardMainStart;

            if (minWidth768.matches) { // If media query matches
                slCardMainStart = 400;
            } else {
                slCardMainStart = 200;
            }


        const cards = gsap.utils.toArray(".sl-card-scroll");
        const spacer = 4;

        cards.forEach((card, index) => {
        ScrollTrigger.create({
            trigger: card,
            start: `top-=${index * spacer} top+=400px`,
            endTrigger: ".pin-panel",
            end: `bottom top+=${180 + cards.length * spacer}`,
            pin: true,
            pinSpacing: false,
            markers: true,
            id: "card-pin",
            invalidateOnRefresh: true
        });
        });

        ScrollTrigger.create({
        trigger: ".sl-card-main",
        start: `top ${slCardMainStart}px` ,
        end: (self) => self.previous().end,
        pin: true,
        markers: false
        });

        



        let rotateTo = gsap.quickTo(".sl-about-aircraft", "rotation"),
        prevDirection = 0;
        
        //animation for aircraft through islands in about us page
        const main = gsap.timeline({
            scrollTrigger: {
                trigger: ".path",
                scrub: true,
                start: "-200 top",
                end: "bottom",
                once: true
                
              

                  


            }
        })
        .to(".sl-about-aircraft", {
            duration: 10,
            ease: "none",
            immediateRender: true,

            motionPath: {
                path: ".path",
                align: ".path",
                alignOrigin: [0.5, 0.5],
                autoRotate: true
            }
        })








   });



//script for swipable bootsrap carousel on mobile

$('.carousel').on('touchstart', function(event){
    const xClick = event.originalEvent.touches[0].pageX;
    $(this).one('touchmove', function(event){
        const xMove = event.originalEvent.touches[0].pageX;
        const sensitivityInPx = 5;

        if( Math.floor(xClick - xMove) > sensitivityInPx ){
            $(this).carousel('next');
        }
        else if( Math.floor(xClick - xMove) < -sensitivityInPx ){
            $(this).carousel('prev');
        }
    });
    $(this).on('touchend', function(){
        $(this).off('touchmove');
    });
});
  





