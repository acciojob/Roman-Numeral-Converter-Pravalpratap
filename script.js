function convertToRoman(num) {
    // Define the Roman numeral symbols and their corresponding values
    const romanSymbols = [
        ['M', 1000],
        ['CM', 900],
        ['D', 500],
        ['CD', 400],
        ['C', 100],
        ['XC', 90],
        ['L', 50],
        ['XL', 40],
        ['X', 10],
        ['IX', 9],
        ['V', 5],
        ['IV', 4],
        ['I', 1]
    ];

    // Initialize an empty string to store the Roman numeral
    let roman = '';

    // Iterate through the symbols
    for (let [symbol, value] of romanSymbols) {
        // Repeat the current symbol while its value is less than or equal to num
        while (value <= num) {
            roman += symbol; // Add the symbol to the Roman numeral string
            num -= value;    // Subtract the value from num
        }
    }

    return roman;
}
// You can test your code by running the above function and printing it to console by pressing the run button at the top. To run it with input 36, uncomment the following line

 console.log(convertToRoman(36));




// do not edit below this line
module.exports = convertToRoman
