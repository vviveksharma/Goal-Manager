import React from 'react'

const Login = () => {
  return (
    <div className="register">
      <h1>Register</h1>
      <form className="form">
        <div>
          <input placeholder="Email"></input>
        </div>
        <div>
          <input placeholder="Password"></input>
        </div>
        <div>
          <button>Submit</button>
        </div>
      </form>
    </div>
  )
}

export default Login