
const navbarHome = document.getElementById('navbar__home');
const navbarProduct = document.getElementById('navbar__products');
const navbarContact = document.getElementById('navbar__contact');

const pageHome = document.getElementById('home');
const pageProducts = document.getElementById('products');
const pageContact = document.getElementById('contact');

navbarHome.addEventListener('click', function () {
    // window.history.pushState({}, '', './home');
    pageHome.classList.add('active');
    pageProducts.classList.remove('active');
    pageContact.classList.remove('active');
});

navbarProduct.addEventListener('click', function () {
    // window.history.pushState({}, '', './product');

    pageProducts.classList.add('active');
    pageHome.classList.remove('active');
    pageHome.classList.add('disactive');
    pageContact.classList.remove('active');
    pageContact.classList.add('disactive');
});

navbarContact.addEventListener('click', function () {
    // window.history.pushState({}, '', './contact');
    pageContact.classList.add('active');
    pageProducts.classList.remove('active');
    pageProducts.classList.add('disactive');
    pageHome.classList.remove('active');
    pageHome.classList.add('disactive');
});


window.addEventListener('popstate', function (event) {

    const state = event.state;
    if (state) {
        const currentPath = window.location.pathname;
        if (currentPath === './home') {

            pageHome.classList.add('active');
            pageProducts.classList.remove('active');
            pageContact.classList.remove('active');
        } else if (currentPath === './products') {

            pageProducts.classList.add('active');
            pageHome.classList.remove('active');
            pageHome.classList.add('disactive');
            pageContact.classList.remove('active');
            pageContact.classList.add('disactive');
        } else if (currentPath === './contact') {

            pageContact.classList.add('active');
            pageProducts.classList.remove('active');
            pageProducts.classList.add('disactive');
            pageHome.classList.remove('active');
            pageHome.classList.add('disactive');
        }
    }
});


document.addEventListener("DOMContentLoaded", function () {
    const productContainer = document.getElementById("productContainer");

    fetch('/products')
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
document.addEventListener("DOMContentLoaded", function () {
    const productContainer = document.getElementById("homeContainer");

    fetch('/products')
        .then((response) => response.json())
        .then((data) => {
            const source = document.getElementById("home-template").innerHTML;
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

    const contactForm = document.getElementById('form')
    contactForm.addEventListener('submit', function (event) {
        event.preventDefault()

        const formData = new FormData(contactForm);
        const payload = {
            name: formData.get('name'),
            title: formData.get('title'),
            message: formData.get('message')
        }

        fetch('/contact', {
            method: "POST",
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(payload)
        })
            .then((response) => {
                if (response.ok) {
                    alert('ok')
                    contactForm.reset()
                } else {
                    alert('error')
                }
            })
            .catch((error) => {
                console.error("Error", error)
            })
    })
});




