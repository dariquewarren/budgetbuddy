// const moment = require('moment')



export default (arrayToReduce = [{amount: 0}])=>{
    
    
    
  return arrayToReduce.map((e)=>{
        return e.amount
    }).reduce((total, amount)=>{
        return total + amount
            })



 }








 
// const total = selectExpensesTotal(expenses)// map and reduce
// console.log(total) // 114195

// tests to creeate 
/*

return 0 if no expeses
should correctly correctly add one expense
should add multiple expenses

 */

