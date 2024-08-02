
// https://www.codewars.com/kata/525f3eda17c7cd9f9e000b39/train/javascript

/**
 *
 * @param {{execute:(a:Number,b:Number)=> Number, value: Number}} operation
 * @returns Number
 */
function operationController(operation) {
    const ONE = 1;
    if (operation == null) return ONE;
    const valueOperated = operation.execute(ONE, operation.value);
    return valueOperated;
}

function zero() { }

/**
 *
 * @param {{execute:(a:Number,b:Number)=> Number, value: Number}} operation
 * @returns Number
 */
function one(operation) {
    const ONE = 1;
    if (operation == null) return ONE;
    const valueOperated = operation.execute(ONE, operation.value);
    return valueOperated;
}

/**
 *
 * @param {{execute:(a:Number,b:Number)=> Number, value: Number}} operation
 * @returns Number
 */
function two(operation) {
    const TWO = 2;
    if (operation == null) return TWO;
    const result = operation.execute(TWO, operation.value);
    return result;
}



/**
 *
 * @param {{execute:(a:Number,b:Number)=> Number, value: Number}} operation
 * @returns Number
 */
function three(operation) {
    const THREE = 2;
    if (operation == null) return THREE;
    const result = operation.execute(THREE, operation.value);
    return result;
}

function four() { }
function five() { }
function six() { }
function seven() { }
function eight() { }
function nine() { }

/**
 *
 * @param {Number} number
 * @returns {{execute:(a:Number, b:Number)=> Number, value: Number}}
 */
function plus(number) {
    return {
        execute: (a, b) => a + b,
        value: number,
    }
}

/**
 *
 * @param {Number} number
 * @returns {{execute:(a:Number, b:Number)=> Number, value: Number}}
 */
function minus(number) {
    return {
        execute: (a, b) => a - b,
        value: number,
    }
}

/**
 *
 * @param {Number} number
 * @returns {{execute:(a:Number, b:Number)=> Number, value: Number}}
 */
function multi(number) {
    return {
        execute: (a, b) => a * b,
        value: number,
    }
}


/**
 *
 * @param {Number} number
 * @returns {{execute:(a:Number, b:Number)=> Number, value: Number}}
 */
function dividedBy(number) {
    return {
        execute: (a, b) => a / b,
        value: number,
    }
}

console.log(`[one(plus(one))] -> `, one(minus(two())));