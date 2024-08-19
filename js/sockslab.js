// html
/* <div id="customizer">
    <!-- Selettori per i filtri -->
    <div id="filters">
        <label for="color">Colore:</label>
        <select id="color">
            <option value="red">Rosso</option>
            <option value="blue">Blu</option>
            <option value="green">Verde</option>
            <!-- Aggiungi altri colori -->
        </select>

        <label for="footType">Tipo di piede:</label>
        <select id="footType">
            <option value="ankle">Caviglia</option>
            <option value="knee">Ginocchio</option>
            <!-- Aggiungi altre opzioni -->
        </select>

        <label for="functionality">Funzionalità:</label>
        <select id="functionality">
            <option value="wings">Ali</option>
            <option value="led">LED</option>
            <option value="gps">GPS</option>
            <option value="pocket">Tasca</option>
            <!-- Aggiungi altre opzioni -->
        </select>

        <label for="material">Materiale:</label>
        <select id="material">
            <option value="cotton">Cotone</option>
            <option value="wool">Lana</option>
            <option value="synthetic">Sintetico</option>
            <!-- Aggiungi altri materiali -->
        </select>
    </div>

    <!-- Area per la visualizzazione della calza -->
    <div id="sockPreview">
        <img id="sockImage" src="path_to_default_image.jpg" alt="Anteprima Calza">
    </div>
</div> */


// css
// #customizer {
//     display: flex;
// }

// #filters {
//     margin-right: 20px;
// }

// #sockPreview {
//     width: 200px;
//     height: 400px;
// }

// #sockImage {
//     width: 100%;
//     height: auto;
// }


// Riferimenti agli elementi DOM
const colorSelect = document.getElementById('color');
const footTypeSelect = document.getElementById('footType');
const functionalitySelect = document.getElementById('functionality');
const materialSelect = document.getElementById('material');
const sockImage = document.getElementById('sockImage');

// Oggetto per mantenere le opzioni selezionate
const selectedOptions = {
    color: colorSelect.value,
    footType: footTypeSelect.value,
    functionality: functionalitySelect.value,
    material: materialSelect.value
};

// Aggiorna l'immagine della calza in base alle opzioni selezionate
function updateSockImage() {
    const { color, footType, functionality, material } = selectedOptions;
    const imagePath = `images/socks_${color}_${footType}_${functionality}_${material}.jpg`;
    
    // Assicurati che le immagini siano nominate correttamente e disponibili
    sockImage.src = imagePath;
}

// Event listener per aggiornare le opzioni selezionate e l'immagine
colorSelect.addEventListener('change', (e) => {
    selectedOptions.color = e.target.value;
    updateSockImage();
});

footTypeSelect.addEventListener('change', (e) => {
    selectedOptions.footType = e.target.value;
    updateSockImage();
});

functionalitySelect.addEventListener('change', (e) => {
    selectedOptions.functionality = e.target.value;
    updateSockImage();
});

materialSelect.addEventListener('change', (e) => {
    selectedOptions.material = e.target.value;
    updateSockImage();
});

// Inizializzazione
updateSockImage();


