


export default (expenses, {text, sortBy, startDate, endDate}) => {
    return expenses.filter((expense)=>{
  const startDateMatch = typeof startDate !== 'number' || expense.createdAt >= startDate
  const endDateMatch = typeof endDate !== 'number' || expense.createdAt >= endDate
  const textMatch = typeof text !== 'string' || expense.description.toLowerCase().includes(text.toLowerCase()) 
  return startDateMatch&&endDateMatch&&textMatch
    }).sort((a, b)=>{
      if(sortBy === 'date'){
          
          return a.createdAt - b.createdAt
    }else if (sortBy === 'amount'){
  
        return b.amount - a.amount  
    }else{
        console.log('wrong')
    }
  })
  };
  