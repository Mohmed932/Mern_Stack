import React, { useState } from 'react'
import './Auth.css'
import { Link } from 'react-router-dom';

const Regester = () => {
  const [name, setName] = useState('')
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')
  const [RePassword, setRePassword] = useState('')
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
          <label htmlFor='Email'>Email</label>
          <input type='email' id="Email" placeholder='Enter Your Email' value={email} required onChange={(e) => setEmail(e.target.value)} />
        </div>
        <div className='auth'>
          <label htmlFor='password'>Password</label>
          <input type='password' id="password" placeholder='Enter Your password' value={password} required onChange={(e) => setPassword(e.target.value)} />
        </div>
        <div className='auth'>
          <label htmlFor='password'>RePassword</label>
          <input type='password' id="password" placeholder='Enter Your password' value={RePassword} required onChange={(e) => setRePassword(e.target.value)} />
        </div>
        <div className='auth'>
          <Link to='/login'>You have An Account?</Link>
        </div>
        <div className='auth'>
          <button type='submit'>Create Account</button>
        </div>
      </form>
    </div>
  )
}

export default Regester
