
import React from 'react'
import ReactDOM from 'react-dom'
import {BrowserRouter, Route, Switch, Link, NavLink} from 'react-router-dom'
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
 404 page not found 404 - <Link to="/"> go home</Link>
  </div>
)

const Header = ()=> (
  <header>
  <h1>Budget Buddy</h1>
<NavLink to="/" activeClassName="is-active" exact={true}>Home Sweet Home</NavLink>
<NavLink to="/create" activeClassName="is-active">Create Expense</NavLink>
<NavLink to="/edit" activeClassName="is-active">Edit Expenses</NavLink>
<NavLink to="/help" activeClassName="is-active">Help Page</NavLink>
  </header>

  // link to homepge, link to create expense page, edit page, help page
)

  const Routes = (
    <BrowserRouter>
    <div>
    <Header />
    <Switch>
    <Route path="/"  component={ExpenseDashboardPage} exact={true}/>
    <Route path="/create" component={AddExpensePage} />
    <Route path="/edit" component={EditExpensePage} />
    <Route path="/help" component={HelpPage} />
    <Route  component={NotFoundPage} />
    </Switch>
    </div>
    
    
    
    
    </BrowserRouter>
  )

// add edit page
// add help page

  ReactDOM.render(
      Routes, document.getElementById("app"));
  