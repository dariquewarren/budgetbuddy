
import React from 'react'
import ReactDOM from 'react-dom'
import {BrowserRouter, Route, Switch} from 'react-router-dom'
import 'normalize.css/normalize.css'
import './styles/styles.scss'
 

const ExpenseDashboardPage = ()=>(
  <div>
  this is from my dash component
  </div>
  )

  const AddExpensePage = ()=>(
    <div>
    my add component
    </div>
    )

const EditExpensePage = () =>(
  <div>
  expense page
  </div>
  )
const HelpPage = () => (
  <div>
  help page
  </div>
)
const NotFoundPage = () => (
  <div>
  page not found
  </div>
)

  const Routes = (
    <BrowserRouter>
    <Switch>
    <Route path="/"  component={ExpenseDashboardPage} exact={true}/>
    <Route path="/create" component={AddExpensePage} />
    <Route path="/edit" component={EditExpensePage} />
    <Route path="/help" component={HelpPage} />
    <Route  component={NotFoundPage} />
    </Switch>
    
    
    </BrowserRouter>
  )

// add edit page
// add help page

  ReactDOM.render(
      Routes, document.getElementById("app"));
  