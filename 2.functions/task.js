// Задача 1 "мин, мах, среднее"

function getArrayParams(...arr) {
  let sum = 0;
  let avg;
  let max = Math.max(...arr);
  let min = Math.min(...arr);
  
  for(let i = 0; i < arr.length; i++) {
    sum = sum + arr[i];
  }
  
  avg = Number((sum / arr.length).toFixed(2));
  return { min: min, max: max, avg: avg };
}


// Задача 2 "сумма элементов массива"
function summElementsWorker(...arr) {
  if(arr.length == 0) {
    return 0;
  }
  
  let sum = 0;
  
  for(let i = 0; i < arr.length; i++) {
    sum = sum + arr[i];
  } 
  return(sum);
}


// Возврат разницы между мах и мин значениями
function differenceMaxMinWorker(...arr) {
  if(arr.length == 0) {
    return 0;
  }
  
  let max = Math.max(...arr);
  let min = Math.min(...arr);
  let dif = max - min;

  return(dif);
}

differenceMaxMinWorker(2, 5)

// Вычисляем разницу сумм четных и не четных
function differenceEvenOddWorker(...arr) {
  if(arr.length == 0) {
    return 0;
  }
  
  let sumEvenElement = 0;
  let sumOddElement = 0;

  for(let i = 0; i < arr.length; i++) {
    if(arr[i] % 2 == 0){
      sumEvenElement = sumEvenElement + arr[i];
    } else {
      sumOddElement = sumOddElement + arr[i];
    }
  }
  
  let differenceEvenOdd = sumEvenElement - sumOddElement;
  
  return differenceEvenOdd;
}

// Средн всех чётных элементов
function averageEvenElementsWorker(...arr) {
  if(arr.length == 0) {
    return 0;
  }
  
  let sumEvenElement = 0;
  let countEvenElement = 0;
  
  for(let i = 0; i < arr.length; i++) {
    if(arr[i] % 2 == 0){
      sumEvenElement = sumEvenElement + arr[i];
      countEvenElement++;
    }
  }
  averageEvenElements = sumEvenElement / countEvenElement;
  return averageEvenElements;
}


// Задача 3
function makeWork (arrOfArr, func) {
  let maxWorkerResult = arrOfArr[0][0];

  for(let i = 0; i < arrOfArr.length; i++) {
    if(func(...arrOfArr[i]) > maxWorkerResult) {
      maxWorkerResult = func(...arrOfArr[i]);
    }
  }
  return maxWorkerResult;
}
