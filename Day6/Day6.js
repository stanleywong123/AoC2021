const fs = require("fs");

const input = fs
    .readFileSync("Day6Input.txt", { encoding: "utf-8" })
    .replace(/[\r\n]/g, "") // remove all \r chars
    .split(",") // split of ,
    .map(x => parseInt(x)); //convert all strings to ints


const testInput = [3, 4, 3, 1, 2];

function countLanternFish(fishTimers, days) {
    //instead of putting all fish in an array put how many fish have how many days left

    const queue = Array(9).fill(0);
    fishTimers.forEach(fish => {
        queue[fish]++;
    });


    for (let i = 0; i < days; i++) {
        //if 60 fish have 0 days left (first item in the array) then 60 fish will be created (and put on day 8) and 60 fish will be added to day 6        
        const currentFishes = queue.shift();
        queue.push(currentFishes);
        queue[6] += currentFishes;
    }
    return (queue.reduce((a, b) => a + b, 0))
}

//console.log(testInput)
console.log(countLanternFish(input, 256))