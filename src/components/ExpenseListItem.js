// export stateless functional compinent
// render description, amoubt, created at
import React from 'react'
import { connect} from 'react-redux'
import { removeExpense } from '../actions/expenses'
import {BrowserRouter, Route, Switch, Link, NavLink} from 'react-router-dom'

export const ExpenseListItem = ({id, description, amount, createdAt})=>(
    <div>
<button><NavLink to={`/edit/${id}`} activeClassName="is-active">{description}</NavLink>
</button>

<p> {amount}---{createdAt} </p>

    </div>
)


export default connect()(ExpenseListItem)
