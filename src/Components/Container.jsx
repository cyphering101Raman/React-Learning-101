import React from 'react'
import { Outlet } from 'react-router-dom'
import {Header, Footer} from "./index.js"


const Container = () => {
  return (
    <div>
      <Header />
      <Outlet />
      <Footer />
    </div>
  )
}

export default Container