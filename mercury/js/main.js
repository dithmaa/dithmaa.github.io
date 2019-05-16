var navLink = $('li a');
navLink.on('click', function(event){
  event.preventDefault();
  var target =  $(this).attr('href');
  var top = $(target).offset().top;
  $("html, body").animate({scrollTop: top}, 500);
});

$('.top-nav .hamburger').on('click', function(){
  $('.menu-list').toggleClass('active');
  $('html').toggleClass('overflow-h');
  $(this).toggleClass('active');
});
$('.main-menu li').on('click', function(){
  $('html').removeClass('overflow-h');
  $('.menu-list').removeClass('active');
  $('.hamburger').removeClass('active');
  
});

$(window).on('resize', function(){
  var $containerWidth = $(window).width();
  if($containerWidth >= 992){
    $('.menu-list').removeClass('active');
    $('html').removeClass('overflow-h');
    $(this).removeClass('active');
  }
});
$(window).scroll(function (){
  $('.powerfull').each(function (){
      var imagePos = $(this).offset().top;
      var topOfWindow = $(window).scrollTop();
      if (imagePos < topOfWindow+250) {
          $('.description, .powerfull .h3, .powerfull p').addClass('active');
      }
  });
});

$('#features').slick({
  dots: false,
  infinite: true,
  speed: 300,
  slidesToShow: 3,
  slidesToScroll: 1,
  prevArrow: '<button class="dragdrop-prev dragdrop-arrow"><img src="img/dragdrop/prev.png" alt="prev"></button>',
  nextArrow: '<button class="dragdrop-next dragdrop-arrow"><img src="img/dragdrop/next.png" alt="next"></button>',
  responsive: [
    {
      breakpoint: 992,
      settings: {
        slidesToShow: 2,
        slidesToScroll: 1,
      }
    },
    {
      breakpoint: 768,
      settings: {
        slidesToShow: 1,
        slidesToScroll: 1
      }
    }
    // You can unslick at a given breakpoint now by adding:
    // settings: "unslick"
    // instead of a settings object
  ]
});
$('#dragdrop').slick({
  dots: false,
  infinite: true,
  speed: 300,
  slidesToShow: 1,
  slidesToScroll: 1,
  prevArrow: '<button class="dragdrop-prev dragdrop-arrow"><img src="img/dragdrop/prev.png" alt="prev"></button>',
  nextArrow: '<button class="dragdrop-next dragdrop-arrow"><img src="img/dragdrop/next.png" alt="next"></button>'
});


$('#pricing-slider').slick({
  dots: false,
  infinite: true,
  speed: 300,
  slidesToShow: 3,
  slidesToScroll: 1,
  prevArrow: '<button class="dragdrop-prev dragdrop-arrow"><img src="img/dragdrop/prev.png" alt="prev"></button>',
  nextArrow: '<button class="dragdrop-next dragdrop-arrow"><img src="img/dragdrop/next.png" alt="next"></button>',
  responsive: [
    {
      breakpoint: 992,
      settings: {
        slidesToShow: 2,
        slidesToScroll: 1
      }
    },
    {
      breakpoint: 768,
      settings: {
        slidesToShow: 1,
        slidesToScroll: 1,
        infinite: true
      }
    }
    // You can unslick at a given breakpoint now by adding:
    // settings: "unslick"
    // instead of a settings object
  ]
});

//drag'n drop
const fill = document.querySelector('.task');
const empties = document.querySelectorAll('.drop');

fill.addEventListener('dragstart', dragStart);
fill.addEventListener('dragend', dragEnd);

for(const empty of empties){
  empty.addEventListener('dragover', dragOver);
  empty.addEventListener('dragenter', dragEnter);
  empty.addEventListener('dragleave', dragLeave);
  empty.addEventListener('drop', dragDrop);
}

//Drag Functions
function dragStart(){
  this.className += ' hold';
  setTimeout( () => this.className = 'invisible', 0); 
} 
function dragEnd(){
  this.className = "task";
}
function dragOver(e) {
  e.preventDefault();
}
function dragEnter(e) {
  e.preventDefault();
  this.className += ' hovered'; 
} 
function dragLeave() {
  this.className = 'drop';
}
function dragDrop() {
this.className = 'drop';
this.append(fill);
}