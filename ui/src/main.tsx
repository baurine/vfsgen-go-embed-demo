import React from 'react'
import ReactDOM from 'react-dom'

import './index.css'
import App from './App'

ReactDOM.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
  document.getElementById('root')
)

/////////////
import { min } from 'lodash'

const arr = [5, 4, 2, 8]
console.log(`${arr} min is ${min(arr)}`)
