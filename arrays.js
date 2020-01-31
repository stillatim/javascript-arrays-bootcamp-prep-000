

var chocolateBars = new Array("snickers", "hundred grand", "kitkat", "skittles");


function destructivelyAddElementToBeginningOfArray(a, b) {
  return a.unshift(b) 
} 
  
function addElementToBeginningOfArray(a, b) {
 return [b, ...a]
}
