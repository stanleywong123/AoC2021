var fs = require("fs");
var input = fs.readFileSync("Day1Input.txt").toString().split("\n");

var increase = 0;
var checkIncrease = (prev, current) => { if (current > prev) { increase++ } }

var part1 = () =>{
    for(var i = 1;i<input.length;i++){
        checkIncrease(i-1,i);
    }
    console.log(increase);
}

part1();