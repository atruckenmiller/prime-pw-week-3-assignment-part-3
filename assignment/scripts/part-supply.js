console.log('****** Part Supply *******');
// REQUIRED FEATURES

// 1. Create a variable called 'partsNeeded' with a value of the number 40
//    & console.log the variable
console.log('1. Number of partsNeeded:');
let partsNeeded = 40;

console.log('partsNeeded:', partsNeeded);
// 2. Create a variable call 'supplyChanges' set it to an array containing
//    the following numbers: 3, 5, -6, 0, 7, 11
console.log('2. Array of supplyChanges:');
let supplyChangesArray = [ 3, 5, -6, 0, 7, 11];
console.log('Numbers are:', 11);

// 3. Console log the value of 'supplyChanges' at index 2
console.log('3. Item at index 2 is:');

console.log('Item at Index 2:', supplyChangesArray[2]);
// 4. The last item was added by mistake. Remove it from the 'supplyChanges'
//    array & console.log the value removed.
console.log('4. Removed item:');
supplyChangesArray.pop(11)
console.log('Removed the last number:', supplyChangesArray);

// 5. A delivery of 25 more parts arrived. Add the value 25 to the end of the array
console.log('5. Adding 25 to supplyChanges.');
supplyChangesArray.push(25);
console.log('Added new number', supplyChangesArray);


// 6. Write a `for` loop that shows each value in the 'supplyChanges' array
//    Use a console.log formatted as follows, where x is the value from the array
//    - if it is a positive number (greater than 0), log 'Added x parts.'
//    - if the value is 0, skip it. Do not log it to the console.
//    - if the value is negative, format the log as 'Part count -x.'
console.log('6. Showing supplyChanges...');

for ( let index = 0; index < supplyChangesArray.length; index++){
  if (supplyChangesArray[index] > 0){
    console.log('added', supplyChangesArray[index], 'parts');
  }

  if( supplyChangesArray[index] < 0 ){
    console.log('Part count', supplyChangesArray[index]);
  }
}


// STRETCH GOALS
console.log('---  Stretch Goals  ---');
// 7. Rewrite the `for` loop from #6 as a `for of` loop.
console.log('7. Showing supplyChanges with "for of" loop');

for (let item of supplyChangesArray){
  if(item == 0){
    item+=0
  }
  if (item < 0){
    console.log('supplyChanges', item);
  }
  if (item > 0){
    console.log('supplyChanges', item);
  }
}

// 8. Rewrite the `for` loop from #6 as a `while` loop.
console.log('8. Showing supplyChanges with "while" loop');
let index = 0;

while(index < supplyChangesArray.length){
  if (supplyChangesArray[index] > 0) {
    console.log("added", supplyChangesArray[index], "parts");
  }
  if (supplyChangesArray[index] < 0){
    console.log('Part count', supplyChangesArray[index]);
  }
  index = index + 1;
}

// 9. Write a loop to determine the total number of parts available by
//    adding up all the numbers in the 'supplyChanges' array.

// Code Explanation: I decided to use parts + total; to find the running total, and started out with 0; and then for each part added in,
// I used it to get the running total of items from the supplyChanges Array.
console.log('9. Total supplies available is:');

let total = 0;
let parts = 0;

for (parts of supplyChangesArray){
  total = parts + total
  console.log('Running Total', total);
}
