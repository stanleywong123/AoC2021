var fs = require("fs");
var input = fs.readFileSync("Day1Input.txt").toString().split("\n");

var increase = 0;
var checkIncrease = (prev, current) => {
    if (parseInt(current) > parseInt(prev)) {
        increase++
    }
}

var part1 = () => {
    for (var i = 1; i < input.length; i++) {
        checkIncrease(input[i - 1], input[i]);
    }
    console.log("Part 1 - number of increases is: " + increase);
}

part1(input);

var slidingWindow = [];

for (var i = 2; i < input.length; i++) {

    var temp = parseInt(input[i]) + parseInt(input[i - 1]) + parseInt(input[i - 2]);
    slidingWindow[i] = temp;


}

var part2 = () => {
    increase = 0;
    for (var i = 1; i < input.length; i++) {
        checkIncrease(slidingWindow[i - 1], slidingWindow[i]);
    }
    console.log("Part 2 - number of increases with sliding window is: " + increase);
}

part2();