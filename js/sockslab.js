document.addEventListener('DOMContentLoaded', function () {
    const sockImage = document.getElementById('sockImage');
    const footButtons = document.querySelectorAll('#foot .btn-filter');
  
    footButtons.forEach(button => {
      button.addEventListener('click', function () {
        const footType = this.getAttribute('data-foot');
        const newSrc = `img/sockslab/socks/sock_${footType}.svg`;
        sockImage.setAttribute('src', newSrc);
      });
    });
  });
  