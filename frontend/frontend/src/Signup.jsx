import { Link } from "react-router-dom"

export default function Signup(){
    return(
        <div className='d-flex justify-content-center align-items-center bg-primary vh-100'>
            <div className='bg-white p-3 rounded w-25'>
                <h2>Sign-Up</h2>
                <form action="">
                <div className='mb-3'>
                        <label htmlFor="name"><strong>Name</strong></label> <br />
                        <input type='text' placeholder='Enter your Name' className='form-control rounded-0'></input>
                    </div>
                    <div className='mb-3'>
                        <label htmlFor="email"><strong>Email</strong></label> <br />
                        <input type='email' placeholder='Enter your Email' className='form-control rounded-0'></input>
                    </div>
                    <div className='mb-3'>
                        <label htmlFor="password"><strong>Password</strong></label> <br />
                        <input type="password" placeholder='Create your Password' className='form-control rounded-0'/>
                    </div>
                    <button className='btn btn-success w-100'>Signup</button>
                    <p style={{textAlign:'center'}}>By singing up <br />You agree to our terms and conditions.</p>
                    <Link to='/' className='btn btn-default border w-100 bg-light text-decoration-none'>Login</Link>
                </form>
            </div>
        </div>
    )
}