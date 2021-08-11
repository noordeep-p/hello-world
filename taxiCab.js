const blocksAway = function(directions) {
  let taxiAngle;
  let taxiLocation = {east: 0, north: 0};
  for (let i = 0; i < directions.length; i += 2) {
    // find out in what direction the taxi is travelling in reference to its angle of travel
    if (taxiAngle === undefined) {
      if (directions[i] === 'right') {
        taxiAngle = 0;
      } else {
        taxiAngle = 90;
      }
    } else if (directions[i] === 'right') {
      taxiAngle -= 90;
    } else if (directions[i] === 'left') {
      taxiAngle += 90;
    }
    // if the added range of taxi direction/ angles exceed 360 or go below 0 then adjust back to the reflex angle on the grid
    if (taxiAngle < 0) {
      taxiAngle += 360;
    } else if (taxiAngle > 359) {
      taxiAngle -= 360;
    }
    // increment the location of the taxicab arrounding to direction
    if (taxiAngle === 0) {
      taxiLocation.east += directions[i + 1];
    } else if (taxiAngle === 90) {
      taxiLocation.north += directions[i + 1];
    } else if (taxiAngle === 180) {
      taxiLocation.east -= directions[i + 1];
    } else if (taxiAngle === 270) {
      taxiLocation.north -= directions[i + 1];
    }
  }
  return taxiLocation;
};

console.log(blocksAway(["right", 2, "left", 3, "left", 1]));
console.log(blocksAway(["left", 1, "right", 1, "left", 1, "right", 1, "left", 1, "right", 1]));
console.log(blocksAway(["left", 3, "right", 1, "right", 3, "right", 1]));
