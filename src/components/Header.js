import React from 'react'
import {BrowserRouter, Route, Switch, Link, NavLink} from 'react-router-dom'

const Header = ()=> (
    <header>
    <h1>Budget Buddy</h1>
  <NavLink to="/" activeClassName="is-active" exact={true}>Home Sweet Home</NavLink>
  <NavLink to="/create" activeClassName="is-active">Create Expense</NavLink>
  <NavLink to="/edit" activeClassName="is-active">Edit Expenses</NavLink>
  <NavLink to="/help" activeClassName="is-active">Help Page</NavLink>
    </header>
    )


export default Header 