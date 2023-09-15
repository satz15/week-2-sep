// 1. Implement a function to find the first non-repeating character in a string.

function firstNonRepeatingCharacter(str) {
    const charCount = {};
    for (const char of str) {
        charCount[char] = (charCount[char] || 0) + 1 ;
    }

    for (const char of str) {
        if (charCount[char] === 1) {
            return char ;
        }
    }
    return null;
}
console.log(firstNonRepeatingCharacter('programming'));
console.log(firstNonRepeatingCharacter('aabbcc'));
console.log(firstNonRepeatingCharacter('abcdef'));

// 4. Write a function to convert a Roman numeral to an integer.

function romanToInteger(s) {
    const romanNumerals = {
    'I': 1,
    'V': 5,
    'X': 10,
    'L': 50,
    'C': 100,
    'D': 500,
    'M': 1000,
    };
    let result = 0;
    let prevValue = 0;

    for (let i = s.length - 1; i >= 0; i--){
        const currentChar = s[i];
        const currentValue = romanNumerals[currentChar];

        if (currentValue < prevValue) {
            result -= currentValue;
        } else {
            result += currentValue;
        }
        prevValue = currentValue
    }
    return result;
}
console.log(romanToInteger('III'));
console.log(romanToInteger('IV'));
console.log(romanToInteger('IX'));
console.log(romanToInteger('LVIII'));

// 5. Implement a function to reverse words in a sentence without reversing the characters within
// each word

function reverseWords(sentence) {
    const words = sentence.split('');
    const reversedWords = words.reverse();
    const reversedSentence = reversedWords.join('');
    return reversedSentence;
}
  console.log(reverseWords('Hi this is john'));
  console.log(reverseWords('studying Fullstack course'));

//   6. Write a function to calculate the sum of all multiples of 3 or 5 below a given number.

function sumMultiplesOf3And5(limit) {
    let sum = 0;
    for (let i = 1; i < limit; i++) {
        if (i % 3 === 0 || i % 5 === 0) {
            sum += i;
        }
    }
    return sum;
}
console.log(sumMultiplesOf3And5(10));
console.log(sumMultiplesOf3And5(30));

// 8. Implement a function to check if a given number is a perfect number (sum of its divisors
//     excluding itself equals the number).

function isPerfectNumber(num) {
    if ( num <= 0 ) {
        return false;
    }
    let sum = 0 ;
   for (let i = 1; i < num; i++ ) {
    if (num % i === 0 ) {
        sum += i;
    } 
   }
   return sum === num ;
}
console.log(isPerfectNumber(6));
console.log(isPerfectNumber(28));
console.log(isPerfectNumber(22));

// 9. Create a function to find the intersection of two sorted arrays, allowing for duplicate
// elements.

function intersectWithDuplicates(arr1 , arr2) {
    const result = [];
    let i = 0 ;
    let j = 0 ;

    while (i < arr1.length && j < arr2.length){
        if (arr1[i] === arr2[j]){
            result.push(arr1[i]);
            i++;
            j++;
        } else if (arr1[i] < arr2[j]) {
            i++;
        } else {
            j++
        }
    }
    return result;
}
console.log(intersectWithDuplicates([1, 2, 2, 3], [2, 2, 3, 4])); 
console.log(intersectWithDuplicates([3, 4, 2, 1, 5], [1, 3, 2]));