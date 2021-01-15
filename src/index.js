import './main.css'

import React from 'react'
import ReactDOM from 'react-dom'
import {BrowserRouter as Router} from 'react-router-dom'
import routes from 'routes'
import MainProvider from './node_modules/context/mainContext'
import BasketProvider from './node_modules/context/basketContext'

ReactDOM.render(
  <Router>
    <MainProvider>
      <BasketProvider>
        {routes}
      </BasketProvider>
    </MainProvider>
  </Router>,
  document.getElementById('root')
)