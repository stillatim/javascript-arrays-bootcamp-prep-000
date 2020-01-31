
var chocolateBars = ['snickers', 'hundred grand', 'kitkat', 'skittles']; 

function addElementToBeginningOfArray(a, b) {
  return [b, ...a]
}

function destructivelyAddElementToBeginningOfArray(a, b) {
  return a.unshift(b) 
}

function addElementToEndOfArray(a, b) {
  return [...a, b] 
}

function destructivelyAddElementToEndOfArray(a, b) {
  return a.push(b) 
}

function accessElementInArray(a, b) {
  return (a[b])
}

function destructivelyRemoveElementFromBeginningOfArray(a) {
  return a.shift(b)
}

