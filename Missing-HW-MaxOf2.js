/* 
1. Define a function maxOfTwoNumbers that takes two numbers as arguments and returns the largest of them. Use the if-then-else construct available in Javascript. Do some googling to figure this out if you forget how conditionals work.
*/

// maxOfTwoNumbers = () => {
//   Math.max([number1, number2]);
// };
// console.log (maxOfTwoNumbers(8,9));

const maxOfTwoNumbers = (x, y) => {
  if (x > y) {
  return (x);
  } 
  else if (y > x) {
  return (y);
  } else {
  return 'There is no maximum!';
  }
}
maxOfTwoNumbers (5,17)



/*
2. Define a function maxOfThree that takes three numbers as arguments and returns the largest of them.
*/
maxOfThree = () => {
  Math.max([number1, number2, number3]);
};

maxOfThree = (x, y, z) => {
  if (x > y && x > z){
  return (x);
  }
  else if (y > x && y > z) {
  return (y);
  } 
  else if (z > x && z > y) {
  return (z);
} 
  else {
  return ('There is no Maximum')
  }
 }
console.log(maxOfThree(7,8,-2));

/*
3. Write a function isCharacterAVowel that takes a character (i.e. a string of length 1) and returns true if it is a vowel, false otherwise.
*/
isCharacterAVowel = (myLetter) => {
  let vowel = ['a', 'e', 'i', 'o', 'u', 'y']
  if (vowel.indexOf(myLetter.toLowerCase())=== -1){
  return 'Not a vowel'
  }
  else {
  return 'Yay Vowels, more in French!'
  }
};

console.log (isCharacterAVowel('y'));

/*
4. Define a function sumArray and a function multiplyArray that sums and multiplies (respectively) all the numbers in an array of numbers. For example, sumArray([1,2,3,4]) should return 10, and multiplyArray([1,2,3,4]) should return 24.
*/


sumArray = (number) => {
  let sum = 0;
  for (let i=0; i < number.length; i++) {
  sum += number[i]  
  }
  return sum;
};

multArray = (number) => {
  let mult = 1;
  for (let i=0; i < number.length; i++) {
  mult = mult * number[i];
}
  return mult;
}

console.log(sumArray([4, 5, 6]));
console.log(multArray([4, 5, 6]));


/*
5.Write a function that returns the number of arguments passed to the function when called.
*/
Argument = (number, number2) => {
  return (Argument.length);
}

console.log(Argument());


/*
6. Define a function reverseString that computes the reversal of a string. For example, reverseString("jag testar") should return the string "ratset gaj".
*/

reverseString = (str) => {
  let string = '';
  for (let i = str.length -1; i >= 0; i--)
  {string += str[i] }
  return string
};
console.log(reverseString('Friday'));

7. //Write a function findLongestWord that takes an array of words and returns the length of the longest one.

findLongestWord = (array) => {
  let wordLength = 0;
  for (let i=0; i<array.length; i++) {
    if (array[i].length > wordLength)
    wordLength = array[i].length
  }
  return wordLength;
}
console.log(findLongestWord(['House', 'red', 'Carmen', 'YayforVowels']))
/*
8. Write a function filterLongWords that takes an array of words and a number i and returns the array of words that are longer than i characters long.
*/
filterLongWords = (array, x) => {
  let longArray=[];
  for (let i=0; i<array.length; i++) {
    if (array[i].length > x)
    longArray.push(array[i]);
  }
  return longArray
};

console.log(filterLongWords(['Remember', 'some', 'thing'], 5))



// Bonus

// Add a method reverseString (from question 6) to the object String so that it is possible to call: "Per Scholas".reverseString().
// Write a function that takes a string as argument and returns an object where:
// the keys are the characters that occur in the string
// the values are the number of occurrences for each letter, regardless of the case
// For example, calling the function with the string "Per Scholas" will return:

// {
//   a: 1,
//   c: 1,
//   e: 1,
//   h: 1,
//   l: 1,
//   o: 1,
//   p: 1,
//   r: 1,
//   s: 2,
// }