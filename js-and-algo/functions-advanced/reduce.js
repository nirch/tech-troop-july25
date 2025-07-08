const numArr = [2, 18, -33, 45, 7, 19];

let sum = 0;
for (const num of numArr) {
  sum += num;
}
console.log(sum);

const sum2 = numArr.reduce(function (previous, current) {
  return previous + current;
}, 0);

console.log(sum2);



// "the quick brown fox jumps over the lazy dog the fox"
// {
//   the: 3,
//   quick: 1,
//   ...
// }


const sentence = "the quick brown fox jumps over the lazy dog the fox"

const occurrences = countWords(sentence.split(" "));
console.log(occurrences);

function countWords(words) {
  const wordCount = {};

  for (const word of words) {
    // if (wordCount[word]) {        // if word exists inside wordCount
    //   ++wordCount[word];
    // } else {
    //   wordCount[word] = 1;
    // }
    // wordCount[word] = (wordCount[word] || 0) + 1;
    wordCount[word] = wordCount[word] ? wordCount[word]+1 : 1;
  }

  return wordCount;
}

function countWordsReduce(words) {
  return words.reduce(function(wordCount, word) {
    wordCount[word] = wordCount[word] ? wordCount[word]+1 : 1;
    return wordCount;
  }, {})
}

const occurrences2 = countWordsReduce(sentence.split(" "));
console.log(occurrences2);





// let obj = {
//   bla: 0
// }

// if (obj[bla]) {         // FALSE

// }

// if (Object.hasOwn(obj, "bla")) {  // TRUE
  
// }




