let popit = document.getElementsByClassName('grid')[0];
//create
  for(i = 1; i <= 36; i++){

    let cell = document.createElement('span');
    cell.classList.add('cell');
    popit.appendChild(cell);  
    
    // cell.classList.add('active');
  }
  let cellElem = document.querySelectorAll('.grid>span');
  var sum = 0;

  for(k = 0; k < 36; k++){
    cellElem[k].addEventListener('click', function () {
      this.classList.toggle('active'); //cell active
      sum++;
  
      let res = document.getElementsByClassName('res');
      res[0].innerHTML= sum; //count score

      //win
      if(res[0].innerHTML >=  100){
        res[0].classList.add('is-purple');
      }
      
    });   
  }
      
//level

