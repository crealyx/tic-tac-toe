let game = document.querySelector('.gameboard')
let signs = Array.from(document.querySelectorAll('.boxes'))

let turn = 1;


const Players = (name,sign) => {
    return {name, sign};
}

let player1 = Players('p1','X');
let player2 = Players('p2','O');


const gameBoard = {
    board : [],

};

let signsIds = signs.map(sign => sign.id);
console.log(signsIds);
game.addEventListener('click', ev => {
    if(ev.target.classList.contains('boxes') && signsIds.includes(ev.target.id)){
        if(turn === 1){
            ev.target.textContent = 'X';
            gameBoard.board.push('X')
            turn++
        }
        else{
            ev.target.textContent = 'O';
            gameBoard.board.push('O')
            turn--
        }
    }
})







