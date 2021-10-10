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

let next = document.createElement('button');
next.innerHTML = "Следующий уровень";
next.classList.add('next');
var indicator = document.querySelector('.indicator');
indicator.append(chestAmount + " уровень");

var amountTry = 3;
var enemyAmount;
function heartDraw(){
    
    var heartBox = document.createElement('div');
    heartBox.classList.add('heart-box');
    for(var d = 0; d < amountTry; d++){
        var heart = document.createElement('div');
        heart.classList.add('heart');
        var heartImg = document.createElement('img');
        heartImg.src = "../img/heart.png";
        heart.append(heartImg);
        heartBox.append(heart);
        var indicator = document.querySelector('.indicator');
        indicator.append(heartBox);
    }
}
heartDraw();


var swallow = new Audio();
swallow.src = "../sounds/swallow-sound.wav";

var pain = new Audio();
pain.src = "../sounds/painful.wav";

var bottleAppear = new Audio();
bottleAppear.src = "../sounds/appearItem.wav";

var steps = new Audio();
steps.src = "../sounds/step.wav";

var bgmusic = new Audio();
bgmusic.src = "../sounds/music.wav";

// window.onload = function(){
//     bgmusic.play();
// }

function soundOn(){
    setInterval(function(){
        bgmusic.play();
    },0);
}
function musicPause(){
    bgmusic.pause();
}
var move = function move(e){
    
    
    let k = e.keyCode,
        amongusId = document.querySelector(".amongus"),
        amongus = {
            updown: function(){
                
                let y = parseInt(getComputedStyle(amongusId).top);

                
                let bar = document.querySelector('.bar');
                let barWidth = parseInt(getComputedStyle(bar).width);

                

                if(document.querySelector('.main-popup')){
                    k = 0;
                }
                
                if(k == 87 || k == 38){
                    y-=10;

                    if(y < 10){
                        y = 10;
                    }
                    steps.play();
                } else if(k == 83 || k == 40){
                    y+=10;

                    if(y > 490){
                        y = 490;
                    }
                    steps.play();
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
                    steps.play();
                } else if(k == 68 || k == 39){
                    x+=10;
                    if(x > 490){
                        x = 490;
                    }
                    steps.play();
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

    //Chest collision
    var chestId = document.getElementsByClassName('chest');
    var chestPicture = document.getElementsByClassName('chest-picture');

    for(var collisionN = 0; collisionN < chestAmount; collisionN++){

        
        
        var chestPosY = parseInt(getComputedStyle(chestId[collisionN]).top);
        var chestPosX = parseInt(getComputedStyle(chestId[collisionN]).left);

        if(chestPosY == amongPosY && chestPosX == amongPosX){

            
                    
            
            
            //increase
            chestHas++;
            chestAmountNum.innerHTML = chestHas + "/" + chestAmount;  

            console.log("Сколько сундуков на карте: " + chestAmount);
            console.log("Сколько сундуков уже собрано: " + chestHas);

            if(chestAmount == chestHas){
                console.log("Все сундуки собраны");
                if(blood == 0){
                    setTimeout(function(){
                        clearInterval(bloodInterval);
                    },620);
                }
                    
                
                
                clearInterval(thirstInterval);

                win();
                let next = document.querySelector('.next');
                next.addEventListener('click',function(){
                    console.log(chestAmount);
                    var x = chestAmount;
                    switch(x) {
                        case 1: 
                            window.location.href = "two.html";
                            break;
                        case 2: 
                            window.location.href = "three.html";
                            break;
                        case 3: 
                            window.location.href = "four.html";
                            break;
                        case 4: 
                            window.location.href = "five.html";
                            break;
                        case 5: 
                            window.location.href = "six.html";
                            break;
                        case 6: 
                            window.location.href = "seven.html";
                            break;
                        case 7: 
                            window.location.href = "eight.html";
                            break;
                        case 8: 
                            window.location.href = "nine.html";
                            break;
                        case 9: 
                            window.location.href = "ten.html";
                            break;
                        case 10: 
                            window.location.href = "eleven.html";
                            break;
                        case 11: 
                            window.location.href = "twelve.html";
                            break;
                        case 12: 
                            window.location.href = "thirteen.html";
                            break;
                        case 13: 
                            window.location.href = "fourteen.html";
                            break;
                        case 14: 
                            window.location.href = "fifteen.html";
                            break;
                        default:
                            window.location.href = "../index.html";
                        
                    }
                });



            }

            //animation
            chestId[collisionN].style.left = 800 + "px";
            chestId[collisionN].style.background = "rgba(255, 0, 0, 0)";
            chestId[collisionN].style.borderColor = "rgba(255, 0, 0, 0)";

            chestPicture[collisionN].style.height = 100 + "px";
            chestPicture[collisionN].style.width = 100 + "px";
            var chestPictureThis = chestPicture[collisionN];

            let amongus = document.querySelector('.amongus');
            amongus.style.background = "rgba(0, 255, 34, 500)";
            
            amongus.style.borderColor = "rgba(0, 255, 34, 500)";
            setTimeout(function(){
                amongus.style.background = "rgba(255, 0, 0, 0)";
                amongus.style.borderColor = "rgba(64, 224, 208, 0.589)";
                
            },200);
            setTimeout(function(){
                chestPictureThis.style.opacity = 0;
                
            },200);
        }
    }

    
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
            var enemyStyle1 = parseInt(getComputedStyle(enemyStyle[0]).left);
            var enemyStyle2 = parseInt(getComputedStyle(enemyStyle[1]).left);
            var enemyStyle3 = parseInt(getComputedStyle(enemyStyle[2]).left);
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

   

    // bottleAppear.play();

    var bottleRandomPosY = (Math.round(Math.random() * (9 - 1) + 1) ) * 50;
    var bottleRandomPosX = (Math.round(Math.random() * (9 - 1) + 1) ) * 50;
    

    
    bottle.style.top = bottleRandomPosY + "px";
    bottle.style.left = bottleRandomPosX + "px";

    


}





//GAMEOVER

function gameover(){
    var heartLast = document.querySelector('.heart-box');
    var indicators = document.querySelector('.indicator');
    var amongCarnage = document.querySelector('.amongus');
    indicators.removeChild(heartLast);
    amountTry--;
    heartDraw();
    console.log("Осталось "+amountTry+" попыток");

    if(amountTry <= 0){
        window.location.href = "../index.html";
    } else if(amountTry == 1){
        // amongCarnage.style.backgroundColor = "red";
        var carnageColor = document.createElement('div');
        carnageColor.classList.add('carnage-color');
        amongCarnage.append(carnageColor);

    } 
    console.log("Игра закочена");
    

    bottle.style.opacity = 0;
    var gameover = document.createElement('div'), 
        gameoverTitle = document.createElement('h2'), 
        overflow = document.createElement('div');
        overflow.classList.add('overflow');
        gameover.classList.add('gameover');
        gameover.classList.add('main-popup');
        gameoverTitle.append("Вы проиграли");
        gameover.append(gameoverTitle);
        gameover.append(again);
        field.append(overflow);
        field.append(gameover);
    
}
function win(){
    console.log("Победа");
    

    bottle.style.opacity = 0;
    var win = document.createElement('div'), 
        winTitle = document.createElement('h2'), 
        overflow = document.createElement('div');
        overflow.classList.add('overflow');
        win.classList.add('win');
        win.classList.add('main-popup');
        winTitle.append("Вы выиграли");
        win.append(winTitle);
        win.append(next);
        field.append(overflow);
        field.append(win);
    
}


//THIRST DECREASE

bar.style.width = thirst + "%";





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



//KEYDOWN MOVE
document.addEventListener("keydown", move);



//Chest initialize
var chestAmountRandom = chestAmount;
var chestHas = 0;
//Create chests
function createChest(){
    for(var chestN = 0; chestN < chestAmount; chestN++){
        var chest = document.createElement('div');
        var chestPicture = document.createElement('div');
        var chestImg = document.createElement('img');
        var box = document.querySelector('.box');

        chest.classList.add('chest');
        chestPicture.classList.add('chest-picture');
        

        chestImg.src = '../img/chest.png';
        chestPicture.append(chestImg);
        chest.append(chestPicture);
        box.append(chest);

        
    }
    
}
createChest();

//Random chests

function randomChest(){
   
    for(var chestRandomN = 0; chestRandomN < chestAmountRandom; chestRandomN++){
        var chestId = document.getElementsByClassName('chest');

        var chestRandomPosY = (Math.round(Math.random() * (9 - 1) + 1) ) * 50;
        var chestRandomPosX = (Math.round(Math.random() * (9 - 1) + 1) ) * 50;
        chestId[chestRandomN].style.top = chestRandomPosY + "px";
        chestId[chestRandomN].style.left = chestRandomPosX + "px";
    }
}
randomChest();

//Chest amount 
var chestAmountNum = document.querySelector('.chest-amount-num');
chestAmountNum.innerHTML = chestHas + "/" + chestAmount;       

