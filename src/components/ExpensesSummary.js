import React from 'react'
import {connect} from 'react-redux'
import expensesTotal from '../selectors/expenses-total'



const ExpensesSummary = (props)=>{
console.log('props',props.expenses)
if (props.expenses === undefined){
    return <p>no expenses</p>
} else{
   return <h3>
    {props.expenses.length !== 1 ? <p>Viewing {props.expenses.length} expenses totalling ${expensesTotal(props.expenses)} </p> : <p>Viewing {props.expenses.length} expense totalling ${expensesTotal(props.expenses)}</p> }</h3>
    
}
    console.log(expensesTotal(props.expenses))
   
} 
const mapStateToProps = (state)=>{
    return {
        expenses: state.expenses
    }
}
export default connect(mapStateToProps)(ExpensesSummary)

/*

create expense summary component
-----------
renderd by expensedashboardpage
test with 2 snapshot tests
connected to the store for:
-expense count (how many visible expenses) 
-expensesTotal(what's the total of the visible expenses?)

EXAMPLES:

Viewing one expense totalling 95.35

Viewing two expenses totalling 95.35


commit and deploy
get the feature live!
*/

