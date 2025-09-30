import React,{ StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import App from './App.jsx'
import "./index.css"
import { createBrowserRouter } from 'react-router'
import { RouterProvider } from 'react-router-dom'
import NotFound from './NotFound.jsx'

const appRouter = createBrowserRouter([
  {
    path: "*",
    element: <NotFound />
  },
  {
    path: "/",
    element: <App/>
  }
]);

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <RouterProvider router={appRouter} />
  </StrictMode>
)
