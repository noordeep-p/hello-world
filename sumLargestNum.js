const sumLargestNumbers = function(data){
    let hightestNum1 = 0;
    let hightestNum2 = 0;
    let arryWoHN1 = [];
  for (let i = 0; i < data.length; i++){
    if(data[i] > hightestNum1){
      hightestNum1 = data[i];
      }
    arryWoHN1 = data.filter(function(value){
      return value < hightestNum1;
    });     
    }
  for (let j = 0; j < arryWoHN1.length; j++){
    if (arryWoHN1[j] > hightestNum2){
      hightestNum2 = data[j];
    }
  } 
  return hightestNum1 + hightestNum2;
}
 

console.log(sumLargestNumbers([1, 10]));
console.log(sumLargestNumbers([1, 2, 3]));
console.log(sumLargestNumbers([10, 4, 34, 6, 92, 2]));