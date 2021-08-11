const loopyLighthouse = function(range, multiples, words) {
  const outputArry = [];
  for (let i = range[0]; i <= range[1]; i++) {
    if (i % multiples[0] === 0 && i % multiples[1] === 0) {
      outputArry.push(words[0] + words[1]);
    } else if (i % multiples[0] === 0) {
      outputArry.push(words[0]);
    } else if (i % multiples[1] === 0) {
      outputArry.push(words[1]);
    } else outputArry.push(i);
  }
  return console.log(outputArry.join('\n'));
};

loopyLighthouse([15, 90], [2, 5], ["Batty", "Beacon"]);
