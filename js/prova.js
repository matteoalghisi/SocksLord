const filters = {
    collabs: [],
    colors: [],
    functions: [],
    feet: [],
    materials: [],
};

const products = [
    { id: 1, name: "Luminares", price: "₹ 433,999", imagePath:"img/card/calza_verde_desktop.svg", collabId: null, colorId: 3, functionId: 3, footId: 2, materialId: 1, stock: 1, href: "singleproduct_luminares.html" },
    { id: 2, name: "Lux x SocksLord", price: "₹ 7380,257", imagePath: "img/card/calza_verde_desktop.svg", collabId: 1, colorId: null, functionId: 3, footId: 2, materialId: 4, stock: 1, href: "singleproduct_lux.html" },
    { id: 3, name: "Floaty Footies", price: "₹ 450,257", imagePath: "img/card/calza_verde_desktop.svg", collabId: null, colorId: 1, functionId: 4, footId: 3, materialId: 3, stock: 1, href: "singleproduct-floaty.html" },
    { id: 4, name: "MystiPockets Sock", price: "₹ 2820", imagePath: "img/card/calza_verde_desktop.svg", collabId: null, colorId: 2, functionId: 2, footId: 3, materialId: 2, stock: 0 },
    { id: 5, name: "MystiPockets Sock", price: "₹ 2820", imagePath: "img/card/calza_verde_desktop.svg", collabId: null, colorId: 1, functionId: 2, footId: 2, materialId: 1, stock: 0 },
    { id: 6, name: "RouteSocks", price: "₹ 1489,495", imagePath: "img/card/calza_verde_desktop.svg", collabId: null, colorId: 3, functionId: 1, footId: 2, materialId: 4, stock: 0 },
    { id: 7, name: "Floaty Footies", price: "₹ 450,257", imagePath: "img/card/calza_verde_desktop.svg", collabId: null, colorId: 2, functionId: 4, footId: 2, materialId: 2, stock: 0 }, 
    { id: 8, name: "MystiPockets Sock", price: "₹ 2820", imagePath: "img/card/calza_verde_desktop.svg", collabId: null, colorId: 3, functionId: 2, footId: 3, materialId: 1, stock: 0 },
    { id: 9, name: "Floaty Footies", price: "₹ 450,257", imagePath: "img/card/calza_verde_desktop.svg", collabId: null, colorId: 3, functionId: 4, footId: 1, materialId: 5, stock: 0 },
    { id: 10, name: "Luminares", price: "₹ 433,999", imagePath:"img/card/calza_verde_desktop.svg", collabId: null, colorId: 1, functionId: 3, footId: 1, materialId: 3, stock: 0 },
    { id: 11, name: "Zlatanox", price: "₹ 8725,362", imagePath: "img/card/calza_verde_desktop.svg", collabId: 2, colorId: null, functionId: 4, footId: 2, materialId: 3, stock: 0 },
    { id: 12, name: "RouteSocks", price: "₹ 1489,495", imagePath: "img/card/calza_verde_desktop.svg", collabId: null, colorId: 2, functionId: 1, footId: 3, materialId: 3, stock: 0 },
    { id: 13, name: "Luminares", price: "₹ 433,999", imagePath:"img/card/calza_verde_desktop.svg", collabId: null, colorId: 2, functionId: 3, footId: 1, materialId: 1, stock: 0 },
    { id: 14, name: "Lux x SocksLord", price: "₹ 7380,257", imagePath: "img/card/calza_verde_desktop.svg", collabId: 1, colorId: null, functionId: 3, footId: 1, materialId: 4, stock: 0 },
    { id: 15, name: "RouteSocks", price: "₹ 1489,495", imagePath: "img/card/calza_verde_desktop.svg", collabId: null, colorId: 1, functionId: 1, footId: 2, materialId: 4, stock: 0 },
    { id: 16, name: "MystiPockets Sock", price: "₹ 2820", imagePath: "img/card/calza_verde_desktop.svg", collabId: null, colorId: 2, functionId: 2, footId: 1, materialId: 5, stock: 0 },
    { id: 17, name: "RouteSocks", price: "₹ 1489,495", imagePath: "img/card/calza_verde_desktop.svg", collabId: null, colorId: 3, functionId: 1, footId: 1, materialId: 1, stock: 0 },
    { id: 18, name: "RouteSocks", price: "₹ 1489,495", imagePath: "img/card/calza_verde_desktop.svg", collabId: null, colorId: 1, functionId: 1, footId: 3, materialId: 2, stock: 0 },
    { id: 19, name: "Floaty Footies", price: "₹ 450,257", imagePath: "img/card/calza_verde_desktop.svg", collabId: null, colorId: 3, functionId: 4, footId: 3, materialId: 3, stock: 0 },
    { id: 20, name: "MystiPockets Sock", price: "₹ 2820", imagePath: "img/card/calza_verde_desktop.svg", collabId: null, colorId: 1, functionId: 2, footId: 2, materialId: 5, stock: 0 },
    { id: 21, name: "Zlatanox", price: "₹ 8725,362", imagePath: "img/card/calza_verde_desktop.svg", collabId: 2, colorId: null, functionId: 4, footId: 3, materialId: 3, stock: 0 },
    { id: 22, name: "Floaty Footies", price: "₹ 450,257", imagePath: "img/card/calza_verde_desktop.svg", collabId: null, colorId: 1, functionId: 4, footId: 2, materialId: 1, stock: 0 },
    { id: 23, name: "Lux x SocksLord", price: "₹ 7380,257", imagePath: "img/card/calza_verde_desktop.svg", collabId: 1, colorId: null, functionId: 3, footId: 2, materialId: 4, stock: 0 },
    { id: 24, name: "Luminares", price: "₹ 433,999", imagePath:"img/card/calza_verde_desktop.svg", collabId: null, colorId: 2, functionId: 3, footId: 3, materialId: 4, stock: 0 },
    { id: 25, name: "MystiPockets Sock", price: "₹ 2820", imagePath: "img/card/calza_verde_desktop.svg", collabId: null, colorId: 3, functionId: 2, footId: 2, materialId: 2, stock: 0 },
    { id: 26, name: "Luminares", price: "₹ 433,999", imagePath:"img/card/calza_verde_desktop.svg", collabId: null, colorId: 2, functionId: 3, footId: 2, materialId: 5, stock: 0 },
    { id: 27, name: "Floaty Footies", price: "₹ 450,257", imagePath: "img/card/calza_verde_desktop.svg", collabId: null, colorId: 1, functionId: 4, footId: 1, materialId: 2, stock: 0 },
    { id: 28, name: "Luminares", price: "₹ 433,999", imagePath:"img/card/calza_verde_desktop.svg", collabId: null, colorId: 3, functionId: 3, footId: 2, materialId: 5, stock: 0 },
    { id: 29, name: "Luminares", price: "₹ 433,999", imagePath:"img/card/calza_verde_desktop.svg", collabId: null, colorId: 2, functionId: 3, footId: 3, materialId: 1, stock: 0 },
    { id: 30, name: "Lux x SocksLord", price: "₹ 7380,257", imagePath: "img/card/calza_verde_desktop.svg", collabId: 1, colorId: null, functionId: 3, footId: 1, materialId: 4, stock: 0 },
    { id: 31, name: "Zlatanox", price: "₹ 8725,362", imagePath: "img/card/calza_verde_desktop.svg", collabId: 2, colorId: null, functionId: 4, footId: 1, materialId: 3, stock: 0 },
    { id: 32, name: "RouteSocks", price: "₹ 1489,495", imagePath: "img/card/calza_verde_desktop.svg", collabId: null, colorId: 2, functionId: 1, footId: 1, materialId: 2, stock: 0 },
    { id: 33, name: "MystiPockets Sock", price: "₹ 2820", imagePath: "img/card/calza_verde_desktop.svg", collabId: null, colorId: 3, functionId: 2, footId: 3, materialId: 5, stock: 0 },
    { id: 34, name: "MystiPockets Sock", price: "₹ 2820", imagePath: "img/card/calza_verde_desktop.svg", collabId: null, colorId: 1, functionId: 2, footId: 2, materialId: 3, stock: 0 },
    { id: 35, name: "RouteSocks", price: "₹ 1489,495", imagePath: "img/card/calza_verde_desktop.svg", collabId: null, colorId: 2, functionId: 1, footId: 3, materialId: 5, stock: 0 },
    { id: 36, name: "Luminares", price: "₹ 433,999", imagePath:"img/card/calza_verde_desktop.svg", collabId: null, colorId: 3, functionId: 3, footId: 1, materialId: 2, stock: 0 },
];

