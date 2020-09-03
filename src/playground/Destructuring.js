/*




*/

// const book = {
//     title: 'ego is the enemy',
//     author: 'ryan holiday',
//     publisher: {
//         // name: 'Penguin'
//     }
// }

// const {name:publisherName = 'Self Published'} = book.publisher


// console.log(publisherName) // Penguin or self published


const item = ['Coffee(hot)', 2.00, '2.50', 2.75]
const [order,,Medium] = item
console.log(`Medium ${order} costs $${Medium}`)