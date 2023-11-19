  document.addEventListener("DOMContentLoaded", function () {
            var images = [
                "img/nothing.jpg",
          "img/Macbook_air.jpg",
             "img/CanonS10.jpg",
                // Add more image URLs as needed
            ];
            var index = 0;
            var reviewImage = document.getElementById("review-image");

            setInterval(function () {
                index = (index + 1) % images.length;
                reviewImage.src = images[index];
            }, 1000);
        });
