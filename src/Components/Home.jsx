import React, { useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'

import { login } from "../features/authSlice.js"


const Home = () => {

  // const [userInfo, setUserInfo] = useState("")

  const { userData, isLoggedIn } = useSelector(state => state.auth);
  const dispatch = useDispatch();

  useEffect(() => {
    const storedUser = localStorage.getItem("user");
    console.log("Stored User: ", storedUser);
    console.log("Logged Status: ", isLoggedIn);


    if (storedUser) {
      dispatch(login(JSON.parse(storedUser)));
    }
  }, [dispatch])


  return (
    <div className="home">
      <h1>HOME PAGE</h1>
      {isLoggedIn
        ? (<h2>{userData.name}</h2>)
        : <h2>Login</h2>
      }
    </div>

  )
}

export default Home