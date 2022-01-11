function computerPlay(){
    let ranInt = parseInt(Math.random()*3);
    console.log(ranInt);

    if (ranInt === 0){
        return 'Rock';
    } else if (ranInt == 1) {
        return 'Paper';
    } else {
        return 'Scissor';
    }
}

computerPlay();

let a = computerPlay();
console.log(a);
