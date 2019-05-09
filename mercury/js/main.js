$(".features").slick({
  dots: false,
  infinite: true,
  speed: 300,
  slidesToShow: 3,
  slidesToScroll: 3,
  prevArrow: '<button type="button" class="features-prev features-arrow"></button>',
  nextArrow: '<button type="button" class="features-next features-arrow"></button>',
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
        slidesToScroll: 1
      }
    }
  ] 
});
$('.dragdrop-slider').slick({
  dots: false,
  infinite: true,
  speed: 600,
  slideToShow: 1,
  slideToScroll: 1,
  prevArrow: '<button type="button" class="dragdrop-prev dragdrop-arrow"><img alt="prev" src="../img/dragdrop/prev.png"></button>',
  nextArrow: '<button type="button" class="dragdrop-next dragdrop-arrow"><img alt="next" src="../img/dragdrop/next.png"></button>'
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