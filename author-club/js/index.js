
$('.earnings-slider').slick({
    centerMode: true,
    centerPadding: '550px',
    speed: 200,
    slidesToShow: 1,
    slidesToScroll: 1,
    prevArrow: '<button type="button" class="earn-prev">Prev</button>',
    nextArrow: '<button type="button" class="earn-next">Next</button>',
    responsive: [
        {
            breakpoint: 1650,
            settings: {
                centerMode: true,
                centerPadding: '450px'
            }
        },
        {
            breakpoint: 1500,
            settings: {
                centerMode: true,
                centerPadding: '400px'
            }
        }, 
        {
            breakpoint: 1365,
            settings: {
                centerMode: true,
                centerPadding: '300px'
            }
        },
        {
            breakpoint: 1200,
            settings: {
                centerMode: true,
                centerPadding: '200px'
            }
        },
        {
            breakpoint: 992,
            settings: {
                centerMode: true,
                centerPadding: '50px'
            }
        },
        {
            breakpoint: 902,
            settings: {
                centerMode: true,
                centerPadding: '20px'
            }
        },
        {
            breakpoint: 800,
            settings: {
                centerMode: true,
                centerPadding: '10px'
            }
        }
    ]
});
$('.testimonials-slider').slick({
    dots: false,
    infinite: true,
    speed: 300,
    slidesToShow: 1,
    slidesToScroll: 1,
    prevArrow: '<button type="button" class="testi-prev">Prev</button>',
    nextArrow: '<button type="button" class="testi-next">Next</button>'
});