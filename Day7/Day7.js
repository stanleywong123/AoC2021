const fs = require("fs");

const input = fs
    .readFileSync("Day7Input.txt", { encoding: "utf-8" })
    .replace(/[\r\n]/g, "") // remove all \r chars
    .split(",") // split of ,
    .map(x => parseInt(x)); //convert all strings to ints

const testInput = [16, 1, 2, 0, 4, 2, 7, 1, 2, 14]

function part1(totalCrabs) {
    const temp = totalCrabs.sort((a, b) => a - b, 0);
    let horizontalPosition;
    if (temp.length % 2 == 0) {
        horizontalPosition = (temp[temp.length / 2] + temp[(temp.length / 2) - 1]) / 2
    }
    else {
        horizontalPosition = (temp[temp.length / 2])
    }
    const crabs = [];
    totalCrabs.forEach(crab => {
        if (crab >= horizontalPosition) {
            crabs.push(crab - horizontalPosition)
        } else {
            crabs.push(horizontalPosition - crab)
        }
    })

    console.log("Part 1: ", crabs.reduce((a, b) => a + b, 0))
}
part1(input);

function part2(crabPositions) {
    let horizontalPosition = Math.floor(crabPositions.reduce((a, b) => a + b, 0) / crabPositions.length);
    const distances = [];

    crabPositions.forEach(crab => {
        distances.push(Math.abs(horizontalPosition - crab));
    })
    const fuelNeeded = [];
    distances.forEach(distance => {
        fuelNeeded.push(distance * ((distance + 1) / 2));
    })

    console.log("Part 2: ", fuelNeeded.reduce((a, b) => a + b, 0))
}
part2(input);
//115780589
//101571337