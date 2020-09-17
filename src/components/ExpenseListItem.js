// export stateless functional compinent
// render description, amoubt, created at
import React from 'react'
import { connect} from 'react-redux'
import { removeExpense } from '../actions/expenses'
import {BrowserRouter, Route, Switch, Link, NavLink} from 'react-router-dom'
import moment from 'moment'
import numeral from 'numeral'

export const ExpenseListItem = ({id, description, amount, createdAt})=>(
    <div>
<button><NavLink to={`/edit/${id}`} activeClassName="is-active">{description}</NavLink>
</button>

<p> 
{numeral(amount / 100).format('$0,0.00')}
-{moment(createdAt).format('MMMM Do, YYYY')} 
</p>

    </div>
)


export default connect()(ExpenseListItem)
