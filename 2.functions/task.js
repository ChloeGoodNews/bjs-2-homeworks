function getArrayParams(...arr) {
  let max = Math.max(...arr);
  let min = Math.min(...arr);
  let sum = arr.reduce(function(a,b){
    return a+b;
  }, 0);
  let avg = Number((sum / arr.length).toFixed(2));

  return { min: min, max: max, avg: avg };
}

function summElementsWorker(...arr) {
  return arr.reduce((currentSum, currentNumber) => currentSum + currentNumber, 0);
}

function differenceMaxMinWorker(...arr) {
  if(arr.length === 0) {
    return 0;
  }

  let max = Math.max(...arr);
  let min = Math.min(...arr);
  return max - min; 
}

function differenceEvenOddWorker(...arr) {
  let sumEvenElement = 0;
  let sumOddElement = 0;
  
  for(let i = 0; i < arr.length; i++) {
    if(arr[i] % 2 === 0) {
      sumEvenElement += arr[i];
    } else {
      sumOddElement += arr[i];
    }
  }
    return sumEvenElement - sumOddElement;
  }


function averageEvenElementsWorker(...arr) {
  let sumEvenElement = 0;
  let countEvenElement = 0;

  for(let i = 0; i < arr.length; i++) {
    if(arr[i] % 2 === 0) {
      sumEvenElement += arr[i];
      countEvenElement += 1;
    }
  }

  if(arr.length === 0) {
    return 0;
  }

  return sumEvenElement / countEvenElement;
}

function makeWork(arrOfArr, func) {

  const funcResult = [func()];

	for (let i = 0; i < arrOfArr.length; i++) {
    funcResult.push(func(...arrOfArr[i]));
	}

		let maxWorkerResult = Math.max(...funcResult);
		return maxWorkerResult;
}