
       for(i=0;i<=10;i++){
        for(j=0;j<=10;j++){
            if((i==0)||(j==0 && i<=5)||(i==5)||(j==10 && i>=5) || (i==10)){
                document.write("*")
            }else{
                document.write("&nbsp;&nbsp");
            }
        }
        document.write("<br/>")
    }

    document.write("<br/>")
    
    for(i=0; i<=10; i++){
        for(j=0; j<=10;j++){
            if((j==0) || (i==5) || (j==10)){
                document.write("*")
            }
            else{
                document.write("&nbsp;&nbsp")
            }
        }
        document.write("<br/>")
    }
    document.write("<br/>")
    
     for(i=0; i<=10; i++){
         for(j=0; j<=10;j++){
             if((i==0) || (j==5) || (i==10))
             {
                document.write("*")
             }
            else{
                document.write("&nbsp;&nbsp")
            }
         }
         document.write("<br/>")
        }
        document.write("<br/>")
        
        for(i=0;i<=10;i++){
            for(j=0;j<=10;j++){
            if((j==0)||(i==0)||(i==5)||(j==10 && i<=5)||(j-i==-3 && i>=3)){
                document.write("*");
            }else{
                document.write("&nbsp;&nbsp");
            }
            }
            document.write("<br/>")
        }

        document.write("<br/>")

        for(i=0; i<=10; i++){
         for(j=0; j<=10;j++){
             if((i==0) || (j==5) || (i==10))
             {
                document.write("*")
             }
            else{
                document.write("&nbsp;&nbsp")
            }
         }
         document.write("<br/>")
        }
        document.write("<br/>")


        for(i=0; i<=10; i++){
            for(j=0; j<=10; j++){
                if((j==0) || (j==10)){
                    document.write("*")
                }else{
                    document.write("&nbsp;&nbsp")
                }
            }
            document.write("<br/>")
        }