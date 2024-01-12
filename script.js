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

function playRound(userSelection, computerSelection) {
    userSelection = userSelection.toLowerCase();
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
            case toolsPull[2]:
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
    userTool = userTool.toLowerCase();
    while (!(toolsPull.includes(userTool))) {
        userTool = prompt("Your input was incorrect! Please, choose from this tools - " + toolsPoolStr);
        userTool = userTool.toLowerCase();
    }
    return userTool;
}

function game() {
    let roundCount = 0;
    let score = [0, 0];
    let userTool = getUserInput();
    let compTool = getComputerInput();
    console.log(playRound(userTool, compTool));
}

game();