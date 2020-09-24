
import React from 'react'
import ReactDOM from 'react-dom'
import {Provider} from 'react-redux'
import AppRouter from './routers/AppRouter'
import configureStore from './store/configureStore'

import "react-datetime/css/react-datetime.css";
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
  