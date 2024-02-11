import fs from 'fs';

let fileData = fs.readFileSync('input.txt', 'utf-8').split('\n');

let parsedCoordinates: number[] = [];

// Function for extracting the first and last digit from a line
const parseLine = (line: string) => {
    let parsedDigits: RegExpMatchArray | null = line.match(/\d/g);
    let result: string = "";

    if(parsedDigits != null){
        result = parsedDigits[0] + parsedDigits[parsedDigits.length - 1];
    }

    return parseInt(result);
}

// Function for changing worded digits to numbers
const changeWordedDigits = (line: string) => {
    const WordedDigits = {
        "one": 1,
        "two": 2,
        "three": 3,
        "four": 4,
        "five": 5,
        "six": 6,
        "seven": 7,
        "eight": 8,
        "nine": 9,
        "zero": 0
    }

    for(const [worded, num] of Object.entries(WordedDigits)){
        line = line.replace(worded, num.toString());
    }

    return line;
}

fileData.map((line) => {
    //parsedCoordinates.push(parseLine(line));
    parsedCoordinates.push(parseLine(changeWordedDigits(line)));
})

// Sum of all of the calibration values
let sum: number = parsedCoordinates.reduce((acc: number, curr: number) => {
    if(isNaN(acc + curr)){

        return acc;
    } else {
        return acc + curr;
    }
}, 0);

// Final output - sum of all of the calibration values:
console.log(sum); //outputs 55666

// FINAL ANSWERS:
// Part 1: 56506
// Part 2: 55666