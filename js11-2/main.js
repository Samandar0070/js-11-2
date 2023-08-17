function findElement(element,parent = document){
    return document.querySelector(element)
}

let words = "text"
let theLongestWord = words.split(" ")
var toFindLongestWord = 0;

for (let i = 0; i < theLongestWord.length; i++) {
    if (theLongestWord[i].length > toFindLongestWord) {
        var toFindLongestWord = theLongestWord[i].length;
        console.log(theLongestWord[i]);
    }
}