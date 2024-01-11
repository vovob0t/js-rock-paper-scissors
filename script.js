const toolsPull = ['Rock', 'Paper', 'Scissors'];

function getRandomBetween0and2() {
    let randNumb = Math.floor((Math.random() + 0.1) * 10);
    while (randNumb === 10) {
        randNumb = Math.floor((Math.random() + 0.1) * 10);
    }
    return randNumb%3;
}

function getComputerAnswer() {
    let randNumb = getRandomBetween0and2();
    let compAnswer = toolsPull[randNumb];
    return compAnswer;
}

function testCompAnswers() {
    let numbPosib = [0, 0, 0, 0];
    let tempNumb
    for (i = 0; i < 100; i++) {
        tempNumb = getComputerAnswer();
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

function playGame(userSelection, computerSelection){
    if (userSelection === computerSelection){
        return "Draw, you both played - " + computerSelection;
    } else if (userSelection === toolsPull){
        
    }
}