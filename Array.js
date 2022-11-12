let a = [10];

console.log(a.length);

for(var x of a) {
    console.log(x);
}
let b = Array(20);
for(var x of b) {
    console.log(x);
}
console.log(b.length);


let c = new Array(10);

c[1]= 555;

c.push(10);
c.push(40);
c.push(20);
c.push(30);
c.push(50);


x = c.filter(a => a % 2 === 0);
console.log(x.length);
