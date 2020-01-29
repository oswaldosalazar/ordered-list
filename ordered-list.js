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
  
  let sortedById = sortById(inputList);
  
  Array.prototype.groupBy = function(prop) {
    return this.reduce(function(groups, item) {
      let val = item[prop];
      groups[val] = groups[val] || [];
      groups[val].push(item);
      return groups;
    }, {});
  }
  
  let groupedByCoord = sortedById.groupBy('coord');
  
  outputArray = Object.values(groupedByCoord);

  console.log(outputArray)
  
	// let str = '<div>';

  // outputArray.forEach(function(element) {
  //   str += '<p>'+ JSON.stringify(element) + '</p>';
  // }); 

  // str += '</div>';
  
  // document.getElementById("container").innerHTML = str;

}

orderArrayByIdAndGroupCoord(inputArray);