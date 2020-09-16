import React from 'react'
import ExpenseList from './ExpenseList'
import ExpenseListFilters from './ExpenseListFilters'

const ExpenseDashboard = ()=>(
    <div>
    this is from my dash component
    <ExpenseListFilters/>
    <ExpenseList/>

    </div>
    )

export default ExpenseDashboard
