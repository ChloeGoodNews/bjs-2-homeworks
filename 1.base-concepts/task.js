"use strict"
function solveEquation(a, b, c) {
  let arr = [];
  let discriminant = Math.pow(b, 2)-4*a*c;
  let root;
  let rootSecond;

  if(discriminant < 0){
  } else if(discriminant === 0) {
    root = -b/(2*a);
    arr[0] = root;
  } else if(discriminant > 0) {
    root = (-b + Math.sqrt(discriminant))/(2*a);
    rootSecond = (-b - Math.sqrt(discriminant))/(2*a);
    arr[0] = root;
    arr[1] = rootSecond;
  }
  
  return arr;
}

function calculateTotalMortgage(percent, contribution, amount, countMonths) {
  let monthlyPercent = percent / 100 / 12;
  let loanBody = amount - contribution;
  let monthlyPayment = loanBody * (monthlyPercent + (monthlyPercent / (((1 + monthlyPercent)**countMonths) - 1)));
  return Number((monthlyPayment * countMonths).toFixed(2));
}