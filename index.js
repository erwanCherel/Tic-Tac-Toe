// sur une grille 3 x 3 numérotée :
// 1 2 3
// 4 5 6
// 7 8 9
// il y a 8 combinaisons de victoire : 
// 123, 456, 789, 147, 258, 369, 159, 753


const Gameboard = (() => {
    //store the gameboard as an array inside of a Gameboard object
    let board = [[0, 1, 2], 
                 [3, 4, 5],
                 [6, 7, 8]
                ]
    return board;
})()

// create players objects
const players = (player, pattern) => {
    return { player, pattern }
}
const playerOne = players('player one', 'X')
const playerTwo = players('player two', 'O')

// create & fill the board on the webpage
const renderArray = (() => {
    for(let i = 0; i < Gameboard.length; i++) {
        for (let j = 0; j < Gameboard[i].length; j++) {
            const cell = document.createElement('div');
            cell.classList.add('cell')
            cell.innerHTML = Gameboard[i][j];
            const gameboard = document.getElementById('gameboard');
            gameboard.append(cell)
        }
       
    }
})()

const addMarks = (() => {
    count = 0;
    const cells = document.querySelectorAll('.cell');
    cells.forEach((cell) => {
        cell.addEventListener('click', (e) => {
            if (e.target.classList.contains('cell')) {
                count += 1;
                if (count % 2 === 0) {
                    e.target.innerHTML = "X";
                    e.target.classList.remove("cell");
                } else {
                    e.target.innerHTML = "O";
                    e.target.classList.remove("cell");
                }
            }
        });
    });
})();
