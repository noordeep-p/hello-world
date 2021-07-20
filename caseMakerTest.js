const pascal = function(input){
  let newCase = [];
  let indexOfDl = [];
  for(let i = 0; i < input.length; i++){
    newCase.push(input[i])
    if(input[i] === " "){
      newCase.splice(i, 1, input[i + 1].toUpperCase());
      indexOfDl.push(i + 1);      
    }
  }
  for(let i = 0; i < indexOfDl.length; i++){
    newCase.splice(indexOfDl[i], 1)
    for(let i = 0; i < indexOfDl.length; i++){
      indexOfDl[i] = indexOfDl[i] - 1;
    }
  }
  newCase[0] = newCase[0].toUpperCase(); 
  return newCase.join('');
};

console.log(pascal("this is a string"));



