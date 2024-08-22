//Js script

// Navbar animation
document.addEventListener("DOMContentLoaded", function () {
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

    navbarSupportedContent.addEventListener('show.bs.collapse', function () {
        navbarContainer.classList.add("no-radius");
    });

    navbarSupportedContent.addEventListener('hidden.bs.collapse', function () {
        setTimeout(function () {
            navbarContainer.classList.remove("no-radius");
        }, 10);
    });

    window.addEventListener('resize', updateNavbarRadius);
    updateNavbarRadius();
});


//jquery script
$(document).ready(function () {
    //general script for swipable bootsrap carousel on mobile
    $('.carousel').on('touchstart', function (event) {
        const xClick = event.originalEvent.touches[0].pageX;
        $(this).one('touchmove', function (event) {
            const xMove = event.originalEvent.touches[0].pageX;
            const sensitivityInPx = 5;
            if (Math.floor(xClick - xMove) > sensitivityInPx) {
                $(this).carousel('next');
            }
            else if (Math.floor(xClick - xMove) < -sensitivityInPx) {
                $(this).carousel('prev');
            }
        });
        $(this).on('touchend', function () {
            $(this).off('touchmove');
        });
    });

    //script for animation of aircraft in about us (use different path for different breakpoint)
    
    if (window.matchMedia("(min-width: 1400px)").matches) {
        $(".section-aboutus-islands .container").append($('<svg class=" position-absolute sl-path-svg" viewBox="0 0 150 390" xmlns="http://www.w3.org/2000/svg"><path preserveAspectRatio="none" class="path" d="M 153.489 1.65 C 98.118 34.193 6.164 21.172 6.02 69.919 C 5.88 117.385 112.744 99.319 112.744 148.744 C 112.744 191.403 11.501 171.976 3.174 235.105 C -3.099 282.66 145.044 243.099 156.126 391.524"></path></svg>'));
    } else{
        if (window.matchMedia("(min-width: 1200px)").matches) {
            $(".section-aboutus-islands .container").append($('<svg class=" position-absolute sl-path-svg" viewBox="0 0 150 390" xmlns="http://www.w3.org/2000/svg"><path preserveAspectRatio="none" class="path" d="M 148.024 -28.448 C 105.897 13.572 6.29 18.628 6.174 64.95 C 6.025 124.366 112.97 101.023 112.744 151.106 C 112.518 201.188 19.41 176.226 3.174 238.618 C -13.062 301.009 143.934 278.911 155.608 397.121" style="fill: none; stroke: rgb(186, 218, 85);"></path></svg>'));
        } else {
            if (window.matchMedia("(min-width: 768px)").matches) {
                $(".section-aboutus-islands .container").append($('<svg class=" d-none d-md-block d-xl-none position-absolute sl-path-svg" viewBox="0 0 80 495" xmlns="http://www.w3.org/2000/svg" preserveAspectRatio="none"><path class="path" id="path" d="M 113.881 -55.697 C 101.033 48.202 14.459 17.138 14.459 62.389 C 14.459 107.639 41.11 105.169 41.11 149.535 C 41.11 193.899 12.622 195.03 11.146 239.493 C 9.671 283.957 35.792 284.482 36.875 328.552 C 37.957 372.62 9.502 382.544 14.704 424.833 C 19.906 467.122 88.437 458.081 92.355 522.398"  transform="matrix(1, 0, 0, 1, -1.4210854715202004e-14, 0)"/></svg>'));
            }
            else {
                if (window.matchMedia("(min-width: 360px)").matches) {
                    $(".section-aboutus-islands .container").append($('  <svg class="position-absolute sl-path-svg" viewBox="0 0 60 530" xmlns="http://www.w3.org/2000/svg"><path class="path" id="path" d="M 59.121 1.97 C 50.41 16.816 23.6 4.134 23.6 42.855 C 23.6 86.923 8.158 85.313 8.349 102.387 C 8.54 119.46 26.778 117.785 25.825 146.907 C 24.872 176.028 6.953 171.775 8.349 192.843 C 8.348 206.696 25.825 215.392 26.97 234.077 C 28.115 252.762 3.736 276.083 3.736 286.91 C 3.736 307.024 26.97 305.271 26.97 335.745 C 26.97 366.22 8.983 367.977 8.349 389.239 C 7.715 410.497 26.831 408.969 26.831 441.635 C 26.831 456.793 6.582 473.834 11.924 487.993 C 16.674 500.583 69.904 524.869 69.904 524.869"></path></svg>'));
                }
                else {
                }
            }
        }
    }

    //end jquery script
});





