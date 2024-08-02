
/**
 *
 * @param {()=>void} func
 */
function proof(func) {
    func();
}

/**
 * @param {Number} number
 * @returns {()=>void}
 */
function multi(number) {
    return () => { console.log("jess") }
}

proof(multi());


const hola = () => {
    console.log("Hola");
};