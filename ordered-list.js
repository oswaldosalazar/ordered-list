var inputList = [
  { id: 6, coord: [1, 2] },
  { id: 14, coord: [9, 21] },
  { id: 1, coord: [1, -6] },
  { id: 11, coord: [2, 4] },
  { id: 0, coord: [2, 4] },
  { id: 10, coord: [2, 9] },
  { id: 2, coord: [1, 2] },
  { id: 5, coord: [2, 3] },
  { id: 3, coord: [2, 4] }
];

function sortById(list) {
  return list.sort((a, b) => a.id - b.id);
};

var sortedById = sortById(inputList)

arraysSortedById = [];

for(var i = 0; i < sortedById.length; i++) {
  arraysSortedById[i] = [];
  arraysSortedById[i].push(sortedById[i]);
}

console.log(arraysSortedById)

reOrderedArray = []

for(var i = 0; i < arraysSortedById.length; i++) {
  reOrderedArray.push(arraysSortedById[i][0])
  for(var j = 0;  j < arraysSortedById.length; j++) {
    if(arraysSortedById[i][0].coord[0] == arraysSortedById[j][0].coord[0] &&
    arraysSortedById[i][0].coord[1] == arraysSortedById[j][0].coord[1])
    {
      reOrderedArray.push(arraysSortedById[j][0])
    }
  }
}

filteredArray = [...new Set(reOrderedArray)];

console.log(filteredArray)



// function groupBy(list, keyGetter) {
//   const map = new Map();
//   list.forEach((item) => {
//        const key = keyGetter(item);
//        const collection = map.get(key);
//        if (!collection) {
//            map.set(key, [item]);
//        } else {
//            collection.push(item);
//        }
//   });
//   return map;
// }

// const grouped = groupBy(filteredArray, elem => elem.coord);

// console.log(grouped.values());





