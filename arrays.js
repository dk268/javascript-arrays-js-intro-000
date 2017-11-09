var chocolateBars = ["snickers", "hundred grand", "kitkat", "skittles"]
function addElementToBeginningOfArray(originalArray, addedElement){
  var newerArray = [addedElement, ...originalArray];
}

function destructivelyAddElementToBeginningOfArray(originalArray, addedElement){
  originalArray.unshift(addedElement);  
  
}

function addElementToEndOfArray(originalArray, addedElement){
  var newerArray = [...originalArray, addedElement];
}

function destructivelyAddElementToEndOfArray(originalArray, addedElement) {
  originalArray.push (addedElement);
}

function accessElementInArray(originalArray, elementIndex) {
  return originalArray[elementIndex];
}

function destructivelyRemoveElementFromBeginningOfArray (originalArray) {
  originalArray.shift();
  return originalArray;
}

function removeElementFromBeginningOfArray (originalArray){
  var newerArray = originalArray.slice(1);
  return originalArray;
}

function destructivelyRemoveElementFromEndOfArray (originalArray){
  originalArray.pop();
  return originalArray;
}

function removeElementFromEndOfArray (originalArray){
  originalArray.slice(0, originalArray.length - 1);
  return originalArray;
}