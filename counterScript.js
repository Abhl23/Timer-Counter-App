var button=document.getElementById('counter-button');

var currentDivs=document.getElementsByClassName('current');
var nextDivs=document.getElementsByClassName('next');

var currentCounterValue, finalCounterValue;

function increaseCounter(currentDivs, nextDivs, ind){
    if(ind>4)           //Should return if the ind of div > 4 because there are only 5 counter divs
        return;
    let currentDiv=currentDivs[ind];
    let nextDiv=nextDivs[ind];
    if(currentDiv.innerHTML==9){            //Checks if the currentDiv value is equal to 9
        nextDiv.innerHTML='0';                //If yes sets the value of nextDiv to 0
        increaseCounter(currentDivs, nextDivs, ind+1);              // Calls increaseCounter on the next currentDiv
        currentCounterValue--;              //Because the currentCounterValue will be increased by 1 in the previous function call step
    }
    nextDiv.classList.add('slide-up');          //Performs the slide-up on the nextDiv
    currentCounterValue++;
    setTimeout(function(){
        currentDiv.innerHTML=nextDiv.innerHTML;             //Updates the currentDiv value
        nextDiv.classList.remove('slide-up');               //Remove the slide-up class from the nextDiv
        nextDiv.innerHTML=parseInt(nextDiv.innerHTML)+1;        //Updates the nextDiv value
    }, 500);
}

function counterStart(currentDivs, nextDivs){
    if(finalCounterValue==0)
        return;
    let intervalId=setInterval(function(){
        if(currentCounterValue==finalCounterValue){             //Checks if the counter has reached its final value
            clearInterval(intervalId);
            return;
        }
        increaseCounter(currentDivs, nextDivs, 0);              // Calls the increaseCounter function with the leftmost div index
    }, 1000);
}

button.addEventListener('click', function(){
    currentCounterValue=0;                              //Resets the counter
    finalCounterValue=document.getElementById('counter-input').value;       //Gets the counter target value
    for(let div of currentDivs){        //Sets every currentDiv with value 0
        div.innerHTML='0';
    }
    for(let div of nextDivs){           //Sets every nextDiv with value 1
        div.innerHTML='1';
    }
    counterStart(currentDivs, nextDivs);
});





// var button=document.getElementById('counter-button');

// var counterCurrentValue;
// var currentDiv=document.getElementById('current');
// var nextDiv=document.getElementById('next');

// function removeClass(){
//     setTimeout(function(){
//         currentDiv.innerText=counterCurrentValue;
//         nextDiv.classList.remove('slide-up');
//         counterCurrentValue++;
//         nextDiv.innerText=counterCurrentValue;
//     }, 500);
// }

// function counterStart(){
//     let counterFinalValue=document.getElementById('counter-input').value;
//     if(counterFinalValue==0)
//         return;
//     let intervalId=setInterval(function(){
//         nextDiv.classList.add('slide-up');
//         removeClass();
//         if(counterCurrentValue==counterFinalValue){   // == used cause the last removeClass function call will execute after 500ms of clearInterval
//             clearInterval(intervalId);
//             return;
//         }
//     }, 1000);
// }

// button.addEventListener('click', function(){
//     counterCurrentValue=1;              //Resets the counter to start from 0
//     currentDiv.innerText='0';           // everytime the Start Counter button
//     nextDiv.innerText='1';              // is clicked.
//     counterStart();
// });