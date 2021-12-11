const fs = require("fs");
const { listeners } = require("process");

const input = fs
    .readFileSync("Day9Input.txt", { encoding: "utf-8" })
    .split("\r\n")
    .map((x) => x.split("").map(y => parseInt(y)))



function part1() {
    let lowPoints = 0;
    for (let i = 0; i < input.length; i++) {
        const row = input[i];
        for (let j = 0; j < row.length; j++) {
            const current = row[j];

            if (
                (!(i - 1 >= 0) || current < input[i - 1][j]) &&
                (!(i + 1 < input.length) || current < input[i + 1][j]) &&
                (!(j - 1 >= 0) || current < input[i][j - 1]) &&
                (!(j + 1 < row.length) || current < input[i][j + 1])
            ) {
                lowPoints += parseInt(current) + 1;
            }
        }
    }
    console.log("Part 1: ", lowPoints);
}

part1();