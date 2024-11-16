document.addEventListener("DOMContentLoaded", function () {
const colorSwatches = document.querySelectorAll('.color-swatches');
const color = document.querySelector('.color');

colorSwatches.forEach((swatch) => {
    swatch.addEventListener('click', () => {
        // Get the background color of the selected swatch
        const selectedColor = swatch.style.backgroundColor;
        // Set the background color of the image to the selected color
        color.style.backgroundColor = selectedColor;
    });
});
});