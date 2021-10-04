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

                
                let bar = document.querySelector('.bar');
                let barWidth = parseInt(getComputedStyle(bar).width);

                

                if(barWidth == 0){
                    k = 0;
                }
                
                if(k == 87 || k == 38){
                    y-=10;

                    if(y < 10){
                        y = 10;
                    }
                } else if(k == 83 || k == 40){
                    y+=10;

                    if(y > 490){
                        y = 490;
                    }
                } 
                
                return y;
            },
            leftright: function(){
                let x = parseInt(getComputedStyle(amongusId).left);
                // console.log("x value: " + x);
                if(k == 65 || k == 37){
                    x-=10;
                    if(x < 10){
                        x = 10;
                    }
                } else if(k == 68 || k == 39){
                    x+=10;
                    if(x > 490){
                        x = 490;
                    }
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
        console.log("Ням");
        if(thirst >= 100){
            thirst = 100;
        }

            // bottle.style.top = -4000 + "px";
            let bottleImg = document.querySelector(".bottle-btn");
            bottleImg.style.width = 100 + "px";
            bottleImg.style.height = 100 + "px";
            let bottle = document.querySelector('.bottle');
            bottle.style.borderColor = "rgba(0,0,0,0)";
            let amongus = document.querySelector('.amongus');
            amongus.style.background = "rgba(64, 224, 208, 0.589)";
            bottle.style.background = 0;
            setTimeout(function(){
                bottleImg.style.opacity = 0;
            },130);
            setTimeout(function(){
                amongus.style.background = 0;
            },200);
            setTimeout(function () {
                randomBottle();
                bottle.style.background = "rgba(64, 224, 208, 0.2)";
                bottleImg.style.opacity = 1;
                bottleImg.style.width = 50 + "px";
                bottleImg.style.height = 50 + "px";
                bottle.style.borderColor = "rgba(64, 224, 208, 0.589)";
            },2000);

        
    }
}
randomBottle();

function randomBottle(){
    var bottleRandomPosY = (Math.round(Math.random() * (9 - 1) + 1) ) * 50;
    var bottleRandomPosX = (Math.round(Math.random() * (9 - 1) + 1) ) * 50;
    

    
    bottle.style.top = bottleRandomPosY + "px";
    bottle.style.left = bottleRandomPosX + "px";


}



document.addEventListener("keydown", move);








bar.style.width = thirst + "%";

thirstInterval = setInterval(thirstDecrease,100);

function thirstDecrease(){

    bar.style.width = thirst + "%";
    thirst--;
    if(thirst < 0){
        console.log("Игра закочена");
        clearInterval(thirstInterval);

        bottle.style.opacity = 0;
        var gameover = document.createElement('div'), 
            gameoverTitle = document.createElement('h2'), 
            overflow = document.createElement('div');
        overflow.classList.add('overflow');
        gameover.classList.add('gameover');
        gameoverTitle.append("Вы проиграли");
        gameover.append(gameoverTitle);
        gameover.append(again);
        field.append(overflow);
        field.append(gameover);
      function gameAgain(){
        field.removeChild(gameover);
        field.removeChild(overflow);
        bar.innerHTML = "";
        bar.style.width = thirst + "%";
        thirst = 100;
        thirstInterval = setInterval(thirstDecrease,100);
        bottle.style.opacity = 1;
        let amongus = document.querySelector(".amongus");
        amongus.style.top = 250 + "px";
        amongus.style.left = 250 + "px";
    }
    again.addEventListener('click', gameAgain);
    }
}
// createEnemy();



function createEnemy(){
    var enemy = document.createElement('div');
    var enemyPicture = document.createElement('div');
    var enemyImg = document.createElement('img');
    var box = document.querySelector('.box');

    enemy.classList.add('enemy');
    enemyPicture.classList.add('enemy-picture');
    

    enemyImg.src = "https://emojiguide.org/images/emoji/q/1oy61n91jeruqq.png";
    enemyPicture.append(enemyImg);
    enemy.append(enemyPicture);
    box.append(enemy);
    randomEnemy();
    return "Читы включены";

  
}

function randomEnemy(){
    var enemyId = document.querySelector('.enemy');

        var enemyPosY = (Math.round(Math.random() * (9 - 1) + 1) ) * 50;
        var enemyPosX = (Math.round(Math.random() * (9 - 1) + 1) ) * 50;
        
        
        enemyId.style.top = enemyPosY + "px";
        enemyId.style.left = enemyPosX + "px";
    

}
