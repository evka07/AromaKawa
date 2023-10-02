
const navbarHome = document.getElementById('navbar__home');
const navbarProduct = document.getElementById('navbar__products');
const navbarContact = document.getElementById('navbar__contact');

const pageHome = document.getElementById('home');
const pageProducts = document.getElementById('products');
const pageContact = document.getElementById('contact');

navbarHome.addEventListener('click', function () {
    pageHome.classList.add('active');
    pageProducts.classList.remove('active');
    pageContact.classList.remove('active');
});

navbarProduct.addEventListener('click', function () {
    pageProducts.classList.add('active');
    pageHome.classList.remove('active');
    pageHome.classList.add('disactive');
    pageContact.classList.remove('active');
    pageContact.classList.add('disactive');
});

navbarContact.addEventListener('click', function () {
    pageContact.classList.add('active');
    pageProducts.classList.remove('active');
    pageProducts.classList.add('disactive');
    pageHome.classList.remove('active');
    pageHome.classList.add('disactive');
});

document.addEventListener("DOMContentLoaded", function () {
    const productContainer = document.getElementById("productContainer");

    fetch("http://localhost:3132/products")
        .then((response) => response.json())
        .then((data) => {
            const source = document.getElementById("product-template").innerHTML;
            const template = Handlebars.compile(source);
            console.log(data)


            const fragment = document.createDocumentFragment();

            data.forEach((productData) => {
                const productItemHTML = template(productData);
                const productItem = document.createElement("li");
                productItem.classList.add('products__card')
                productItem.innerHTML = productItemHTML;
                fragment.appendChild(productItem);
            });


            productContainer.innerHTML = "";
            productContainer.appendChild(fragment);
        })
        .catch((error) => {
            console.error("Error:", error);
        });
});





