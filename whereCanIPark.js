const whereCanIPark = function(spots, vehicle) {
  let spot = [0,0];
  for (let i = 0; i < spots.length; i++) {
    for (let j = 0; j < spots[i].length; j++) {
      if (vehicle === 'regular') {
        if (spots[i][j] === 'R') {
          spot[0] = j;
          spot[1] = i;
          return spot;
        }
      } else if (vehicle === 'small') {
        if (spots[i][j] === 'R' || spots[i][j] === 'S') {
          spot[0] = j;
          spot[1] = i;
          return spot;
        }
      } else if (vehicle === 'motorcycle') {
        if (spots[i][j] === 'R' || spots[i][j] === 'S' || spots[i][j] === 'M') {
          spot[0] = j;
          spot[1] = i;
          return spot;
        }
      }
    }
  }
  return false;
};












console.log(whereCanIPark(
  [
    // COLUMNS ARE X
    // 0    1    2    3    4    5
    ['s', 's', 's', 'S', 'R', 'M'], // 0 ROWS ARE Y
    ['s', 'M', 's', 'S', 'r', 'M'], // 1
    ['s', 'M', 's', 'S', 'r', 'm'], // 2
    ['S', 'r', 's', 'm', 'r', 'M'], // 3
    ['S', 'r', 's', 'm', 'r', 'M'], // 4
    ['S', 'r', 'S', 'M', 'M', 'S']  // 5
  ],
  'regular'
));

console.log(whereCanIPark(
  [
    ['M', 'M', 'M', 'M'],
    ['M', 's', 'M', 'M'],
    ['M', 'M', 'M', 'M'],
    ['M', 'M', 'r', 'M']
  ],
  'small'
));

console.log(whereCanIPark(
  [
    ['s', 's', 's', 's', 's', 's'],
    ['s', 'm', 's', 'S', 'r', 's'],
    ['s', 'm', 's', 'S', 'r', 's'],
    ['S', 'r', 's', 'm', 'r', 's'],
    ['S', 'r', 's', 'm', 'R', 's'],
    ['S', 'r', 'S', 'M', 'm', 'S']
  ],
  'motorcycle'
));