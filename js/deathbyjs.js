//STEP 1
// let str = prompt('Enter a word to sort it alphabetically:  ')

// const sort_word = (str) => {
//     let arr = []
//     for(let i=0; i < str.length; i++ ) {
//         arr[i] = str[i]
//     }
//    // console.log('arr:' + arr)
//     arr.sort()
//    // console.log('arr sorted: ' + arr)
//     let newStr = arr.join('')
//     return newStr
//   //  console.log('str:' + newStr)
// }
// console.log('Sorted string: ' + sort_word(str))




//STEP 2

// let str = prompt('Enter a string to capitalize first alphabet of every word:  ');
// console.log(toUpper(str));
// function toUpper(str) {
//     let words = str.split(' ');
//     let newWords = [];
//     for (let i = 0 ; i< words.length; i++){
//         newWords[i] = words[i][0].toUpperCase() + words[i].slice(1);
//         console.log(newWords);
//     }    
//     let newStr = newWords.join(' ');
//     return newStr;
// }
//STEP 3

// let str = prompt('Enter a string to find number of vowels:  ')
// console.log(numVowels(str))

// function numVowels(str) {
//     let vowelArr = str.match(/[aeiou]/g)
//     return vowelArr.length
// }


//STEP 4

// const characters ='ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789'
// let length = parseInt(prompt('Enter the lenth to generate randum length of String'))
// console.log(generateString(length))
// function generateString(length) {
//     let result = ' '
//     const charactersLength = characters.length
//     for ( let i = 0; i < length; i++ ) {
//         result += characters.charAt(Math.floor(Math.random() * charactersLength))
//     }
//     return result;
// }

//STEP 5

console.log(Longest_Country_Name(["Australia", "Germany", "United States of America"]));
function Longest_Country_Name(array){
    var longestWord = "";
    array.forEach(word => {
        if(word.length > longestWord.length) {
                  longestWord = word;
        }
    })
    return longestWord
}
