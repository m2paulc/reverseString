/**
 * This function reverses a string
 * @param {string} str - takes in any string
 */
const reverseString = str => str.toLowerCase().split('').reverse().join('');

module.exports = reverseString;