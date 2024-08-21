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
    $(document).on('click', '.add-cart-button', function() {
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

