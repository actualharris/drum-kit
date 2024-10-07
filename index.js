// click and play

for (var i=0; i<document.querySelectorAll('.drum').length; i++){
    document.querySelectorAll('button')[i].addEventListener('click', function(){
        // console.log(this.innerHTML);
        var buttonInnerHTML = this.innerHTML;
        makeSound(buttonInnerHTML);
        buttonAnimation(buttonInnerHTML);

    });
}

// keypress and play

document.addEventListener("keydown", function(evt){ //evt -> event
    
    // console.log(evt);
    var keydownKey = evt.key;
    makeSound(keydownKey);
    buttonAnimation(keydownKey);

});


function makeSound(clickOrKeydownEvent){
    switch (clickOrKeydownEvent) {
        case "a":
                var tom1 = new Audio('sounds/tom-1.mp3');
                tom1.play();
            break;
        case "s":
                var tom2 = new Audio('sounds/tom-2.mp3');
                tom2.play();
            break;

        case "d":
                var tom3 = new Audio('sounds/tom-3.mp3');
                tom3.play();
            break;

        case "f":
                var tom4 = new Audio('sounds/tom-4.mp3');
                tom4.play();
            break;
        case "j":
                var crash = new Audio('sounds/crash.mp3');
                crash.play();
            break;

        case "k":
                var kick = new Audio('sounds/kick-bass.mp3');
                kick.play();
            break;

        case "l":
                var snare = new Audio('sounds/snare.mp3');
                snare.play();
            break;


        default: console.log(clickOrKeydownEvent + " - wrong key")
            break;
    }
}


function buttonAnimation(currentkey){

    switch(currentkey){
        case "a":
            var activeButton = document.querySelector("."+ currentkey);

            activeButton.classList.add('pressed');
        
            setTimeout(function(){
                activeButton.classList.remove('pressed');
            }, 100)
            break;
        case "s":
            var activeButton = document.querySelector("."+ currentkey);

            activeButton.classList.add('pressed');
        
            setTimeout(function(){
                activeButton.classList.remove('pressed');
            }, 100);
            break;

        case "d":
            var activeButton = document.querySelector("."+ currentkey);

            activeButton.classList.add('pressed');
        
            setTimeout(function(){
                activeButton.classList.remove('pressed');
            }, 100)
            break;

        case "f":
            var activeButton = document.querySelector("."+ currentkey);

            activeButton.classList.add('pressed');
        
            setTimeout(function(){
                activeButton.classList.remove('pressed');
            }, 100)
            break;
        case "j":
            var activeButton = document.querySelector("."+ currentkey);

            activeButton.classList.add('pressed');
        
            setTimeout(function(){
                activeButton.classList.remove('pressed');
            }, 100)
            break;

        case "k":
            var activeButton = document.querySelector("."+ currentkey);

            activeButton.classList.add('pressed');
        
            setTimeout(function(){
                activeButton.classList.remove('pressed');
            }, 100)
            break;

        case "l":
            var activeButton = document.querySelector("."+ currentkey);

            activeButton.classList.add('pressed');
        
            setTimeout(function(){
                activeButton.classList.remove('pressed');
            }, 100)
            break;


        default: console.log("no animation for wrong key")
            break;
    }

}