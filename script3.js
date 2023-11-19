   document.addEventListener("DOMContentLoaded", function () {
            var slides = document.querySelectorAll('.fade');
            var index = 0;

            setInterval(function () {
                slides[index].style.display = 'none';
                index = (index + 1) % slides.length;
                slides[index].style.display = 'block';
            }, 1000);
        });
