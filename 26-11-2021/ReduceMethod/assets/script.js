var arr= [1,2,44,12,24,65,45,34,35,100]
        function finMax(acc, val){
            if(val > acc){
                acc = val;
            }
            return acc;
        }
        let maxvalue = arr.reduce(finMax)
        console.log(maxvalue)


        //another Method

 const list = [1,33,67,45,89,12,58,9];

const LargeNum =list.reduce((prev, curr) => {
      return Math.max(prev, curr)
});

const MinNum =list.reduce((prev,curr)=>{
      return Math.min(prev,curr)
});
console.log(LargeNum);
console.log(MinNum);