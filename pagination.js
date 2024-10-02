const productImages = [
    { image: 'assets/images/cadeira-garca.png', name: 'Cadeira Garça', model: 'assets/models/poltrona_lacuna.glb' },
    { image: 'assets/images/cadeira-trapezio.png', name: 'Cadeira Trapézio', model: 'assets/models/poltrona_lacuna.glb' },
    { image: 'assets/images/poltrona-bauhaus.png', name: 'Poltrona Bauhaus', model: 'assets/models/poltrona_lacuna.glb' },
    { image: 'assets/images/poltrona-lacuna.png', name: 'Poltrona Lacuna', model: 'assets/models/poltrona_lacuna.glb' },
    { image: 'assets/images/poltrona-pollux.png', name: 'Poltrona Pollux', model: 'assets/models/poltrona_lacuna.glb' }
];

let currentPage = 0;
const productImageElement = document.getElementById('product-image');
const productNameElement = document.getElementById('product-name');
const nextButton = document.getElementById('next-button');
const previousButton = document.getElementById('previous-button');

// Atualiza a imagem exibida
function updateProduct() {
    productImageElement.src = productImages[currentPage].image;
    productNameElement.textContent = productImages[currentPage].name;

    // Condicional para mostrar/esconder botões
    if (currentPage === 0) {
        previousButton.style.display = 'none';
    } else {
        previousButton.style.display = 'block';
    }

    if (currentPage === productImages.length - 1) {
        nextButton.style.display = 'none';
    } else {
        nextButton.style.display = 'block';
    }
}

// Lida com o botão 'next'
nextButton.addEventListener('click', function() {
    if (currentPage < productImages.length - 1) {
        currentPage++;
        updateProduct();
    }
});

// Lida com o botão 'previous'
previousButton.addEventListener('click', function() {
    if (currentPage > 0) {
        currentPage--;
        updateProduct();
    }
});

// Inicializa a tela com a primeira imagem
updateProduct();