import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App'
import './index.css'
import { BrowserRouter } from 'react-router-dom'
import store from './redux/store'

const root = ReactDOM.createRoot(document.getElementById('root'))

export default function renderWholeTree() {
  root.render(
    <BrowserRouter>
      <App state={store.getState()} dispatch={store.dispatch.bind(store)} />
    </BrowserRouter>
  )
}

store.subscribe(renderWholeTree)
renderWholeTree()
