const calculateChange = function(total, cash) {
  const changeBackObj = {};
  let changeBack = 0;
  changeBack = cash - total;
  if (changeBack > 0) {
    if (changeBack > 2000) {
      let change20 = changeBack / 2000;
      changeBackObj.twentyDollar = Math.floor(change20);
      changeBack = changeBack % 2000;
    }
    if (changeBack < 2000 && changeBack >= 1000) {
      let change10 = changeBack / 1000;
      changeBackObj.tenDollar = Math.floor(change10);
      changeBack = changeBack % 1000;
    }
    if (changeBack < 100 && changeBack >= 500) {
      let change5 = changeBack / 500;
      changeBackObj.fiveDollar = Math.floor(change5);
      changeBack = changeBack % 500;
    }
    if (changeBack < 500 && changeBack >= 200) {
      let change2 = changeBack / 200;
      changeBackObj.twoDollar = Math.floor(change2);
      changeBack = changeBack % 200;
    }
    if (changeBack < 200 && changeBack >= 100) {
      let change1 = changeBack / 100;
      changeBackObj.oneDollar = Math.floor(change1);
      changeBack = changeBack % 100;
    }
    if (changeBack < 100 && changeBack >= 25) {
      let changeQ = changeBack / 25;
      changeBackObj.quarter = Math.floor(changeQ);
      changeBack = changeBack % 25;
    }
    if (changeBack < 25 && changeBack >= 10) {
      let changeD = changeBack / 10;
      changeBackObj.dime = Math.floor(changeD);
      changeBack = changeBack % 10;
    }
    if (changeBack < 10 && changeBack >= 5) {
      let changeN = changeBack / 5;
      changeBackObj.nickel = Math.floor(changeN);
      changeBack = changeBack % 5;
    }
    if (changeBack < 5 && changeBack > 0) {
      let changeP = changeBack / 1;
      changeBackObj.penny = Math.floor(changeP);
      changeBack = changeBack % 1;
    }
    return changeBackObj;
  }
};

console.log(calculateChange(1787, 2000));
console.log(calculateChange(2623, 4000));
console.log(calculateChange(501, 1000));