import React, { useState } from 'react'
import { Link } from 'react-router-dom'

export default function Signup() {

    const [credentials, setCredentials] = useState({ name: "", email: "", password: "", location: "" })

    const handleSubmit = async (e) => {
        e.preventDefault()

        const result = await fetch('http://localhost:5000/createUser', {
            method: "post",
            body: JSON.stringify({
                name: credentials.name,
                email: credentials.email,
                password: credentials.password,
                location: credentials.location
            }),
            headers: {
                'Content-Type': 'application/json'
            },
        })
        const data = await result.json();
        localStorage.setItem('authToken', data.auth)
        console.log(data, credentials)

    }

    const changeData = (e) => {
        setCredentials({ ...credentials, [e.target.name]: e.target.value })
    }

    return (
        <React.Fragment>
            <div className='container'>
                <form onSubmit={handleSubmit}>
                    <div className="mb-3">
                        <label htmlFor="name" className="form-label" >Name</label>
                        <input type="text" className="form-control" name='name' value={credentials.name} onChange={changeData} />
                    </div>
                    <div className="mb-3">
                        <label htmlFor="exampleInputEmail1" className="form-label" >Email address</label>
                        <input type="email" className="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" name='email' value={credentials.email} onChange={changeData} />
                        <div id="emailHelp" className="form-text">We'll never share your email with anyone else.</div>
                    </div>
                    <div className="mb-3">
                        <label htmlFor="exampleInputPassword1" className="form-label" >Password</label>
                        <input type="password" className="form-control" id="exampleInputPassword1" value={credentials.password} name='password' onChange={changeData} />
                    </div>
                    <div className="mb-3">
                        <label htmlFor="exampleInputPassword1" className="form-label" >Address</label>
                        <input type="text" className="form-control" id="exampleInputPassword1" value={credentials.location} name='location' onChange={changeData} />
                    </div>
                    <button type="submit" className="m-3 btn btn-success">Submit</button>
                    <Link to='/login' className='m-3 btn btn-danger'>already a User</Link>
                </form>
            </div>
        </React.Fragment>
    )
}
