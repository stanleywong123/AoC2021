const { SSL_OP_NO_SESSION_RESUMPTION_ON_RENEGOTIATION } = require("constants");
const fs = require("fs");
const { createDeflate } = require("zlib");

const input = fs
    .readFileSync("Day4Input.txt", { encoding: "utf-8" })
    .split("\n\r")
    .filter((x) => Boolean(x))
    .map((x) =>
        x
            .replace(/[\n ,]+/g, " ")
            .replace(/\r/g, "")
            .trim()
            .split(" ")
            .map((y) => parseInt(y))

    );

let [drawnNumbers, ...cards] = input; //put first element as numbers, second element of cards. head of array as numbers, the rest (...) as cards. called the 'spread' indicator of ES6

class Card {
    constructor(numbers) {
        this.numbers = numbers;
        this.cardSize = 5;
        this.numberToPosition = new Map()
        for (let i = 0; i < this.numbers.length; i++) {
            const n = this.numbers[i]
            this.numberToPosition.set(n, {
                row: Math.floor(i / this.cardSize),
                column: i % this.cardSize
            })
        }
        this.rows = Array(5).fill(0)
        this.columns = Array(5).fill(0)
        this.isComplete = false;
        this.markedNumbers = new Set();
    }

    addMarkedNumber(number) {
        const position = this.numberToPosition.get(number);
        if (!position) {
            return;
        }
        this.rows[position.row]++;
        this.columns[position.column]++;
        if (this.rows[position.row] === this.cardSize
            || this.columns[position.column] === this.cardSize) {
            this.isComplete = true;
        }
        this.markedNumbers.add(number);
    }

    showMap() {
        for (const i of this.numberToPosition) {
            console.log(i, this.numberToPosition.get(i))
        }
    }
    unmarkedNumbers() {
        return this.numbers.filter(n => !this.markedNumbers.has(n))
    }
    showCard() {
        const array = [];
        for (let i = 0; i < this.cardSize; i++) {
            array.push(this.numbers.slice(i * this.cardSize, i * this.cardSize + this.cardSize))
        }
        console.log(array.join("\n") + "\n")
    }
}

function part1(thecards) {
    let cards = thecards.map(x => new Card(x));

    let winningCard;
    const actuallyDrawn = [];
    for (const drawn of drawnNumbers) {
        let finished = false;
        actuallyDrawn.push(drawn);
        for (const card of cards) {
            card.addMarkedNumber(drawn);
            if (card.isComplete) {
                finished = true;
                winningCard = card;
                break;
            }
        }
        if (finished) {
            break;
        }
    }

    const unmarkedNumbers = winningCard.unmarkedNumbers();
    console.log("Part 1:")
    console.log(unmarkedNumbers.reduce((a, b) => a + b, 0) * actuallyDrawn.slice(-1))
}

part1(cards);

function part2(thecards) {
    let cards = thecards.map(x => new Card(x));

    let lastWinningCard;
    let lastWinningNumber;
    const actuallyDrawn = [];
    for (const drawn of drawnNumbers) {
        actuallyDrawn.push(drawn);
        let hasIncompleteCards = false;
        for (const card of cards) {
            if (!card.isComplete) {
                hasIncompleteCards = true;
                card.addMarkedNumber(drawn);
                //card.showCard();
                if (card.isComplete) {
                    lastWinningCard = card;
                    lastWinningNumber = drawn;
                }
            }
        }
        if (!hasIncompleteCards) {
            break;
        }
    }

    const unmarkedNumbers = lastWinningCard.unmarkedNumbers();
    console.log("Part 2:")
    console.log(unmarkedNumbers.reduce((a, b) => a + b, 0) * lastWinningNumber)
    console.log(lastWinningCard.showCard())
    console.log(lastWinningCard.showMap())
}

part2(cards);