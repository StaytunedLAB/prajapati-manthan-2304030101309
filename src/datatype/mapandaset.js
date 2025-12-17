let map = new Map();
map.set("name", "Alice");
map.set("age", 25);
console.log("Map get:", map.get("name"));
console.log("Map size:", map.size);

let set = new Set([1, 2, 3, 3, 2, 1]);
console.log("Set size:", set.size);
set.add(4);
set.delete(2);