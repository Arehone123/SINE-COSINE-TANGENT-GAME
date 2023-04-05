const quadrants = ["I", "II", "III", "IV"];
const trigRatios = ["sine", "cosine", "tangent"];
let playerTrigRatio = "";
let computerQuadrant = "";
let computerTrigRatio = "";
let winner = "";
let explanation = "";

function playGame(choice)
{
    playerTrigRatio = choice;
    computerQuadrant = quadrants[Math.floor(Math.random() * quadrants.length)];
    computerTrigRatio = trigRatios[Math.floor(Math.random() * trigRatios.length)];

    // Animate the hand
    const hand = document.getElementById("hand");
    hand.style.transform = "rotate(360deg)";
    setTimeout(() =>
    {
        hand.style.transform = "rotate(0deg)";
    }, 500);

    setTimeout(() =>
    {
        checkWinner();
    }, 1000);
}

function checkWinner()
{
    if ((playerTrigRatio === "sine" && (computerQuadrant === "I" || computerQuadrant === "II")) ||
        (playerTrigRatio === "cosine" && (computerQuadrant === "I" || computerQuadrant === "IV")) ||
        (playerTrigRatio === "tangent" && (computerQuadrant === "II" || computerQuadrant === "IV")))
    {
        winner = "Player";
        explanation = `In Quadrant ${computerQuadrant}, ${playerTrigRatio} is positive, while ${computerTrigRatio} is negative. Therefore, Player wins!`;
    } else if ((computerTrigRatio === "sine" && (computerQuadrant === "I" || computerQuadrant === "II")) ||
        (computerTrigRatio === "cosine" && (computerQuadrant === "I" || computerQuadrant === "IV")) ||
        (computerTrigRatio === "tangent" && (computerQuadrant === "II" || computerQuadrant === "IV")))
    {
        winner = "Computer";
        explanation = `In Quadrant ${computerQuadrant}, ${playerTrigRatio} is negative, while ${computerTrigRatio} is positive. Therefore, Computer wins!`;
    } else {
        winner = "Tie";
        explanation = `In Quadrant ${computerQuadrant}, both ${playerTrigRatio} and ${computerTrigRatio} are either positive or negative. It's a Tie!`;
    }

    const winnerElement = document.getElementById("winner");
    const explanationElement = document.getElementById("explanation");
    winnerElement.textContent = `Winner: ${winner}`;
    explanationElement.textContent = explanation;
}
