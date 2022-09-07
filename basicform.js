import React from 'react'

const Basicform = () => {
  return (
    <>
    <form action="">
        <div>
            <label htmlFor="email">Email</label>
            <input type="text" name="email" id="email" autoComplete="off/>

        </div>

        <div>
            <label htmlFor="password">Password</label>
            <input type="text" name="password" id="Password" autoComplete="off" />

        </div>

        <button type="submit">Login</button>
    </form>
    </>
    
export default Basicform;