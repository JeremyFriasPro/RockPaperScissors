// general game variables
let userScore = 0;
let pcScore = 0;
const gameChoices = ['Rock', 'Paper', 'Scissors'];

// select 'intro section' variables
const introSection = document.getElementById('intro');
const startButton = document.getElementById('start');
const gameTitle = document.getElementById('game-title');

// select 'gameplay section' variables
const gameplaySection = document.getElementById('gameplay');
const rockBox = document.getElementById('Rock');
const paperBox = document.getElementById('Paper');
const scissorsBox = document.getElementById('Scissors');
const boxes = document.querySelectorAll('.box');

// select '' variables
const statsSection = document.getElementById('stats');
const userScoreDisplay = document.getElementById('user-score');
const pcScoreDisplay = document.getElementById('pc-score');
const scoreContext = document.getElementById('score-context');

// give boxes their own images
const svgImagePaths = ['SVG/Asset 1.svg', 'SVG/Asset 2.svg', 'SVG/Asset 3.svg'];

const serveSvg = (svgPath, element) => {
    const svgImage = document.createElement('img');
    svgImage.style.width = '40px';
    svgImage.src = svgPath;
    element.append(svgImage);
}

serveSvg(svgImagePaths[0], rockBox);
serveSvg(svgImagePaths[1], paperBox);
serveSvg(svgImagePaths[2], scissorsBox);

startButton.addEventListener('click', () => {
    introSection.remove();
    gameplaySection.style.display = 'flex';
    statsSection.style.display = 'block';


    function generatePcPick() {
        let pick = gameChoices[Math.floor(Math.random() * gameChoices.length)];
        return pick;
    }

    function updateScore() {
        userScoreDisplay.innerText = userScore;
        pcScoreDisplay.innerText = pcScore;
    }

    rockBox.addEventListener('click', (e) => {
        console.log(e.target);
        let computerPick = generatePcPick();
        if(computerPick == 'Rock') {
            updateScore();
        } else if(computerPick == 'Paper') {
            pcScore++;
            updateScore();
        } else if(computerPick == 'Scissors') {
            userScore++;
            updateScore();
        }
        scoreContext.innerText = `You picked Rock : Pc picked ${computerPick}`;
        updateScore();
    })

    paperBox.addEventListener('click', (e) => {
        console.log(e.target);
        let computerPick = generatePcPick();
        if(computerPick == 'Paper') {
            updateScore();
        } else if(computerPick == 'Scissor') {
            pcScore++;
            updateScore();
        } else if(computerPick == 'Rock') {
            userScore++;
            updateScore();
        }
        scoreContext.innerText = `You picked Paper : Pc picked ${computerPick}`;
        updateScore();
    })

    scissorsBox.addEventListener('click', (e) => {
        console.log(e.target);
        let computerPick = generatePcPick();
        if(computerPick == 'Scissors') {
            updateScore();
        } else if(computerPick == 'Rock') {
            pcScore++;
            updateScore();
        } else if(computerPick == 'Paper') {
            userScore++;
            updateScore();
        }
        scoreContext.innerText = `You picked Scissors : Pc picked ${computerPick}`;
        updateScore();
    })
})

startButton.addEventListener('mouseover', (e) => {
    gameTitle.style.color = 'var(--clr-2)';
})

startButton.addEventListener('mouseleave', (e) => {
    gameTitle.style.color = 'var(--clr-1)';
})