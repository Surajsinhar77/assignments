/*
  Write a function `isAnagram` which takes 2 parameters and returns true/false if those are anagrams or not.
  What's Anagram?
  - A word, phrase, or name formed by rearranging the letters of another, such as spar, formed from rasp.
*/

function isAnagram(str1, str2) {

  if(str1.length != str2.length){
    return false;
  }

  let ob = {}
  for(let i =0; i<str1.length; i++){
    if(str1[i] == ' '){
      continue;
    }
    ob[str1[i].toLowerCase()] = (ob[i] || 0)+1;
  }

  console.log(ob);

  for(let i =0; i<str2.length; i++){
    if(str2[i] == ' '){
      continue;
    }
    if(!(str2[i].toLowerCase() in ob) || !(ob[str2[i].toLowerCase()] >= 0)){
      return false;
    }else{
      ob[str2[i].toLowerCase()]-=1;
    }
  }
  return true;
}

// console.log(isAnagram('Debit Card', 'Bad Credit'));

module.exports = isAnagram;
