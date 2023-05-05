// detecting button press
var numberOfDrums = document.querySelectorAll(".drum").length;

// for loop is used to create same functionality for all buttons
for (var i = 0; i<numberOfDrums; i++){

    // addEventListener is used to add a event to our button like when it got clicked how will it react or perform,
    document.getElementsByClassName("drum")[i].addEventListener("click",function (){ //this type of functions are called higher order function
        var buttonInnerHTML = this.innerHTML;
        
        makeSound(buttonInnerHTML);
        addAnimation(buttonInnerHTML)
    });
    
}

// detecting keyboard press
document.addEventListener("keypress",function(event){ //this function is called as call back function
    makeSound(event.key);
    addAnimation(event.key)
});


function makeSound(key){
    switch (key) {
        case "w":
            var tom1 = new Audio("tom-1.mp3");
            tom1.play();
            break;
        case "a":
            var tom2 = new Audio("tom-2.mp3");
            tom2.play();
            break;
        case "s":
            var tom3 = new Audio("tom-3.mp3");
            tom3.play();
            break;
        case "d":
            var tom4 = new Audio("tom-4.mp3");
            tom4.play();
            break;
        case "j":
            var crash = new Audio("crash.mp3");
            crash.play();
            break;
        case "k":
            var kickbass = new Audio("kick-bass.mp3");
            kickbass.play();
            break;
        case "l":
            var snare = new Audio("snare.mp3");
            snare.play();
            break;
        
        default: console.log();
            break;
    }
}

// for adding the animation
function addAnimation(currentKey){
    var activeButton = document.querySelector("." + currentKey);
    
    activeButton.classList.add("pressed");
    setTimeout(function(){
        activeButton.classList.remove("pressed");
    } ,100);
}
// (this.style.color = "white"); //this - is used to get identity, like which button got clicked 


// using while loop
// var i = 0;
// while (i < numberOfDrums){

//         document.getElementsByClassName("drum")[i].addEventListener("click",function whenClicked(){
//         alert("I got clicked");
//     });
//     i++;
// }
