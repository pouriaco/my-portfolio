const mySlider = document.querySelectorAll('.slider');

function sliderClass() {
    for (let item of mySlider) {

        item.classList.toggle('slider-active');
    }
}
