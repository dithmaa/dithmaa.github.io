let thirst = 100;
var blood = 100;
let bottle = document.querySelector('.bottle');
let bar = document.querySelector('.bar');
let barBlood = document.querySelector('.blood-line');
let thirstBar = document.querySelector('.thirst-bar');
let field = document.querySelector('.field');

let again = document.createElement('button');
again.innerHTML = "Начать игру заного";
again.classList.add('again');




var move = function move(e){

    
    
    let k = e.keyCode,
        amongusId = document.querySelector(".amongus"),
        amongus = {
            updown: function(){
                let y = parseInt(getComputedStyle(amongusId).top);

                
                let bar = document.querySelector('.bar');
                let barWidth = parseInt(getComputedStyle(bar).width);

                

                if(document.querySelector('.gameover')){
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
            },
            killMove: function(){
                k = 0;
                return "Игра закончена";
            }
        };
    amongusId.style.top = (amongus.updown()) + "px";
    amongusId.style.left = (amongus.leftright()) + "px";
    


    let bottlePosY = parseInt(getComputedStyle(bottle).top);
    let amongPosY = parseInt(getComputedStyle(amongusId).top);
    let bottlePosX = parseInt(getComputedStyle(bottle).left);
    let amongPosX = parseInt(getComputedStyle(amongusId).left);


    
    for(var j = 0; j < 3; j++){
        var enemyId = document.getElementsByClassName('enemy');
        var enemyPicture = document.getElementsByClassName('enemy-picture');
        let enemyPosY = parseInt(getComputedStyle(enemyId[j]).top);
        let enemyPosX = parseInt(getComputedStyle(enemyId[j]).left);
        
        

        if(enemyPosY == amongPosY && enemyPosX == amongPosX){


            pain.play();
            enemyId[j].style.left = 800 + "px";
            enemyId[j].style.background = "rgba(255, 0, 0, 0)";
            enemyId[j].style.borderColor = "rgba(255, 0, 0, 0)";

            enemyPicture[j].style.height = 100 + "px";
            enemyPicture[j].style.width = 100 + "px";
            var enemyPictureThis = enemyPicture[j];

            let amongus = document.querySelector('.amongus');
            amongus.style.background = "rgba(255, 0, 0, 500)";
            
            amongus.style.borderColor = "rgba(255, 0, 0, 500)";
            setTimeout(function(){
                amongus.style.background = "rgba(255, 0, 0, 0)";
                amongus.style.borderColor = "rgba(64, 224, 208, 0.589)";
                
            },200);
            setTimeout(function(){
                enemyPictureThis.style.opacity = 0;
                
            },200);

            let enemyStyle = document.getElementsByClassName('enemy');
            enemyStyle1 = parseInt(getComputedStyle(enemyStyle[0]).left);
            enemyStyle2 = parseInt(getComputedStyle(enemyStyle[1]).left);
            enemyStyle3 = parseInt(getComputedStyle(enemyStyle[2]).left);
            if(enemyStyle1 == 800 && enemyStyle2 == 800 && enemyStyle3 == 800){
                setTimeout(function(){
                    for(var s = 0; s < 3; s++){
                        var enemyId = document.getElementsByClassName('enemy');
                        var enemyPicture = document.getElementsByClassName('enemy-picture');
                        enemyId[s].style.background = "rgba(255, 0, 0, .514)";
                        enemyPicture[s].style.opacity = 1;
                        enemyPicture[s].style.width = 60 + "px";
                        enemyPicture[s].style.height = 60 + "px";
                    }
                    randomEnemy();
                },1000);
            }
        
            if(blood > 50){
                blood-=60;
            } else{

                blood = 0;

                
                if(blood == 0){
                    setTimeout(function(){
                        clearInterval(bloodInterval);
                    },620);
                }
                    
                
                
                clearInterval(thirstInterval);
                gameover();
                let again = document.querySelector('.again');
                again.addEventListener('click',gameAgain);
            }
            
    }
    


    
    if(bottlePosY == amongPosY  && bottlePosX == amongPosX){
        swallow.play();
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
            },3000);

        
    }
    
    }

}







