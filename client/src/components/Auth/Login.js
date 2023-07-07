import React, { useState } from 'react'
import './Auth.css'
import { Link } from 'react-router-dom';

const Login = () => {
  const [name, setName] = useState('')
  const [password, setPassword] = useState('')
  const handelCreateAccount = (e) => {
    e.preventDefault();

  }
  return (
    <div className='main_authForm'>
      <form onSubmit={handelCreateAccount} className='authForm'>
        <div className='auth'>
          <label htmlFor='name'>UserName</label>
          <input type='text' id="name" placeholder='Enter Your Name' value={name} required onChange={(e) => setName(e.target.value)} />
        </div>
        <div className='auth'>
          <label htmlFor='password'>Password</label>
          <input type='password' id="password" placeholder='Enter Your password' value={password} required onChange={(e) => setPassword(e.target.value)}/>
        </div>
        <div className='auth'>
        <Link to='/regester'>You have'nt An Account?</Link>
      </div>
        <div className='auth'>
          <button type='submit'>Create Account</button>
        </div>
      </form>
    </div>
  )
}

export default Login
