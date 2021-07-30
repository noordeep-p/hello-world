const camelCase = function(text) {
  let newCase = [];
  let index = [];
  for (let i = 0; i < text.length; i++) {
    if (text[i] === " ") {
      newCase.push(text[i + 1].toUpperCase());
      index.push(i + 1);
    } else {
      newCase.push(text[i]);
    }
  }
  for (let i = 0; i < index.length; i++) {
    newCase[index[i]] = "";
  }
  return (newCase.join(''));
};

console.log(camelCase("this is a string"));
console.log(camelCase("loopy lighthouse"));
console.log(camelCase("supercalifragalisticexpialidocious"));