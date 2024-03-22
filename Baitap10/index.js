let n = +prompt("Nhập số n");
let a = "";
let b = "";
for (let i = 1; i <= n; i++) {
  a = a + "*";
  console.log(a);
}
console.log("******************");

for (let i = 1; i <= n; i++) {
  b = b + "*";
  console.log(b.padStart(n, " "));
}