let n = +prompt("nhap so day so");
n = Number(n);
for ( let i = 2; i < n; i)
{
    let isPrime = true;
    for( let j = 2; j < i; j++)
    {
        if(i%j == 0)
        {
            isPrime = false;
            break;
        }
    }
    if(isPrime)
    {
        console.log(i);
    }
}