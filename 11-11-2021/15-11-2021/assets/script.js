const flatarray = (arr,result=[])=>{
    for(let i=0; i<arr.length; i++){
        const value= arr[i];
        if(Array.isArray(arr[i])){
            flatarray(value,result) //recusion
        }else{
            result.push(value)
        }
    }
    return result;
}

const arr=[1,2,3,4,5,[8,9,10],[11,12,13],[14]];
console.log(flatarray(arr))



























// function flatten(ary, ret = []) {
//     return ary.reduce((ret, entry) => {
//         if (Array.isArray(entry)) {
//             flatten(entry, ret);
//         } else {
//             ret.push(entry);
//         }
//         return ret;
//     }, ret);
// }
// console.log(flatten([[[0], [1]], [[2], [3]], [[4], [5]]]));
// function flatten(arr)
// {
// 	return arr.reduce((acc, cur) => acc.concat(Array.isArray(cur) ? flatten(cur) : cur), []);
// };

// const arr = [[1,2],[3,[4,[5]]]];

// const flattened = flatten(arr);
// console.log(flattened);
