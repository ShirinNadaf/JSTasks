let num=[4,4,4,5,7,8,10,3,3,7,7,8];
        let cnt=0;
        let newarr=[];
        function count_frequancy(num){
        for(let i=0;i<num.length;i++) {
        cnt=0;
        for(let j=i+1;j<num.length;j++)
        {
            if(num[i]==num[j]) {
                cnt++;
            }
        }
        if(cnt==0){
        newarr.push(num[i]);
        }
    }
    console.log(newarr)
    let cnt3=0;
    for(i=0;i<newarr.length;i++){
        cnt3=0;
        for(j=0;j<num.length;j++){
            if(newarr[i]==num[j]){
                cnt3++;
            }
        }
        console.log("count of "+ newarr[i]+" = "+cnt3);
       }
    }
count_frequancy(num);