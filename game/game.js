let thirst = 100;
let bottle = document.querySelector('.bottle');
let bar = document.querySelector('.bar');
let thirstBar = document.querySelector('.thirst-bar');
let field = document.querySelector('.field');

let again = document.createElement('button');
again.innerHTML = "Начать игру заного";
again.classList.add('again');







function move(e){

    
    
    
    let k = e.keyCode,
        amongusId = document.querySelector(".amongus"),
        amongus = {
            updown: function(){
                let y = parseInt(getComputedStyle(amongusId).top);

                

                
                if(k == 87 || k == 38){
                    y-=20;
                    
                } else if(k == 83 || k == 40){
                    y+=20;
                }
                
                return y;
            },
            leftright: function(){
                let x = parseInt(getComputedStyle(amongusId).left);
                // console.log("x value: " + x);
                if(k == 65 || k == 37){
                    x-=20;
                } else if(k == 68 || k == 39){
                    x+=20;
                }
                return x;
            }
        };
    amongusId.style.top = (amongus.updown()) + "px";
    amongusId.style.left = (amongus.leftright()) + "px";

    let bottlePosY = parseInt(getComputedStyle(bottle).top);
    let amongPosY = parseInt(getComputedStyle(amongusId).top);
    let bottlePosX = parseInt(getComputedStyle(bottle).left);
    let amongPosX = parseInt(getComputedStyle(amongusId).left);

    if(bottlePosY == amongPosY  && bottlePosX == amongPosX){
        thirst+=30;

        if(thirst >= 100){
            thirst = 100;
        }
        bottle.style.top = -4000 + "px";
        setTimeout(function () {
            bottle.style.top = 700 + "px";
        },2000);
        
    }
}

document.addEventListener("keydown", move);








bar.style.width = thirst + "%";

thirstInterval = setInterval(thirstDecrease,200);

function thirstDecrease(){
    console.log(thirst);
    
    bar.style.width = thirst + "%";
    thirst--;
    if(thirst < 0){
        console.log("Игра закочена");
        bar.innerHTML = "Игра закончена ";
        clearInterval(thirstInterval);
        field.append(again);
      
      function gameAgain(){
        bar.innerHTML = "";
        bar.style.width = thirst + "%";
        thirst = 100;
        thirstInterval = setInterval(thirstDecrease,200);
        field.removeChild(again);
    }
    again.addEventListener('click', gameAgain);
    }
}


