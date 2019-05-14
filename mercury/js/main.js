$('#features').slick({
  dots: false,
  infinite: false,
  speed: 300,
  slidesToShow: 3,
  slidesToScroll: 1,
  prevArrow: '<button class="features-prev features-arrow"></button>',
  nextArrow: '<button class="features-next features-arrow"></button>',
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
        slidesToScroll: 2
      }
    }
    // You can unslick at a given breakpoint now by adding:
    // settings: "unslick"
    // instead of a settings object
  ]
});
$('#dragdrop').slick({
  dots: false,
  infinite: false,
  speed: 300,
  slidesToShow: 1,
  slidesToScroll: 1,
  prevArrow: '<button class="dragdrop-prev dragdrop-arrow"><img src="img/dragdrop/prev.png" alt="prev"></button>',
  nextArrow: '<button class="dragdrop-next dragdrop-arrow"><img src="img/dragdrop/next.png" alt="next"></button>'
});


$('#pricing').slick({
  dots: false,
  infinite: false,
  speed: 300,
  slidesToShow: 3,
  slidesToScroll: 1,
  prevArrow: '<button class="features-prev features-arrow"></button>',
  nextArrow: '<button class="features-next features-arrow"></button>',
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