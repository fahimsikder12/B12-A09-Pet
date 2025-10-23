import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import './App.css'
import { RouterProvider } from 'react-router'
import { router } from './Router/router'
import AuthProvider from './Context/AuthProvider'
import { HelmetProvider } from 'react-helmet-async'
 
 
 
createRoot(document.getElementById('root')).render(
  <StrictMode>
   <HelmetProvider>
    <AuthProvider>
   <RouterProvider router={router}></RouterProvider>
   </AuthProvider>
   </HelmetProvider>
  </StrictMode>,
)
