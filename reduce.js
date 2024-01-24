let number = [1,3,5,2,9,4,3,10,6];
let result = number.reduce((prevValue, currentValue, index, arr)=>{
    return prevValue + currentValue;
},0)
console.log(result)