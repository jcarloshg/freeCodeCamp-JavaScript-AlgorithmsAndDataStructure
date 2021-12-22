
/**
 *
 * @param {String} title 
 * @returns title withOutSpaces
 */
const withOutSpaces = (title) => {
    const titleWithOutSpaces = title.replace(/\s+/g, '');
    return titleWithOutSpaces;
}


const title = "12Match Characters that Occur One or More Times";
console.log('====================================');
console.log(withOutSpaces(title));
console.log('====================================');