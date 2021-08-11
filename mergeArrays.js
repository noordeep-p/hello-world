const merge = function(arry1, arry2) {
  let arryMerged = [];
  for (let i = 0; i < arry1.length; i++) {
    arryMerged.push(arry1[i]);
  } for (let j = 0; j < arry2.length; j++) {
    arryMerged.push(arry2[j]);
  }
  return arryMerged.sort(function(a, b) {
    return a - b;
  });
};



console.log(merge([ 4, 5, 6 ], [ 1, 2, 3, 4 ]));         [ 1, 2, 3, 4, 4, 5, 6 ];
console.log(merge([ 4 ], [ 2, 5, 8 ]));                  [ 2, 4, 5, 8 ];
console.log(merge([ 1, 2, 6 ], []));                     [ 1, 2, 6 ];