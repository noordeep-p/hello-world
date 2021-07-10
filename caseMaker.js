const camelCase = function(input){
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
  return newCase.join('');
};

console.log(camelCase("this is a string"));
console.log(camelCase("loopy lighthouse"));
console.log(camelCase("supercalifragalisticexpialidocious"));