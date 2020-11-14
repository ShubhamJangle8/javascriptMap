function randomDate(start, end) {
  return new Date(start.getTime() + Math.random() * (end.getTime() - start.getTime()))
}

let personMap = new Map();
let monthMap = new Map();
for (let i = 0; i < 12; i++) {
  monthMap.set(i, new Array());
}
console.log(monthMap);
start = new Date(92, 0, 1);
end = new Date(93, 12, 31);
for (let i = 0; i < 50; i++) {
  personMap.set(i + 1, randomDate(start, end));
}

console.log(personMap);
for (let i = 0; i < 12; i++) {
  let prev = monthMap.get(i);
  for (let [key, value] of personMap) {
      if (value.getMonth() == i) {
          prev.push(key);
      }
  }
  monthMap.set(i, prev);
}
console.log(monthMap);