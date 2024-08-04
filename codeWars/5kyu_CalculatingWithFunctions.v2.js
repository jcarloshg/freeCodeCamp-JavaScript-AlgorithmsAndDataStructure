

// https://www.codewars.com/kata/525f3eda17c7cd9f9e000b39/train/javascript


const OPERATIONS = {
    TIMES: "TIMES",
    PLUS: "PLUS",
    MINUS: "MINUS",
    DIVIDE_BY: "DIVIDED_BY",
};

/**
 *
 * @param {Number} firstNumber
 * @param {Number} secondNumber
 * @param {String} operation
 * @returns Number
 */
function operationController(firstNumber, secondNumber, operation) {
    if (operation == OPERATIONS.PLUS) return firstNumber + secondNumber;
    if (operation == OPERATIONS.MINUS) return firstNumber - secondNumber;
    if (operation == OPERATIONS.TIMES) return firstNumber * secondNumber;
    if (operation == OPERATIONS.DIVIDE_BY) return Math.trunc(firstNumber / secondNumber)
    return undefined;
}


/**
 * @param {Number} number
 * @param {{operation: String, secondValue: Number} | undefined} params
 * @returns Number
 */
function runOperation(number, params) {
    if (params == undefined) return number;
    return operationController(number, params.secondValue, params.operation);
}


function zero(params) { return runOperation(0, params) }
function one(params) { return runOperation(1, params) }
function two(params) { return runOperation(2, params) }
function three(params) { return runOperation(3, params) }
function four(params) { return runOperation(4, params) }
function five(params) { return runOperation(5, params) }
function six(params) { return runOperation(6, params) }
function seven(params) { return runOperation(7, params) }
function eight(params) { return runOperation(8, params) }
function nine(params) { return runOperation(9, params) }


/**
 *
 * @param {Number} number
 * @returns {{operation: String, secondValue: Number}}
 */
function plus(number) { return { operation: OPERATIONS.PLUS, secondValue: number } }

/**
 *
 * @param {Number} number
 * @returns {{operation: String, secondValue: Number}}
 */
function minus(number) { return { operation: OPERATIONS.MINUS, secondValue: number } }

/**
 *
 * @param {Number} number
 * @returns {{operation: String, secondValue: Number}}
 */
function times(number) { return { operation: OPERATIONS.TIMES, secondValue: number } }

/**
 *
 * @param {Number} number
 * @returns {{operation: String, secondValue: Number}}
 */
function dividedBy(number) { return { operation: OPERATIONS.DIVIDE_BY, secondValue: number } }

