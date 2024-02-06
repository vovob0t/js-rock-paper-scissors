const toolsBtns = document.querySelectorAll(".gameBtns > button");
const startBtn = document.querySelector("#startBtn");

const gameStatus = document.querySelector("#gameStatus");

const userScore = document.querySelector("#userScore")
const compScore = document.querySelector("#compScore");

toggleToolsBtns();
setToolsBtnsEvents();

startBtn.addEventListener("click", play);

function play() {
    toggleToolsBtns();
    toggleStartBtn();
    resetScore();
    gameStatus.textContent = "To play - press one of the buttons below with the tool name!"
}

function resetScore() {
    userScore.textContent = "0";
    compScore.textContent = "0";
}

function setToolsBtnsEvents() {
    toolsBtns.forEach((btn) => {
        btn.addEventListener("click", (e) => {
            roundRes = playRound(e.target.id);
            addScore(roundRes);
        });
    })
}

function addScore(roundResult) {
    if (roundResult.includes("Draw")) {
        roundResult = roundResult + "<br>" + "Play the round again!";
        gameStatus.innerHTML = (roundResult);

    } else if (roundResult.includes("won")) {
        userScore.textContent = Number.parseInt(userScore.textContent) + 1;
        gameStatus.textContent = (roundResult);
    } else {
        compScore.textContent = Number.parseInt(compScore.textContent) + 1;
        gameStatus.textContent = (roundResult);
    }
    if (userScore.textContent === "5" || compScore.textContent === "5") {
        gameStatus.textContent = "The game is over!";
        if (userScore.textContent === "5") {
            gameStatus.innerHTML += " <b>You won!</b>"
        } else {
            gameStatus.innerHTML += " <b>You lost!</b>"
        }
        toggleToolsBtns();
        toggleStartBtn();
    }
}


function toggleToolsBtns() {
    toolsBtns.forEach((btn) => {
        if (btn.checkVisibility()) {
            btn.style.display = "none";
        } else {
            btn.style.display = "initial";
        }
    });
}

function toggleStartBtn() {
    if (startBtn.checkVisibility()) {
        startBtn.style.display = "none";
    } else {
        startBtn.style.display = "initial";
    }
}

const toolsPull = ['rock', 'paper', 'scissors'];

function getRandomBetween0and2() {
    let randNumb = Math.floor((Math.random() + 0.1) * 10);
    while (randNumb === 10) {
        randNumb = Math.floor((Math.random() + 0.1) * 10);
    }
    return randNumb % 3;
}

function getComputerInput() {
    let randNumb = getRandomBetween0and2();
    let compAnswer = toolsPull[randNumb];
    return compAnswer;
}

function playRound(userSelection) {
    let computerSelection = getComputerInput();
    if (userSelection === computerSelection) {
        return "Draw! You both played - " + "<b>" + computerSelection + "</b>";
    } else if (userSelection === toolsPull[0]) {
        switch (computerSelection) {
            case toolsPull[1]:
                return "You lost! The round was - " + userSelection + " vs " + computerSelection;
                break;
            case toolsPull[2]:
                return "You won! The round was - " + userSelection + " vs " + computerSelection;
                break;
        }
    } else if (userSelection === toolsPull[1]) {
        switch (computerSelection) {
            case toolsPull[0]:
                return "You won! The round was - " + userSelection + " vs " + computerSelection;
                break;
            case toolsPull[2]:
                return "You lost! The round was - " + userSelection + " vs " + computerSelection;
                break;
        }
    } else if (userSelection === toolsPull[2]) {
        switch (computerSelection) {
            case toolsPull[0]:
                return "You lost! The round was - " + userSelection + " vs " + computerSelection;
                break;
            case toolsPull[1]:
                return "You won! The round was - " + userSelection + " vs " + computerSelection;
                break;
        }
    } else {
        return "You answer is invalid! Please, choose between this tools: \n " + toolsPull;
    }
}
