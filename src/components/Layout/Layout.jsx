import React from 'react'
import { Navbar } from '../Navbar/Navbar'
import { Outlet } from 'react-router-dom'
import { UserContextProvider } from '../../contexts/UserContext'

export function Layout() {
  return (
    <main>
      <UserContextProvider>
        <Navbar />

        <section>
            <Outlet/>
        </section>

        
        </UserContextProvider>
    </main>
  )
}
