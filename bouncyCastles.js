const PI = 3.14159 ;

const sphereVolume = function (radius) {
  let vol1 = 4/3 * PI
  return vol1 * radius ** 3;
}

console.log(4186 < sphereVolume(10) && sphereVolume(10) < 4189);

const coneVolume = function (radius, height) {
  let vol1 = PI * radius ** 2;
  return vol1 * height/ 3;
}

console.log(45 < coneVolume(3, 5) && coneVolume(3, 5) < 49);

const prismVolume = function (height, width, depth) {
  let vol1 = height * width * depth;
  return vol1;
}

console.log(prismVolume(3, 4, 5) === 60);

const totalVolume = function (solids) {
  let totalVol = [];
  let finalVol = 0;
  for(solid of solids){
    if(solid === largeSphere){
      totalVol.push(sphereVolume(largeSphere.radius));
    } else if(solid === smallSphere){
      totalVol.push(sphereVolume(smallSphere.radius));
    } else if(solid === cone){
      totalVol.push(coneVolume(cone.radius, cone.height));
    }
  }
  for(let i = 0; i < totalVol.length; i++){
    finalVol += totalVol[i];
  }
  return Math.round(finalVol);
}

const largeSphere = {
  type: 'sphere',
  radius: 40
}

const smallSphere = {
  type: 'sphere',
  radius: 10
}

const cone = {
  type: 'cone',
  radius: 3,
  height: 5
}

const duck = [
  largeSphere,
  smallSphere,
  cone
]

console.log(272000 < totalVolume(duck) && totalVolume(duck) < 275000);