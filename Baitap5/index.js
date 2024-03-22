let tong = 0;
let n = +prompt("Nhap vao so : ");
n = Number(n);
for( let i = 0; i <n; i++ )
{
    if(n%i==0)
    {
        tong = tong + i;
    }
}
if(tong ==n)
{
    console.log(`Day la so hoan hao  + ${n}`);
}
else
{
    console.log(`Khong la so hoan hao  ${n}`);
}
