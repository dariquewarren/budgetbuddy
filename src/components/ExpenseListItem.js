// export stateless functional compinent
// render description, amoubt, created at
import React from 'react'
import { connect} from 'react-redux'
import {removeExpense} from '../actions/expenses'

// const ExpenseListItem = (props)=>(
//     <div>
// {props.expenses.map((expense)=>(
// <p><em>Description: </em>{expense.description}  <em>Amount: </em>{expense.amount}<em>Created At:</em> {expense.createdAt}  </p>
// ))}
//     </div>
// )





const ExpenseListItem = (  {id, dispatch, description, amount, createdAt})=>(
    <div>
<h3>{description}</h3>
<p>{amount}-{createdAt}</p>
<button onClick={()=>{
    dispatch(removeExpense({id:id}))
}}>Remove Expense</button>
    </div>
)

const mapStateToProps = connect()(ExpenseListItem)
export default mapStateToProps