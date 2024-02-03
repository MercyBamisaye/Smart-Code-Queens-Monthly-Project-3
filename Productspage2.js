document.addEventListener('DOMContentLoaded', () => {
    // Function to fetch products by category
    async function fetchProductsByCategory(category) {
        const res = await fetch(`https://fakestoreapi.com/products/category/${category}`);
        const products = await res.json();
        return products;
    }

    // Function to display products in cards
    function displayProductsAsCards(products) {
        const productCardsContainer = document.getElementById('product-cards-container');
        productCardsContainer.innerHTML = ''; // Clear previous products

        products.forEach(product => {
            const productCard = document.createElement('div');
            productCard.classList.add('product-card');

            // Populate product card HTML
            productCard.innerHTML = `
                <img src="${product.image}" alt="${product.title}" class="product-image">
                <h4>${product.title}</h4>
                <p>${product.description}</p>
                <p>$${product.price}</p>
            `;

            productCardsContainer.appendChild(productCard);
        });
    }

    // Event listener for category links
    const dropdownCategories = document.getElementById('dropdown-categories');
    dropdownCategories.addEventListener('click', async (event) => {
        if (event.target.tagName === 'A') {
            const category = event.target.textContent.toLowerCase(); 
            const products = await fetchProductsByCategory(category);
            displayProductsAsCards(products);
        }
    });
});
