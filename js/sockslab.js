document.addEventListener('DOMContentLoaded', function () {
  const sockImage = document.getElementById('sockImage');
  const footButtons = document.querySelectorAll('#foot .btn-filter');
  const colorButtons = document.querySelectorAll('#color .btn-filter');
  const materialButtons = document.querySelectorAll('#material .btn-filter');
  const functionalityButtons = document.querySelectorAll('#functionality .btn-filter');
  

  let currentFoot = null;  // Initialize 'default'
  let currentColor = null;  // Initialize empty (color not selected)
  let currentMaterial = null;  // Initialize empty  (material not selected)
  let currentFunctionality = null;  // Initialize empty  (funzionality not selected)

  function toggleSelection(button, currentSelection, attribute) {
    const selectedValue = button.getAttribute(attribute);

    if (currentSelection === selectedValue) {
        // If element is selected, cancel the selection
        return null;
    } else {
        // Otherwise, select the new value
        return selectedValue;
    }
}

  footButtons.forEach(button => {
    button.addEventListener('click', function () {
      currentFoot = toggleSelection(this, currentFoot, 'data-foot');
      updateSockImage();  // Update the image with the the options selected
    });
  });

  colorButtons.forEach(button => {
    button.addEventListener('click', function () {
      currentColor = toggleSelection(this, currentColor, 'data-color');
      updateSockImage();  // Update the image with the the options selected
    });
  });

  materialButtons.forEach(button => {
    button.addEventListener('click', function () {
      currentMaterial = toggleSelection(this, currentMaterial, 'data-material');
      updateSockImage();  // Update the image with the the options selected
    });
  });

  functionalityButtons.forEach(button => {
    button.addEventListener('click', function () {
      currentFunctionality = toggleSelection(this, currentFunctionality, 'data-functionality');
      updateSockImage();  // Update the image with the the options selected
    });
  });

  function updateSockImage() {
    // Costruisci il percorso dell'immagine concatenando foot, color, material e functionality
    let newSrc = `img/sockslab/socks/sock_${currentFoot !== null ? currentFoot : 'null'}`;

    newSrc += `_${currentColor !== null ? currentColor : 'null'}`;
    newSrc += `_${currentMaterial !== null ? currentMaterial : 'null'}`;
    newSrc += `_${currentFunctionality !== null ? currentFunctionality : 'null'}`;
    newSrc += `.svg`;

    sockImage.setAttribute('src', newSrc);
  }
});