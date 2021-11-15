function  reverse1(arr) {
    var output = [];
    for(var i=arr.length; i>0; i--){
        output.push(arr.pop())
      }
    return output;
}
document.write(reverse1([1 ,2, 3, 4, 5, 9, 6, 7]))

//another method
arr = [1, 2, 3, 4];
arr1 = [];
for (var i=arr.length-1; i>= 0; i--) {
 arr1.push(arr[i]);
 }
console.log(arr1);
