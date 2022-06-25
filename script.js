
const buttons = document.querySelectorAll('.btnSelect');
const scoreEl = document.getElementById('score');
const main= document.getElementById('main');
const container= document.getElementById('container');
const selection= document.getElementById('selection');
const rest = document.getElementById('reset');
const userSelect = document.getElementById("user-selection");
const compSelect = document.getElementById("comp-selection");
const result = document.getElementById('result');
const polices= document.getElementById('polices');
const btnClose= document.getElementById('close')
const btnOpen= document.getElementById('open');

const choices = ['paper','rock','scissors'];

let score =0;
let userChoice = undefined;

buttons.forEach((button) => {
button.addEventListener('click', () =>{
userChoice = button.getAttribute('data-choice');

checkWinner();
});
});

rest.addEventListener('click',() => {
         main.style.display ='flex';
         selection.style.display='none';
        
});

btnOpen.addEventListener('click',() => {
    polices.style.display ='flex';
    main.style.display = 'none'
    
});
btnClose.addEventListener('click',() => {
    polices.style.display ='none';
    main.style.display = 'flex'
    
});

function checkWinner() {
const computerChoice = makeRandomChoice();

    updateSelection(userSelect, userChoice);
    updateSelection(compSelect, computerChoice);

if(userChoice === computerChoice ) {
//draw
    result.innerHTML = 'draw';
}else if(
	(userChoice ==='paper' && computerChoice === 'rock')
	||
	(userChoice ==='rock' && computerChoice === 'scissors')
	||
	(userChoice ==='scissors' && computerChoice === 'paper')
){
	//user won
	updateScore();
    result.innerHTML = 'win'
   
            }else{
                //user lost
            
                result.innerHTML = 'lost'
            }  

            main.style.display ='none';
            selection.style.display='flex';

}
function updateScore(value){
    score +=1;
    scoreEl.innerText =score; 
}
function makeRandomChoice(){
    return choices[Math.floor(Math.random() * choices.length)];
}

function updateSelection(elementSelect, choices){
    
    elementSelect.classList.remove('btn-paper');
    elementSelect.classList.remove('btn-rock');
    elementSelect.classList.remove('btn-scissors');

    const img = elementSelect.querySelector('img');
    elementSelect.classList.add(`btn-${choices}`);
    img.src = `./images/icon-${choices}.svg`;
    img.alt= choices;
}