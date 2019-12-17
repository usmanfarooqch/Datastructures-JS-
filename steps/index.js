// --- Directions
// Write a function that accepts a positive number N.
// The function should console log a step shape
// with N levels using the # character.  Make sure the
// step has spaces on the right hand side!
// --- Examples
//   steps(2)
//       '# '
//       '##'
//   steps(3)
//       '#  '
//       '## '
//       '###'
//   steps(4)
//       '#   '
//       '##  '
//       '### '
//       '####'

// function steps(n) {
//     for(let i=0; i<n;i++){
//         let steps = "";
//         for(let j=0;j<=i;j++){
//             steps+="#";
//         }
//         for(let k=i;k<n-1;k++){
//             steps+=" ";
//         }
//         console.log(steps);
//     }
// }



// function steps(n) {
//     for (let col = 0; col < n; col++) {
//         let steps = "";
//         for (let row = 0; row < n; row++) {
//             if (col>= row) {
//                 steps += "#"
//             }
//             else {
//                 steps += " "
//             }
//         }
//         console.log(steps);
//     }
// }


// function steps(n, row=0, stair="") {
  
//     if(n===row)
//     {
//         return;
//     }
//     if(n===stair.length)
//     {
//         console.log(stair);
//         return steps(n, row+1);
//     }
//     if(stair.length<=row)
//     {
//         stair+="#";
//     }
//     else{
//         stair+=" ";
//     }
//     steps(n, row, stair)


// }





function steps(size)
{
  
    for(let row = 1; row<=size; row++){
       let hashes = "";
        for(let col=1; col<=size; col++){
            if(col<=row){
            hashes = hashes+"#";
            }
            else{
                hashes = hashes+"u";
            }
        }
        
        console.log(hashes);
    }
    
}


steps(3);

module.exports = steps;
