let signs = Array.from(document.querySelectorAll('.boxes')).textContent



console.log(signs);




let gameboard = {
    board : [],

};

function Player(name,choice) {
    this.name = name;
    this.choice = choice;

}


