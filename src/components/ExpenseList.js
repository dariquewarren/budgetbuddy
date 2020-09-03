import React from 'react'
import { connect} from 'react-redux'
import ExpenseListItem from './ExpenseListItem'
const ExpenseList = (props)=>(
    <div>
    <h1>Expense List</h1>
  
    {props.expenses.length}
    {props.expenses.map((expense)=>{
        return <ExpenseListItem key={expense.id} {...expense}/>
    })}
    
    </div>
)



 const mapStateToProps =connect((state)=>{
    return {
        expenses: state.expenses,
        filters: state.filters
    }
})(ExpenseList)

export default mapStateToProps
