import React, { useState } from 'react'
import { useDispatch } from 'react-redux'
import { login } from '../features/authSlice.js'
import { Input, Button } from './index.js'
import { stringify } from 'postcss'

const LoginForm = () => {
  const [username, setUserName] = useState("")
  const [password, setPassword] = useState("")

  const dispatch = useDispatch();

  const loginHandler = (e) => {
    e.preventDefault();

    const user = {
      username, password
    };

    dispatch(login({
      username, password
    }));
    localStorage.setItem("user", JSON.stringify(user));

    setUserName("");
    setPassword("");

  }

  const isValid = username.trim() && password.trim();

  return (
    <div className="max-w-xl mx-auto mt-10 bg-cyan-300 shadow-lg rounded-xl p-8">
      <h2 className="text-2xl font-semibold text-center text-gray-800 mb-6">
        Login
      </h2>

      <form onSubmit={loginHandler} className="space-y-4">
        <Input
          id="username"
          label="User Name"
          placeholder="Enter your username"
          value={username}
          onChange={(e) => setUserName(e.target.value)}
          required
        />

        <Input
          id="password"
          label="Password"
          type="password"
          placeholder="Enter your password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          required
        />

        <div className="flex justify-center pt-4">
          <Button type="submit" disabled={!isValid}>Submit</Button>
        </div>
      </form>
    </div>
  )
}

export default LoginForm
