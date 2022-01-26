"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.validateWithFirstLetterUpper = exports.validateString = exports.validateDate = void 0;
/**
 *
 * @param string date this function allow you to validate using regex the birthday MM/dd/yyyy.
 * @return a boolean.
 */
function validateDate(date) {
    const date_regex = /^(0[1-9]|1[0-2])\/(0[1-9]|1\d|2\d|3[01])\/(19|20)\d{2}$/;
    if (date_regex.test(date))
        return true;
    return false;
}
exports.validateDate = validateDate;
/**
 *
 * @param string name this function allow you to validate the user name/lastName.
 * @return a boolean.
 */
function validateString(name) {
    const re = /^[A-Za-z]+$/;
    if (re.test(name))
        return true;
    return false;
}
exports.validateString = validateString;
/**
 *
 * @param string name this function allow you to validate the user name/lastName.
 * @return a boolean.
 */
function validateWithFirstLetterUpper(name) {
    const re = /^[A-Z][a-z]{3,19}$/;
    if (re.test(name))
        return true;
    return false;
}
exports.validateWithFirstLetterUpper = validateWithFirstLetterUpper;
