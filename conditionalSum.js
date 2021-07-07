const conditionalSum = function(values, condition){
  function amountTotal(amount){
    let total = 0;
    for(let i = 0; i < amount.length; i++){  
      total += amount[i];
    } 
    return total;
  }
  let evenNums = [];
  let oddNums = [];
  if(condition === "even"){
    for(let i = 0; i < values.length; i++){
      if(values[i] % 2 === 0){
        evenNums.push(values[i]);  
      } 
    } 
    return amountTotal(evenNums);

  } else if (condition === "odd"){
    for(let i = 0; i < values.length; i++){
      if(values[i] % 2 !== 0){
        oddNums.push(values[i]);
      }
    } 
    return amountTotal(oddNums);
  }
};




console.log(conditionalSum([1, 2, 3, 4, 5], "even"));
console.log(conditionalSum([1, 2, 3, 4, 5], "odd"));
console.log(conditionalSum([13, 88, 12, 44, 99], "even"));
console.log(conditionalSum([], "odd"));