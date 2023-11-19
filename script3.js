  document.addEventListener("DOMContentLoaded", function () {
            var images = [
                "phone.jpg",
                // Add more image URLs as needed
            ];
            var index = 0;
            var reviewImage = document.getElementById("review-image");

            setInterval(function () {
                index = (index + 1) % images.length;
                reviewImage.src = images[index];
            }, 1000);
        });