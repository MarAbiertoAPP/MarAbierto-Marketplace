import React from 'react'
import ReactDOM from 'react-dom/client'
import './index.css'
import axios from 'axios'
import App from './App'
import store from './Redux/Store'
import { Provider } from 'react-redux'
import reportWebVitals from './reportWebVitals'
import { Auth0Provider } from '@auth0/auth0-react'

axios.defaults.baseURL = process.env.REACT_APP_API || 'http://localhost:3001'
const root = ReactDOM.createRoot(document.getElementById('root'))

const domain = process.env.REACT_APP_AUTH0_DOMAIN
const clientId = process.env.REACT_APP_AUTH0

root.render(
  <Provider store={store}>
  <React.StrictMode>
    <Auth0Provider
      domain={domain}
      clientId={clientId}
      redirectUri={`${window.location.origin}${window.location.pathname}`}
    >
    <App />
    </Auth0Provider>
  </React.StrictMode>
  </Provider>
)

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals()
