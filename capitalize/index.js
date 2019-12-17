// --- Directions
// Write a function that accepts a string.  The function should
// capitalize the first letter of each word in the string then
// return the capitalized string.
// --- Examples
//   capitalize('a short sentence') --> 'A Short Sentence'
//   capitalize('a lazy fox') --> 'A Lazy Fox'
//   capitalize('look, it is working!') --> 'Look, It Is Working!'

// function capitalize(str) {
  

    //first solution 
    // let newword;
    // for(let word of str.split(' '))
    // {
    
    //    if(!newword)
    //    {
    //     newword = '';
    //    }
    //    else{
    //     newword = newword+" ";
    //    }
      

    //    newword =newword+word[0].toUpperCase()+word.slice(1,word.length);
       
      
    // }
    // return(newword)



  // for(let [i, char] of str.split('').entries())
  //   {
    
       
  //      if(char===" ")
  //      {
           
  //          console.log("space")
  //      }
  //      else{
  //       console.log(char)
  //      }
      
  //   }






// }







function capitalize(str) {
  let newWord = [];
  for(word of str.split(" "))
  {
    newWord.push(word[0].toUpperCase() + word.slice(1))
  }
  console.log(newWord)
}


capitalize("look, it is working!")





module.exports = capitalize;
