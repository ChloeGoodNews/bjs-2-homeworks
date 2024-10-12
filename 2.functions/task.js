function getArrayParams(...arr) {
  let min = Infinity;
  let max = -Infinity;
  let sum = 0;
  let result = {};

  max = Math.max(...arr);
  min = Math.min(...arr);
  sum = arr.reduce(function(a,b){
    return a+b;
  }, 0);
  let avg = Number((sum / arr.length).toFixed(2));

  if(arr.length === 0){
    result = 0;
  } else {
    result = { min: min, max: max, avg: avg }
  }

  return result;
}

function getArrayParams(...arr) {
  let min = Infinity;
  let max = -Infinity;
  let sum = 0;
  let result = {};

  for(i = 0; i < arr.length; i++) {
    if(arr[i] > max) {
      max = arr[i];
    }
    if(arr[i] < min) {
      min = arr[i];
    }
    sum += arr[i];
  }

  let avg = Number((sum / arr.length).toFixed(2));

  if(arr.length === 0){
    result = 0;
  } else {
    result = { min: min, max: max, avg: avg }
  }

  return result;
}

function summElementsWorker(...arr) {
  let sum = 0;

  if(arr.length === 0) {
    sum = 0;
  } else {
    sum = arr.reduce(function(currentSum, currentNumber){
      return currentSum + currentNumber;
    }, 0);
  }
  return sum;
}

function summElementsWorker(...arr) {
  let sum = 0;
  
  if(arr.length === 0) {
    sum = 0;
  } else {
  for(i = 0; i < arr.length; i++) {
    sum += arr[i];
  }
  }
  return sum;
}

function differenceMaxMinWorker(...arr) {
  let min = Infinity;
  let max = -Infinity;
  let diff = 0;

  if(arr.length === 0){
    diff = 0;
  } else {
    for (i = 0; i < arr.length; i++) {
      if (arr[i] > max) {
        max = arr[i];
      }
      if (arr[i] < min) {
        min = arr[i];
      }
      diff = max - min;
    }
  }
  return diff;
}

function differenceMaxMinWorker(...arr) {
  let max = 0;
  let min = 0;
  let diff = 0;

  if(arr.length === 0) {
    diff = 0;
  } else {
  max = Math.max(...arr);
  min = Math.min(...arr);
  diff = max - min; 
  }

  return diff;
}

function differenceEvenOddWorker(...arr) {
  let sumEvenElement = 0;
  let sumOddElement = 0;
  let diff = 0;

  for(let i = 0; i < arr.length; i++) {
    if(arr[i] % 2 === 0) {
      sumEvenElement += arr[i];
    } else {
      sumOddElement += arr[i];
    }
  }

  if(arr.length === 0) {
    diff = 0;
  }else {
    diff = sumEvenElement - sumOddElement;
  }
    return diff;
  }


function averageEvenElementsWorker(...arr) {
  let sumEvenElement = 0;
  let countEvenElement = 0;
  let result = 0;

  for(let i = 0; i < arr.length; i++) {
    if(arr[i] % 2 === 0) {
      sumEvenElement += arr[i];
      countEvenElement += 1;
    }
  }

  if(arr.length === 0) {
    result = 0;
  } else {
    result = sumEvenElement / countEvenElement;
  }

  return result;
}

function makeWork (arrOfArr, func) {
  let maxWorkerResult = -Infinity;

  for(let i = 0; i < arrOfArr.length; i++) {
    func(...arrOfArr[i]);
  }
  const funcResult = func();

  let max = Math.max(...funcResult);

  if(max > maxWorkerResult) {
    maxWorkerResult = max;
  }

  return maxWorkerResult;
}