//gsap animations
document.addEventListener("DOMContentLoaded", (event) => {
    gsap.registerPlugin(ScrollTrigger)

    //gsap animation for aircraft in product page
    var minWidth576 = window.matchMedia("(min-width: 576px)");
    var minWidth768 = window.matchMedia("(min-width: 768px)");
    var minWidth992 = window.matchMedia("(min-width: 992px)");
    var minWidth1200 = window.matchMedia("(min-width: 1200px)");
    var minWidth1400 = window.matchMedia("(min-width: 1400px)");
    let yValue;
    let xValue;
    let rValue;

    if (minWidth1400.matches){
        //992>
        xValue = "-410px";
        yValue = 725;
        rValue = 50;
    } else{
        if (minWidth1200.matches){
            //992>
            xValue = "-370px";
            yValue = 725;
            rValue = 50;
        } else{
        if (minWidth992.matches){
            //992>
            xValue = "-285px";
            yValue = 630;
            rValue = 50;
        } else{
            if (minWidth768.matches){
                //768-992
                xValue = "-260px";
                yValue = 395;
                rValue = 50;
            } else{
                if (minWidth576.matches){
                    xValue = "-230px";
                    yValue = 395;
                    rValue = 50;
                } else{
                    xValue = "-120px";
                    yValue = 325;
                    rValue = 50;
                    }
                }
            }
        }
    }             
        
    let tlSm = gsap.timeline({
        scrollTrigger: { 
            trigger: ".aircraft-sm",
            start: "100 center",
            end: "800 center",
            scrub: true,
            markers: false,
        }
    })
    tlSm.to('.aircraft-sm', {
        y: yValue,
        right: xValue,
        rotation: rValue
    })
        .from('.aircraft-light', {
            opacity: 0
        })
        .to('.aircraft-container-text-sm .text-style-h4 ', {
            color: "#000000"
        }, "<")
        .to('.aircraft-container-text-sm .text-style-body-copy', {
            color: "#000000"
        }, "<")

    //animation for scrolling card in product page
    var minWidth768 = window.matchMedia("(min-width: 992px)")
    let slCardMainStart;

    if (minWidth768.matches) { // If media query matches
        slCardMainStart = "40%";
    } else {
        slCardMainStart = 200;
    }

    const cards = gsap.utils.toArray(".sl-card-scroll");
    const spacer = 4;

    cards.forEach((card, index) => {
        ScrollTrigger.create({
            trigger: card,
            start: `top-=${index * spacer} top+=40%`,
            endTrigger: ".pin-panel",
            end: `bottom top+=${180 + cards.length * spacer}`,
            pin: true,
            pinSpacing: false,
            markers: false,
            id: "card-pin",
            invalidateOnRefresh: true
        });
    });

    ScrollTrigger.create({
       trigger: ".sl-card-main",
       start: `top ${slCardMainStart}px`,
       end: (self) => self.previous().end,
       pin: true,
       markers: false
    });
  
    //animation for aircraft through islands in about us page

    if (window.matchMedia("(min-width: 1200px)").matches) {
        const island = gsap.timeline({
            scrollTrigger: {
                trigger: ".section-aboutus-islands",
                start: "top center",
                end: "bottom center",
                scrub: true,
                once: true,
                markers: false
            }
        })
            .to(".sl-about-aircraft", {
                ease: "none",
                motionPath: {
                    path: ".path",
                    align: ".path",
                    alignOrigin: [0.5, 0.5],
                    autoRotate: true
                }
            })
    } else {
        const island = gsap.timeline({
            scrollTrigger: {
                trigger: "#sl-islands-1",
                start: "top bottom",
                end: "+=4400",
                scrub: true,
                once: true,
                markers: false
            }
        })
            .to(".sl-about-aircraft", {
                ease: "none",
                motionPath: {
                    path: ".path",
                    align: ".path",
                    alignOrigin: [0.5, 0.5],
                    autoRotate: true
                }
            })
    }
    //end gsap
});


// Cart: Single Product and Emporium
// Variable to keep track of the total number of items in the cart
let totalItems = parseInt(sessionStorage.getItem('totalItems')) || 0; // Retrieve the value from sessionStorage or set to 0 if it doesn't exist

