const number=[] //declares constant numbers
function numbersBetween(num1,num2){// declares a number function between the two numbers
    const start=Math.min(num1,num2);
    const end=Math.max(num1,num2);
    for (let i = start; i <=end; i++) {
        number.push(i)
    
        
    }
    return number
}
console.log(numbersBetween(4,7))
console.log(numbersBetween(-4,7))



//ANOTHER EXAMPLE THAT CAN BE USED



//function numbersBetween(start,end){
    //return Array(end-start+1).fill().map((_,index)=>start+index)
    
//}
//const result =numbersBetween(4,7)
//console.log(result)
//fill method it is used to fill all elements of an array from the start index to the end index
//map method its creates a new array by calling its function 
// index is from where the first number start upto the end
//result its prints out all the values between the numbers

