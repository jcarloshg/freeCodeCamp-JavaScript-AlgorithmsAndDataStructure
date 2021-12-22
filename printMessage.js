
/**
 *
 * @param {String} title 
 * @returns title withOutSpaces
 */
const withOutSpaces = (title) => {
    const titleWithOutSpaces = title.replace(/\s+/g, '');
    return titleWithOutSpaces;
}


const title = "5Find More Than the First Match";
console.log('====================================');
console.log(withOutSpaces(title));
console.log('====================================');