//RANDOM BOTTLE
randomBottle();

function randomBottle(){


    var bottleRandomPosY = (Math.round(Math.random() * (9 - 1) + 1) ) * 50;
    var bottleRandomPosX = (Math.round(Math.random() * (9 - 1) + 1) ) * 50;
    

    
    bottle.style.top = bottleRandomPosY + "px";
    bottle.style.left = bottleRandomPosX + "px";

    var bottleAppear = new Audio();
    bottleAppear.src = "sounds/waterAppear.mp3";

    bottleAppear.play();


}





//GAMEOVER

function gameover(){
    console.log("Игра закочена");
    

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
    
}

//PLAY AGAIN
function gameAgain(){   


    let gameover = document.querySelector(".gameover");
    let overflow = document.querySelector(".overflow");
    let field = document.querySelector('.field');
    
    field.removeChild(gameover);
    field.removeChild(overflow);
    // bar.innerHTML = "";
    bar.style.width = thirst + "%";
    thirst = 100;
    blood = 100;
    thirstInterval = setInterval(thirstDecrease,300);
    bloodInterval = setInterval(bloodIncrease,400);

    bottle.style.opacity = 1;
    let amongus = document.querySelector(".amongus");
    amongus.style.top = 250 + "px";
    amongus.style.left = 250 + "px";
    randomBottle();
    for(var p = 0; p < 3; p++){
        var enemyId = document.getElementsByClassName('enemy');
        var enemyPicture = document.getElementsByClassName('enemy-picture');
        enemyId[p].style.background = "rgba(255, 0, 0, .514)";
        enemyPicture[p].style.opacity = 1;
        enemyPicture[p].style.width = 60 + "px";
        enemyPicture[p].style.height = 60 + "px";
    }
    randomEnemy();
}


//THIRST DECREASE

bar.style.width = thirst + "%";

thirstInterval = setInterval(thirstDecrease,300);



function thirstDecrease(){

    bar.style.width = thirst + "%";
    thirst--;
    if(thirst < 0){
        clearInterval(thirstInterval);
        clearInterval(bloodInterval);
        gameover();
        let again = document.querySelector('.again');
        again.addEventListener('click',gameAgain);

    } 
}


//THIRST BLOOD

barBlood.style.width = blood + "%";

bloodInterval = setInterval(bloodIncrease,400);

function bloodIncrease(){

    barBlood.style.width = blood + "%";
    blood++;
    if(blood > 100){
        blood = 100;
    }
    
}








//CREATE ENEMYS


createEnemy();
randomEnemy();

function createEnemy(){
    for(var i = 0; i < 3; i++){
        var enemy = document.createElement('div');
        var enemyPicture = document.createElement('div');
        var enemyImg = document.createElement('img');
        var box = document.querySelector('.box');

        enemy.classList.add('enemy');
        enemyPicture.classList.add('enemy-picture');
        

        enemyImg.src = 'img/enemy.png';
        enemyPicture.append(enemyImg);
        enemy.append(enemyPicture);
        box.append(enemy);

        
    }
    

    return "Читы включены";  
}
function randomEnemy(){
    for(var k = 0; k < 3; k++){
        var enemyId = document.getElementsByClassName('enemy');

        var enemyRandomPosY = (Math.round(Math.random() * (9 - 1) + 1) ) * 50;
        var enemyRandomPosX = (Math.round(Math.random() * (9 - 1) + 1) ) * 50;
        enemyId[k].style.top = enemyRandomPosY + "px";
        enemyId[k].style.left = enemyRandomPosX + "px";
    }
}

//KEYDOWN MOVE
document.addEventListener("keydown", move);


var swallow = new Audio();
swallow.src = "sounds/swallow-sound.wav";

var pain = new Audio();
pain.src = "sounds/pain-sound.wav";

