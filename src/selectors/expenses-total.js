// const moment = require('moment')



export default (arrayToReduce )=>{
    if(!arrayToReduce || arrayToReduce.length < 1){
        return 0
    }else{
        return arrayToReduce.map((e)=>{
            return e.amount
        }).reduce((total, amount)=>{
            return total + amount
                })
    }
    
    
  



 }

