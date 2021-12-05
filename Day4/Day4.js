const fs = require("fs");
const input = fs.readFileSync("Day4Input.txt").toString().split("\n");


let drawnNumbers = input[0].split(",");
let rawBoards = input.splice(2).filter((a) => a);
let boardSeperatorIndex = Math.ceil(rawBoards.length / 5)
let groupedBoards = [,];

for (let i = 0; i < boardSeperatorIndex; i++) {
    groupedBoards[0, i] = rawBoards.splice(-5);
}
let counter = 0;
let drawn;
let board;
let row;

let checkBoards = (numbers) => {
    numbers.forEach(number => {
        console.log(number)
        groupedBoards.forEach(board => {
            
            board.forEach(row => {
                if(row.toString().includes(number)){
                    //console.log("found it")
                }
            })
        })
    })
}
let part1 = () => {
    //console.log(drawnNumbers.length);
    for (let i = 5; i <= drawnNumbers.length; i++) {
        checkBoards(drawnNumbers.slice(0, i))
        
    }
}



part1()
//console.log(drawnNumbers);
//console.log(groupedBoards[0,1][0])