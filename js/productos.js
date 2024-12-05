//Declaro variable donde se alojan los productos
const urlApiProductos = '../../recursos/products.json';
const productGrid = document.querySelector('.product-grid');

if (window.location.pathname.endsWith("/todosLosProductos.html")) {

// Fetch data from the JSON file
fetch(urlApiProductos)
  .then(response => response.json())
  .then(data => {
    data.forEach(product => {
      const productElement = createProductElement(product);
      productGrid.appendChild(productElement);
    });
  })
  .catch(error => {
    console.error("Error fetching products:", error);});



// Función para crear el HTML de un producto
function createProductElement(product) {
    const productElement = document.createElement('div');
    productElement.classList.add('product');

    const productInfo = document.createElement('div');
    productInfo.classList.add('product-info');

    const productImage = document.createElement('img');
    productImage.src = product.image;
    productImage.style.width = "50%";
    productImage.style.height  = "50%";
    productElement.appendChild(productImage);

    const productTitle = document.createElement('h2');
    productTitle.classList.add('product-title');
    productTitle.textContent = product.title;
    productElement.appendChild(productTitle);

    const productDescription = document.createElement('p');
    productDescription.classList.add('product-description');
    productDescription.textContent = product.description;
    productElement.appendChild(productDescription);

    const productPrice = document.createElement('span');
    productPrice.classList.add('product-price');
    productPrice.textContent = product.price;
    productElement.appendChild(productPrice);

    return productElement;
};

// if (!window.location.pathname.endsWith("/login.html")) {
// // Agregar los productos a la cuadrícula
// products.forEach(product => {
//     productGrid.appendChild(createProductElement(product));
// });
}