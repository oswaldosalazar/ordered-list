var inputArray = [
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

function orderArrayByIdAndGroupCoord(inputList) {

  function sortById(list) {
    return list.sort((a, b) => a.id - b.id);
  };
  
  var sortedById = sortById(inputList);
  
  reOrderedArray = []
  
  for(var i = 0; i < sortedById.length; i++) {
  
    reOrderedArray.push(sortedById[i]);
  
    for(var j = 0;  j < sortedById.length; j++) {
      if(sortedById[i].coord[0] == sortedById[j].coord[0] &&
      sortedById[i].coord[1] == sortedById[j].coord[1])
      {
        reOrderedArray.push(sortedById[j]);
      }
    }
  }
  
  filteredArray = [...new Set(reOrderedArray)];
  
  // console.log(filteredArray);
  
  Array.prototype.groupBy = function(prop) {
    return this.reduce(function(groups, item) {
      var val = item[prop];
      groups[val] = groups[val] || [];
      groups[val].push(item);
      return groups;
    }, {});
  }
  
  var groupedByCoord = filteredArray.groupBy('coord');
  
  outputArray = Object.values(groupedByCoord);
  
  outputArray.forEach(element => {
    console.log(element)
  });
}

orderArrayByIdAndGroupCoord(inputArray);


