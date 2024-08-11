(function () {
    const quantityContainer = document.querySelector(".quantity");
    const minusBtn = quantityContainer.querySelector(".minus");
    const plusBtn = quantityContainer.querySelector(".plus");
    const inputBox = quantityContainer.querySelector(".input-box");

    updateButtonStates();

    quantityContainer.addEventListener("click", handleButtonClick);
    inputBox.addEventListener("input", handleQuantityChange);

    function updateButtonStates() {
        const value = parseInt(inputBox.value);
        minusBtn.disabled = value <= 1;
        plusBtn.disabled = value >= parseInt(inputBox.max);
    }

    function handleButtonClick(event) {
        if (event.target.classList.contains("minus")) {
            decreaseValue();
        } else if (event.target.classList.contains("plus")) {
            increaseValue();
        }
    }

    function decreaseValue() {
        let value = parseInt(inputBox.value);
        value = isNaN(value) ? 1 : Math.max(value - 1, 1);
        if (value !== parseInt(inputBox.value)) {
            inputBox.value = value;
            updateButtonStates();
            handleQuantityChange();
        }
    }

    function increaseValue() {
        let value = parseInt(inputBox.value);
        value = isNaN(value) ? 1 : Math.min(value + 1, parseInt(inputBox.max));
        if (value !== parseInt(inputBox.value)) {
            inputBox.value = value;
            updateButtonStates();
            handleQuantityChange();
        }
    }

    function handleQuantityChange() {
        let value = parseInt(inputBox.value);
        value = isNaN(value) ? 1 : value;

        // Esegui il tuo codice qui basato sul valore aggiornato della quantità
        console.log("Quantity changed:", value);
    }

    // Click on card button
    const addCardButton = document.querySelector(".add-card-button");
    addCardButton.addEventListener("click", handleAddCardButton);

    function handleAddCardButton() {
        const cartIcon = document.querySelector(".cart-icon");
        cartIcon.classList.add("cart-icon-active");

        addToast();
        addCounter();
    }


    // Add toast to DOM
    function addToast() {
        const toastContainer = document.querySelector("#sl-toast-container");
        const existingToasts = toastContainer.querySelectorAll('.sl-toast');
        existingToasts.forEach(toast => toast.remove());

        const newToast = document.createElement('div');
        newToast.className = 'sl-toast sl-bg-kiwi effect-style-default-shadow position-fixed z-3';
        newToast.innerHTML = '<p class="text-style-body-copy">Calza aggiunta al carrello</p>';
        toastContainer.appendChild(newToast);

        setTimeout(() => {
            newToast.style.transition = 'opacity 0.5s';
            newToast.style.opacity = '0';
    
            // Rimuove l'elemento dal DOM una volta completata la dissolvenza
            newToast.addEventListener('transitionend', () => {
                newToast.remove();
            });
        }, 3500);
    }

    // Add counter to DOM
    function addCounter() {
        const counterContainer = document.querySelector("#counter-container");

        const newCounter = document.createElement('div');
        newCounter.className = 'counter-badge position-fixed sl-bg-kiwi d-flex justify-content-center align-items-center';
        newCounter.innerHTML = '<p class="text-style-badge">1</p>';
        counterContainer.appendChild(newCounter);
    }
})();
