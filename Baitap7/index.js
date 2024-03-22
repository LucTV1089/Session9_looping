    let random = Math.floor(Math.random() *10 ) + 1;
    let n;
   do
    {
        n = +prompt("Nhap vao so bat ki : ");
        n = Number(n);
        if(n > random)
        {
            console.log("too big");
        }
        else if(n < random)
        {
            console.log("too short");
            
        }
        else
        {
            console.log("correct");
        }
    } while (n!== random);