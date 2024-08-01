const filters = {
    collabs: [],
    colors: [],
    functions: [],
    feet: [],
    materials: [],
};

let filteredProducts = [];
const products = [
    { id: 1, name: "sock1", price: 20, imagePath: "img/card/calza_verde_desktop.svg", collabId: 1, colorId: 1, functionId: 1, footId: 1, materialId: 1 },
    { id: 2, name: "sock2", price: 20, imagePath: "img/card/calza_verde_desktop.svg", collabId: null, colorId: 2, functionId: 1, footId: 2, materialId: 1 },
    { id: 3, name: "sock3", price: 20, imagePath: "img/card/calza_verde_desktop.svg", collabId: null, colorId: 3, functionId: 2, footId: 1, materialId: 1 },
    { id: 4, name: "sock1", price: 20, imagePath: "img/card/calza_verde_desktop.svg", collabId: 1, colorId: 1, functionId: 1, footId: 2, materialId: 1 },
    { id: 5, name: "sock1", price: 20, imagePath: "img/card/calza_verde_desktop.svg", collabId: 1, colorId: 3, functionId: null, footId: null, materialId: 1 },
];
const collabs = [{ id: 1, name: "Lux" }];
const colors = [{ id: 1, name: "Red" }, { id: 2, name: "RBlueed" }, { id: 3, name: "Green" }];
const functions = [{ id: 1, name: "Elica" }, { id: 2, name: "GPS" }];
const feet = [{ id: 1, name: "One" }, { id: 2, name: "Two" }];
const materials = [{ id: 1, name: "Tessuto" }];

let productsContainer;
let buttonsCollabs;
let buttonsColors;
let buttonsFunctions;
let buttonsFeet;
let buttonsMaterials;

$(() => {
    productsContainer = $("#products-container");
    buttonsCollabs = $("#buttons-collabs");
    buttonsColors = $("#buttons-colors");
    buttonsFunctions = $("#buttons-functions");
    buttonsFeet = $("#buttons-feet");
    buttonsMaterials = $("#buttons-materials");
    
    products.forEach((product, index) => {
        productsContainer.append(`
            <div class="col-2 col-lg-3 card-emporium d-flex card justify-content-center align-items-center effect-style-default-shadow sl-card-o">            
                <h4 class="text-style-h4 mb-2 mb-lg-3 text-uppercase">${product.name}</h4>
                <p class="text-style-body-copy-small mb-2 mb-lg-3">${product.price}</p>
                <img src="${product.imagePath}" alt="" class="card-img">
                <div class="d-none d-lg-flex card-button justify-content-end">
                    <a href="">
                        <div class="card-btn d-none justify-content-center align-items-center d-flex">
                            <img src="img/icon/Sachetto-active.svg" alt="">
                        </div>
                    </a>
                </div>
            </div>
        `)
    });

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
        filteredProducts = products.filter(product => {
            if (filters.collabs.length && !filters.collabs.includes(product.collabId)) return false;
            if (filters.colors.length && !filters.colors.includes(product.colorId)) return false;
            if (filters.functions.length && !filters.functions.includes(product.functionId)) return false;
            if (filters.feet.length && !filters.feet.includes(product.footId)) return false;
            if (filters.materials.length && !filters.materials.includes(product.materialId)) return false;

            return true;
        });
       
    console.log(filteredProducts);
    })
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
                <span id="sl-cf-1" class="circle-filter"></span>
                <span class="text-style-button">${color.name}</span>
            </button>
        `)
    });

    functions.forEach((functions, index) => {
        buttonsFunctions.append(`
            <button class="filter-modal d-flex justify-content-center align-items-center" data-id="${functions.id}" data-type="functions">
                <img src="img/icon/Propeller.svg" alt="" class="icon-filter">
                <span class="text-style-button">${functions.name}</span>
            </button>
       `)
    })

    feet.forEach((foot, index) => {
        buttonsFeet.append(`
            <button class="filter-modal d-flex justify-content-center align-items-center" data-id="${foot.id}" data-type="feet">
                <img src="img/icon/piede1.svg" alt="" class="icon-filter">
                <span class="text-style-button">${foot.name}</span>
            </button>
       `)
    })

    materials.forEach((material, index) => {
        buttonsMaterials.append(`
            <button class="filter-modal d-flex justify-content-center align-items-center" data-id="${material.id}" data-type="materials">
                <img src="img/icon/tessuto.svg" class="circle-filter">
                <span class="text-style-button">${material.name}</span>
            </button>
       `)
    })
}