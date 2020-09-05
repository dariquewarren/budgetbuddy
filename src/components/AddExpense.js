import React from 'react'
import {BrowserRouter, Route, Switch, Link, NavLink} from 'react-router-dom'
import ExpenseForm from './ExpenseForm'

const AddExpense = ()=>(
    <div>
    <h1> Expense form</h1>
    <ExpenseForm/>

    </div>
    )

export default AddExpense

