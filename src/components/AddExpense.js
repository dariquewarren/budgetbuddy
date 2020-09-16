import React from 'react'
import {BrowserRouter, Route, Switch, Link, NavLink} from 'react-router-dom'
import ExpenseForm from './ExpenseForm'
import {connect} from 'react-redux'
import { addExpense } from '../actions/expenses'

const AddExpense = (props)=>(
    <div>
    <h1> Expense form</h1>
    <ExpenseForm
    onSubmit={(expense)=>{
        props.dispatch(addExpense(expense))
        props.history.push('/')
    }}
    />

    </div>
    )

export default connect()(AddExpense)

