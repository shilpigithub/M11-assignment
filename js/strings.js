//STEP 1
// let uname = prompt("Enter your name: ")
// let len = uname.length
// alert(`Length of the name ${uname} is: ${len}`)

//STEP 2

// let uname = prompt("Enter your name: ")
// let char_index = prompt("Enter index to find char at:")
// alert(`Char at ${char_index} pos in the name ${uname} is: ${uname.charAt(char_index - 1)}`)

//STEP 3
// let fname = prompt("Enter your first name: ").trim()
// let lname = prompt("Enter your last name: ").trim()
// alert('Your name is: '+ fname.concat(" ").concat(lname))

//STEP 4
// let quote = 'The quick brown fox jumps over the lazy dog'
// alert('the index of the fox is '+ quote.indexOf('fox'))

//STEP 5
// let quote = 'The quick brown fox jumps over the lazy fox'
// alert('the last index of the fox is '+ quote.lastIndexOf('fox'))

//STEP 6

// let quote = 'The quick brown fox jumped over the lazy dog';
// let userName = prompt('Please enter your full name: ');
// alert(quote.replace('the lazy dog', userName));

//STEP 7

// let txt = 'The quick brown fox jumps over the lazy dog';
// let findWord = prompt('Enter the word to search in string: ');
// alert('the word found at : ' + txt.search(findWord));


//STEP 8
// let old_string = 'The quick brown fox jumps over the lazy dog';
// let new_string = old_string.slice(31);
//  alert(new_string.toUpperCase());

//STEP 9
// let txt = '            THE QUICK BROWN FOX JUMPS OVER THE LAZY DOG          ' ;
// alert(txt.trim().toLowerCase());


//STEP 10

let txt = 'the quick brown fox jumps over the lazy dog';
alert(txt.charAt(0).toUpperCase() + txt.slice(1));

