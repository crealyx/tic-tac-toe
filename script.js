let game = document.querySelector('.gameboard')
let signs = Array.from(document.querySelectorAll('.boxes'))




game.addEventListener('click', ev => {
    if(ev.target.classList.contains('boxes')){
        ev.target.textContent = 'X';
        gameboard.board.push('x')
        console.log(gameboard.board);
    }
})

let gameboard = {
    board : [],

};




function Player(name,choice) {
    this.name = name;
    this.choice = choice;

}


