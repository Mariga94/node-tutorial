const {readFileSync, writeFileSync} = require('fs'); //destructuring ES6 method


const first = readFileSync('./content/first.txt','utf8')
const second = readFileSync('./content/second.txt','utf8')

// console.log(first, second)

writeFileSync('./content/result-sync.txt',`Here is the result: ${first}, ${second}`,
{flag: 'a'}
)




// const {readFile, writeFile} = require('fs'); //destructuring ES6 method


// readFile('./content/first.txt', (err,result) => {
//     if (err) {
//         console.log(err)
//         return
//     }
    
//     const first = result;
//     readFile('./contentsecond.txt', 'utf-8',(err, result) => {
//         console.log(err)
//         return
//     },
//      const second = result;
//      writeFile('./content/result-async.txt', `Result: ${first}, ${second}`,
//      (err, result) => {
//          if(err) {
//              console.log(err)
//              return
//          }
//          console.log(result)
//      })
//     )
// })