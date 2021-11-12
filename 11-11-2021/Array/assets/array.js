var num = [1,2,3,4,5];
console.log(num.length);
//join
console.log(num.join('-'));

//sort
 var arr=['shirin', 'nadaf','Amruta','priynaka','abc']
 console.log(arr.sort());

//concat
 const name2= ['a','b','c','d']
 const number= [1,2,4];
 console.log(name2.concat(number))

 //find
 let numbers = [1,2,3,4,5]
 console.log(numbers.find(e => e % 2==0));

//math 
var arr = [10,20,30,40,50]
var newarr = arr.map(function(value){
    value ++;
    console.log(value);
})

//filter
 var ages = [10,23,32,44];
 document.write(ages + "<br><br>")

 var age = ages.filter(checkAdult) 
 document.write(age + "<br><br>")

 function checkAdult(age){
     return age >= 18;
 }

 //every
 let result =[10, 5, 20, 100].every(function(number){
    return number < 150
})
console.log(result)