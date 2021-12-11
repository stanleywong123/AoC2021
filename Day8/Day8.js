const fs = require("fs");

const input = fs
    .readFileSync("Day8Input.txt", { encoding: "utf-8" })
    .split("\r\n")
    .map(x => x.split(" | "))


function part1() {
    let oneFourSevenEightFound = 0;

    input.forEach(number => {
        let outputs = number[1].split(" ");
        outputs.forEach(output => {
            switch (output.length) {
                case 2:
                    oneFourSevenEightFound++;
                    break;
                case 3:
                    oneFourSevenEightFound++;
                    break;
                case 4:
                    oneFourSevenEightFound++;
                    break;
                case 7:
                    oneFourSevenEightFound++
                    break;
            }
        })
    })
    console.log("Part 1: ", oneFourSevenEightFound);
}
console.log();
//part1();

function part2() {
    let displayedNumbers = [];
    let inputs = [];

    input.forEach(number => {
        inputs.push(number[0].split(" ").map((string) => {
            const letters = [...string];
            letters.sort()
            return letters.join``
        }))
        displayedNumbers.push(number[1].split(" ").map((string) => {
            const letters = [...string];
            letters.sort()
            return letters.join``
        }))
    })
    //console.log(inputs)
    //console.log(displayedNumbers)
    let displayedNumbersAsInt = [];

    let zero = "";
    let one = "";
    let two = "";
    let three = "";
    let four = "";
    let five = "";
    let six = "";
    let seven = "";
    let eight = "";
    let nine = "";


    for (let i = 0; i < inputs.length; i++) {
        inputs[i].forEach(inputNumber => {
            switch (inputNumber.length) {
                case 2:
                    one = inputNumber;
                    break;
                case 3:
                    seven = inputNumber;
                    break;
                case 4:
                    four = inputNumber;
                    break;
                case 7:
                    eight = inputNumber;
                    break;
            }

        })

        inputs[i].forEach(inputNumber => {
            let tempFive = four;
            for (const char of one) {
                tempFive = tempFive.replace(char, "");
            }
            let tempTwo = eight;
            for (const char of four) {
                tempTwo = tempTwo.replace(char, "");
            }
            switch (inputNumber.length) {
                case 5:
                    if (seven.split("").every((char) => {
                        let temp = inputNumber
                        return temp.indexOf(char) > -1;
                    })) {
                        three = inputNumber;
                    } else if (tempFive.split("").every((char) => {
                        let temp = inputNumber;
                        return temp.indexOf(char) > -1;
                    })) {
                        five = inputNumber;
                    } else if (tempTwo.split("").every((char) => {
                        let temp = inputNumber;
                        return temp.indexOf(char) > -1;
                    })) {
                        two = inputNumber;
                    }
                    break;
                case 6:

                    if (four.split("").every((char) => {
                        let temp = inputNumber;
                        return temp.indexOf(char) > -1;
                    })) {
                        nine = inputNumber;
                    }

                    else if (seven.split("").every((char) => {
                        let temp = inputNumber;
                        return temp.indexOf(char) > -1;
                    })) {
                        zero = inputNumber;
                    }
                    else {
                        six = inputNumber;
                    }
                    /*else if (eight.length != 0) {
                        let temp = eight;
                        for (const char of one) {
                            temp = temp.replace(char, "");
                        } if (temp.split("").every((char) => {
                            let temp = inputNumber;
                            return temp.indexOf(char) > -1;
                        })) {
                            six = inputNumber;
                        }
                    }*/
                    break;

            }
        })
        console.log("line", i, "0", zero, "1", one, "2", two, "3", three,
            "4", four, "5", five, "6", six, "7", seven, "8", eight, "9", nine)

        let displayed = "";
        displayedNumbers[i].forEach(number => {
            switch (number.length) {
                case 2:
                    displayed += "1";
                    break;
                case 3:
                    displayed += "7";
                    break;
                case 4:
                    displayed += "4";
                    break;
                case 5:
                    if (three.split("").every((char) => {
                        return number.indexOf(char) > -1;
                    })) {
                        displayed += "3";
                    }
                    else if (two.split("").every((char) => {
                        return number.indexOf(char) > -1;
                    })) {
                        displayed += "2";
                    }
                    else if (five.split("").every((char) => {
                        return number.indexOf(char) > -1;
                    })) {
                        displayed += "5";
                    }
                    break;
                case 6:
                    if (nine.split("").every((char) => {
                        return number.indexOf(char) > -1;
                    })) {
                        displayed += "9";
                    }
                    else if (zero.split("").every((char) => {
                        return number.indexOf(char) > -1;
                    })) {
                        displayed += "0";
                    }
                    else if (six.split("").every((char) => {
                        return number.indexOf(char) > -1;
                    })) {
                        displayed += "6";
                    }
                    break;
                case 7:
                    displayed += "8";
                    break;
            }
        })

        displayedNumbersAsInt.push(parseInt(displayed))
    }
    console.log("Part 2: ", displayedNumbersAsInt);
    console.log("Part 2: ", displayedNumbersAsInt.reduce((a, b) => a + b, 0));
    console.log("four digit numbers: ", displayedNumbersAsInt.map((x) => {
        if (x.toString().length == 4) {
            return 1;
        } else { return 0; }
    }).reduce((a, b) => a + b, 0));
}

part2();