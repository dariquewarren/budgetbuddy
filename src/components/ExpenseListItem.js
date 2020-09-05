// export stateless functional compinent
// render description, amoubt, created at
import React from 'react'
import { connect} from 'react-redux'
import { removeExpense } from '../actions/expenses'

const ExpenseListItem = ({id, dispatch, description, amount, createdAt})=>(
    <div>
<h3>{description}</h3>
<p> {amount}---{createdAt} </p>
<button
onClick={()=>{
    dispatch(removeExpense({id}))
}}>remove expense</button>
    </div>
)


export default connect()(ExpenseListItem)
