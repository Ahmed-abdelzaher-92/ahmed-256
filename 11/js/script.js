function looping(start , end , breaknum , countNum){
    for(let i = start; i <= end; i++){
        if(i === breaknum){
            console.log("break at: " + i);
            break;
        }
        if(countNum && i % countNum !== 0){
          
            continue;

        }

        
       console.log(" number: " + i);
    }  
}

looping(1, 20);
looping(1, 20, 10, 2);

  