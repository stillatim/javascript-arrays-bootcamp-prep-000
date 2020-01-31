

var chocolateBars = new Array("snickers", "hundred grand", "kitkat", "skittles");


function destructivelyAddElementToBeginningOfArray(a, b) {
  return a.unshift(b) 
} 
  
function addElementToBeginningOfArray(a, b) {
 return [b, ...a]
}


function destructivelyAddElementToBeginningOfArray(a, b) {
  return a.push(b)
}

function addElementToEndOfArray(a, b) {
  return [...a, b]
}


function accessElementInArray(a, b) {
  console.log (a[b]) 
}
