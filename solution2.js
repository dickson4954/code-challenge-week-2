function numbersBetween(start,end){
    return Array(end-start+1).fill().map((_,index)=>start+index)
    
}
const result =numbersBetween(4,7)
console.log(result)
//fill method it is used to fill all elements of an array from the start index to the end index
//map method its creates a new array by calling its function 
// index is from where the first number start upto the end
//result its prints out all the values between the numbers