import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App'
import './index.css'
import { BrowserRouter } from 'react-router-dom'
import store from './redux/store-redux'
import { Provider } from 'react-redux'

const root = ReactDOM.createRoot(document.getElementById('root'))

root.render(
    <BrowserRouter>
      <Provider store={store}>
        <App state={store.getState()} dispatch={store.dispatch.bind(store)} />
      </Provider>
    </BrowserRouter>
  )
