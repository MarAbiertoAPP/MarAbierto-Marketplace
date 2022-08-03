import React, { Fragment } from 'react'
import './App.css'
import { BrowserRouter } from 'react-router-dom'
import { Auth0Provider } from '@auth0/auth0-react'
import AnimatedRoutes from './AnimatedRoutes'

const domain = process.env.REACT_APP_AUTH0_DOMAIN
const clientId = process.env.REACT_APP_AUTH0

export default function App () {
  return (
    <Fragment>

      <BrowserRouter>
        <Auth0Provider
          domain={domain}
          clientId={clientId}
          redirectUri={window.location.origin}
        >

          <AnimatedRoutes />
        </Auth0Provider>
      </BrowserRouter>

    </Fragment>
  )
}
