// TO DO: 
// - ajouter un input pour ajouter son nom;
// - ajouter un bouton pour restart la partie;
// - améliorer le resultDisplay;
// 


const Gameboard = ["", "", "", "", "", "", "", "", ""];

// create players objects
const players = (player, pattern) => {
    return { player, pattern }
}
const playerOne = players('player one', 'X')
const playerTwo = players('player two', 'O')

const addMarks = (() => {
    
    // create the board, allow id's and classes to each cell and fill the gameboard
    const gameboard = document.getElementById('gameboard');
    for (let i = 0; i < Gameboard.length; i++) {
        const cell = document.createElement('div');
        cell.className = "cell";
        cell.id = i;
        gameboard.append(cell)
    }

    let turn = 0;
    const cells = document.querySelectorAll('.cell');
    cells.forEach((cell) => {
        cell.addEventListener('click', (e) => {
            if (e.target.className === "cell") {
                turn += 1;
                if (turn % 2 === 1) {
                    Gameboard[e.target.id] = playerOne.pattern;
                    e.target.innerHTML = Gameboard[e.target.id];
                    e.target.className = "clicked";
                    checkWinOrTie();
                } else {
                    Gameboard[e.target.id] = playerTwo.pattern;
                    e.target.innerHTML = Gameboard[e.target.id];
                    e.target.className = "clicked";
                    checkWinOrTie()
                }
            }
        });
    });

    const playAgain = (() => {
        document.getElementById('cleanGrid').addEventListener('click', () => {
            turn = 0;
            document.getElementById('resultDisplay').innerText = "";
            for(let i = 0; i < Gameboard.length; i++) {
                Gameboard[i] = "";
                const clicked = document.querySelectorAll('.clicked');
                clicked.forEach((click) => {
                    click.innerHTML = "";
                    click.className = "cell";
                })
            }
        })
    })()
    
})();

const winningCombos = [
    [0, 1, 2], [3, 4, 5], [6, 7, 8], // horizontal
    [0, 3, 6], [1, 4, 7], [2, 5, 8], // vertical
    [0, 4, 8], [2, 4, 6] // diagonal
  ];
  
  const checkWinOrTie = () => {
    const resultDisplay = document.getElementById('resultDisplay')
    for (let combo of winningCombos) {
      const [a, b, c] = combo;
      if (Gameboard[a] && (Gameboard[a] === Gameboard[b]) && (Gameboard[a] === Gameboard[c])) {
        if(Gameboard[a] === playerOne.pattern) {
            resultDisplay.innerText = "Player one wins!"
        } else {
            resultDisplay.innerText = "Player two wins!"
        }
        const cells = document.querySelectorAll('.cell');
            cells.forEach((cell) => {cell.className = "clicked"})
      }
    }
    if (Gameboard.every(cell => cell)) {
        resultDisplay.innerText = "It's a tie!"
    }
  };