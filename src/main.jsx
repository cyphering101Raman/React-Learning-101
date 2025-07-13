import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import { createBrowserRouter, createRoutesFromElements, Route, RouterProvider } from 'react-router-dom'

import {Home, AboutUs, LoginForm, Container, SignUp} from "./Components/index.js"

const routes = createBrowserRouter(
  createRoutesFromElements(
    <Route path="/" element={<Container />}>
      <Route path="" element={<Home />}/>
      <Route path="/about" element={<AboutUs />}/>
      <Route path="/login" element={<LoginForm />}/>
      <Route path="/signup" element={<SignUp />} />
    </Route>
  )
)

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <RouterProvider router={routes} />
  </StrictMode>,
)
