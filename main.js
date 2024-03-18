


//Split Strings
function solution(str){
    let arr = []
    if (str.length%2 !== 0){
      str = str.padEnd(str.length+1,'_')
    }
    for (let i=0; i < str.length; i+=2) {
       arr.push(str.substring(i,i+2))
    }
    return arr
  }

  
//Find the middle element
function gimme (triplet) {
    maxValue = Math.max.apply(null, triplet)
    minValue = Math.min.apply(null, triplet)
    return (triplet.length) - (triplet.indexOf(maxValue)) - (triplet.indexOf(minValue))
  }


//Remove String Spaces
function noSpace(x){
    return x.replaceAll(' ','')
  }


//Convert a String to a Number!
const stringToNumber = function(str){
    return Number(str)
  }


//Remove First and Last Character
function removeChar(str){
    return str.substring(1,str.length-1)
  };


//Get the Middle Character
function getMiddle(s) {
    if (s.length%2 == 0){ 
      return s[s.length/2-1] + s[s.length/2]
    } else {
      return s[Math.floor(s.length/2)]
    }
  }


//String Repeat
function repeatStr (n, s) {
    return s.padStart(s.length*n,s)
  }


//Disemvowel Trolls
function disemvowel(str) {
    return str.replace(/[aeiou]/ig,'')
  }
  
  disemvowel("This website is for losers LOL!")


//Vowel Count
function getCount(str) {
    vowels = str.replaceAll(' ', '').match(/[aeiou]/g);
    if (vowels != null) {
      return vowels.length;
    } else {
      return 0;
      };
  };


//Create Phone Number
function createPhoneNumber(numbers){
    areaCode = numbers.slice(0,3).join('')
    phoneNumStart = numbers.slice(3,6).join('')
    phoneNumEnd = numbers.slice(6,10).join('')
    return `(${areaCode}) ${phoneNumStart}-${phoneNumEnd}`
  }


//Sum of two lowest positive integers
function sumTwoSmallestNumbers(numbers) {  
    let sorted = numbers.sort((a,b) => a - b)
    return sorted[0] + sorted[1]
  }



//Square(n) Sum
function squareSum(numbers){
    let sum = 0
    numbers.forEach( (num) => sum += (num*num) )
    return sum
  }


//Duplicate Encoder
function duplicateEncode(word){
    wordArr = word.toLowerCase().split('')
    const newArr = []
    for (i = 0; i < wordArr.length; i++) {
        let letterCount = 0
        wordArr.forEach( (check) => wordArr[i] == check && letterCount++ && console.log(`${wordArr[i]} , ${wordArr[check]}`))
        if (letterCount == 1) {
            newArr.push('(')
        } else {
          console.log(letterCount)
          newArr.push(')')
        }
    }
    return newArr.join('')
}


//Replace With Alphabet Position
function alphabetPosition(text) {
    let alphabet = 'abcdefghijklmnopqrstuvwxyz';
    const arrNum = [];
    const arrText = text.toLowerCase().split('');
    alphabet = alphabet.split('');
    for (i=0; i <= arrText.length; i++) {
      let position = alphabet.indexOf(arrText[i])+1;
      if (position != 0) {
        arrNum.push(position);
      }
    }
    text = arrNum.join(' ').replace('^0','')
    return text;
  }


//Counting sheep
function countSheeps(sheep) {
    let count = sheep.filter((sheep) => sheep == true)
    return count.length
  }


//Stop gninnipS My sdroW
function spinWords(string){ 
    const arr = string.split(" ")
    for (element of arr) {
      if (element.length >= 5) {
        revElement = element.split('').reverse().join('')
        arr.splice(arr.indexOf(element), 1, revElement)
      }
    }
    return arr.join(' ')
  }


//What is between?
function between(a, b) {
    const arr = [];
    if (a < b) {
      for (i=a; i<=b; i++) {
        arr.push(i);
      }
      return arr;
    };
  };


//Convert Boolean Values to Strings
function boolToWord( bool ){
    return bool ? "Yes" : "No";                                  
  };


//Return Negative
function makeNegative(num) {
    if (num > 0) {
      return -(num)
    } else return num
  }


//Reverse Strings
function solution(str){
    return str.split('').reverse().join('');
  }


//Opposite Number
function opposite(number) {
    return 0 - number;
  }


//Convert a Number to a String
function numberToString(num) {
    return num.toString();
  };


//Sum of Positive
function positiveSum(arr) {
    var sum = 0;
    for (i=0; i < arr.length; i++) {
      if (arr[i] > 0) {
        sum += arr[i];
      } 
    }
    return sum;
  }


//Multiply
function multiply(a, b){
    return a * b
  }


//Even or Odd Number
function evenOrOdd(number) {
    if (Number.isInteger(number)) {
      if (number % 2 === 0) {
        return "Even";
      } else {
        return "Odd";
      }
    }
    return "Invalid integer."
  }