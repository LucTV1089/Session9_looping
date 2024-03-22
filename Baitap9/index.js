let n = +prompt("Nhập số n");
let a = 0;
let b = 1;
let c = 0;
console.log(a);
console.log(b);
while (a + b <= n) {
  c = a + b;
  console.log(c);
  a = b;
  b = c;
}