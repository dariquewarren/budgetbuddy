
import React from 'react'
import ReactDOM from 'react-dom'
import {Provider} from 'react-redux'
import AppRouter from './routers/AppRouter'
import configureStore from './store/configureStore'
import {addExpense} from './actions/expenses'
import {setTextFilter} from './actions/filters'
import getVisibleExpenses from './selectors/expenses'
//import adexpense function
// import settextfilter function
//import getvisible expenses function
import {BrowserRouter, Route, Switch, Link, NavLink} from 'react-router-dom'
import 'normalize.css/normalize.css'
import './styles/styles.scss'
 
const store = configureStore()
console.log('current state',store.getState())
// add expense water bill
// add expense phone bill
store.dispatch(  addExpense({ description: "water bill", amount: 7000 , createdAt: 560}))
store.dispatch(  addExpense({ description: "phone bill", amount: 350 , createdAt: 580}))
console.log('after 2 expenses state',store.getState())
// settextfilter to bill(2items -> water )
store.dispatch(setTextFilter('water'))

setTimeout(()=>{
  store.dispatch(setTextFilter('phone'))

}, 3000)
// getvisible expenses -> print visible ones to screen
const state = store.getState();
  const visibleExpenses = getVisibleExpenses(state.expenses, state.filters);

  

const jsx = (
  <Provider store={store}>
  <AppRouter/>
  </Provider>
)

  console.log('visExpemses',visibleExpenses);
  ReactDOM.render(jsx, document.getElementById("app"));
  