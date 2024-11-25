"use strict";
window.addEventListener("load", start);

let iterationCount;

function binarySearch(search, values) {
  let min = 0;
  let max = values.length;
  let middle = findMean();
  let found = false;

  function findMean() {
    return Math.floor((max - min) / 2) + min;
  }

  do {
    middle = findMean();
    console.log(middle);

    const compareResult = comparefunc(values[middle], search);

    if (compareResult === 1) {
      max = middle;
    } else if (compareResult === -1) {
      min = middle + 1;
    } else {
      console.log(
        "Amount of iterations before finding the resutl: " + iterationCount
      );
      found = true;
      return middle;
    }
  } while (found !== true && max > min);
  return -1;
}

function comparefunc(index, search) {
  console.log(
    "This is the index value: " + index + " and this is search value: " + search
  );
  if (index < search) {
    console.log("for lav");
    return -1;
  } else if (index > search) {
    console.log("for høj ");
    return 1;
  } else {
    console.log("correct");
    return 0;
  }
}

function incrementIterationCounter() {
  iterationCount = iterationCount + 1;
}

function start() {
  let index = binarySearch(
    4,
    [21, 22, 23, 25, 27, 28, 29, 31, 32, 34, 35, 99, 1002]
  );
  console.log("Fundet 28 på " + index);
}