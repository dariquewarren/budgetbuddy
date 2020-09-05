// export stateless functional compinent
// render description, amoubt, created at
import React from 'react'
import { connect} from 'react-redux'

// const ExpenseListItem = (props)=>(
//     <div>
// {props.expenses.map((expense)=>(
// <p><em>Description: </em>{expense.description}  <em>Amount: </em>{expense.amount}<em>Created At:</em> {expense.createdAt}  </p>
// ))}
//     </div>
// )

// const mapStateToProps =connect((state)=>{
//     return {
//         expenses: state.expenses
//     }
// })(ExpenseListItem)



const ExpenseListItem = ({description, amount, createdAt})=>(
    <div>
<h3>{description}</h3>
<p>{amount}-{createdAt}</p>

    </div>
)
export default ExpenseListItem