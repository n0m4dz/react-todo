const foo = "I am foo";

var cc = "I am var cc";
let d = 10;

function bar() {
    console.log(d); //undefined
    let d = 12;
    console.log(d); //12
    console.log(cc); // I am var cc
    var c = "I am c";
}
// console.log(d)
bar();

var i = 0;
while (i < 1) {
    let b = "I am b";
    var bb = "I am var bb"
    console.log(b);
    i++;
}

console.log(bb);
console.log(b);
