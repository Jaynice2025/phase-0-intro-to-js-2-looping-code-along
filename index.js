// Code your solutions in this file
// writeCards function
function writeCards(names, event) {
    let messages = [];
    for (let i = 0; i < names.length; i++) {
        messages.push(`Thank you, ${names[i]}, for the wonderful ${event} gift!`);
    }
    return messages;
}

// countDown function — starts from the provided number (e.g., 10) and counts down to 0
function countDown(number) {
    while (number >= 0) {
        console.log(number);
        number--;
    }
}

// Export if needed for tests
if (typeof module !== 'undefined') {
    module.exports = { writeCards, countDown };
}

