let a = +prompt("Nhập vào khoảng số : ");
let b = +prompt("nhập vào số Ước muốn tìm ");

if(a>1)
{
    for (let i = 1; i <=a;i++)
    {
        if(i%b ==0)
        {
            console.log(i);
        }
    }
}
else
{
    alert("Vui lòng nhập lại");
}