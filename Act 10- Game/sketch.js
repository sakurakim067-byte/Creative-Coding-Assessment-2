
//making variable and storing the data: 2 blocks and the score.
var pink = document.getElementById("pink");
var enemy = document.getElementById("enemy");
var counter = 0;
//jump function used for jump animmation
function jump(){
    if(pink.classList != "animate"){
        pink.classList.add("animate");
    }
//its the timing for when the pink block from top to bottom comes down
    setTimeout(function(){
        pink.classList.remove("animate");
    },800);
}

setInterval(function(){
//It converts to integer
    var pinkTop =
    parseInt(window.getComputedStyle(pink).getPropertyValue("top"));

    var enemyLeft =
    parseInt(window.getComputedStyle(enemy).getPropertyValue("left"));
// collison of two blocks.  if both of them collides the game will be over
    if(enemyLeft < 90 && enemyLeft > 40 && pinkTop >= 160){
        enemy.style.animation = "none";
        alert("Game Over");
    }
// this is for increasing the score 
    counter++;
    document.getElementById("score").innerHTML =
    Math.floor(counter/100);

},10);