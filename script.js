var ratings = JSON.parse(localStorage.getItem('ratings')) || [];

function rateProduct(productIndex, rating, image) {
    var productName = document.querySelectorAll('.product-info h1')[productIndex].innerText;
    var productDescription = document.querySelectorAll('.product-info p')[productIndex].innerText;

    ratings.push({
        name: productName,
        description: productDescription,
        rating: rating,
        image: image
    });

    localStorage.setItem('ratings', JSON.stringify(ratings));
}