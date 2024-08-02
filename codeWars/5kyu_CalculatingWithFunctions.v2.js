

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
    if (operation == OPERATIONS.DIVIDE_BY) return firstNumber / secondNumber;
    return undefined;
}


/**
 *
 * @param {{operation: String, secondValue: Number} | undefined} params
 * @returns Number
 */
function one(params) {
    const ONE = 1;
    if (params == undefined) return ONE;
    return operationController(ONE, params.secondValue, params.operation);
}

/**
 *
 * @param {Number} number
 * @returns {{operation: String, secondValue: Number}}
 */
function multi(number) {
    return { operation: OPERATIONS.TIMES, secondValue: number }
}

// console.log(one(times(one())));

