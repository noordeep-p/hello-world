const repeatNumbers = function(data){
  let finalNums = [];
  for(let i = 0; i < data.length; i++){
    let line = '';
    for(let j = 0; j < data[i][1]; j++){
      line += data[i][0]
    }
    finalNums.push(line);    
  }
  console.log(finalNums.join(', '));     
};








console.log(repeatNumbers([[1, 10]]));
console.log(repeatNumbers([[1, 2], [2, 3]]));
console.log(repeatNumbers([[10, 4], [34, 6], [92, 2]]));