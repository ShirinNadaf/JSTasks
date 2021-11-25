let arr=[1,2,3,4,5,6,1,1,10,11];
        function add(val)
         {
            let counter=0;
            for(i=0;i<arr.length;i++){
            if(arr[i]==val){
                counter ++;
            }
        }
        if(counter == 0){
            arr.push(val);
            console.log("updated array"+arr);
        }else{
        console.log("duplicate Element");
        }
        }
add(1);