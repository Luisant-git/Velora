import React from 'react'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import Layout from './components/Layout'
import Dashboard from './pages/Dashboard'
import CompanyMaster from './pages/CompanyMaster'
import Settings from './pages/Settings'
import Login from './pages/Login'

function App() {
  const isAuthenticated = localStorage.getItem('adminToken');

  if (!isAuthenticated) {
    return (
      <Router>
        <Routes>
          <Route path="*" element={<Login />} />
        </Routes>
      </Router>
    );
  }

  return (
    <div className="page">
      <Router>
        <Layout>
          <div className="main-content app-content">
            <div className="container-fluid">
              <Routes>
                <Route path="/" element={<Dashboard />} />
                <Route path="/dashboard" element={<Dashboard />} />
                <Route path="/company-master" element={<CompanyMaster />} />
                <Route path="/settings" element={<Settings />} />
              </Routes>
            </div>
          </div>
        </Layout>
      </Router>
    </div>
  )
}

export default App