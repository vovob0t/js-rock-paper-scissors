// startGame();

const toolsBtns = document.querySelectorAll(".gameBtns > button");


function toggleToolsBtns() {
    toolsBtns.forEach(btn => {
        console.log(btn.checkVisibility());
        if (btn.checkVisibility()) {

            btn.setAttribute("style", "display:none;")
        } else {
            btn.setAttribute("style", "display:initial;")

        }
    });
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

function testCompAnswers() {
    let numbPosib = [0, 0, 0, 0];
    let tempNumb
    for (i = 0; i < 100; i++) {
        tempNumb = getComputerInput();
        console.log(tempNumb);
        switch (tempNumb) {
            case toolsPull[0]:
                numbPosib[0]++;
                break;
            case toolsPull[1]:
                numbPosib[1]++;
                break;
            case toolsPull[2]:
                numbPosib[2]++;
                break;
            default:
                numbPosib[3]++;
                break
        }
    }
    return numbPosib;
}

function playRound() {
    let userSelection = getUserInput();
    let computerSelection = getComputerInput();
    if (userSelection === computerSelection) {
        return "Draw! You both played - " + computerSelection;
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

function getUserInput() {
    let toolsPoolStr = toolsPull.toString().replaceAll(',', ', ');
    let userTool = prompt("Choose your tool - " + toolsPoolStr);
    if (userTool === null) {
        alert("You cancelled the game!");
    }
    userTool = userTool.toLowerCase();
    while (!(toolsPull.includes(userTool))) {
        userTool = prompt("Your input was incorrect! Please, choose from this tools - " + toolsPoolStr);
        if (userTool === null) {
            alert("You cancelled the game!");
        }
        userTool = userTool.toLowerCase();
    }
    return userTool;
}

function startGame() {
    let roundCount = 0;
    let score = [0, 0];
    let roundResult;

    while (roundCount < 5) {
        roundResult = playRound();
        while (roundResult.includes("Draw")) {
            roundResult = roundResult + "\n" + "Play the round again!";
            alert(roundResult);
            roundResult = playRound();
        }
        alert(roundResult);
        if (roundResult.includes("won")) {
            score[0]++;
        } else {
            score[1]++;
        }
        roundCount++;
    }
    alert("The game is over!\nFinal score: " + `you - ${score[0]} vs ${score[1]} - computer`);
}
