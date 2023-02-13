

var s = new Set();

s.add(1980);
s.add(1981);
s.add(1982);
s.add(1983);
s.add(1981);
s.add(2009);

console.log(s.size);

console.log(s.has(1992));
console.log(s.has(1981));

s.delete(1983);

console.log(s.size);

for (var valor of s) {
  console.log(valor);
}