// Quantity button Single product
$(function() {
    const quantityContainer = $(".quantity");
    const minusBtn = quantityContainer.find(".minus");
    const plusBtn = quantityContainer.find(".plus");
    const inputBox = quantityContainer.find(".input-box");
    inputBox.val(1);

    updateButtonStates();

    quantityContainer.on("click", handleButtonClick);
    inputBox.on("input", handleQuantityChange);

    function updateButtonStates() {
        const value = parseInt(inputBox.val());
        minusBtn.prop("disabled", value <= 1);
        plusBtn.prop("disabled", value >= parseInt(inputBox.attr("max")));
    }

    // Function to handle the click of the increment button
    function handleButtonClick(event) {
        const target = $(event.target);
        if (target.hasClass("minus")) {
            decreaseValue();
        } else if (target.hasClass("plus")) {
            let previousValue = parseInt(inputBox.val()); /// Capture the current value
            increaseValue();
            // Use previousValue for your operations
        }
    }

    function decreaseValue() {
        let value = parseInt(inputBox.val());
        value = isNaN(value) ? 1 : Math.max(value - 1, 1);
        if (value !== parseInt(inputBox.val())) {
            inputBox.val(value);
            updateButtonStates();
            handleQuantityChange();
        }
    }

    function increaseValue() {
        let value = parseInt(inputBox.val());
        value = isNaN(value) ? 1 : Math.min(value + 1, parseInt(inputBox.attr("max")));
        if (value !== parseInt(inputBox.val())) {
            inputBox.val(value);
            updateButtonStates();
            handleQuantityChange();
        }
    }

    function handleQuantityChange() {
        let value = parseInt(inputBox.val());
        value = isNaN(value) ? 1 : value;
        console.log("Quantity changed:", value);
    }
});

// Add to cart toast, counter badge and icon-cart active


$(() => {
    // In Emporium:
    $(".add-cart-button").on("click", (e) => {
        const cartIcon = $(".cart-icon").addClass("cart-icon-active");
    });

    // In Single product
    $(".add-cart-single").on("click", () => {
        const value = parseInt($(".input-box").val());
    
        if (!isNaN(value) && value > 0) {
            addCounterSingle(value); // Adds the specified number of items
            addToast()
        } else {
            console.error("Invalid value:", value); 
        }
    });
});

// Add and remove toast to DOM
const addToast = () => {
    const toastContainer = $("#sl-toast-container");
    toastContainer.find('.sl-toast').remove();

    toastContainer.append(`
        <div class="sl-toast sl-bg-kiwi position-fixed effect-style-shadow">
            <p class="text-style-body-copy">Calza aggiunte al carrello</p>
        </div>
    `);
    const newToast = toastContainer.find('.sl-toast');
    newToast.delay(3500).fadeOut(500, () => {
        $().remove();
    });
};

// Function to update the cart badge and the icon state
const updateCounterBadge = () => {
    const counterContainer = $("#counter-container");
    let badge = counterContainer.find(".counter-badge");
    const cartIcon = $(".cart-icon");

    if (totalItems > 0) {
        if (badge.length) {
            badge.find(".text-style-badge").text(totalItems);
        } else {
            // If the badge doesn't exist, create a new one
            counterContainer.append(`
                <div class="counter-badge position-fixed sl-bg-kiwi d-flex justify-content-center align-items-center">
                    <p class="text-style-badge">${totalItems}</p>
                </div>
            `);
        }
        // Add the active class to the cart icon
        cartIcon.addClass("cart-icon-active");
    } else {
        // If the number of items is 0, remove the badge and deactivate the cart icon
        badge.remove();
        cartIcon.removeClass("cart-icon-active");
    }

    // Save the updated total in sessionStorage
    sessionStorage.setItem('totalItems', totalItems);
};

// Handle the activation of the cart icon
const updateCartIconState = () => {
    const cartIcon = $(".cart-icon");
    if (totalItems > 0) {
        cartIcon.addClass("cart-icon-active");
    } else {
        cartIcon.removeClass("cart-icon-active");
    }
};

// Add a single item to the cart
const addCounter = () => {
    totalItems++; // Increment the total number of items
    updateCounterBadge();
};

// Add a specific number of items to the cart
const addCounterSingle = (value) => {
    if (value !== undefined && value !== null) {
        totalItems += value; // Add the value directly to totalItems
        updateCounterBadge();
    } else {
        console.error("Undefined value passed to addCounterSingle");
    }
};

// Retrieve the total number of items when the page loads and update the badge
$(() => {
    updateCounterBadge();
    updateCartIconState(); // Set the cart icon state when the page is loaded
});




