let userscore = 0;
let compscore = 0;

const choices = document.querySelectorAll(".choice");
const msg = document.querySelector("#msg");

const userscorePara =document.querySelector("#user-score");
const compscorePara = document.querySelector("#comp-score");


const gencomputerchoice = () => {
    const options = ["rock","paper","scissors"];
    const random = Math.floor(Math.random() * 3);
    return options[random];
};

const drawGame = () => {
    console.log("Draw game");
    msg.innerText = "Game was Draw.Play Again!";
    msg.style.backgroundColor = "#f1c40f";
};

const showWinner = (choiceId,computerchoice) => {
    if(choiceId){
        userscore++;
        userscorePara.innerText = userscore;
        msg.innerText = `You Win! ${choiceId}  You beats ${computerchoice}`;
        msg.style.backgroundColor = "green";
    } else {
        compscore++;
        compscorePara.innerText = compscore;
        msg.innerText = `You lose! ${computerchoice} beats Your ${choiceId}`;
        msg.style.backgroundColor = "red";
    }
};

const playGame = (choiceId) => {
    console.log("user choice = ", choiceId);
    const computerchoice = gencomputerchoice();
    console.log("Computer choice =", computerchoice);

    if (choiceId === computerchoice) {
        drawGame();
    } else {
        let userWins = true; // Use a new variable for the outcome
        if (choiceId === "rock") {
            userWins = computerchoice === "scissors";
        } else if (choiceId === "paper") {
            userWins = computerchoice === "rock";
        } else if (choiceId === "scissors") {
            userWins = computerchoice === "paper";
        }
        showWinner(userWins, computerchoice);
    }
};



choices.forEach((choice) => {
    choice.addEventListener("click", () => {
        const choiceId = choice.getAttribute("id");
        playGame(choiceId);
    });
});