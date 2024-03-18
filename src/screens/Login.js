import React, { useState } from 'react'
import { Link, useNavigate } from 'react-router-dom'

export default function Login() {
  const [credentials, setCredentials] = useState({ email: "", password: "" })
  const navigate = useNavigate();

  const handleSubmit = async (e) => {
    e.preventDefault()

    const result = await fetch('http://localhost:5000/loginUser', {
      method: "post",
      body: JSON.stringify({
        email: credentials.email,
        password: credentials.password,
      }),
      headers: {
        'Content-Type': 'application/json'
      },
    })
    const data = await result.json();
    console.log(data, credentials)
      localStorage.setItem('authToken',data.auth)
      navigate("/")
  }

  const changeData = (e) => {
    setCredentials({ ...credentials, [e.target.name]: e.target.value })
  }

  return (
    <React.Fragment>
      <div className='container'>
        <form onSubmit={handleSubmit}>
          <div className="mb-3">
            <label htmlFor="exampleInputEmail1" className="form-label" >Email address</label>
            <input type="email" className="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" name='email' value={credentials.email} onChange={changeData} />
            <div id="emailHelp" className="form-text">We'll never share your email with anyone else.</div>
          </div>
          <div className="mb-3">
            <label htmlFor="exampleInputPassword1" className="form-label" >Password</label>
            <input type="password" className="form-control" id="exampleInputPassword1" value={credentials.password} name='password' onChange={changeData} />
          </div>
          <button type="submit" className="m-3 btn btn-success">Submit</button>
          <Link to='/createuser' className='m-3 btn btn-danger'>I'm a new User</Link>
        </form>
      </div>
    </React.Fragment>
  )
}
