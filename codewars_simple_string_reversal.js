/*
In this Kata, we are going to reverse a string while maintaining the spaces (if any) in their original place.

For example:

solve("our code") = "edo cruo"
-- Normal reversal without spaces is "edocruo". 
-- However, there is a space at index 3, so the string becomes "edo cruo"

solve("your code rocks") = "skco redo cruoy". 
solve("codewars") = "srawedoc"
More examples in the test cases. All input will be lower case letters and in some cases spaces.

Good luck!
*/

const solve = (str) => {
   let indexObj = {};
   let string = '';
   for(let i = 0; i < str.length; i++) {
      if(str[i] === ' ') {
         indexObj[i] = i;
      }
   }
  console.log(indexObj);
   for(let i = str.length - 1; i > -1; i--) {
     console.log(indexObj[i]);
      if(string[indexObj[i]] === undefined && indexObj[i] === i) {
         string += ' ';
        if(str[i] !== ' ') {
          string += str[i];
        }
      } else {
         if(str[i] !== ' ') {
            string += str[i];
         }
      }
   }

   return string;
}