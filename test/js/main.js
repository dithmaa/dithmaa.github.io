$(document).ready(function(){
    $('.cars-slider').slick({
        dots: true,
        prevArrow: '<button type="button" class="slick-arrow slick-prev">Previous</button>',
        nextArrow: '<button type="button" class="slick-arrow slick-next">Next</button>',
        infinite: true,
        speed: 300,
        slidesToShow: 1,
        slidesToScroll: 1
    });
    let faq__question = document.getElementsByClassName('faq__question');
    let faq__answer = document.getElementsByClassName('faq__answer');
    let faqItem = document.getElementsByClassName('faq-item');
    let faqPlus = document.getElementsByClassName('faq-plus');
    
    for(let i = 0; i < faq__question.length; i++){
        faq__question[i].addEventListener('click', function(){
            $(faq__question[i]).toggleClass('is-open');
            $(faq__answer[i]).toggleClass('is-open');
            $(faqItem[i]).toggleClass('active');
            $(faqPlus[i]).toggleClass('active');
            isOpen = true;
            console.log(isOpen);
        });
    }
    $('.hamburger').on('click', function(){
        $('.mobile-info').toggleClass('is-active');
        $('.hamburger').toggleClass('is-active');
    });
    
});
      

