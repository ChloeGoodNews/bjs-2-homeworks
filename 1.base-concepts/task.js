"use strict"
function solveEquation(a, b, c) {
  let arr = [];
  let d = Math.pow(b, 2)-4*a*c;
  let root;
  let rootSecond;

  if(d < 0){
    arr = [];
  } else if(d === 0) {
    root = -b/(2*a);
    arr[0] = root;
  } else if(d > 0) {
    root = (-b + Math.sqrt(d))/(2*a);
    rootSecond = (-b - Math.sqrt(d))/(2*a);
    arr[0] = root;
    arr[1] = rootSecond;
  }
  
  return arr;
}

function calculateTotalMortgage(percent, contribution, amount, countMonths) {
  let P = percent / 100 / 12;
  let S = amount - contribution;
  let n = countMonths;
  let monthlyPayment = S * (P + (P / (((1 + P)**n) - 1)));
  let totalPayment = Number((contribution + monthlyPayment*n).toFixed(2));
  return totalPayment;
}