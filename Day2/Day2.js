const fs = require("fs");
const input = fs.readFileSync("Day2Input.txt").toString().split("\n");
let horizontalPos = 0;
let depth = 0;
let aim = 0;

let checkDirection = (direction, distance) => {
    switch (direction) {
        case "f":
            horizontalPos += distance;
            break;
        case "d":
            depth += distance;
            break;
        case "u":
            depth -= distance;
            break;
    }
}

let part1 = () => {
    horizontalPos = 0;
    depth = 0;
    input.forEach(instruction => {
        checkDirection(instruction.substr(0, 1), parseInt(instruction.substr(instruction.length - 2, 1)))
    })
    console.log("Part 1 horizontal position: " + horizontalPos);
    console.log("Depth: " + depth);
    console.log("Multiplied: " + horizontalPos * depth);
}
part1();

let checkAimDirection = (direction, distance) => {
    switch (direction) {
        case "f":
            horizontalPos += distance
            depth = depth + (aim*distance);
            break;
        case "d":
            aim += distance
            break;
        case "u":
            aim -= distance
            break;
    }
}

let part2 = () => {
    horizontalPos = 0;
    depth = 0;
    aim = 0
    input.forEach(instruction => {
        checkAimDirection(instruction.substr(0, 1), parseInt(instruction.substr(instruction.length - 2, 1)))
    })
    console.log("Part 1 horizontal position: " + horizontalPos);
    console.log("Aim: " + aim);
    console.log("Depth: " + depth);
    console.log("Multiplied: " + horizontalPos * depth);
}

part2();