

var m = new Map();

m.set("brasil",5);
m.set("alemanha",4);
m.set("italia",4);
m.set("argentina",2);
m.set("frança",2);
m.set("uruguai",2);
m.set("inglaterra",1);
m.set("espanha",1);

console.log(m.size);

console.log(m.has("brasil"));

console.log(m.get("alemanha"));

console.log(m.get("argentina"));
m.set("argentina", 3);
console.log(m.get("argentina"));

m.delete("italia");

console.log(m.size);

//Pelos chaves
for (var key of m.keys()) {
  console.log(key);
}

//Pelos valores
for (var key of m.values()) {
  console.log(key);
}
