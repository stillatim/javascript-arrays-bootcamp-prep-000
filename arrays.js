var chocolateBars = ['snickers', 'hundred grand', 'kitkat', 'skittles'];

function destructivelyAddElementToBeginningOfArray(a, b) {
  return a.unshift(b) } 
  
function addElementToBeginningOfArray(a, b) {
 return [b, ...a]
}

function destrutivelyAddElementToEndOfArray(a, b) {
  return a.push(b)
}

function addElementToEndOfArray(a, b) {
  return [...a, b]
}

function accessElementInArray(a, b) {
  console.log (a[b]) 
}

function destructivelyRemoveElementFromBeginningOfArray(a) { 
  return a.shift()
  console.log destructivelyRemoveElementFromBeginningOfArray
}

function removeElementFromBeginningOfArray(a) {
  return a.slice() 
  console.log a 
}

function desctructivelyRemoveElementFromEndOfArray(a) {
  return a.pop() 
  console.log a 
}

function removeElementFromEndOfArray(a) { 
  return a.slice(0, a.length - 1) 
}

