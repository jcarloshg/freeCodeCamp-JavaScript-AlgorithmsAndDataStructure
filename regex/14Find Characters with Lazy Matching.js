
// Find Characters with Lazy Matching

/*
obtiene la primera coincidencia
ejemplo ->

    str = "titanic"
    myRegex = /t[a-z]*i/;
    this return -> "titani"

    str = "titanic"
    myRegex = /t[a-z]*?i/;
    this return -> "ti"

*/


let text = "<h1>Winter is coming</h1>";
let myRegex = /<.*?>/; // Change this line
let result = text.match(myRegex);

console.log(result);