import React from 'react'
import ReactDOM from 'react-dom/client'
import { Provider } from 'react-redux'
import App from './App'
import store from './redux/store'
import 'bootstrap/dist/css/bootstrap.min.css'
import './styles/admin.css'

// Set default data attributes for consistent styling
document.documentElement.setAttribute('data-nav-layout', 'vertical')
document.documentElement.setAttribute('data-menu-styles', 'light')
document.documentElement.setAttribute('data-header-styles', 'light')
document.documentElement.setAttribute('data-theme-mode', 'light')
document.documentElement.setAttribute('data-vertical-style', 'default')
document.documentElement.setAttribute('data-toggled', '')

ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <Provider store={store}>
      <App />
    </Provider>
  </React.StrictMode>,
)