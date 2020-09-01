
import React from 'react'
import ReactDOM from 'react-dom'
import {BrowserRouter, Route} from 'react-router-dom'
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
  const Routes = (
    <BrowserRouter>
    <div>
    <Route path="/"  component={ExpenseDashboardPage} exact={true}/>
    <Route path="/create" component={AddExpensePage} />
    <Route path="/edit" component={EditExpensePage} />
    <Route path="/help" component={HelpPage} />

    </div>
    
    
    </BrowserRouter>
  )

// add edit page
// add help page

  ReactDOM.render(
      Routes, document.getElementById("app"));
  