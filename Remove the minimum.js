//Remove the minimum
function removeSmallest(numbers) {
  var smallest = Math.min(...numbers)
  numbers.splice(numbers.indexOf(smallest), 1)
  return numbers
}