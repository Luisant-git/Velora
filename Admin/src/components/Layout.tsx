import React, { Fragment } from 'react'
import Header from './Header'
import Sidebar from './Sidebar'

interface LayoutProps {
  children: React.ReactNode
}

const Layout: React.FC<LayoutProps> = ({ children }) => {
  return (
    <Fragment>
      <div className="page">
        <Header />
        <Sidebar />
        <div className="main-content app-content">
          <div className="side-app">
            {children}
          </div>
        </div>
      </div>
      <div id="responsive-overlay"></div>
    </Fragment>
  )
}

export default Layout