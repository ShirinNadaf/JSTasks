var list = [{name : "shirin", age : 24},
     { name : "priyanka", age : 31}, 
     { name : "Amruta", age : 24}, 
     {name : "abc", age : 31}];

var finallist = {};
for(var i = 0; i < list.length; i++) {
    if(finallist[list[i].age]) {
        finallist[list[i].age].push(list[i].name);
    } else {
        finallist[list[i].age] = [list[i].name];
    }
}
console.log ((finallist));