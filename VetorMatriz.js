

var v1 = ["Fla", "men", "go"];
var v2 = new Array("Fla", "men", "go");

var m1 = [["F","l","a"], ["m","e","n"], ["g","o"]];

var m2 = new Array(3);
m2[0] = new Array("F","l","a");
m2[1] = new Array("m","e","n");
m2[2] = new Array("g","o");

var m3 = new Array(3);
m3[0] = ["F","l","a"];
m3[1] = ["m","e","n"];
m3[2] = ["g","o"];

console.log(v1[1]);
console.log(v2[2]);

console.log(m2[0][0]);
console.log(m2[0][1]);
console.log(m2[0][2]);

v1[3] = "!";
v2[3] = "!";
m1[2][2] = "!";
m2[2][2] = "!";
m3[2][2] = "!";

console.log(v1[3])
console.log(v2[3])

console.log(m2[2][2]);

v1.splice(3,1);
v2.splice(3,1);

console.log(v1[3]);
console.log(v2[3]);

var s1 = v1[2];
var s2 = v2[2];
var s3 = m1[2][2];
var s4 = m2[2][2];
var s5 = m3[2][2];

console.log(s1);
console.log(s2);
console.log(s3);
console.log(s4);
console.log(s5);

console.log(v1.length);
console.log(v2.length);
console.log(m1[0].length + m1[1].length + m1[2].length);

