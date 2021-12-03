const fs = require("fs");
const input = fs.readFileSync("Day3Input.txt").toString().split("\n");

let gammaRate = ""; //most common
let epsilonRate = ""; //least common
let powerConsumption;
let temp;
let zeros;
let ones;

let part1 = () => {
    for (let i = 0; i < input[0].length - 1; i++) {
        temp = "";
        zeros = 0;
        ones = 0;
        input.forEach(sequence => {
            temp += sequence.substr(i, 1);
        })
        zeros = (temp.match(/0/g) || []).length;
        ones = (temp.match(/1/g) || []).length;

        if (zeros > ones) {
            gammaRate += "0";
            epsilonRate += "1";
        } else {
            gammaRate += "1";
            epsilonRate += "0";
        }
    }
    powerConsumption = parseInt(gammaRate, 2) * parseInt(epsilonRate, 2);
    console.log(parseInt(gammaRate, 2));
    console.log(parseInt(epsilonRate, 2));
    console.log(powerConsumption);
}

part1();

let lifeSupportRating;
let generator;
let scrubber;

let getOxygenCo2Rating = (array, gas) => {
    let gasArray = [...array];
    let i = 0;
    while (gasArray.length > 1) {
        const mostCommon = getMostCommonValue(gasArray, i);
        const checkValue = gas === 'oxygen' ? mostCommon : String(1 - mostCommon);
        gasArray = gasArray.filter(string => string[i] === checkValue);
        i++;
    }
    return gasArray[0];
}
let getMostCommonValue = (array, digit) => {
    const ones = array.reduce((accu, string) => string[digit] === '1' ? accu + 1 : accu, 0);
    if (ones > array.length / 2) {
        return '1';
    }
    if (ones < array.length / 2) {
        return '0';
    }
    return '1';
}
let part2 = () => {
    const oxygenRating = getOxygenCo2Rating(input, 'oxygen');
    const co2Rating = getOxygenCo2Rating(input, 'co2');
    const oxygenDecimal = parseInt(oxygenRating, 2);
    const co2Decimal = parseInt(co2Rating, 2);
    console.log('Life support rating of the submarine:', oxygenDecimal * co2Decimal);
}

part2();
