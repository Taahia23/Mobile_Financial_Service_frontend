import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App'
import './index.css'
import { AuthProvider } from './context/AuthContext'
import { BrowserRouter } from 'react-router-dom'

ReactDOM.createRoot(document.getElementById('root')).render(

   <AuthProvider>  {/* ✅ Wrap the app in AuthProvider */}
    <BrowserRouter>
      <App />
    </BrowserRouter>
  </AuthProvider>,
)
