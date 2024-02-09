import REACT from 'react'

export default function Login(){
    return(
        <div className='d-flex justify-content-center align-items-center bg-primary vh-100'>
            <div className='bg-white p-3 rounded w-25'>
                <form action="">
                    <div className='mb-3'>
                        <label htmlFor="email"><strong>Email</strong></label> <br />
                        <input type='email' placeholder='Enter Email' className='form-control rounded-0'></input>
                    </div>
                    <div className='mb-3'>
                        <label htmlFor="password"><strong>Password</strong></label> <br />
                        <input type="password" placeholder='Write your Password' className='form-control rounded-0'/>
                    </div>
                    <button className='btn btn-success w-100'>Login</button>
                    <p>You agree</p>
                    <button className='btn btn-default border w-100 bg-light'>Create Account</button>
                </form>
            </div>
        </div>
    )
}