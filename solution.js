function myModifier(string){
  function verify(input){
    let res = [];
    for (let i = 0; i < input.length; i++){
      if(!res.includes(input[i]) && input[i].match(/\S+/g)){
        res.push(input[i]);
      }
    }
    return res.length;
  }
  let result = []; 
  let matches = string.match(/\S+/g);

//In this for loop I am iterating over the string as the variable matches has been set to the alphabetic matches in the string. The variable str has been left empty so that we can begin to put together the string according to the rules we've set.

//The str += is simple shorthand for concatating strings. Also in this first if statement, it refers to matches that are singular letters, thus having zero inputs/numbers.

  for (let i = 0; i < matches.length; i++){
    if(matches[i].length === 1) {
      let str = "";
      str += matches[i];
      result.push(str);
    }

//These are the alphabetic matches that will have inputs/numbers that began in the array's res and result, where they were pushed. By using let to name the variable str, and using the += to concatate the various matches we can now push the result to (str).

//1. Matches[i][0] tells us we are starting at the index of 0.

//2. The verify function and matches uses The substr() method, which returns the characters in a string beginning at the specified location through the specified number of characters. This is how we get the 3 alphanumeric results (unless we were to use supercalifragilisticexpialidocious)

    if(matches[i].length > 1){
      let str = "";
      str += matches[i][0] + verify(matches[i].substr(1, matches[i].length - 2)) + matches[i][matches[i].length - 1];
      result.push(str);
    }
  }
  return result.join(" "); 
}

myModifier("Western - Gorvernors - University + Tim Andrus = match made in JavaScript!");
