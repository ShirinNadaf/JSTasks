const flatarray = (arr,result=[]) => {
    for(let i=0; i<arr.length; i++){
        const value= arr[i];
        if(Array.isArray(value)){
            flatarray(value, result)   // recursion 
        }else{
            result.push(value)
        }
    }
    return result;
}
const arr=[1,2,3,4,5,[8,9,10],[11,12,13],[14]];
console.log(flatarray(arr))
