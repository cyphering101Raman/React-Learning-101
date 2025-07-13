import React, { useState } from 'react'
import { useDispatch } from 'react-redux'
import { login } from '../features/authSlice.js'
import { Input, Button } from './index.js'

const SignUp = () => {
  const [name, setName] = useState("")
  const [userName, setUserName] = useState("")
  const [email, setEmail] = useState("")
  const [password, setPassword] = useState("")
  const [number, setNumber] = useState("")

  const dispatch = useDispatch();

  const signUpHandler = (e) => {
    e.preventDefault();

    dispatch(login({
      name, userName, email, password, number
    }));

    setName("");
    setUserName("");
    setEmail("");
    setPassword("");
    setNumber("");
  }

  const isValid = name.trim() && userName.trim() && email.trim() && password.trim() && number.trim();


  return (
    <div className="max-w-xl mx-auto mt-10 bg-cyan-300 shadow-lg rounded-xl p-8">
      <h2 className="text-2xl font-semibold text-center text-gray-800 mb-6">
        Sign-up
      </h2>

      <form onSubmit={signUpHandler} className="space-y-4">
        <Input
          id="name"
          label="Name"
          placeholder="Enter your name"
          value={name}
          onChange={(e) => setName(e.target.value)}
          required
        />

        <Input
          id="username"
          label="User Name"
          placeholder="Enter your user-name"
          value={userName}
          onChange={(e) => setUserName(e.target.value)}
          required
        />

        <Input
          id="email"
          label="Email"
          type="email"
          placeholder="Enter your email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
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

        <Input
          id="number"
          label="Number"
          type="number"
          placeholder="Enter your number"
          value={number}
          onChange={(e) => setNumber(e.target.value)}
          required
        />

        <div className="flex justify-center pt-4">
          <Button type="submit" disabled={!isValid}>Submit</Button>
        </div>
      </form>
    </div>
  )
}

export default SignUp
