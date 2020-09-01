
import React from 'react'

import {BrowserRouter, Route, Switch, Link, NavLink} from 'react-router-dom'
import AddExpense from '../components/AddExpense'
import EditExpense from '../components/EditExpense'
import ExpenseDashboard from '../components/ExpenseDashboard'
import Header from '../components/Header'
import Help from '../components/Help'
import PageNotFound from '../components/PageNotFound'


//create 6 new files for components. put n components folder
// import, component, export default
// import into appRouter so they can be used

const AppRouter =() => (
    <BrowserRouter>
    <div>
    <Header />
    <Switch>
    <Route path="/"  component={ExpenseDashboard} exact={true}/>
    <Route path="/create" component={AddExpense} />
    <Route path="/edit" component={EditExpense} />
    <Route path="/help" component={Help} />
    <Route  component={PageNotFound} />
    </Switch>
    </div>      
    </BrowserRouter>
  )


export default AppRouter
  