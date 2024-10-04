const productImages = [
    { image: 'assets/images/poltrona_lacuna.png', name: 'Poltrona Lacuna', artist: 'Claudia Moreira Salles', year: '2019', model: 'assets/models/poltrona_lacuna.glb' },
    { image: 'assets/images/poltrona_pollux.png', name: 'Poltrona Pollux', artist: 'Patricia Anastassiadis', year: '2022',  model: 'assets/models/poltrona_pollux.glb' },
    { image: 'assets/images/cadeira_bauhaus.png', name: 'Cadeira Bauhaus', artist: 'Roberta Banqueri', year: '2022',  model: 'assets/models/cadeira_bauhaus.glb' },
    { image: 'assets/images/cadeira_sushi.png', name: 'Cadeira Sushi', artist: 'Linda Martins', year: '2020',  model: 'assets/models/cadeira_sushi.glb' },
    { image: 'assets/images/cadeira_madeleine.png', name: 'Cadeira Madeleine', artist: 'Noemi Saga', year: 'Sem Data',  model: 'assets/models/cadeira_madeleine.glb' },
    { image: 'assets/images/poltrona_cuore.png', name: 'Poltrona Cuore', artist: 'Marta Manente', year: 'Sem Data',  model: 'assets/models/poltrona_cuore.glb' },
    { image: 'assets/images/cadeira_garca.png', name: 'Cadeira Garça', artist: 'Ilse Lang', year: '2019',  model: 'assets/models/cadeira_garca.glb' },
    { image: 'assets/images/poltrona_itiquira.png', name: 'Poltrona Itiquira', artist: 'Mariana Bueno', year: '2024',  model: 'assets/models/poltrona_itiquira.glb' },
    { image: 'assets/images/cadeira_girafa.png', name: 'Cadeira Girafa', artist: 'Lina Bo Bardi', year: '1987',  model: 'assets/models/cadeira_girafa.glb' }
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