const collabs = [{ id: 1, name: "Lux" }, { id: 2, name: "Zlatanox" }];
const colors = [{ id: 1, name: "Arancio", colorClass: "sl-cf-1" }, { id: 2, name: "Giallo", colorClass: "sl-cf-2" }, { id: 3, name: "Verde", colorClass: "sl-cf-3" }];
const functions = [{ id: 1, name: "GPS", iconPath: "img/icon/gps.svg" }, { id: 2, name: "Tasca", iconPath: "img/icon/pocket.svg" }, { id: 3, name: "Led", iconPath: "img/icon/led.svg" }, { id: 4, name: "Ali", iconPath: "img/icon/wings.svg" }];
const feet = [{ id: 1, name: "Tentacolo", iconPath: "img/icon/foot1.svg" }, { id: 2, name: "Tre dita", iconPath: "img/icon/foot2.svg" }, { id: 3, name: "Normale", iconPath: "img/icon/foot3.svg" }];
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
                                                    <img src="img/icon/Sachetto-active.svg" alt="Cart">
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
        totalItems++;
        sessionStorage.setItem('totalItems', totalItems);
        updateCounterBadge();
        addToast();
    });
}

// script.js
  
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
// Funzione per gestire l'aggiunta al carrello

    
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
            <p class="text-style-body-copy">Calze aggiunte al carrello</p>
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
