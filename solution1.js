const string = 'The Quick Brown Fox'
const result = string.split("").map(item=>(item===item.toUpperCase()?item.toLowerCase():item.toUpperCase()))
.join("");
console.log(result)
//split  it is used for returning a new array
//map created a new array by calling its function in the original array
//join return a new array as string
//to uppercase to convert all the lowercase character in the code to uppercase
//to lowercase to convert all the uppercase character in the code to lowercas
//? its a condition to execute if information given is true and : and this to execute if information is falsy (ternary conditions) 