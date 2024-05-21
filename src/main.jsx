import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import circuits from './data/circuits'
import CircuitView from './views/CircuitView'

const routes =[
  {
    path: '/',
    element: <App />,
  } 
]

circuits.forEach((circuit) =>{
  routes.push({
    path: circuit.path,
    element: <CircuitView circuit={circuit}/>,
  });
});

const router = createBrowserRouter(routes)



ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>,
)
