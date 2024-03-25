window.onscroll = function() {
    var images = document.querySelectorAll('.ii');
    var windowHeight = window.innerHeight;

    images.forEach(function(image) {
        var imageTop = image.getBoundingClientRect().top;

        if (imageTop < windowHeight -100) { // Adjust 50 to control when the image appears
            image.style.opacity = 1;
        } else {
            image.style.opacity = 0;
        }
    });
};