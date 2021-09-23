//function to go from user input to output
module.exports = input => {
    if (/^\d+$/.test(input)) {
        input = parseInt(input) * 1000
    }
    const parsedInput = new Date(input)

    if (parsedInput == 'Invalid Date') {
        return {'unix': null, 'natural': null}
    } else {
        return {'unix': parsedInput.valueOf() / 1000, 'natural': parsedInput.toDateString()}
    }
}

