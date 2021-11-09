const
    sliderWrapper = document.querySelector('.slider-wrapper'),
    slider = document.querySelector('.slider'),
    slides = document.querySelectorAll('.slide'),
    prevArrow = document.querySelector('.prev-arrow'),
    nextArrow = document.querySelector('.next-arrow');

let currentIndex = 0,
    slidePosition = 0;


let showSlide = () => {
    slides[currentIndex].classList.add('active');
    for (i = 0; i < slides.length; i++) {

        let sliderWrapperWidth = slides.length * 700;
        sliderWrapper.style.width = sliderWrapperWidth + 'px';
    }
}
showSlide();
prevArrow.addEventListener('click', () => {
    currentIndex--; // отличается

    if (currentIndex >= 0) {
        slides[currentIndex].classList.add('active');
        slides[currentIndex + 1].classList.remove('active');



        slidePosition = parseInt(getComputedStyle(slides[currentIndex]).left);

        slidePosition = (slidePosition + 700); // отличается

        for (i = 0; i < slides.length; i++) {
            slides[i].style.left = slidePosition + 'px';
        }
    } else {


        currentIndex = slides.length - 1; // 3
        slidePosition = 700 * (slides.length - 1) * -1;
        console.log(slidePosition);
        for (i = 0; i < slides.length; i++) {
            slides[i].style.left = slidePosition + 'px';
        }
        slides[currentIndex].classList.add('active');
        slides[currentIndex - (slides.length - 1)].classList.remove('active');
    }

});
nextArrow.addEventListener('click', () => {

    currentIndex++; // отличается
    if (currentIndex <= slides.length - 1) {
        slides[currentIndex].classList.add('active');
        slides[currentIndex - 1].classList.remove('active');

        slidePosition = parseInt(getComputedStyle(slides[currentIndex]).left);

        slidePosition = (slidePosition - 700); // отличается

        for (i = 0; i < slides.length; i++) {
            slides[i].style.left = slidePosition + 'px';
        }
    } else {




        currentIndex = 0;
        slidePosition = 0;
        console.log(slidePosition);
        for (i = 0; i < slides.length; i++) {
            slides[i].style.left = slidePosition + 'px';
        }
        slides[currentIndex].classList.add('active');
        slides[currentIndex + (slides.length - 1)].classList.remove('active');
    }


});
// console.log('Количество слайдов ' + slides.length);

