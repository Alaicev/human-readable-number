module.exports = function toReadable (number) {
    let oneLevel = ["zero", "one", "two", "three", "four", "five", "six", "seven", "eight", "nine", "ten", "eleven", "twelve", "thirteen", "fourteen", "fifteen", "sixteen", "seventeen", "eighteen", "nineteen"];
    let twoLevel = ["ten", "twenty", "thirty", "forty", "fifty", "sixty", "seventy", "eighty", "ninety"];

    if (number < 20){
        return oneLevel[number]
    }

    if (number < 100) {
        if (number % 10 === 0) {
            return twoLevel[number / 10 - 1]
        } else {
            return twoLevel[Math.floor(number / 10) - 1] + " " + oneLevel[number % 10]
        }
    }

    if (number % 100 === 0) {
        return oneLevel[number / 100] + " hundred"
    }
    if (number % 10 === 0) {
        return oneLevel[Math.floor(number / 100)] + " hundred " + twoLevel[number % 100 / 10 - 1]
    }
    if (number % 100 / 10 < 2) {
        return oneLevel[Math.floor(number / 100)] + " hundred " + oneLevel[number % 100]
    }
    if (number % 100 / 10 >= 2){
        return oneLevel[Math.floor(number / 100)] + " hundred " + twoLevel[Math.floor(number % 100 / 10) -1] + " " + oneLevel[number % 10]
    }
}


