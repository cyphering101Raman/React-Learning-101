import { createBrowserRouter, createRoutesFromElements, Route } from "react-router-dom"

import {Home, AboutUs, LoginForm, Container, SignUp} from "../Components/index.js"

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

export default routes;