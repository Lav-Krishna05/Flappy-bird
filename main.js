var block = document.getElementById("bars");
var hole = document.getElementById("holes");
var bird = document.getElementById("bird");
var jumping = 0;
var counter = 0;

hole.addEventListener("animationiteration", () => {
    var random = -(Math.floor(Math.random() * 800)+200);
    hole.style.top = random + "px";
    counter++;
})

setInterval(function () {
    var characterTop = parseInt(window.getComputedStyle(bird).getPropertyValue("top"));
    if (jumping == 0) { bird.style.top = (characterTop + 3) + "px"; }
    var blockLeft = parseInt(window.getComputedStyle(block).getPropertyValue("left"));
    var holeTop = parseInt(window.getComputedStyle(hole).getPropertyValue("top"));
    var cTop = -(800 - (characterTop-25));




    if ((characterTop > 750) || (blockLeft<10)&&(blockLeft>-50)&&(cTop<holeTop) ||
    
    (characterTop < 5)){
        alert("Game Over  Score:" + counter);
    bird.style.top = 110 + "px"
    counter = 0;
}
}, 10);




function jump() {
    jumping = 1;
    let jumpcount = 0;

    var jumpInterval = setInterval(function () {
        var characterTop = parseInt(window.getComputedStyle(bird).getPropertyValue("top"));
        if ((characterTop > 6) &&
            (jumpcount < 15)) {
            bird.style.top = (characterTop - 5) + "px";
        }
        if (jumpcount > 20) {
            clearInterval(jumpInterval);
            jumping = 0;
            jumpcount = 0;
        }
        jumpcount++;
    }, 10)
}