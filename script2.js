  var ratedProductsInfo = document.getElementById('rated-products-info');

        function clearRatings() {
            // Clear ratings from localStorage
            localStorage.removeItem('ratings');
            
            // Clear the displayed rated products
            ratedProductsInfo.innerHTML = '<p>No products rated.</p>';
        }

        var ratedProducts = JSON.parse(localStorage.getItem('ratings')) || [];

        if (ratedProducts.length > 0) {
            ratedProducts.forEach(function(product, index) {
                ratedProductsInfo.innerHTML += `
                    <div class="rated-product">
                        <h2>${product.name}</h2>
                        <img src="${product.image}" alt="${product.name}">
                        <p>${product.description}</p>
                        <p>Rating: ${product.rating}</p>
                        <div class="stars">
                            <!-- Add stars/rating input here -->
                        </div>
                    </div>
                `;
            });
        } else {
            ratedProductsInfo.innerHTML = '<p>No products rated.</p>';
        }