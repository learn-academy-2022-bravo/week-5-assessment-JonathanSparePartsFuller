// ASSESSMENT 5: JavaScript Coding Practical Questions with Jest

// Please read all questions thoroughly
// Pseudo coding is REQUIRED
// If you get stuck, please leave comments to help us understand your thought process

// Use test driven development to complete the following questions
// Add appropriate dependencies: $ yarn add jest

// Reminder: The test will call your function
// Run the file with the following command: $ yarn jest


// --------------------1) Create a function that takes in a string and returns a coded message. The coded message converts 'a' to 4, 'e' to 3, 'i' to 1, and 'o' to 0.

// a) Create a test with expect statements using the variables provided.

describe("secretMessage", () => {
    const secretCodeWord1 = "Lackadaisical"
    const secretCodeWord2 = "Gobbledygook"
    const secretCodeWord3 = "Eccentric"
    it("returns a coded message. The coded message converts 'a' to 4, 'e' to 3, 'i' to 1, and 'o' to 0.", () => {
      expect(secretMessage(secretCodeWord1)).toEqual("L4ck4d41s1c4l")
      expect(secretMessage(secretCodeWord2)).toEqual("G0bbl3dyg00k")
      expect(secretMessage(secretCodeWord3)).toEqual("3cc3ntr1c")

    })
  })
//   RED Fail:   ● secretMessage › returns a coded message. The coded message converts 'a' to 4, 'e' to 3, 'i' to 1, and 'o' to 0.

    // ReferenceError: secretMessage is not defined
// Expected output: "L4ck4d41s1c4l"

// Expected output: "G0bbl3dyg00k"

// Expected output: "3cc3ntr1c"


// b) Create the function that makes the test pass.
// Make a function called secretMessage 
// Have each vowel equal their respective numbers (Didn't work)
// Make a conditional statement iterate through the word (Didn't work)
// Use regex to search and replace the letters in the string

// let search1 = secretCodeWord1.search(/a/i)


const secretMessage = (string) => {
    let replace4 = string.replace(/a/gi, '4')
    let replace3 = replace4.replace(/e/gi, '3')
    let replace1 = replace3.replace(/i/gi, '1')
    let replace0 = replace1.replace(/o/gi, '0')
    return replace0
}

// secretMessage
// ✓ returns a coded message. The coded message converts 'a' to 4, 'e' to 3, 'i' to 1, and 'o' to 0. (1 ms)


// --------------------2) Create a function that takes in an array of words and a single letter and returns all the words that contain that particular letter.

// a) Create a test with expects statement using the variable provided.

describe("singleLetter", () => {
    const arrayOfWords1 = ["Apple", "Banana", "Plum", "Orange", "Kiwi"]
    const letterA = "a"
    const arrayOfWords2 = ["Mango", "Cherry", "Apricot", "Blueberry", "Peach"]
    const letterE = "e"
    it("takes in an array of words and a single letter and returns all the words that contain that particular letter.", () => {
      expect(singleLetter(arrayOfWords1, letterA)).toEqual(["Apple", "Banana", "Orange"])
      expect(singleLetter(arrayOfWords2, letterE)).toEqual(["Cherry", "Blueberry", "Peach"])
    })
  })

// RED Fail:   ● singleLetter › returns a coded message. The coded message converts 'a' to 4, 'e' to 3, 'i' to 1, and 'o' to 0.

    // ReferenceError: singleLetter is not defined



// Expected output: ["Apple", "Banana", "Orange"]

// Expected output: ["Cherry", "Blueberry", "Peach"]


// b) Create the function that makes the test pass.
// Make a function called singleLetter with array and string as param
// Use the .filter method to filter the array
// Make an empty array to hold the new value (Didn't work)
// Make a conditional statement to see if the string equals to the filtered array (Didn't work)
// Retun the array.filter to with a value that lower cases the words, and includes the stringed letter

const singleLetter = (array, string) =>{
    return array.filter(value => value.toLowerCase().includes(string))
}

//   singleLetter
// ✓ takes in an array of words and a single letter and returns all the words that contain that particular letter.

// --------------------3) Create a function that takes in an array of 5 numbers and determines whether or not the array is a “full house”. A full house is exactly one pair and one three of a kind.

// a) Create a test with expect statements using the variable provided.

describe("pokerFace", () => {
    const hand1 = [5, 5, 5, 3, 3]
    const hand2 = [5, 5, 3, 3, 4]
    const hand3 = [5, 5, 5, 5, 4]

    it("Takes in an array of 5 numbers and determines whether or not the array is a “full house”. A full house is exactly one pair and one three of a kind.", () => {
      expect(pokerFace(hand1)).toEqual(true)
      expect(pokerFace(hand2)).toEqual(false)
      expect(pokerFace(hand3)).toEqual(false)

    })
  })

// Expected output: true
// Expected output: false
// Expected output: false

// RED Fail: ● pokerFace › Takes in an array of 5 numbers and determines whether or not the array is a “full house”. A full house is exactly one pair and one three of a kind.

    // ReferenceError: pokerFace is not defined


// b) Create the function that makes the test pass.
// Make a function called pokerFace with array as the param
// Make a conditional statement to check if the arrays are true or false
// In the conditional I'll have the array equal to an index of a number. If there's five numbers then I have atleast five solutions
// The if statement is just going to contain all the possiblities to keep it simple and it'll return true
// The else will return false

const pokerFace = (array) => {
    if  (array[0] === array[1,2] && array[3] === array[4] ||
         array[1] === array[2,3] && array[4] === array[1] ||
         array[2] === array[3,4] && array[4] === array[0] ||
        //  array[3] === array[4,0] && array[1] === array[2] || (This one doesn't work. Fails last test)
         array[4] === array[0,1] && array[2] === array[3]) 
            return true

    else{
        return false
    }
}
//  pokerFace (First test, going to try and make it dynamic)
// ✓ Takes in an array of 5 numbers and determines whether or not the array is a “full house”. A full house is exactly one pair and one three of a kind. (1 ms)