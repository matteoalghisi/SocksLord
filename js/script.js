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
        slCardMainStart = "15%";
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
    $(".add-cart-button").off('click', '.add-cart-button').on("click", (e) => {
        const cartIcon = $(".cart-icon").addClass("cart-icon-active");
        addCounter();
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

// Emporium
const filters = {
    collabs: [],
    colors: [],
    functions: [],
    feet: [],
    materials: [],
};

const products = [
    { id: 1, name: "Luminares", price: "₹ 433,999", imagePath:"img/emporium/socks/1.svg", collabId: null, colorId: 3, functionId: 3, footId: 2, materialId: 1, stock: 1, href: "4_1_singleproduct_luminares.html" },
    { id: 2, name: "Lux x SocksLord", price: "₹ 7380,257", imagePath: "img/emporium/socks/2.svg", collabId: 1, colorId: 2, functionId: 3, footId: 2, materialId: 4, stock: 1, href: "4_2_singleproduct_lux.html" },
    { id: 3, name: "Floaty Footies", price: "₹ 450,257", imagePath: "img/emporium/socks/3.svg", collabId: null, colorId: 1, functionId: 4, footId: 3, materialId: 3, stock: 1, href: "4_3_singleproduct-floaty.html" },
    { id: 4, name: "MystiPockets Sock", price: "₹ 2820", imagePath: "img/emporium/socks/4.svg", collabId: null, colorId: 2, functionId: 2, footId: 3, materialId: 2, stock: 0 },
    { id: 5, name: "Luminares", price: "₹ 433,999", imagePath:"img/emporium/socks/5.svg", collabId: null, colorId: 1, functionId: 3, footId: 1, materialId: 3, stock: 0 },
    { id: 6, name: "RouteSocks", price: "₹ 1489,495", imagePath: "img/emporium/socks/6.svg", collabId: null, colorId: 3, functionId: 1, footId: 2, materialId: 4, stock: 0 },
    { id: 7, name: "Floaty Footies", price: "₹ 450,257", imagePath: "img/emporium/socks/7.svg", collabId: null, colorId: 2, functionId: 4, footId: 2, materialId: 2, stock: 0 }, 
    { id: 8, name: "MystiPockets Sock", price: "₹ 2820", imagePath: "img/emporium/socks/8.svg", collabId: null, colorId: 3, functionId: 2, footId: 3, materialId: 1, stock: 0 },
    { id: 9, name: "Floaty Footies", price: "₹ 450,257", imagePath: "img/emporium/socks/9.svg", collabId: null, colorId: 3, functionId: 4, footId: 1, materialId: 5, stock: 0 },
    { id: 10, name: "MystiPockets Sock", price: "₹ 2820", imagePath: "img/emporium/socks/10.svg", collabId: null, colorId: 1, functionId: 2, footId: 2, materialId: 1, stock: 0 },
    { id: 11, name: "Zlatanox", price: "₹ 8725,362", imagePath: "img/emporium/socks/11.svg", collabId: 2, colorId: 3, functionId: 4, footId: 2, materialId: 3, stock: 0 },
    { id: 12, name: "RouteSocks", price: "₹ 1489,495", imagePath: "img/emporium/socks/12.svg", collabId: null, colorId: 2, functionId: 1, footId: 3, materialId: 3, stock: 0 },
    { id: 13, name: "Luminares", price: "₹ 433,999", imagePath:"img/emporium/socks/13.svg", collabId: null, colorId: 2, functionId: 3, footId: 1, materialId: 1, stock: 0 },
    { id: 14, name: "Lux x SocksLord", price: "₹ 7380,257", imagePath: "img/emporium/socks/14.svg", collabId: 1, colorId: 3, functionId: 3, footId: 1, materialId: 4, stock: 0 },
    { id: 15, name: "RouteSocks", price: "₹ 1489,495", imagePath: "img/emporium/socks/15.svg", collabId: null, colorId: 1, functionId: 1, footId: 2, materialId: 4, stock: 0 },
    { id: 16, name: "MystiPockets Sock", price: "₹ 2820", imagePath: "img/emporium/socks/16.svg", collabId: null, colorId: 2, functionId: 2, footId: 1, materialId: 5, stock: 0 },
    { id: 17, name: "RouteSocks", price: "₹ 1489,495", imagePath: "img/emporium/socks/17.svg", collabId: null, colorId: 3, functionId: 1, footId: 1, materialId: 1, stock: 0 },
    { id: 18, name: "RouteSocks", price: "₹ 1489,495", imagePath: "img/emporium/socks/18.svg", collabId: null, colorId: 1, functionId: 1, footId: 3, materialId: 2, stock: 0 },
    { id: 19, name: "Floaty Footies", price: "₹ 450,257", imagePath: "img/emporium/socks/19.svg", collabId: null, colorId: 3, functionId: 4, footId: 3, materialId: 3, stock: 0 },
    { id: 20, name: "MystiPockets Sock", price: "₹ 2820", imagePath: "img/emporium/socks/20.svg", collabId: null, colorId: 1, functionId: 2, footId: 2, materialId: 5, stock: 0 },
    { id: 21, name: "Zlatanox", price: "₹ 8725,362", imagePath: "img/emporium/socks/21.svg", collabId: 2, colorId: 2, functionId: 4, footId: 3, materialId: 3, stock: 0 },
    { id: 22, name: "Floaty Footies", price: "₹ 450,257", imagePath: "img/emporium/socks/22.svg", collabId: null, colorId: 1, functionId: 4, footId: 2, materialId: 1, stock: 0 },
    { id: 23, name: "Lux x SocksLord", price: "₹ 7380,257", imagePath: "img/emporium/socks/23.svg", collabId: 1, colorId: 3, functionId: 3, footId: 2, materialId: 4, stock: 0 },
    { id: 24, name: "Luminares", price: "₹ 433,999", imagePath:"img/emporium/socks/24.svg", collabId: null, colorId: 2, functionId: 3, footId: 3, materialId: 4, stock: 0 },
    { id: 25, name: "MystiPockets Sock", price: "₹ 2820", imagePath: "img/emporium/socks/25.svg", collabId: null, colorId: 3, functionId: 2, footId: 2, materialId: 2, stock: 0 },
    { id: 26, name: "Luminares", price: "₹ 433,999", imagePath:"img/emporium/socks/26.svg", collabId: null, colorId: 2, functionId: 3, footId: 2, materialId: 5, stock: 0 },
    { id: 27, name: "Floaty Footies", price: "₹ 450,257", imagePath: "img/emporium/socks/27.svg", collabId: null, colorId: 1, functionId: 4, footId: 1, materialId: 2, stock: 0 },
    { id: 28, name: "Luminares", price: "₹ 433,999", imagePath:"img/emporium/socks/28.svg", collabId: null, colorId: 3, functionId: 3, footId: 2, materialId: 5, stock: 0 },
    { id: 29, name: "Luminares", price: "₹ 433,999", imagePath:"img/emporium/socks/29.svg", collabId: null, colorId: 2, functionId: 3, footId: 3, materialId: 1, stock: 0 },
    { id: 30, name: "Lux x SocksLord", price: "₹ 7380,257", imagePath: "img/emporium/socks/30.svg", collabId: 1, colorId: 3, functionId: 3, footId: 3, materialId: 4, stock: 0 },
    { id: 31, name: "Zlatanox", price: "₹ 8725,362", imagePath: "img/emporium/socks/31.svg", collabId: 2, colorId: 1, functionId: 4, footId: 1, materialId: 3, stock: 0 },
    { id: 32, name: "RouteSocks", price: "₹ 1489,495", imagePath: "img/emporium/socks/32.svg", collabId: null, colorId: 2, functionId: 1, footId: 1, materialId: 2, stock: 0 },
    { id: 33, name: "MystiPockets Sock", price: "₹ 2820", imagePath: "img/emporium/socks/33.svg", collabId: null, colorId: 3, functionId: 2, footId: 3, materialId: 5, stock: 0 },
    { id: 34, name: "MystiPockets Sock", price: "₹ 2820", imagePath: "img/emporium/socks/34.svg", collabId: null, colorId: 1, functionId: 2, footId: 2, materialId: 3, stock: 0 },
    { id: 35, name: "RouteSocks", price: "₹ 1489,495", imagePath: "img/emporium/socks/35.svg", collabId: null, colorId: 2, functionId: 1, footId: 3, materialId: 5, stock: 0 },
    { id: 36, name: "Luminares", price: "₹ 433,999", imagePath:"img/emporium/socks/36.svg", collabId: null, colorId: 3, functionId: 3, footId: 1, materialId: 2, stock: 0 },
];

const collabs = [{ id: 1, name: "Lux" }, { id: 2, name: "Zlatanox" }];
const colors = [{ id: 1, name: "Arancio", colorClass: "sl-cf-1" }, { id: 2, name: "Giallo", colorClass: "sl-cf-2" }, { id: 3, name: "Verde", colorClass: "sl-cf-3" }];
const functions = [{ id: 1, name: "GPS", iconPath: "img/icon/gps.svg" }, { id: 2, name: "Tasca", iconPath: "img/icon/pocket.svg" }, { id: 3, name: "Led", iconPath: "img/icon/led.svg" }, { id: 4, name: "Ali", iconPath: "img/icon/wings.svg" }];
const feet = [{ id: 1, name: "Tentacolo", iconPath: "img/icon/foot1.svg" }, { id: 2, name: "Tre dita", iconPath: "img/icon/foot2.svg" }, { id: 3, name: "Palmata", iconPath: "img/icon/foot3.svg" }];
const materials = [{ id: 1, name: "Sustainsilk", iconPath: "img/icon/icon-material-sustainsilk.svg" }, { id: 2, name: "Cristalium", iconPath: "img/icon/icon-material-cristalium.svg" }, { id: 3, name: "Drakolith", iconPath: "img/icon/icon-material-drakolith.svg" }, { id: 4, name: "Lumifibra", iconPath: "img/icon/icon-material-lumifibra.svg" }, { id: 5, name: "Liquidite", iconPath: "img/icon/icon-material-liquidite.svg" }];

let productsContainer;
let buttonsCollabs;
let buttonsColors;
let buttonsFunctions;
let buttonsFeet;
let buttonsMaterials;
let currentIndex = 24;

$(() => {
    productsContainer = $("#products-container");
    buttonsCollabs = $("#buttons-collabs");
    buttonsColors = $("#buttons-colors");
    buttonsFunctions = $("#buttons-functions");
    buttonsFeet = $("#buttons-feet");
    buttonsMaterials = $("#buttons-materials");
    
    addProducts(products.slice(0, currentIndex));
    addFilters();   
    
    $(".filter-modal").on("click", (e) => {
        const filterElement = $(e.currentTarget);
        const filterId = filterElement.attr("data-id");
        const type = filterElement.attr("data-type");

        if (filters[type]) {
            const index = filters[type].findIndex(id => id == filterId);
            const spanCircleElement = filterElement.find(".circle-filter");
            const spanIconElement = filterElement.find(".icon-filter");

            if (index != -1) {
                filters[type].splice(index, 1);
                filterElement.removeClass("filter-modal-active");
                if (spanCircleElement.length) spanCircleElement.removeClass("circle-filter-active");
                else spanIconElement.removeClass("icon-filter-active");
            } else {
                filters[type].push(parseInt(filterId));
                filterElement.addClass("filter-modal-active");
                if (spanCircleElement.length) spanCircleElement.addClass("circle-filter-active");
                else spanIconElement.addClass("icon-filter-active");
            }
        }
    })

    $('[data-toggle="filter"]').on("click", (e) => {
        const filteredProducts = products.filter(product => {
            if (filters.collabs.length && !filters.collabs.includes(product.collabId)) return false;
            if (filters.colors.length && !filters.colors.includes(product.colorId)) return false;
            if (filters.functions.length && !filters.functions.includes(product.functionId)) return false;
            if (filters.feet.length && !filters.feet.includes(product.footId)) return false;
            if (filters.materials.length && !filters.materials.includes(product.materialId)) return false;

            return true;
        });
        addProducts(filteredProducts.slice(0, currentIndex));
    })

    $('[data-toggle="reset-filter"]').on("click", (e) => {
        const filtersButtons = $("#modal-filter").find(".filter-modal").removeClass("filter-modal-active");
        filtersButtons.each((button) => {
            $(button).find("span").removeClass("circle-filter-active icon-filter-active");
        });
        filters.collabs = [];
        filters.colors = [];
        filters.functions = [];
        filters.feet = [];
        filters.materials = [];

        addProducts(products.slice(0, currentIndex));
    })

    $('.loadmore').on("click", (e) => {
        currentIndex += 12; 
        addProducts(products.slice(0, currentIndex)); 
        
        if (currentIndex >= products.length) {
            $(".loadmore button").hide(); 
        }
    });
});

//Button on card
$(document).on("mouseenter", ".card-emporium", function() {
    $(this).find(".cart-btn").removeClass("d-none");
});
$(document).on("mouseleave", ".card-emporium", function() {
    $(this).find(".cart-btn").addClass("d-none");
});

// Add filters to DOM
const addFilters = () => {
    // Collabs
    collabs.forEach((collab, index) => {
        buttonsCollabs.append(`<button class="filter-modal d-flex justify-content-center align-items-center text-style-button" data-id="${collab.id}" data-type="collabs">${collab.name}</button>`)
    });
    // Colors
    colors.forEach((color, index) => {
        buttonsColors.append(`
            <button class="filter-modal d-flex justify-content-center align-items-center" data-id="${color.id}" data-type="colors">
                <span id="${color.colorClass}" class="circle-filter"></span>
                <span class="text-style-button">${color.name}</span>
            </button>
        `)
    });

    functions.forEach((functions, index) => {
        buttonsFunctions.append(`
            <button class="filter-modal d-flex justify-content-center align-items-center" data-id="${functions.id}" data-type="functions">
                <img src="${functions.iconPath}" alt="Function icon button" class="icon-filter">
                <span class="text-style-button">${functions.name}</span>
            </button>
       `)
    })

    feet.forEach((foot, index) => {
        buttonsFeet.append(`
            <button class="filter-modal d-flex justify-content-center align-items-center" data-id="${foot.id}" data-type="feet">
                <img src="${foot.iconPath}" alt="Foot icon button" class="icon-filter">
                <span class="text-style-button">${foot.name}</span>
            </button>
       `)
    })

    materials.forEach((material, index) => {
        buttonsMaterials.append(`
            <button class="filter-modal d-flex justify-content-center align-items-center" data-id="${material.id}" data-type="materials">
                <img src="${material.iconPath}" class="circle-filter">
                <span class="text-style-button">${material.name}</span>
            </button>
       `)
    })
}

// Add products to DOM
const addProducts = (products) => {
    productsContainer.empty();
    products.forEach((product, index) => {
        const x = product.stock > 0 ? ` <div class="d-none d-lg-flex justify-content-end card-button-external">
                                            <div class="d-none d-lg-flex card-button z-3 add-cart-button">
                                                <button class="cart-btn d-none justify-content-center align-items-center d-flex">
                                                    <img src="img/icon/cart-icon-active.svg" alt="Cart">
                                                </button>
                                            </div> 
                                        </div>
                                    ` : "";
        const y = product.stock == 0 ? ` <div class="card-soldout d-flex justify-content-center align-items-center">
                                            <p class="text-style-h2 text-soldout">Esaurita</p>
                                        </div>
                                    `: "";
        const z = product.stock > 0 ? ` card-emporium-hover `: "";
        const w = product.stock > 0 ? ` <a href="${product.href}" class="card-link"></a> `: "";
                                    
        productsContainer.append(`
            <div class="col-2 col-lg-3 card-emporium d-flex card justify-content-center align-items-center effect-style-shadow sl-card-c ${z}">
                ${y}
                ${w}
                <h4 class="text-style-h4 text-center">${product.name}</h4>
                <p class="text-style-body-copy-small mb-3 mb-lg-4">${product.price}</p>
                <img src="${product.imagePath}" alt="Sock" class="card-img">
                ${x}
            </div>
        `)
    });
    // Riconnessione degli eventi
    productsContainer.off("click", ".cart-btn"); // Rimuovi i listener precedenti
    productsContainer.on("click", ".cart-btn", function() {
        sessionStorage.setItem('totalItems', totalItems);
        updateCounterBadge();
        addToast();
    });
}

// Sockslab
$(function() {
    $('.sl-button-spacer').width($('.carousel-item').outerWidth());
});

document.addEventListener('DOMContentLoaded', function () {
    const sockImage = document.getElementById('sockImage');
    const footButtons = document.querySelectorAll('#foot .btn-filter');
    const colorButtons = document.querySelectorAll('#color .btn-filter');
    const materialButtons = document.querySelectorAll('#material .btn-filter');
    const functionalityButtons = document.querySelectorAll('#functionality .btn-filter');
    
    let currentFoot = null;  // Initialize 'default'
    let currentColor = null;  // Initialize empty (color not selected)
    let currentMaterial = null;  // Initialize empty (material not selected)
    let currentFunctionality = null;  // Initialize empty (functionality not selected)
  
    function handleSelection(buttons, currentSelection, attribute) {
      // `button` è il pulsante su cui è stato cliccato
      // `buttons` è la lista di tutti i pulsanti dello stesso tipo
      return function(button) {
        const selectedValue = button.getAttribute(attribute);
        const icon = button.querySelector('.icon-filter');
        const circle = button.querySelector('.circle-filter');
  
        // Deselect all
        buttons.forEach(btn => {
          btn.classList.remove('filter-sockslab-active');
          const btnIcon = btn.querySelector('.icon-filter');
          const btnCircle = btn.querySelector('.circle-filter');
          if (btnIcon) btnIcon.classList.remove('icon-filter-active');
          if (btnCircle) btnCircle.classList.remove('circle-filter-active');
        });
  
        if (currentSelection === selectedValue) {
          // If the button is already selected, deselect it
          return null;
        } else {
          // Otherwise, select the new value
          button.classList.add('filter-sockslab-active');  // Add the class if selected
          if (icon) icon.classList.add('icon-filter-active');
          if (circle) circle.classList.add('circle-filter-active');
          return selectedValue;
        }
      }
    }
  
    footButtons.forEach(button => {
      button.addEventListener('click', function () {
        currentFoot = handleSelection(footButtons, currentFoot, 'data-foot')(this);
        updateSockImage();  // Update the image with the selected options
      });
    });
  
    colorButtons.forEach(button => {
      button.addEventListener('click', function () {
        currentColor = handleSelection(colorButtons, currentColor, 'data-color')(this);
        updateSockImage();  // Update the image with the selected options
      });
    });
  
    materialButtons.forEach(button => {
      button.addEventListener('click', function () {
        currentMaterial = handleSelection(materialButtons, currentMaterial, 'data-material')(this);
        updateSockImage();  // Update the image with the selected options
      });
    });
  
    functionalityButtons.forEach(button => {
      button.addEventListener('click', function () {
        currentFunctionality = handleSelection(functionalityButtons, currentFunctionality, 'data-functionality')(this);
        updateSockImage();  // Update the image with the selected options
      });
    });
  
    function updateSockImage() {
      // Build the image path by concatenating foot, color, material, and functionality
      let newSrc = `img/sockslab/socks/sock_${currentFoot !== null ? currentFoot : 'null'}`;
      newSrc += `_${currentColor !== null ? currentColor : 'null'}`;
      newSrc += `_${currentMaterial !== null ? currentMaterial : 'null'}`;
      newSrc += `_${currentFunctionality !== null ? currentFunctionality : 'null'}`;
      newSrc += `.svg`;
  
      sockImage.setAttribute('src', newSrc);
    }
  });
  
    
  //POPUP 
  $(document).ready(function() {
      $(document).off('click', '.add-cart-button').on('click', '.add-cart-button', function() {
        // Add the class cart-icon-active, counter and toast
        const cartIcon = $(".cart-icon").addClass("cart-icon-active");
        addCounter();
        addToast();
  
        // Close popup and remove overlay
        $('#feedbackPopup').remove();
        $('#popupOverlay').remove();
      });
  
  $('#showPopup').on('click', function() {
    // Find out the current URL of the filtered image
    const currentSockImageSrc = $('#sockImage').attr('src');
  
    // Create a dark overlay
    const overlay = $('<div>')
        .attr('id', 'popupOverlay')
        .addClass('overlay')
        .css('display', 'block'); // Imposta display a block per visualizzarlo
  
    // Create popup
    const popupSection = $('<section>')
        .attr('id', 'feedbackPopup')
        .addClass('feedback-popup')
        .append(`
            <div class="popup sl-bg-avocado effect-style-shadow border d-flex flex-column align-items-center justify-content-center">
                <div class="item d-flex flex-column justify-content-center align-items-center gap-3">
                    <img id="popupSockImage" src="${currentSockImageSrc}" alt="">
                    <p>₹ 433,999</p>
                </div>
                <div class="buttons">
                    <button class="text-style-button d-flex align-items-center justify-content-center m-0 sl-btn-tertiary add-cart-button" data-bs-dismiss="modal">Aggiungi al carrello</button>
                    <button id="closePopup" class="text-style-button d-flex align-items-center justify-content-center m-0 sl-btn-quaternary">Rivedi modifiche</button>
                </div>
            </div>
        `);
  
          // Add overlay and popup to body
          $('body').append(overlay).append(popupSection);
  
          // Add the closing event to the button "Continua a modificare"
          $('#closePopup').on('click', function() {
              popupSection.remove();
              overlay.remove(); // Remove the overlay
          });
      });
  });
  


//   Contacts
$(document).ready(function() {
    $('.sl-form-flip').height($('.sl-form').outerHeight());
    
    // Flip when click on "Contattaci"
    $('form.sl-form').on('submit', function(event) {
        event.preventDefault(); // Previeni l'invio del form
        $(this).closest('.sl-form-flip').addClass('flipped');
    });

    // Re-flip when click on "Hai altro da dirci?"
    $('.sl-form-flip .back .sl-btn-tertiary').on('click', function(event) {
        event.preventDefault(); // Previeni il comportamento di default del link
        $(this).closest('.sl-form-flip').removeClass('flipped');
    });

    // Reset the flip state when switching tabs
    $('a[data-bs-toggle="tab"]').on('shown.bs.tab', function (e) {
        var targetTab = $(e.target).attr("href"); // Ottieni l'ID del tab attivo
        $(targetTab).find('.sl-form-flip').removeClass('flipped');
    });
});
