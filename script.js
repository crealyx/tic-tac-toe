//




let gameBoard = document.querySelector('.gameboard')
let boxes = Array.from(document.querySelectorAll('.boxes'))
let play = document.querySelector('.play')
let wrapper = document.querySelector('.wrapper')
let menu = document.querySelector('.menu')
let modeButton = Array.from(document.querySelectorAll('.game-mode'))
let players = document.querySelector('.players')
let pvp = document.querySelector('#pvp')
let pvc = document.querySelector('#pvc')



let playerTurn = 1;


const Players = (name,sign) => {
    return {name, sign};
}

let player1 = Players('p1','X');
let player2 = Players('p2','O');
let boxesIds = boxes.map(sign => sign.id);
let gameOver = false;
let gameMode = '';







const game = (() => {
    let board = [9];
    let lastSign = '';
    let winnerArr = [];
    return{
        winnerArr,
        lastSign,
        board,
        isDiagonal,
        isRow,
        isColumn,
        colorResult,
        disableGame,
        checkWinner,

    }

    function isDiagonal(board) {
        let diagonalArr1 = []
        let diagonalArr2 = []
        diagonalArr1.push(board[0],board[4],board[8]);
        diagonalArr2.push(board[2],board[4],board[6]);
    
    
        if(diagonalArr1.includes(undefined) == false && diagonalArr1.length === 3 && diagonalArr1.every(val => val === diagonalArr1[0])){
            game.winnerArr = [0,4,8];
            return true;
        }
    
        else if(diagonalArr2.includes(undefined) == false && diagonalArr2.length === 3 && diagonalArr2.every(val2 => val2 === diagonalArr2[0])){
            game.winnerArr = [2,4,6];
            return true;
        }
        return false;
    }
    
    
    function isRow(board) {
        let rowArr1 = []
        let rowArr2 = []
        let rowArr3 = []
    
        rowArr1.push(board[0],board[1],board[2]);
        rowArr2.push(board[3],board[4],board[5]);
        rowArr3.push(board[6],board[7],board[8]);
    
        if(rowArr1.includes(undefined) == false && rowArr1.length === 3 && rowArr1.every(val => val === rowArr1[0])){
            game.winnerArr = [0,1,2];
            return true;
        }
    
        else if(rowArr2.includes(undefined) == false && rowArr2.length === 3 && rowArr2.every(val2 => val2 === rowArr2[0])){
            game.winnerArr = [3,4,5];
            return true;
        }
    
        else if(rowArr3.includes(undefined) == false && rowArr3.length === 3 && rowArr3.every(val2 => val2 === rowArr3[0])){
            game.winnerArr = [6,7,8];
            return true;
        }
    
        return false;
    }
    
    function isColumn(board) {
        let columnArr1 = []
        let columnArr2 = []
        let columnArr3 = []
    
        columnArr1.push(board[0],board[3],board[6]);
        columnArr2.push(board[1],board[4],board[7]);
        columnArr3.push(board[2],board[5],board[8]);
    
        if(columnArr1.includes(undefined) == false && columnArr1.length === 3 && columnArr1.every(val => val === columnArr1[0])){
            game.winnerArr = [0,3,6];
            return true;
        }
    
        else if(columnArr2.includes(undefined) == false && columnArr2.length === 3 && columnArr2.every(val2 => val2 === columnArr2[0])){
            game.winnerArr = [1,4,7];
            return true;
        }
    
        else if(columnArr3.includes(undefined) == false && columnArr3.length === 3 && columnArr3.every(val2 => val2 === columnArr3[0])){
            game.winnerArr = [2,5,8];
            return true;
        }
    
        return false;
    }
    function checkWinner() {
        // Diagonal win
        if(game.isDiagonal(game.board)){
            if(game.lastSign === 'X'){
                console.log('Player 1 WON');
                disableGame();
                colorResult();
            }
            else if(game.lastSign === 'O'){
                console.log('Player 2 WON');
                disableGame();
                colorResult();
            }
        }
        // Row win
        else if(game.isRow(game.board)){
            if(game.lastSign === 'X'){
                console.log('Player 1 WON');
                disableGame();
                colorResult();
    
            }
            else if(game.lastSign === 'O'){
                console.log('Player 2 WON');
                disableGame();
                colorResult();
            }
        }
        // Column win
        else if(game.isColumn(game.board)){
            if(game.lastSign === 'X'){
                console.log('Player 1 WON');
                disableGame();
                colorResult();
            }
            else if(game.lastSign === 'O'){
                console.log('Player 2 WON');
                disableGame();
                colorResult();
            }
        }
        // Tie
        else if(game.board.length === 9 && game.board.includes(undefined) == false){
            boxes.forEach(element => {
                element.style.backgroundColor = 'black';
            });
        }
    }
    
    function disableGame() {
        game.board.length = 0;
        lastSign = '';
        gameOver = true;
    }
    
    function colorResult() {
        game.winnerArr.forEach(element => {
            boxes[element].style.backgroundColor = 'rgb(0, 183, 3)';
        });
    }
})();

const displayController = (() => {
    pvp.addEventListener('click', () => {
        gameMode = 'pvp';
    })
    pvc.addEventListener('click', () => {
        gameMode = 'pvc';
    })

    play.addEventListener('click', () => {
        wrapper.style.display = 'block';
        menu.style.marginTop = '50px';
        play.style.display = 'none';
        modeButton.forEach((item) => {
            item.style.display = 'none';
        })
        players.style.display = 'flex';

        if(gameMode === 'pvp'){
            gameBoard.addEventListener('click',playerVsPlayer);
        }
        else if(gameMode === 'pvc'){
            gameBoard.addEventListener('click',playerVsComputer);
        }
    })

    

    function playerVsPlayer(ev) {
        if(ev.target.classList.contains('boxes') && boxesIds.includes(ev.target.id)){
            if(playerTurn === 1 && ev.target.textContent === '' && gameOver === false){
                ev.target.textContent = player1.sign;
                ev.target.style.color = 'white';
                game.board[ev.target.id] = player1.sign
                game.lastSign = player1.sign;
                playerTurn++
            }
            else if(playerTurn === 2 && ev.target.textContent === '' && gameOver === false){
                ev.target.textContent = player2.sign;
                ev.target.style.color = 'rgb(255, 0, 0)';
                game.board[ev.target.id] = player2.sign
                game.lastSign = player2.sign;
                playerTurn--
            }
        }
        game.checkWinner(ev);
    }

    function playerVsComputer() {
        if(ev.target.classList.contains('boxes') && boxesIds.includes(ev.target.id)){
            if(playerTurn === 1 && ev.target.textContent === '' && gameOver === false){
                ev.target.textContent = player1.sign;
                ev.target.style.color = 'white';
                game.board[ev.target.id] = player1.sign
                game.lastSign = player1.sign;
                playerTurn++
            }
            else if(playerTurn === 2 && ev.target.textContent === '' && gameOver === false){
                ev.target.textContent = player2.sign;
                ev.target.style.color = 'rgb(255, 0, 0)';
                game.board[ev.target.id] = player2.sign
                game.lastSign = player2.sign;
                playerTurn--
            }
        }
        game.checkWinner(ev);
    }
})();

