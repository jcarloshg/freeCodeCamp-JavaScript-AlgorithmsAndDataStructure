
/**
 *
 * @param {String} title
 * @returns title withOutSpaces
 */
const withOutSpaces = (title) => {
    const titleWithOutSpaces = title.replace(/\s+/g, '');
    return titleWithOutSpaces;
}


const title = "14Find Characters with Lazy Matching";
console.log('====================================');
console.log(withOutSpaces(title));
console.log('====================================');