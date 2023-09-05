'use client'
import { useState } from 'react'
import GlobalContext from './GlobalContext/globalContext'
import Sidebar from './components/sidebar/Sidebar'
import './globals.css'
import { Inter } from 'next/font/google'
import classNames from 'classnames'

const inter = Inter({ subsets: ['latin'] })


export default function RootLayout({ children }) {
  const [toggleSidebar,setToggleSidebar] = useState(false)

  
  return (
    <html lang="en">
      <GlobalContext.Provider value={{toggleSidebar, setToggleSidebar}}>
      <body className={inter.className}>
        <div className='fixed z-50'>
        <Sidebar/>
        </div>
        <nav className={classNames('navigation bg-[#333] text-xl text-white-500 py-7 fixed top-0 w-full shadow-sm z-30 ', {"px-60" : !toggleSidebar, "px-16" : toggleSidebar})}>MyApp</nav>
        {children}
        </body>
        </GlobalContext.Provider>
    </html>
  )
}
