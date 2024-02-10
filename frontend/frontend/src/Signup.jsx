import axios from "axios";
import React,{useState} from 'react'
import { Link } from "react-router-dom"
import Validation from './SignupValidation'
import {useNavigate} from 'react-router-dom'
export default function Signup(){
    const [values, setValues]= useState({
        name:'',
        email: '',
        password: ''
    })
    const navigate = useNavigate()
    const [errors, setErrors] = useState({})
    const handleInput=(event)=>{
        setValues(prev=>({...prev, [event.target.name] : event.target.value}))
    }
    const handleSubmit=(event)=>{
        event.preventDefault()
        console.log(values)
        setErrors(Validation(values))
        if(errors.name === "" && errors.email === "" && errors.password === ""){
            axios.post('http://localhost:8081/signup', values)
            .then(res =>{
                navigate('/')
            })
            .catch(err => console.log(err))
        }
    }
    return(
        <div className='d-flex justify-content-center align-items-center bg-primary vh-100'>
            <div className='bg-white p-3 rounded w-25'>
                <h2>Sign-Up</h2>
                <form action="" onChange={handleSubmit}>
                <div className='mb-3'>
                        <label htmlFor="name"><strong>Name</strong></label> <br />
                        <input type='text' placeholder='Enter your Name' name='name'
                        onChange={handleInput} className='form-control rounded-0'></input>
                        {errors.name && <span className="text-danger">{errors.name}</span>}
                    </div>
                    <div className='mb-3'>
                        <label htmlFor="email"><strong>Email</strong></label> <br />
                        <input type='email' placeholder='Enter your Email' name='email'
                        onChange={handleInput} className='form-control rounded-0'></input>
                        {errors.email && <span className="text-danger">{errors.email}</span>}
                    </div>
                    <div className='mb-3'>
                        <label htmlFor="password"><strong>Password</strong></label> <br />
                        <input type="password" placeholder='Create your Password' name='password'
                        onChange={handleInput} className='form-control rounded-0'/>
                        {errors.password && <span className="text-danger">{errors.password}</span>}
                    </div>
                    <button className='btn btn-success w-100'>Signup</button>
                    <p style={{textAlign:'center'}}>By singing up <br />You agree to our terms and policies.</p>
                    <Link to='/' className='btn btn-default border w-100 bg-light text-decoration-none'>Login</Link>
                </form>
            </div>
        </div>
    )
}