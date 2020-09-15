
import React from 'react'
import ReactDOM from 'react-dom'
import {Provider} from 'react-redux'
import AppRouter from './routers/AppRouter'
import configureStore from './store/configureStore'
import {addExpense, editExpense} from './actions/expenses'
import {setTextFilter} from './actions/filters'
import getVisibleExpenses from './selectors/expenses'
//import adexpense function
// import settextfilter function
//import getvisible expenses function
import {BrowserRouter, Route, Switch, Link, NavLink} from 'react-router-dom'
import "react-dates/lib/css/_datepicker.css";

import 'normalize.css/normalize.css'
import './styles/styles.scss'
 
const store = configureStore()
console.log('test')
const jsx = (
  <Provider store={store}>
  <AppRouter/>
  </Provider>
)

  ReactDOM.render(jsx, document.getElementById("app"));
  