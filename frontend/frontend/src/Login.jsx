import React from 'react'
import { Link } from 'react-router-dom'

export default function Login(){
    return(
        <div className='d-flex justify-content-center align-items-center bg-primary vh-100'>
            <div className='bg-white p-3 rounded w-25'>
                <h2>Sign-In</h2>
                <form action="">
                    <div className='mb-3'>
                        <label htmlFor="email"><strong>Email</strong></label> <br />
                        <input type='email' placeholder='Enter your Email' className='form-control rounded-0'></input>
                    </div>
                    <div className='mb-3'>
                        <label htmlFor="password"><strong>Password</strong></label> <br />
                        <input type="password" placeholder='Write your Password' className='form-control rounded-0'/>
                    </div>
                    <button className='btn btn-success w-100'>Login</button><br /> <br />
                    <Link to='/signup' className='btn btn-default border w-100 bg-light text-decoration-none'>Create Account</Link>
                </form>
            </div>
        </div>
    )
}