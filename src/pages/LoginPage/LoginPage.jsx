import React from 'react'
import { HOME_PAGE, REGISTER_PAGE } from '../../constants/url'
import { Link } from 'react-router-dom'
export function LoginPage() {
  return (
    <div><Link to={REGISTER_PAGE}> REGISTRARSE
    </Link>
    <Link to={HOME_PAGE}> HOME
    </Link></div>
  )
}

