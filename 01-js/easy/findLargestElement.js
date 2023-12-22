/*
  Write a function `findLargestElement` that takes an array of numbers and returns the largest element.
  Example:
  - Input: [3, 7, 2, 9, 1]
  - Output: 9
*/

function findLargestElement(numbers) {
    
    let max = 0;
    numbers.array.forEach(element => {
        if(max < element){
            max = element;
        }
    });
    return max;
}

findLargestElement([3, 7, 2, 9, 1])

module.exports = findLargestElement;