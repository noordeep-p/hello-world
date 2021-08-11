const multiplicationTable = function(maxValue) {
  let multiTable1 = [];
  let multiTable2 = [];
  if (maxValue === 1) {
    return 1;
  } else if (maxValue > 1) {
    for (let i = 1; i <= maxValue; i++) {
      multiTable2.push(i *= 1);
    }
    for (let j = 0; j <= maxValue - 1; j++) {
      for (let k = 1; k <= maxValue; k++) {
        multiTable1.push(multiTable2[j] * k);
      }
    }
    for (let i = 0; i < maxValue * maxValue - maxValue; i += maxValue) {
      console.log(multiTable1.slice(i, i + maxValue).join(" "));
    }
  } return multiTable1.slice(- maxValue).join(" ");
};




console.log(multiplicationTable(1));
console.log(multiplicationTable(5));
console.log(multiplicationTable(10));