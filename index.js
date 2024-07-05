var len=document.querySelectorAll(".drum").length;
var audio5 = new Audio("sounds/crash.mp3");
var audio6 = new Audio("sounds/kick-bass.mp3");
var audio4 = new Audio("sounds/snare.mp3");
var audio0 = new Audio("sounds/tom-1.mp3");
var audio1 = new Audio("sounds/tom-2.mp3");
var audio2 = new Audio("sounds/tom-3.mp3");
var audio3 = new Audio("sounds/tom-4.mp3");

for(i=0; i<len; ++i){
document.querySelectorAll(".drum")[i].addEventListener("click", function(){

    makeSound(this.innerHTML);
});
}

document.addEventListener("keydown", function(event){
    makeSound(event.key);
});


function makeSound(key){
    
    switch(key){
        case "w": audio0.play();
        break;
        case "a": audio1.play();
        break;
        case "s": audio2.play();
        break;
        case "d": audio3.play();
        break;
        case "j": audio4.play();
        break;
        case "k": audio5.play();
        break;
        case "l": audio6.play();
        break;
    }

    var element = document.querySelector("."+key);
    element.classList.add("pressed");
    setTimeout(function(){
        element.classList.remove("pressed");
    }, 200);
    
}


