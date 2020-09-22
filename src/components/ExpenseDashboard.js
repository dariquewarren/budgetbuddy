import React from 'react'
import ExpenseList from './ExpenseList'
import ExpenseListFilters from './ExpenseListFilters'
import ExpensesSummary from './ExpensesSummary'


const ExpenseDashboard = ()=>(
    <div>
    <ExpensesSummary/>
    this is from my dash component
    <ExpenseListFilters/>
    <ExpenseList/>

    </div>
    )

export default ExpenseDashboard
