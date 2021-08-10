const urlDecode = function(text) {
  let keyValPair = [];
  let returnArr = {};
  let lastPairIndex = 0;
  for (let i = 0; i < text.length; i++) {
    if (text[i] === "&" || i === text.length - 1) {
      keyValPair.push(text.slice(lastPairIndex, i + 1));
      lastPairIndex = i + 1;
    }
  }
  keyValPair.forEach(text => {
    let regex = /%20/gi;
    for (let i = 0; i < text.length; i++) {
      if (text[i] === "=") {
        returnArr[text.slice(0, i)] = text.slice(i + 1).replace("&", "").replace(regex, " ");
      }
    }
  });
  return returnArr;
};

console.log(urlDecode("duck=rubber"));
console.log(urlDecode("bootcamp=Lighthouse%20Labs"));
console.log(urlDecode("city=Vancouver&weather=lots%20of%20rain"));
console.log(urlDecode("city=Vancouver&weather=lots%20of%20rain").weather);