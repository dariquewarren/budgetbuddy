// export stateless functional compinent
// render description, amoubt, created at
import React from 'react'
import { connect} from 'react-redux'

const ExpenseListItem = (props)=>(
    <div>
{props.expenses.map((expense)=>(
<p>Description: {expense.description} <em></em> Amount:{expense.amount} Created At: {expense.createdAt}  </p>
))}
    </div>
)

const mapStateToProps =connect((state)=>{
    return {
        expenses: state.expenses
    }
})(ExpenseListItem)

export default mapStateToProps