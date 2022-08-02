import React from 'react'
import ReactDOM from 'react-dom/client'
import './index.css'
import axios from 'axios'
import App from './App'
import store from './Redux/Store'
import { Provider } from 'react-redux'
import reportWebVitals from './reportWebVitals'
import { I18nextProvider } from 'react-i18next'
import i18next from 'i18next'

import faqEs from './traslations/es/faq.json'
import faqEn from './traslations/en/faq.json'

i18next.init({
  interpolation: { escapeValue: false },
  lng: 'en',
  resources: {
    es: {
      faq: faqEs
    },
    en: {
      faq: faqEn
    }
  }
})

axios.defaults.baseURL = process.env.REACT_APP_API || 'http://localhost:3001'
const root = ReactDOM.createRoot(document.getElementById('root'))

root.render(

  <Provider store={store}>
<I18nextProvider i18n={i18next}>
    <App />

    </I18nextProvider>
  </Provider>

)

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals()
