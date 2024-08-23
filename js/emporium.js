const filters = {
    collabs: [],
    colors: [],
    functions: [],
    feet: [],
    materials: [],
};

const products = [
    { id: 1, name: "Luminares", price: "₹ 433,999", imagePath:"img/emporium/socks/1.svg", collabId: null, colorId: 3, functionId: 3, footId: 2, materialId: 1, stock: 1, href: "singleproduct_luminares.html" },
    { id: 2, name: "Lux x SocksLord", price: "₹ 7380,257", imagePath: "img/emporium/socks/2.svg", collabId: 1, colorId: 2, functionId: 3, footId: 2, materialId: 4, stock: 1, href: "singleproduct_lux.html" },
    { id: 3, name: "Floaty Footies", price: "₹ 450,257", imagePath: "img/emporium/socks/3.svg", collabId: null, colorId: 1, functionId: 4, footId: 3, materialId: 3, stock: 1, href: "singleproduct-floaty.html" },
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
