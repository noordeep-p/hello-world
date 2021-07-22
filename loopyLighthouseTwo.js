const loopyLighthouse = function(range, multiples, words){
  const outputArry = [];
  for (let i = range[0]; i <= range[1]; i++){
    if(i % multiples[0] === 0 && i % multiples[1] === 0){
      outputArry.push(words[0] + words[1] + '\n');
    } else if (i % multiples[0] === 0){
      outputArry.push(words[0] + '\n');
    } else if (i % multiples[1] === 0){
      outputArry.push(words[1] + '\n');
    } else outputArry.push(i + '\n');
  }
  finalOutput = outputArry[outputArry.length - 1].slice(0,-1);
  outputArry.pop();
  outputArry.push(finalOutput);
  return console.log(outputArry.join(''));
};

loopyLighthouse([15, 90], [2, 5], ["Batty", "Beacon"]);