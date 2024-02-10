import React, { useState } from 'react'
import { Link } from 'react-router-dom'
import Validation from './LoginValidation'
import { useNavigate } from 'react-router-dom';

export default function Login(){
    const [values, setValues]= useState({
        email: '',
        password: ''
    })
    const navigate = useNavigate();

    const [errors, setErrors] = useState({})
    const handleInput=(event)=>{
        setValues(prev=>({...prev, [event.target.name] : event.target.value}))
    }
    const handleSubmit=(event)=>{
        event.preventDefault()
        console.log(values)
        setErrors(Validation(values))
        if(errors.email === "" && errors.password === ""){
            axios.post('http://localhost:8081/login', values)
            .then(res =>{
                if(res.data === "Sucess"){
                    navigate('/home')
                }else{
                    alert("No Record Existed")
                }
            })
            .catch(err => console.log(err))
        }
    }

    return(
        <div className='d-flex justify-content-center align-items-center bg-primary vh-100'>
            <div className='bg-white p-3 rounded w-25'>
                <h2>Sign-In</h2>
                <form action="" onSubmit={handleSubmit}>
                    <div className='mb-3'>
                        <label htmlFor="email"><strong>Email</strong></label> <br />
                        <input type='email' name='email' value={values.email} placeholder='Enter your Email'
                        onChange={handleInput} className='form-control rounded-0'></input>
                        {errors.email && <span className="text-danger">{errors.email}</span>}
                    </div>
                    <div className='mb-3'>
                        <label htmlFor="password"><strong>Password</strong></label> <br />
                        <input type="password" name='password' value={values.password} placeholder='Write your Password'
                        onChange={handleInput} className='form-control rounded-0'/>
                        {errors.password && <span className="text-danger">{errors.password}</span>}
                    </div>
                    <button type='submit' className='btn btn-success w-100'>Login</button><br /> <br />
                    <Link to='/signup' className='btn btn-default border w-100 bg-light text-decoration-none'>Create Account</Link>
                </form>
            </div>
        </div>
    )
}