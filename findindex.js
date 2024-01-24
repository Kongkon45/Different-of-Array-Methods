let number = [1,3,5,2,9,4,3,10,6];
let result = number.findIndex((value, index, arr)=>{
    // return value >9;
    return !(value % 3);
})
console.log(result)