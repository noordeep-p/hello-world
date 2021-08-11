const squareCode = function(text) {
  const message = text.replace(/ /g, "");
  const rowLength = Math.ceil(Math.sqrt(message.length));
  const rowArr = [];
  let index = 0;
  for (let i = 1; i < message.length; i++) {
    if (i % rowLength === 0) {
      rowArr.push(message.slice(index, i));
      index += rowLength;
    } else if (i === message.length - 1) {
      rowArr.push(message.slice(index, message.length));
    }
  }
  const result = [];
  const squareArr = [];
  let index2 = 0;
  while (index2 < rowArr[0].length) {
    rowArr.map(function(string) {
      squareArr.push(string[index2]);
    });
    result.push(squareArr.join(''));
    squareArr.length = 0;
    index2 ++;
  }
  return result.join(' ');
};

console.log(squareCode("chill out"));
console.log(squareCode("feed the dog"));
console.log(squareCode("have a nice day"));
console.log(squareCode("if man was meant to stay on the ground god would have given us roots"));